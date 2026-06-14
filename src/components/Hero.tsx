"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${SITE.heroBg})`, y: bgY }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-24 w-full"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="inline-block text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase mb-6"
        >
          Video Production Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" as const }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6"
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
          className="text-[#aaa] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SITE.subtagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center bg-[#f87800] text-black font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white transition-colors duration-200"
          >
            {SITE.ctaPrimary}
          </Link>
          <a
            href="#showreel"
            className="w-full sm:w-auto justify-center flex items-center gap-3 border border-white/30 text-white font-bold px-8 py-3.5 rounded-full text-sm hover:border-white transition-colors duration-200"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-3 h-3 fill-white ml-0.5" viewBox="0 0 12 12">
                <path d="M2 1l10 5-10 5V1z" />
              </svg>
            </span>
            {SITE.ctaShowreel}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[#555] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#555] to-transparent"
        />
      </motion.div>
    </section>
  );
}
