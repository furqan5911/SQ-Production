"use client";

import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS_STRIP } from "@/lib/constants";

const MIN_SHOW_MS = 1200;

const CARD_WIDTH = 150;
const CARD_HEIGHT = 150;

function SkillWord({ label, image }: { label: string; image: string }) {
  const [hovered, setHovered] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAt = useRef<number | null>(null);

  function handleEnter() {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (shownAt.current === null) shownAt.current = Date.now();
    setHovered(true);
  }

  function handleLeave() {
    const elapsed = shownAt.current ? Date.now() - shownAt.current : MIN_SHOW_MS;
    const remaining = Math.max(300, MIN_SHOW_MS - elapsed);
    hideTimeout.current = setTimeout(() => {
      setHovered(false);
      shownAt.current = null;
    }, remaining);
  }

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, rotate: -11, scale: 2.5 }}
            animate={{ opacity: 1, rotate: 7, scale: 1 }}
            exit={{
              opacity: 0,
              rotate: -11,
              scale: 2.5,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, // fade-OUT stays snappy
            }}
            transition={{
              duration: 3.3,                  // ≈ 330px of marquee travel ÷ 100px/s — card visibly keeps shrinking across ~1/3 of its trip
              ease: [0.16, 1, 0.3, 1],        // easeOutExpo: fast start, long slow tail
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden z-0"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: 14,
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(248,120,0,0.15)",
            }}
          >
            <img
              src={image}
              alt={label}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ filter: "brightness(1.5) contrast(1.1) saturate(1.2)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <span
        className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tight whitespace-nowrap"
        style={{
          backgroundImage:
            "radial-gradient(37% 50% at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.12) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {label}
      </span>
      <motion.span
        className="relative z-10 mx-8 w-2.5 h-2.5 rounded-full bg-[var(--accent)] inline-block"
        animate={{ scale: [1, 1.35, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

export default function SkillsStrip() {
  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

  return (
    <section
      className="relative pt-8 pb-24 md:pt-12 md:pb-32"
      style={{
        background: "var(--bg)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
      }}
    >
      <Marquee gradient={false} speed={100}>
        {doubled.map((skill, i) => (
          <SkillWord key={i} label={skill.label} image={skill.image} />
        ))}
      </Marquee>
    </section>
  );
}
