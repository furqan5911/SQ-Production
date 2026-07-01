"use client";

/* EXPERIMENTAL — fixed circular glows sitting in the black margins on the
   left/right of the centered max-w-7xl content (only visible on very wide
   viewports past the 7xl breakpoint). Color cycles through an orange/yellow
   palette tied to overall page scroll progress, like a dial turning through
   shades as you scroll past each section, instead of one fixed color per
   section. Easy to pull out of layout.tsx if it doesn't land well. */

import { motion, useScroll, useTransform } from "motion/react";

const COLOR_STOPS = ["#ff6a00", "#ffab42", "#ffe066", "#f87800", "#ff9d2e", "#ffd166", "#ff6a00"];
const STOP_POSITIONS = COLOR_STOPS.map((_, i) => i / (COLOR_STOPS.length - 1));

export default function AmbientGlow() {
  const { scrollYProgress } = useScroll();
  const leftColor = useTransform(scrollYProgress, STOP_POSITIONS, COLOR_STOPS);
  const rightColor = useTransform(scrollYProgress, STOP_POSITIONS, [...COLOR_STOPS].reverse());

  return (
    <div className="hidden xl:block fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} aria-hidden>
      <motion.div
        className="absolute rounded-full"
        style={{
          left: "-19vw",
          top: "50%",
          y: "-50%",
          width: "38vw",
          height: "38vw",
          background: leftColor,
          filter: "blur(90px)",
          opacity: 0.28,
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          right: "-19vw",
          top: "50%",
          y: "-50%",
          width: "38vw",
          height: "38vw",
          background: rightColor,
          filter: "blur(90px)",
          opacity: 0.28,
        }}
      />
    </div>
  );
}
