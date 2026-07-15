// One-time helper: converts specific R2 image objects from PNG to WebP and
// uploads them as new .webp objects (same folder, same base name) with the
// same long-lived Cache-Control used by optimize-r2-videos.mjs. Source PNGs
// are left in place — nothing is deleted.
//
// Why: Next.js's image optimizer already converts everything to WebP/AVIF on
// request regardless of source format, so this doesn't change what's finally
// served. It fixes the COLD-REQUEST latency: decoding a lossless multi-MB PNG
// takes seconds; decoding an already-compact WebP source is much faster.
//
// Requires the same env vars and ffmpeg-on-PATH as optimize-r2-videos.mjs.
//
// Usage:
//   node --env-file=.env.local scripts/convert-image-to-webp.mjs "billyx/billi1.png" "billyx/billi2.png" ...

import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { spawnSync } from "node:child_process";
import { createWriteStream, createReadStream } from "node:fs";
import { mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env;
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error("Missing R2 env vars.");
  process.exit(1);
}

const keys = process.argv.slice(2);
if (!keys.length) {
  console.error("Usage: node scripts/convert-image-to-webp.mjs <key1> <key2> ...");
  process.exit(1);
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

async function convertOne(key) {
  const dir = await mkdtemp(join(tmpdir(), "webp-conv-"));
  const inPath = join(dir, "in.png");
  const outPath = join(dir, "out.webp");
  try {
    const obj = await s3.send(new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    await pipeline(obj.Body, createWriteStream(inPath));

    const ff = spawnSync("ffmpeg", ["-y", "-i", inPath, "-quality", "90", outPath]);
    if (ff.status !== 0) throw new Error(`ffmpeg failed: ${ff.stderr?.toString().slice(-1500)}`);

    const newKey = key.replace(/\.png$/i, ".webp");
    const { size: beforeSize } = await stat(inPath);
    const { size: afterSize } = await stat(outPath);

    await s3.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: newKey,
        Body: createReadStream(outPath),
        ContentType: "image/webp",
        ContentLength: afterSize,
        CacheControl: CACHE_CONTROL,
      })
    );

    console.log(`  ok  ${key} -> ${newKey}  (${(beforeSize / 1048576).toFixed(2)}MB -> ${(afterSize / 1048576).toFixed(2)}MB)`);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

for (const key of keys) {
  try {
    await convertOne(key);
  } catch (err) {
    console.error(`  FAIL ${key}: ${err.message}`);
  }
}
