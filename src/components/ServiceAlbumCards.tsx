"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SERVICE_ALBUM_CARDS } from "@/lib/constants";

// How the hover effect works:
// 3 absolutely-positioned image layers stacked inside overflow:hidden container.
// At rest  : all 3 layers cover the full card — only layer 3 (front) is visible.
// On hover (desktop) / always (mobile) :
//   Layer 3 slides left 80px, narrows to 88% from left edge (transformOrigin left).
//   Layer 2 slides left 40px, narrows to 94%.
//   Layer 1 stays still — revealed on the right as layers 2 and 3 retract.
//   Gradient, title+subtitle, circular button all fade in (opacity 0 → 1).

function AlbumCard({ card }: { card: (typeof SERVICE_ALBUM_CARDS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile: always spread. On desktop: spread only on hover.
  const spread = hovered || isMobile;

  return (
    <Link
      href={`/services/${card.slug}`}
      aria-label={card.title}
      className="block relative rounded-[40px] overflow-hidden cursor-pointer h-[360px] md:h-[540px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layer 1 — back, always visible, never moves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.img1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layer 2 — middle, slides left 40px on spread */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          boxShadow: "-10px 0 28px rgba(0,0,0,0.4)",
          transformOrigin: "left center",
        }}
        animate={{
          x: spread ? -40 : 0,
          scaleX: spread ? 0.94 : 1,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.img2}
          alt=""
          className="absolute inset-0 h-full object-cover"
          style={{ width: "115%", right: 0, left: "auto" }}
        />
      </motion.div>

      {/* Layer 3 — front (topmost), slides left 80px on spread */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          boxShadow: "-10px 0 28px rgba(0,0,0,0.4)",
          transformOrigin: "left center",
        }}
        animate={{
          x: spread ? -80 : 0,
          scaleX: spread ? 0.88 : 1,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.img3}
          alt=""
          className="absolute inset-0 h-full object-cover"
          style={{ width: "115%", right: 0, left: "auto" }}
        />
      </motion.div>

      {/* Gradient overlay — dark left, transparent right */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 65%)",
        }}
        animate={{ opacity: spread ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Title + subtitle — always visible on mobile, hover-only on desktop */}
      <motion.div
        className="absolute bottom-8 left-8 pointer-events-none"
        animate={{ opacity: spread ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <h3 className="text-white font-bold text-2xl md:text-[28px] leading-tight">
          {card.title}
        </h3>
        <p className="text-white/65 text-sm mt-1.5">{card.subtitle}</p>
      </motion.div>

      {/* Circular "Explore Service" button — desktop hover only */}
      <motion.div
        className="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <div
          className="rounded-full flex items-center justify-center text-white font-bold uppercase text-center leading-snug"
          style={{
            width: 110,
            height: 110,
            fontSize: 11,
            letterSpacing: "0.18em",
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          Explore<br />Service
        </div>
      </motion.div>
    </Link>
  );
}

export default function ServiceAlbumCards() {
  return (
    <div className="flex flex-col gap-6 py-8 px-6 md:px-10">
      {SERVICE_ALBUM_CARDS.map((card) => (
        <AlbumCard key={card.slug} card={card} />
      ))}
    </div>
  );
}
