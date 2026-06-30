"use client";

import { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { SKILLS_STRIP } from "@/lib/constants";

const CARD_W = 300;
const CARD_H = 240;
const SHOW_MS = 2000; // each card shows for exactly 2 seconds then auto-fades

function SkillWord({
  label,
  onEnter,
  onLeave,
}: {
  label: string;
  onEnter: (e: React.MouseEvent<HTMLElement>) => void;
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

  const activeRef = useRef<{ label: string; image: string } | null>(null);
  const autoHideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lastMouseMoveAt = useRef<number>(0);
  const cardX = useMotionValue(0);

  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

  // Preload all images so they appear instantly on first hover
  useEffect(() => {
    SKILLS_STRIP.forEach((skill) => {
      const img = new window.Image();
      img.src = skill.image;
    });
  }, []);

  function clampedX(rawX: number, rectWidth: number): number {
    return Math.max(CARD_W / 2 + 16, Math.min(rawX, rectWidth - CARD_W / 2 - 16)) - CARD_W / 2;
  }

  function handleEnter(skill: { label: string; image: string }, e: React.MouseEvent<HTMLElement>) {
    // Clear any existing 1-second timer
    if (autoHideTimeout.current) clearTimeout(autoHideTimeout.current);

    // Update cursor position so card follows the word
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      cardX.set(clampedX(e.clientX - rect.left, rect.width));
    }

    const how = Date.now() - lastMouseMoveAt.current < 120 ? "user moved mouse" : "word scrolled under cursor";
    const imgName = skill.image.split("/").pop() ?? skill.image;
    console.log(`✅ NOW SHOWING: "${skill.label}" | image: ${imgName} | triggered by: ${how} | fades in 1 second`);

    // Show this skill's card
    activeRef.current = skill;
    setActive(skill);

    // Auto-fade after 1 second
    autoHideTimeout.current = setTimeout(() => {
      console.log(`⏱️ AUTO-FADED: "${skill.label}" — 1 second elapsed`);
      activeRef.current = null;
      setActive(null);
    }, SHOW_MS);
  }

  function handleSectionLeave() {
    console.log("❌ Card hidden — cursor left the skills strip");
    if (autoHideTimeout.current) clearTimeout(autoHideTimeout.current);
    activeRef.current = null;
    setActive(null);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    lastMouseMoveAt.current = Date.now();
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    cardX.set(clampedX(e.clientX - rect.left, rect.width));
  }

  const sharedCardStyle = {
    width: CARD_W,
    height: CARD_H,
    borderRadius: 14,
    background: "#0a0a0a",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    position: "absolute" as const,
    bottom: "-85px",
    zIndex: 10,
    left: 0,
  };

  const exitAnim = {
    opacity: 0,
    scale: 0.26,
    rotate: -11,
    y: -100,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative pb-16 md:pb-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleSectionLeave}
      style={{ background: "var(--bg)", overflow: "visible" }}
    >
      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.label}
              initial={{ opacity: 1, scale: 2, rotate: -11, y: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 7, y: 0 }}
              exit={exitAnim}
              transition={{
                scale: { type: "spring", stiffness: 80, damping: 18 },
                rotate: { type: "spring", stiffness: 80, damping: 18 },
                opacity: { duration: 0 },
              }}
              className="pointer-events-none overflow-hidden"
              style={{ ...sharedCardStyle, x: cardX }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image}
                alt={active.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* maskImage on this wrapper only — never clips the card */}
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
                onEnter={(e) => handleEnter(skill, e)}
                onLeave={() => {}}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
