"use client";

import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS_STRIP } from "@/lib/constants";

const MIN_SHOW_MS = 1200;

// Landscape card shown above the scrolling text on hover
const CARD_W = 400;
const CARD_H = 220;

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
  const [active, setActive] = useState<{ label: string; image: string } | null>(
    null
  );
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAt = useRef<number | null>(null);

  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

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

  return (
    <section
      className="relative pb-12 md:pb-16"
      style={{
        minHeight: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "var(--bg)",
        overflow: "visible",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
      }}
    >
      {/*
        Popup card — rendered here as a child of <section>, NOT inside the Marquee.
        This is the key fix: keeping it outside rfm-marquee-container means
        overflow-x:hidden on that container cannot clip this element.
        It sits above the scrolling text, centered on the section.
      */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.label}
            initial={{ opacity: 0, rotate: -11, scale: 0.75, y: 16 }}
            animate={{ opacity: 1, rotate: 7, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              rotate: -11,
              scale: 0.75,
              y: 16,
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            }}
            transition={{
              duration: 0.7,
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
              left: `calc(50% - ${CARD_W / 2}px)`,
              top: "32px",
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

      {/* Scrolling text strip — no popup inside here anymore */}
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
    </section>
  );
}
