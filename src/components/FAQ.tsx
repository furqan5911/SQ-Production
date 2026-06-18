"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "@/lib/constants";

const GLOW_REST = "radial-gradient(25% 75% at 0% 0%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)";
const GLOW_HOVER = "radial-gradient(35% 85% at 22% 18%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)";

const GRID_BG = `
  linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
`;

function ChevronIcon() {
  return (
    <svg width={25} height={25} viewBox="0 0 256 256" fill="currentColor">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: typeof FAQS[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden"
      style={{
        borderRadius: 20,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: GLOW_REST }} />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: GLOW_HOVER }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <button
        className="relative w-full text-left flex items-center justify-between gap-4 px-6 py-5"
        onClick={onToggle}
      >
        <motion.span
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-semibold text-sm md:text-base text-white"
        >
          {faq.question}
        </motion.span>
        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
            color: hovered ? "#f87800" : "rgba(255,255,255,0.9)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 flex items-center justify-center"
        >
          <ChevronIcon />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRID_BG, backgroundSize: "48px 48px" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white text-center leading-tight mb-16">
          Curious? Check Out the Scoop!
        </h2>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} isOpen={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
