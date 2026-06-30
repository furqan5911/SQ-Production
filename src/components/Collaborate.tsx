"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SITE, COLLABORATE } from "@/lib/constants";

function ArrowUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={{ width: "100%", height: "100%", display: "block", fill: "#fff" }}
    >
      <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" />
    </svg>
  );
}

function CollaborateButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.08 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="inline-block"
      style={{ transformOrigin: "center" }}
    >
      <Link
        href={COLLABORATE.ctaHref}
        className={`relative flex items-center gap-4 w-[min(85vw,300px)] sm:w-[280px] md:w-[340px] h-16 px-3 rounded-full overflow-hidden border border-white ${
          hovered ? "justify-between" : "justify-center"
        }`}
      >
        {/* Base resting gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(107.7% 333.3% at -11.8% 0%, #f87800 33.33%, rgba(180,90,30,1) 52.07%, rgba(255,255,255,0.1) 69.35%)",
          }}
        />
        {/* Hover glow — fades in from the center */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(65% 65% at 50% 50%, var(--accent) 0%, rgba(248,120,0,0.35) 45%, transparent 80%)",
          }}
        />

        <motion.span
          layout
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="relative z-10 text-white font-bold text-base md:text-lg whitespace-nowrap"
        >
          {COLLABORATE.ctaLabel}
        </motion.span>

        <motion.div
          layout
          animate={{
            rotate: hovered ? 80 : 180,
            backgroundColor: hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.15)",
          }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="relative z-10 rounded-full flex items-center justify-center shrink-0"
          style={{ width: 40, height: 40, padding: 9 }}
        >
          <ArrowUp />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Collaborate() {
  return (
    <section className="px-6 md:px-10 pb-2 md:pb-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto rounded-[40px] overflow-hidden text-center px-6 md:px-16 py-10 md:py-14"
        style={{
          background:
            "radial-gradient(132.5% 150% at 3.7% 0%, var(--accent) 0%, rgba(255,255,255,0.03) 38%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt={SITE.name} className="h-[200px] w-auto mx-auto mb-8 opacity-90" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          {COLLABORATE.heading.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h2>

        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10">
          {COLLABORATE.subtext}
        </p>

        <CollaborateButton />
      </motion.div>
    </section>
  );
}
