"use client";

import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { SKILLS_STRIP } from "@/lib/constants";

const MIN_SHOW_MS = 1200;

const CARD_W = 300;
const CARD_H = 240;

function SkillWord({
  label,
  onEnter,
  onLeave,
}: {
  label: string;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span
        className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tight whitespace-nowrap"
        style={{
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)",
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
  const [active, setActive] = useState<{ label: string; image: string } | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAt = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // useMotionValue updates outside React's render cycle — no setState, no re-render cascade
  const cardX = useMotionValue(0);

  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

  const activeIdx = active
    ? SKILLS_STRIP.findIndex((s) => s.label === active.label)
    : 0;
  const rotDeg = activeIdx % 2 === 0 ? 7 : -7;

  function handleEnter(skill: { label: string; image: string }) {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (shownAt.current === null) shownAt.current = Date.now();
    setActive(skill);
  }

  function handleLeave() {
    const elapsed = shownAt.current ? Date.now() - shownAt.current : MIN_SHOW_MS;
    const remaining = Math.max(300, MIN_SHOW_MS - elapsed);
    hideTimeout.current = setTimeout(() => {
      setActive(null);
      shownAt.current = null;
    }, remaining);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    // Clamp so card never overflows left or right, then offset by half card width
    cardX.set(
      Math.max(CARD_W / 2 + 16, Math.min(x, rect.width - CARD_W / 2 - 16)) - CARD_W / 2
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24"
      onMouseMove={handleMouseMove}
      style={{
        background: "var(--bg)",
        overflow: "visible",
      }}
    >
      {/*
        Card is a sibling of the Marquee wrapper — outside rfm overflow clip.
        x is a MotionValue so cursor tracking never triggers a React re-render.
        left: 0 + x: cardX gives correct absolute position within the section.
      */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.label}
            initial={{ opacity: 0, scale: 1.6, rotate: rotDeg * 0.4 }}
            animate={{ opacity: 1, scale: 1, rotate: rotDeg, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.15,
              rotate: rotDeg * 2,
              transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute pointer-events-none overflow-hidden"
            style={{
              width: CARD_W,
              height: CARD_H,
              borderRadius: 14,
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(248,120,0,0.15)",
              left: 0,
              x: cardX,
              top: 24,
              zIndex: 10,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.image}
              alt={active.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(1.5) contrast(1.1) saturate(1.2)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* maskImage on this wrapper only — never clips the card above */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        }}
      >
        <Marquee gradient={false} speed={100}>
          {doubled.map((skill, i) => (
            <SkillWord
              key={i}
              label={skill.label}
              onEnter={() => handleEnter(skill)}
              onLeave={handleLeave}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
