"use client";

import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "motion/react";
import { ABOUT, STATS, FOOTER } from "@/lib/constants";

function AboutSocialPill({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="relative flex items-center justify-between w-full pl-2 pr-2 py-2 rounded-full overflow-hidden border border-white/30"
    >
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.04)" }} />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ background: "radial-gradient(65% 65% at 50% 50%, rgba(248,120,0,0.25) 0%, rgba(248,120,0,0.1) 45%, transparent 80%)" }}
      />
      {/* Light sweep */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ left: hovered ? "112%" : "-16%" }}
        transition={hovered ? { type: "spring", stiffness: 110, damping: 26 } : { type: "spring", stiffness: 70, damping: 16 }}
        style={{ top: "-50%", width: "6%", height: "200%", rotate: 9, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(255,255,255,0.55)", zIndex: 5 }}
      />
      <span className="relative z-10 flex items-center gap-3 pl-4 text-white text-xs font-bold tracking-[0.15em] uppercase">
        <span className="text-[#f87800] shrink-0">{icon}</span>
        {label}
      </span>
      <motion.div
        animate={{ rotate: hovered ? 0 : 90, backgroundColor: hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)" }}
        transition={{ type: "spring", stiffness: 240, damping: 20 }}
        className="relative z-10 rounded-full flex items-center justify-center shrink-0"
        style={{ width: 36, height: 36, padding: 8 }}
      >
        <svg viewBox="0 0 256 256" style={{ width: "100%", height: "100%", fill: "#fff" }}>
          <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"/>
        </svg>
      </motion.div>
    </motion.a>
  );
}

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
    <section id="about" className="relative overflow-x-hidden bg-transparent py-16 md:py-24">


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

      {/* MEET — centered */}
      <div className="w-full text-center mt-20 md:mt-28">
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[9vw] sm:text-[7.5vw] md:text-[7vw] leading-none select-none pointer-events-none whitespace-nowrap uppercase"
          style={{ fontWeight: 900, letterSpacing: "-0.05em", backgroundImage: "linear-gradient(135deg, #ff6a00 0%, #f87800 35%, #ffab42 65%, #ffe066 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          MEET
        </motion.p>
      </div>

      {/* SHERAZ — no gap, aligned to same container as image */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 overflow-hidden -mt-2 md:-mt-3" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex items-baseline justify-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="leading-none select-none pointer-events-none uppercase"
            style={{ fontSize: "clamp(1.5rem, 10vw, 8rem)", fontWeight: 900, letterSpacing: "-0.03em", backgroundImage: "linear-gradient(135deg, #ff6a00 0%, #f87800 35%, #ffab42 65%, #ffe066 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            SHE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="leading-none select-none pointer-events-none uppercase"
            style={{ fontSize: "clamp(1.5rem, 10vw, 8rem)", fontWeight: 900, letterSpacing: "-0.03em", backgroundImage: "linear-gradient(135deg, #ff6a00 0%, #f87800 35%, #ffab42 65%, #ffe066 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            RAZ
          </motion.p>
        </div>
      </div>

      {/* Main content — portrait + bio */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative -mt-6 md:-mt-10" style={{ zIndex: 10 }}>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT — Portrait, slides from right */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden max-w-[500px] mx-auto md:mx-0"
              style={{ aspectRatio: "3/4", zIndex: 20, position: "relative", marginLeft: "60px" }}
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
              <p className="text-white text-[18px] font-medium mb-1">Sheraz Qureshi</p>
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

            {/* Social pill links — stacked below bio */}
            <div className="flex flex-col gap-3 mt-8 mr-[50px]">
              <AboutSocialPill label="Facebook"  href={FOOTER.socials.facebook}   icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>} />
              <AboutSocialPill label="LinkedIn"  href={ABOUT.founderLinkedIn}      icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.12h.06c.53-1 1.84-2.12 3.79-2.12C20.34 8.5 21 11.08 21 14.43V24h-4v-8.7c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.27-3.34 4.6V24h-4V8.5z"/></svg>} />
              <AboutSocialPill label="YouTube"   href={FOOTER.socials.youtube}     icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>} />
              <AboutSocialPill label="Instagram" href={ABOUT.founderInstagram}     icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>} />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
