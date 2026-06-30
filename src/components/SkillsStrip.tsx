"use client";

import { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { SKILLS_STRIP } from "@/lib/constants";

const MIN_SHOW_MS = 300;
const CARD_W = 300;
const CARD_H = 240;

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
  // prevCard = the card that's exiting; prevX = its frozen x position at the moment it started exiting
  const [prevCard, setPrevCard] = useState<{ label: string; image: string } | null>(null);
  const [prevX, setPrevX] = useState(0);

  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevClearTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAt = useRef<number | null>(null);
  const isOverSkill = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef<{ label: string; image: string } | null>(null); // always-fresh copy of active
  const cardX = useMotionValue(0); // live cursor tracking for the ACTIVE card only

  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

  // Preload all images when component mounts so they're ready on first hover
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
    isOverSkill.current = true;

    // Read from ref — never stale even inside Marquee's cloned children
    const current = activeRef.current;

    // If switching to a different word, freeze the current card as the exit card
    if (current && current.label !== skill.label) {
      if (prevClearTimeout.current) clearTimeout(prevClearTimeout.current);
      setPrevCard(current);
      setPrevX(cardX.get());
      prevClearTimeout.current = setTimeout(() => setPrevCard(null), 950);
    }

    // Set the active card's position from the current cursor position
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      cardX.set(clampedX(e.clientX - rect.left, rect.width));
    }

    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (shownAt.current === null) shownAt.current = Date.now();
    activeRef.current = skill;
    setActive(skill);
  }

  function handleLeave() {
    isOverSkill.current = false;
    const elapsed = shownAt.current ? Date.now() - shownAt.current : MIN_SHOW_MS;
    const remaining = Math.max(80, MIN_SHOW_MS - elapsed);
    hideTimeout.current = setTimeout(() => {
      activeRef.current = null;
      setActive(null);
      shownAt.current = null;
    }, remaining);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    // Only update card position when cursor is directly over a skill word
    if (!sectionRef.current || !isOverSkill.current) return;
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

  return (
    <section
      ref={sectionRef}
      className="relative pb-16 md:pb-24"
      onMouseMove={handleMouseMove}
      style={{ background: "var(--bg)", overflow: "visible" }}
    >
      {/*
        Outer wrapper: position:relative only — NO maskImage here.
        Card uses bottom:calc(100%+16px) to float above the marquee text.
        maskImage lives on the INNER wrapper so it only clips the scrolling text,
        never the card.
      */}
      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {prevCard && (
            <motion.div
              key={`prev-${prevCard.label}`}
              initial={{ opacity: 1, scale: 1, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{
                opacity: 0,
                scale: 0.35,
                rotate: -18,
                transition: { duration: 0.85, ease: "easeOut" },
              }}
              className="pointer-events-none overflow-hidden"
              style={{ ...sharedCardStyle, x: prevX }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prevCard.image}
                alt={prevCard.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          )}

          {active && (
            <motion.div
              key={active.label}
              initial={{ opacity: 0, scale: 1.3, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{
                opacity: 0,
                scale: 0.35,
                rotate: -18,
                transition: { duration: 0.85, ease: "easeOut" },
              }}
              transition={{
                scale: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.12 },
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

        {/* Inner wrapper: maskImage only — clips the text, never the card */}
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
                onLeave={handleLeave}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
