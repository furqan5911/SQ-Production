"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function ProjectCard({ item }: { item: (typeof PROJECTS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstVideo = item.videos[0]?.src;

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Link
      href={`/projects/${item.slug}`}
      className="group relative shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail image */}
      <img
        src={item.image}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${firstVideo ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
      />

      {/* Hover-play video */}
      {firstVideo && (
        <video
          ref={videoRef}
          src={firstVideo}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#f87800] text-black text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
          View Project
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase block">
          {item.category}
        </span>
        <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["35%", "-30%"]);

  const featured = PROJECTS.slice(0, 4);

  return (
    <div ref={sectionRef} style={{ height: "190vh" }} className="relative bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                Our Handpicked<br />Featured Portfolio
              </h2>
            </div>
            <Link
              href="/projects"
              className="shrink-0 inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
            >
              See All Projects
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
          </motion.div>

          <div className="overflow-visible">
            <motion.div style={{ x }} className="flex gap-6 will-change-transform">
              {featured.map((item) => (
                <ProjectCard key={item.slug} item={item} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
