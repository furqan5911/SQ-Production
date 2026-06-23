"use client";

import { motion } from "motion/react";

/**
 * Shared "Scroll" cue — vertical "Scroll" label above a line that grows/shrinks.
 * Matches the Projects page hero; reused on the home hero and other page heroes
 * so every page shows the same indicator. Pass `className` for positioning.
 */
export default function ScrollIndicator({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 z-20 ${className}`}>
      <span
        className="text-white text-[10px] font-bold tracking-[0.35em] uppercase"
        style={{ writingMode: "vertical-lr" }}
      >
        Scroll
      </span>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
        style={{ originY: 0 }}
        className="w-px h-16 bg-white/40"
      />
    </div>
  );
}
