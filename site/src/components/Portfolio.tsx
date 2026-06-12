"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function PortfolioCard({ item, index }: { item: typeof PORTFOLIO_ITEMS[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbError, setThumbError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden aspect-video bg-[#111] cursor-pointer"
      onMouseEnter={() => { if (!videoError) videoRef.current?.play().catch(() => {}) }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Thumbnail â€” hidden on hover or if missing */}
      {!thumbError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.thumb}
          alt={item.title}
          onError={() => setThumbError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
      )}

      {/* Video â€” plays on hover */}
      {!videoError && (
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Label + title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase">{item.category}</span>
        <h3 className="text-white font-bold text-xl mt-1">{item.title}</h3>
      </div>

      {/* Play icon â€” appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-full bg-[#f87800] flex items-center justify-center shadow-lg shadow-[#f87800]/20">
          <svg className="w-5 h-5 fill-black ml-1" viewBox="0 0 12 12">
            <path d="M2 1l10 5-10 5V1z"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
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

        <div className="grid md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
