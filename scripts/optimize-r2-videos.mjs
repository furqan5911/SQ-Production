// One-time R2 maintenance script — fixes the two root causes PageSpeed Insights
// flagged on sqproductions.co: missing Cache-Control headers (74.8MB of avoidable
// re-downloads per PSI) and videos that aren't "faststart" encoded (moov atom at
// the end of the file instead of the front, forcing near-full-file downloads
// before playback can start).
//
// What it does per object in the bucket:
//   - video files (.mp4/.mov): download -> ffmpeg remux with +faststart (no
//     re-encode, no quality/size loss, just reorders atoms) -> re-upload with a
//     long-lived Cache-Control header.
//   - everything else (images etc.): in-place metadata-only copy that just adds
//     the Cache-Control header, no data re-transferred.
//
// Requires:
//   - ffmpeg on PATH (https://ffmpeg.org/download.html)
//   - Node 18+
//   - npm install --no-save @aws-sdk/client-s3
//
// Env vars required:
//   R2_ACCOUNT_ID          Cloudflare account ID
//   R2_ACCESS_KEY_ID       R2 API token access key ID
//   R2_SECRET_ACCESS_KEY   R2 API token secret
//   R2_BUCKET_NAME         bucket name (the one behind pub-b15bbd... .r2.dev)
//
// Create the API token at: Cloudflare dashboard -> R2 -> Manage API Tokens
// -> Create API Token (needs Object Read & Write on this bucket).
//
// Usage:
//   R2_ACCOUNT_ID=... R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... R2_BUCKET_NAME=... \
//     node scripts/optimize-r2-videos.mjs
//
// Test on one file first before running the full batch:
//   ... ONLY="Bukhari Associates/rim-house" node scripts/optimize-r2-videos.mjs
// Or cap how many objects get touched in one run:
//   ... LIMIT=2 node scripts/optimize-r2-videos.mjs
// After a test run, curl -I the object's public URL and confirm Cache-Control
// is set, and load the page in a browser to confirm the video still plays
// normally, before removing ONLY/LIMIT and running against everything.
//
// Safe to re-run — already-faststart files are cheap to detect and skipped by
// checking a marker we set on re-upload (x-amz-meta-faststart: "1").

import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
  CopyObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { spawnSync } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error(
    "Missing required env vars. Need R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME."
  );
  process.exit(1);
}

const ffmpegCheck = spawnSync("ffmpeg", ["-version"]);
if (ffmpegCheck.status !== 0) {
  console.error("ffmpeg not found on PATH. Install it first: https://ffmpeg.org/download.html");
  process.exit(1);
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";
const VIDEO_EXT = /\.(mp4|mov)$/i;

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function listAllKeys() {
  const keys = [];
  let ContinuationToken;
  do {
    const res = await s3.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET_NAME, ContinuationToken })
    );
    for (const obj of res.Contents ?? []) keys.push(obj.Key);
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return keys;
}

async function alreadyDone(key) {
  const head = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
  return head.Metadata?.faststart === "1" && head.CacheControl === CACHE_CONTROL;
}

async function fixVideo(key, contentType) {
  const dir = await mkdtemp(join(tmpdir(), "r2-opt-"));
  const inPath = join(dir, "in");
  const outPath = join(dir, "out.mp4");
  try {
    const obj = await s3.send(new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    await pipeline(obj.Body, createWriteStream(inPath));

    const ff = spawnSync("ffmpeg", [
      "-y",
      "-i", inPath,
      "-c", "copy",
      "-movflags", "+faststart",
      outPath,
    ]);
    if (ff.status !== 0) {
      throw new Error(`ffmpeg failed: ${ff.stderr?.toString().slice(-2000)}`);
    }

    const { size: beforeSize } = await stat(inPath);
    const { size: afterSize } = await stat(outPath);

    const { createReadStream } = await import("node:fs");
    await s3.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
        Body: createReadStream(outPath),
        ContentType: contentType,
        ContentLength: afterSize,
        CacheControl: CACHE_CONTROL,
        Metadata: { faststart: "1" },
      })
    );

    console.log(`  ok  ${key}  (${(beforeSize / 1048576).toFixed(1)}MB -> ${(afterSize / 1048576).toFixed(1)}MB, faststart)`);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

async function fixMetadataOnly(key, contentType) {
  await s3.send(
    new CopyObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      CopySource: `${R2_BUCKET_NAME}/${encodeURIComponent(key)}`,
      MetadataDirective: "REPLACE",
      ContentType: contentType,
      CacheControl: CACHE_CONTROL,
      Metadata: { faststart: "1" },
    })
  );
  console.log(`  ok  ${key}  (cache header set)`);
}

async function main() {
  let keys = await listAllKeys();
  console.log(`Found ${keys.length} objects in ${R2_BUCKET_NAME}.\n`);

  // Test mode: ONLY=<substring> runs against just keys containing that text
  // (e.g. ONLY="Bukhari Associates/rim-house" to try one file end-to-end
  // first). LIMIT=<n> caps how many objects get touched this run. Use these
  // to validate on 1-2 files before running the full batch.
  if (process.env.ONLY) {
    keys = keys.filter((k) => k.includes(process.env.ONLY));
    console.log(`ONLY filter applied: ${keys.length} matching object(s).\n`);
  }
  if (process.env.LIMIT) {
    keys = keys.slice(0, Number(process.env.LIMIT));
    console.log(`LIMIT applied: processing ${keys.length} object(s) this run.\n`);
  }

  let done = 0;
  let skipped = 0;
  let failed = 0;

  for (const key of keys) {
    try {
      if (await alreadyDone(key)) {
        skipped++;
        continue;
      }
      const head = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
      const contentType = head.ContentType ?? "application/octet-stream";

      if (VIDEO_EXT.test(key)) {
        await fixVideo(key, contentType);
      } else {
        await fixMetadataOnly(key, contentType);
      }
      done++;
    } catch (err) {
      failed++;
      console.error(`  FAIL ${key}: ${err.message}`);
    }
  }

  console.log(`\nDone. Fixed: ${done}, already-done: ${skipped}, failed: ${failed}.`);
}

main();
