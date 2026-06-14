"use client";

import { useState } from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { ABOUT, STATS } from "@/lib/constants";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative bg-[#0a0a0a] py-20 md:py-28">

      {/* Warm orange radial glow — echoes portrait */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-3/4"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 0% 55%, rgba(248,120,0,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Watermark — centered, full viewport width */}
      <div className="w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-[12vw] sm:text-[10vw] md:text-[9.5vw] leading-none select-none pointer-events-none whitespace-nowrap uppercase"
          style={{ color: "rgba(248,120,0,0.25)", fontFamily: "var(--font-poppins)", fontWeight: 900, letterSpacing: "-0.05em" }}
        >
          Meet Sheraz
        </motion.p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative mt-4">

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT — Portrait, slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden max-w-[420px] mx-auto md:mx-0"
              style={{ aspectRatio: "3/4" }}
            >
              {!imgError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ABOUT.founderImage}
                  alt="Sheraz — Founder of SQ Productions"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
                  <span className="text-[#444] text-sm">Photo coming soon</span>
                </div>
              )}

              {/* Social icon buttons — bottom-left overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <a
                  href={ABOUT.founderLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10
                             flex items-center justify-center text-white
                             hover:bg-[#f87800] hover:border-[#f87800] transition-colors duration-200"
                >
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.12h.06c.53-1 1.84-2.12 3.79-2.12C20.34 8.5 21 11.08 21 14.43V24h-4v-8.7c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.27-3.34 4.6V24h-4V8.5z"/>
                  </svg>
                </a>
                <a
                  href={ABOUT.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10
                             flex items-center justify-center text-white
                             hover:bg-[#f87800] hover:border-[#f87800] transition-colors duration-200"
                >
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href={ABOUT.founderBehance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10
                             flex items-center justify-center text-white
                             hover:bg-[#f87800] hover:border-[#f87800] transition-colors duration-200"
                >
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 4.5h7.3c3.4 0 5.1 1.9 5.1 4.2 0 1.8-.9 2.9-2.3 3.5 1.8.5 2.9 1.8 2.9 3.7 0 2.6-1.9 4.6-5.3 4.6H0V4.5zm6.7 6.2c1.3 0 2.1-.6 2.1-1.6 0-1.1-.8-1.6-2.1-1.6H2.8v3.2h3.9zm.4 6.3c1.4 0 2.2-.6 2.2-1.8 0-1.2-.8-1.8-2.2-1.8H2.8v3.6h4.3zM15.5 9h6.5v1.25h-6.5V9zm7 7.2c-.4 1.3-1.7 2.8-4.3 2.8-2.6 0-4.7-1.6-4.7-5 0-3.3 2-5.15 4.65-5.15 2.6 0 4.2 1.5 4.55 3.75.08.44.1 1.04.08 1.84h-6.47c.1 2.73 3 2.82 3.92 1.72l2.27.04zm-6.13-3.08h3.86c-.07-.92-.67-1.5-1.91-1.5-1.07 0-1.72.56-1.95 1.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Text, slides up */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col justify-center pt-6 md:pt-20"
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-[2.75rem] font-black text-white leading-tight mb-1">
                {ABOUT.founderTitle}
              </h3>
              <p className="text-[#f87800] text-sm font-medium">
                Founder &amp; Director at SQ Productions — 2018–Now
              </p>
            </div>

            <p className="text-[#888] leading-relaxed text-[15px]">
              {ABOUT.founderBio}
            </p>
          </motion.div>

        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-16 md:mt-20 border-t border-[#1e1e1e] pt-12"
        >
          <div className="mb-10">
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              By the numbers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Results that speak<br />for themselves.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-4xl md:text-5xl font-black text-[#f87800] leading-none tabular-nums">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.4}
                  enableScrollSpy
                  scrollSpyOnce={false}
                />
              </span>
              <span className="mt-2 text-[#888] text-sm font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
