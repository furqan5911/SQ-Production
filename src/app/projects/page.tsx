"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, CLIENT_MARQUEE } from "@/lib/constants";
import ScrollIndicator from "@/components/ScrollIndicator";

const CATEGORIES = ["All", "AI Ads", "Architecture", "Celebrity & Creator", "Commercial", "Fashion Films", "Music Video", "Podcast", "Product", "Short Films", "Social Media"];

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  show:   (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

// Loads the card's video only when the card is within 600px of the viewport
function LazyProjectCard({ item, i }: { item: (typeof PROJECTS)[0]; i: number }) {
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
      <motion.div
        custom={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
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
            <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase">
              {item.category}
            </span>
            <h3 className="text-white font-bold text-lg mt-1 group-hover:text-[#f87800] transition-colors duration-200">
              {item.title}
            </h3>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lenis = useLenis();
  const [active, setActive] = useState(() => {
    const cat = searchParams.get("category");
    return cat && CATEGORIES.includes(cat) ? cat : "All";
  });

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setActive(cat);
      setTimeout(() => {
        const el = document.getElementById("projects-grid");
        if (el && lenis) {
          lenis.scrollTo(el, { offset: -20 });
        }
      }, 300);
    }
  }, [searchParams, lenis]);

  const filtered = active === "All"
    ? (() => {
        const seen = new Set<string>();
        return PROJECTS.filter((p) => {
          if (seen.has(p.category)) return false;
          seen.add(p.category);
          return true;
        });
      })()
    : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="bg-transparent min-h-screen">

        {/* ── Full-viewport hero ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/our%20projects.jpeg"
              alt="Projects hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero text — centered */}
          <div className="relative z-10 px-6 md:px-16 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none mb-4 md:mb-6">
                Our Projects
              </h1>
              <p className="text-[#aaa] text-base md:text-xl leading-relaxed">
                From coming up with creative concepts to delivering outstanding campaigns — we&apos;re your crew ready to turn your project dreams into reality.
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator — absolute bottom left */}
          <ScrollIndicator className="absolute bottom-4 left-6 md:left-16" />
        </section>

        {/* ── Client names marquee — two rows, opposite directions ── */}
        <div className="bg-[#f87800] py-3 overflow-hidden flex flex-col gap-2">
          <Marquee gradient={false} speed={60} autoFill direction="left">
            {PROJECTS.filter(p => !p.title.startsWith("Coming")).map((p) => (
              <span key={p.slug} className="mx-10 text-black text-sm font-bold tracking-widest uppercase flex items-center gap-10">
                {p.client}
                <span className="text-black/40 text-lg">✦</span>
              </span>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={60} autoFill direction="right">
            {PROJECTS.filter(p => !p.title.startsWith("Coming")).map((p) => (
              <span key={p.slug} className="mx-10 text-black text-sm font-bold tracking-widest uppercase flex items-center gap-10">
                {p.client}
                <span className="text-black/40 text-lg">✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* ── Category filters ── */}
        <section id="projects-grid" className="px-6 md:px-10 max-w-7xl mx-auto pt-14 mb-10">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => cat === "Short Films" ? router.push("/projects/short-films") : cat === "Music Video" ? router.push("/projects/music-videos") : cat === "Fashion Films" ? router.push("/projects/new-times-roman") : cat === "AI Ads" ? router.push("/projects/ai-ads") : router.push(`/projects?category=${encodeURIComponent(cat)}`)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? "bg-[#f87800] border-[#f87800] text-black"
                    : "border-[#333] text-[#888] hover:border-[#f87800] hover:text-[#f87800]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-32">
          {filtered.length === 0 ? (
            <p className="text-[#555] text-center py-24 text-lg">No projects in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((item, i) => (
                <LazyProjectCard key={item.slug} item={item} i={i} />
              ))}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}
