"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SERVICE_ALBUM_CARDS } from "@/lib/constants";

// How the hover effect works:
// A single full-bleed image per card, gently zooming on hover.
// On hover (desktop) / always (mobile) :
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
      {/* Single image layer, subtle zoom on hover */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.image}
          alt=""
          className="w-full h-full object-cover"
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
