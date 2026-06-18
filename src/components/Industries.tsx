"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/constants";

const TITLE_GRADIENT = "linear-gradient(93deg, rgb(255,171,66) 42.5%, rgb(255,99,111) 100%)";
const CARD_BG = "radial-gradient(71% 86.4% at -0.8% 0%, rgba(255,255,255,0.1) 2.21%, transparent 100%)";

function IndustryCard({
  item,
  className = "",
  delay = 0,
}: {
  item: typeof INDUSTRIES[0];
  className?: string;
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: 30,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: CARD_BG,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0)"}`,
        transition: "border-color 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — barely visible by default, brightens on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: 20,
          opacity: hovered ? 0.22 : 0.06,
          transition: "opacity 0.5s ease",
        }}
      >
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt=""
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ borderRadius: 20 }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(165deg, rgb(0,0,0) 0%, transparent 100%)",
            opacity: 0.79,
            borderRadius: 20,
          }}
        />
      </div>

      {/* Diagonal glass panel — full-card wipe from LEFT on hover */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ x: hovered ? "0%" : "-200%" }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        style={{
          top: "-60%",
          left: 0,
          width: "200%",
          height: "185%",
          rotate: "9deg",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          background: "rgba(255,255,255,0.04)",
          zIndex: 5,
        }}
      />

      {/* Title — white default, orange gradient after glass wipes in */}
      <div className="relative z-10 p-7 md:p-8">
        <h3
          className="font-bold text-lg md:text-xl leading-snug"
          style={{
            backgroundImage: hovered ? TITLE_GRADIENT : "none",
            WebkitBackgroundClip: hovered ? "text" : "unset",
            WebkitTextFillColor: hovered ? "transparent" : "white",
            backgroundClip: hovered ? "text" : "unset",
            color: hovered ? "transparent" : "white",
            transition: "color 0.25s ease 0.22s, -webkit-text-fill-color 0.25s ease 0.22s",
          }}
        >
          {item.title}
        </h3>
      </div>

      {/* Description — fades in after glass finishes wiping */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-8"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0px)" : "translateY(8px)",
          transition: "opacity 0.3s ease 0.28s, transform 0.3s ease 0.28s",
        }}
      >
        <p className="text-[rgba(255,255,255,0.8)] text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function CategoriesBtn() {
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
          Explore All Categories
        </span>
      </div>
    </Link>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-white text-center leading-tight mb-10 md:mb-14"
        >
          We&apos;re Video Pros in<br className="hidden md:block" /> Many Industries!
        </motion.h2>

        {/* ── Top section: left 4-card alternating grid + right tall card ── */}
        <div className="flex gap-3">

          {/* Left: 2 rows, alternating wide/narrow */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Row 1: wide (2fr) + narrow (1fr) */}
            <div className="grid grid-cols-[2fr_1fr] gap-3">
              <IndustryCard item={INDUSTRIES[0]} className="min-h-[200px] md:min-h-[340px]" delay={0.05} />
              <IndustryCard item={INDUSTRIES[1]} className="min-h-[200px] md:min-h-[340px]" delay={0.1} />
            </div>
            {/* Row 2: narrow (1fr) + wide (2fr) */}
            <div className="grid grid-cols-[1fr_2fr] gap-3">
              <IndustryCard item={INDUSTRIES[2]} className="min-h-[200px] md:min-h-[340px]" delay={0.15} />
              <IndustryCard item={INDUSTRIES[3]} className="min-h-[200px] md:min-h-[340px]" delay={0.2} />
            </div>
          </div>

          {/* Right: tall card spanning both rows */}
          <div className="hidden md:block w-[23%] shrink-0">
            <IndustryCard item={INDUSTRIES[4]} className="h-full" delay={0.1} />
          </div>
        </div>

        {/* Shorts & Reels on mobile (full width, below the 4 cards) */}
        <div className="mt-3 md:hidden">
          <IndustryCard item={INDUSTRIES[4]} className="min-h-[200px]" delay={0.2} />
        </div>

        {/* ── Bottom: 2 equal cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <IndustryCard item={INDUSTRIES[5]} className="min-h-[200px] md:min-h-[340px]" delay={0.25} />
          <IndustryCard item={INDUSTRIES[6]} className="min-h-[200px] md:min-h-[340px]" delay={0.3} />
        </div>

        {/* Explore button — centered below cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="flex justify-center mt-10 md:mt-14"
        >
          <CategoriesBtn />
        </motion.div>

      </div>
    </section>
  );
}
