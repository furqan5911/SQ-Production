"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function categoryHref(item: (typeof PROJECTS)[0]) {
  if (item.category === "Music Video") return "/projects/music-videos";
  if (item.category === "Short Films") return "/projects/short-films";
  return `/projects?category=${encodeURIComponent(item.category)}`;
}

function ProjectCard({ item, shouldLoad = true }: { item: (typeof PROJECTS)[0]; shouldLoad?: boolean }) {
  const firstVideo = item.videos[0]?.src;
  const videoRef = useRef<HTMLVideoElement>(null);

  // When shouldLoad flips true, imperatively load + play so the video starts
  // even though the src was undefined on initial mount.
  useEffect(() => {
    if (!shouldLoad || !firstVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [shouldLoad, firstVideo]);

  return (
    <Link
      href={categoryHref(item)}
      className="group relative shrink-0 w-full max-w-[380px] mx-auto md:w-[400px] md:max-w-none md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] block"
    >
      {firstVideo ? (
        <video
          ref={videoRef}
          src={shouldLoad ? firstVideo : undefined}
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

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase block">
          {item.category}
        </span>
        <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
      </div>
    </Link>
  );
}

// Mobile wrapper: loads video only when the card is 400px from the viewport
function LazyMobileProjectCard({ item }: { item: (typeof PROJECTS)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={containerRef}>
      <ProjectCard item={item} shouldLoad={shouldLoad} />
    </div>
  );
}

function SeeAllProjectsBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/projects"
      className="shrink-0 inline-flex items-center overflow-hidden"
      style={{
        height: 60,
        padding: 5,
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        background: "linear-gradient(112deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.11) 100%)",
        borderRadius: 40,
        borderTop: "2px solid rgba(255,255,255,0.5)",
        borderLeft: "2px solid rgba(255,255,255,0.5)",
        borderBottom: "2px solid transparent",
        borderRight: "2px solid transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden flex items-center h-full"
        style={{
          paddingTop: 17,
          paddingRight: 33,
          paddingBottom: 17,
          paddingLeft: hovered ? 20 : 0,
          transition: "padding-left 0.35s ease-out",
          backdropFilter: "blur(13px)",
          WebkitBackdropFilter: "blur(13px)",
          backgroundColor: "rgba(0,0,0,0.55)",
          borderRadius: 30,
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            background: "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,171,66) 51.7%, rgb(201,145,109) 75.4%, rgb(255,99,111) 100%)",
            borderRadius: 103,
            zIndex: 0,
            transition: "all 0.35s ease-out",
            ...(hovered
              ? { width: "9px", height: "8px", top: "21px", left: "34px" }
              : { width: "100%", height: "100%", top: 0, left: 0 }
            ),
          }}
        />
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{
            width: 36,
            height: 36,
            zIndex: 1,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <motion.div
            className="absolute rounded-full"
            animate={hovered
              ? { scale: [0.5, 1.0, 0.6, 0.85, 0.5] }
              : { scale: 0.15 }
            }
            transition={hovered
              ? { duration: 0.9, repeat: Infinity, times: [0, 0.15, 0.35, 0.5, 1.0], ease: "easeInOut" }
              : { duration: 0.3, ease: "easeOut" }
            }
            style={{
              width: 18,
              height: 18,
              top: "calc(50% - 9px)",
              left: "calc(50% - 9px)",
              backgroundColor: "rgb(255,0,13)",
              mixBlendMode: "screen",
            }}
          />
        </div>
        <span className="relative text-white text-sm font-bold whitespace-nowrap" style={{ zIndex: 1 }}>
          See All Projects
        </span>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const featured = PROJECTS.slice(0, 6);

  const [distance,    setDistance]    = useState(0);
  const [runway,      setRunway]      = useState(0);
  const [startX,      setStartX]      = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_W    = 400;
  const CARD_GAP  = 24;
  const CARD_STEP = CARD_W + CARD_GAP;
  const PAD_L     = 48;

  // Desktop smart-loading: keep active card + next 2 loaded, never unload
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set([0, 1, 2]));

  useEffect(() => {
    setLoadedIndices(prev => {
      const next = new Set(prev);
      next.add(activeIndex);
      if (activeIndex + 1 < featured.length) next.add(activeIndex + 1);
      if (activeIndex + 2 < featured.length) next.add(activeIndex + 2);
      return next;
    });
  }, [activeIndex, featured.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const W   = window.innerWidth;
      const sx  = W - PAD_L - CARD_W;
      const fullD = Math.max(0, PAD_L + (featured.length - 1) * CARD_STEP + CARD_W / 2 - W / 2) + CARD_STEP;
      setStartX(sx);
      setDistance(fullD);
      setRunway(window.innerHeight + (sx + fullD) * 1.3);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [startX, -distance]);

  useMotionValueEvent(x, "change", (latest) => {
    const W           = window.innerWidth;
    const card0CenterX = W / 2 - PAD_L - CARD_W / 2;
    const idx          = Math.round((card0CenterX - latest) / CARD_STEP);
    setActiveIndex(Math.max(0, Math.min(featured.length - 1, idx)));
  });

  return (
    <>
      {/* ── Mobile: vertical card stack — each card lazy-loads its video ── */}
      <div className="md:hidden bg-transparent py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center text-center gap-4"
          >
            <div>
              <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Our Handpicked<br />Featured Portfolio
              </h2>
            </div>
            <SeeAllProjectsBtn />
          </motion.div>

          <div className="flex flex-col gap-6">
            {featured.map((item) => (
              <LazyMobileProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop heading — normal flow, scrolls away before cards pin ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden md:flex flex-col items-center text-center gap-4 px-12 pt-20 pb-16 bg-transparent"
      >
        <div>
          <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Our Handpicked<br />Featured Portfolio
          </h2>
        </div>
        <SeeAllProjectsBtn />
      </motion.div>

      {/* ── Desktop sticky card sweep ── */}
      <div
        ref={wrapRef}
        style={{ height: runway ? `${runway}px` : "100vh" }}
        className="hidden md:block relative bg-transparent"
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="overflow-x-clip w-full">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 px-6 md:px-12 will-change-transform"
            >
              {featured.map((item, i) => (
                <div
                  key={item.slug}
                  style={{
                    flexShrink: 0,
                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    transform: activeIndex === i ? "scale(1)" : "scale(0.85)",
                    transformOrigin: "center center",
                  }}
                >
                  <ProjectCard item={item} shouldLoad={loadedIndices.has(i)} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
