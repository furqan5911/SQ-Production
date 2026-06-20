"use client";

import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "motion/react";
import { ABOUT, STATS } from "@/lib/constants";

function KnowMoreBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/about"
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
        {/* Orb */}
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
        {/* Spotlight heartbeat */}
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{ width: 36, height: 36, zIndex: 1, opacity: hovered ? 1 : 0, transition: "opacity 0.25s ease" }}
        >
          <motion.div
            className="absolute rounded-full"
            animate={hovered ? { scale: [0.5, 1.0, 0.6, 0.85, 0.5] } : { scale: 0.15 }}
            transition={hovered
              ? { duration: 0.9, repeat: Infinity, times: [0, 0.15, 0.35, 0.5, 1.0], ease: "easeInOut" }
              : { duration: 0.3, ease: "easeOut" }
            }
            style={{ width: 18, height: 18, top: "calc(50% - 9px)", left: "calc(50% - 9px)", backgroundColor: "rgb(255,0,13)", mixBlendMode: "screen" }}
          />
        </div>
        <span className="relative text-white text-sm font-bold whitespace-nowrap" style={{ zIndex: 1 }}>
          {ABOUT.cta}
        </span>
      </div>
    </Link>
  );
}

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative overflow-x-hidden bg-[#0a0a0a] py-20 md:py-28">

      {/* Warm orange radial glow — echoes portrait */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-3/4"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 0% 55%, rgba(248,120,0,0.09) 0%, transparent 65%)",
        }}
      />

      {/* About intro + stats — two-column layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">

          {/* LEFT — Heading + button pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-between md:min-h-[290px]"
          >
            <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-white leading-tight tracking-tight">
              {ABOUT.heading}
            </h2>
            <div className="mt-10 md:mt-0">
              <KnowMoreBtn />
            </div>
          </motion.div>

          {/* RIGHT — Body text + 2×2 stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            {/* Body text */}
            <p className="text-white/50 leading-relaxed text-[15px]">
              {ABOUT.body}
            </p>

            {/* 2×2 stats grid */}
            <div className="relative grid grid-cols-2">
              {/* Cross lines */}
              <div className="pointer-events-none absolute inset-0 z-10">
                {/* Vertical center line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
                {/* Horizontal center line */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
              </div>

              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden h-24 md:h-28"
                >
                  {/* Large gradient watermark number with CountUp */}
                  <span
                    className="absolute inset-0 flex items-center justify-center font-black leading-none select-none pointer-events-none tabular-nums"
                    style={{
                      fontSize: "clamp(2.8rem, 5vw, 62px)",
                      opacity: 0.31,
                      backgroundImage: "linear-gradient(289deg, hsla(0,0%,100%,0) -42%, rgb(255,255,255) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.4}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </span>
                  {/* Label — centered on top */}
                  <span
                    className="absolute top-1/2 left-1/2 z-20 text-white text-[10px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-center leading-tight whitespace-nowrap"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Watermark — centered, full viewport width — now BELOW stats */}
      <div className="w-full text-center mt-20 md:mt-28">
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

      {/* Main content — portrait + bio */}
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

      </div>
    </section>
  );
}
