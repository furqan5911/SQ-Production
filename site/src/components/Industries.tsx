"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function IndustryCard({ item, index }: { item: typeof INDUSTRIES[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#111] cursor-pointer"
    >
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Dark gradient overlay â€” always visible so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-500" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white text-sm font-bold leading-tight">{item.title}</p>
      </div>

      {/* Lime accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f87800] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">Industries</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              We&apos;re Video Pros in<br />Many Industries!
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
          >
            Explore All Categories
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((item, i) => (
            <IndustryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
