"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function EyeBlink({ hovered }: { hovered: boolean }) {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const shouldBlink = hovered || isTouch;

  return (
    <motion.span
      animate={shouldBlink
        ? { scaleY: [1, 0.08, 1, 0.08, 1] }
        : { scaleY: 1 }
      }
      transition={shouldBlink
        ? {
            duration: 0.55,
            times: [0, 0.2, 0.4, 0.6, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: isTouch && !hovered ? 3 : 0.6,
          }
        : { duration: 0.2 }
      }
      style={{ display: "inline-block", transformOrigin: "center" }}
    >
      👀
    </motion.span>
  );
}

function InstagramCTA({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.05 : 1, backgroundColor: hovered ? "#ffffff" : "#f87800" }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="inline-flex items-center gap-2 text-black font-black text-sm uppercase px-8 py-4 rounded-full"
      style={{ letterSpacing: hovered ? "0.22em" : "0.1em", transition: "letter-spacing 0.35s ease" }}
    >
      <span>No cap, peep the full work</span>
      <EyeBlink hovered={hovered} />
    </motion.a>
  );
}

function YouTubeChannelCTA({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.05 : 1, backgroundColor: hovered ? "#ffffff" : "#f87800" }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="inline-flex items-center gap-2 text-black font-black text-sm uppercase px-8 py-4 rounded-full"
      style={{ letterSpacing: hovered ? "0.22em" : "0.1em", transition: "letter-spacing 0.35s ease" }}
    >
      <span>Watch the Full Episodes on YT</span>
      <EyeBlink hovered={hovered} />
    </motion.a>
  );
}

function WatchFullVideoCTA({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.05 : 1, backgroundColor: hovered ? "#ffffff" : "#f87800" }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="inline-flex items-center gap-2 text-black font-black text-sm uppercase px-8 py-4 rounded-full"
      style={{ letterSpacing: hovered ? "0.22em" : "0.1em", transition: "letter-spacing 0.35s ease" }}
    >
      <span>Watch Full Video</span>
      <EyeBlink hovered={hovered} />
    </motion.a>
  );
}

function LazyRelatedCard({ item }: { item: (typeof PROJECTS)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [shouldLoad]);

  const videoSrc = item.videos[0]?.src;

  return (
    <div ref={containerRef}>
      <Link href={`/projects/${item.slug}`} className="group block">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={shouldLoad ? videoSrc : undefined}
              poster={item.image}
              autoPlay
              muted
              loop
              playsInline
              preload={shouldLoad ? "auto" : "none"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-[#f87800] text-black text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              View Project
            </span>
          </div>
        </div>
        <div className="mt-4 px-1">
          <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase">{item.category}</span>
          <h3 className="text-white font-bold text-lg mt-1 group-hover:text-[#f87800] transition-colors duration-200">
            {item.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params  = useParams();
  const slug    = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  // Only one project video should play at a time — starting a new one
  // pauses whichever other video (if any) was already playing.
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const registerVideoRef = (i: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[i] = el;
  };
  const pauseOtherVideos = (current: HTMLVideoElement) => {
    videoRefs.current.forEach((v) => {
      if (v && v !== current) v.pause();
    });
  };

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="bg-transparent min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-black mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-[#f87800] hover:underline">← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = PROJECTS.filter(
    (p) => p.slug !== slug && !p.slug.startsWith("placeholder")
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-transparent min-h-screen">

        {/* ── Hero ── */}
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
        </div>

        <div className="px-6 md:px-20 pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              {project.category}
            </span>
            {!(project as Record<string, unknown>).noTitle && (
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mx-auto">
                {project.title}
              </h1>
            )}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* ── Meta row ── */}
          {!(project as Record<string, unknown>).noMeta && <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-b border-[#222]"
          >
            {[
              { label: "Client",   value: project.client },
              { label: "Year",     value: project.year },
              { label: "Category", value: project.category },
              { label: "Services", value: project.services.join(", ") },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-[#555] text-xs font-bold tracking-[0.2em] uppercase mb-1">{label}</p>
                <p className="text-white font-semibold text-sm">{value}</p>
              </div>
            ))}
          </motion.div>}

          {/* ── Description ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-14 text-center"
          >
            <p className="text-[#aaa] text-lg leading-relaxed max-w-3xl mx-auto">
              {project.description as string}
            </p>
          </motion.div>

          {/* ── Videos ── */}
          {project.videos.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-20"
            >
              {(project as Record<string, unknown>).gridVideos ? (
                /* 3-column vertical grid — AI Ads */
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {project.videos.map((v, i) => (
                    <div key={i} className="relative w-full bg-[#111] rounded-2xl overflow-hidden" style={{ paddingBottom: "177.78%" }}>
                      <video
                        ref={registerVideoRef(i)}
                        onPlay={(e) => pauseOtherVideos(e.currentTarget)}
                        src={v.src}
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : ((project as Record<string, unknown>).horizontalVideos || (project.videos[0] as { src: string; label: string; youtubeUrl?: string }).youtubeUrl) ? (
                /* Horizontal layout — short films with title + YouTube link */
                <div className="flex flex-col gap-14">
                  {project.videos.map((v, i) => {
                    const vx = v as { src: string; label: string; youtubeUrl?: string; poster?: string };
                    return (
                      <div key={i} className="flex flex-col items-center gap-4">
                        {vx.label && <h3 className="text-white font-black text-3xl md:text-4xl text-center">{vx.label}</h3>}
                        <div className="relative w-full rounded-2xl overflow-hidden bg-[#111]" style={{ paddingBottom: "56.25%" }}>
                          <video
                            ref={registerVideoRef(i)}
                            onPlay={(e) => pauseOtherVideos(e.currentTarget)}
                            src={vx.src}
                            poster={vx.poster}
                            controls
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        {vx.youtubeUrl && (
                          <WatchFullVideoCTA href={vx.youtubeUrl} />
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Vertical 9:16 layout — standard project reels */
                <div className={`grid gap-6 ${project.videos.length === 1 ? "grid-cols-1 max-w-sm mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {project.videos.map((v, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                        <video
                          ref={registerVideoRef(i)}
                          onPlay={(e) => pauseOtherVideos(e.currentTarget)}
                          src={v.src}
                          controls
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-[#111]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ── AI Image Grid ── */}
          {!!(project as any).aiImages && ((project as any).aiImages as string[]).length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {((project as Record<string, unknown>).aiImages as string[]).map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] bg-[#111] rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      fill
                      priority={i < 3}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={70}
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}


          {/* ── Watch More Work CTA ── */}
          {project.clientInstagram && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-24 flex flex-col items-center gap-4 text-center"
            >
              <p className="text-[#555] text-sm">Liked what you saw? There&apos;s more where that came from.</p>
              <InstagramCTA href={project.clientInstagram} />
            </motion.div>
          )}

          {/* ── YouTube Channel CTA ── */}
          {!!(project as any).youtubeChannel && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-24 flex flex-col items-center gap-4 text-center"
            >
              <p className="text-[#555] text-sm">Want to see more? Catch the full series on YouTube.</p>
              <YouTubeChannelCTA href={(project as Record<string, unknown>).youtubeChannel as string} />
            </motion.div>
          )}

        </div>

        {/* ── Related Projects ── */}
        {related.length > 0 && (
          <section className="py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">More Work</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white">View Similar Projects</h2>
                </div>
                <Link
                  href="/projects"
                  className="hidden md:inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
                >
                  All Projects
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <LazyRelatedCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
