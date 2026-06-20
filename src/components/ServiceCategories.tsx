"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import Marquee from "react-fast-marquee";
import { SERVICE_CATEGORIES } from "@/lib/constants";

/* Continuous "breathing" float — never stops, independent of the open/close
   transition. Matches ANALYSIS.md: title + EXPLORE text drift up/down by a
   few pixels forever; the background number does NOT do this. */
const breathe = {
  y: [0, -4, 0],
  transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" as const },
};

/* ── Down-arrow SVG (↓).
   Collapsed: rotate(-90deg) → becomes →
   Expanded:  rotate(0deg)   → stays ↓
   Matches computed.json framer-1715g4m-container default: matrix(0,-1,1,0,0,0) = -90° ── */
function ArrowIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

/* ── Per-row component with scroll-driven number scale ── */
function CategoryRow({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof SERVICE_CATEGORIES)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  /* framer-1nf6ux6 scroll data from animations.json:
       Row entering viewport (scrollYProgress = 0): scale ≈ 1.38
       Row exiting  viewport (scrollYProgress = 1): scale ≈ 1.20
     Each number breathes larger as the row enters, shrinks as it leaves. */
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const numberScale = useTransform(scrollYProgress, [0, 1], [1.38, 1.2]);

  return (
    <div ref={rowRef} className="relative">

      {/* ── Giant decorative background number ──
          framer-nma0ig from computed.json:
            opacity: 0.37
            translateY(-79px)  ← matrix(1,0,0,1,0,-79.1979)
          framer-1nf6ux6 from animations.json:
            scroll-driven scale 1.38 → 1.20             ── */}
      <motion.div
        aria-hidden
        className="absolute left-0 top-0 leading-none text-white select-none pointer-events-none"
        style={{
          fontSize: "clamp(78px, 24vw, 230px)",
          fontWeight: 900,
          fontFamily: "Syne, sans-serif",
          letterSpacing: "-6px",
          opacity: 0.37,
          y: -79,             // translateY(-79px) — same as framer-nma0ig
          scale: numberScale, // scroll-driven — same as framer-1nf6ux6
          transformOrigin: "top left",
          zIndex: 0,
        }}
      >
        {item.number}
      </motion.div>

      {/* ── Clickable row: title left, arrow right ── */}
      <button
        onClick={onToggle}
        className="relative z-10 w-full flex items-center justify-between gap-4 text-left"
        style={{
          minHeight: 170,
          /* Left padding positions the title on top of the number's right edge — matching
             the inspo where title appears overlaid on the number's right portion */
          paddingLeft: "clamp(95px, 24vw, 215px)",
          paddingRight: "0.5rem",
        }}
      >
        <motion.h3
          animate={{
            y: [0, -4, 0],
            color: isOpen ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,1)",
          }}
          transition={{
            y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
            color: { duration: 0.25, ease: "easeOut" },
          }}
          className="text-2xl sm:text-3xl md:text-[1.9rem]"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 600,
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          {item.title}
        </motion.h3>

        {/* Arrow: ↓ SVG, rotated to -90deg (→) when collapsed.
            Exact Framer state from computed.json:
              closed: matrix(0,-1,1,0,0,0) = rotate(-90deg) = →, white
              open:   transform: none     = 0deg          = ↓, orange ── */}
        <motion.div
          className="shrink-0"
          animate={{ rotate: isOpen ? 0 : -90, color: isOpen ? "#f87800" : "#ffffff" }}
          transition={{
            rotate: { type: "spring", stiffness: 200, damping: 20 },
            color: { duration: 0.25, ease: "easeOut" },
          }}
        >
          <ArrowIcon />
        </motion.div>
      </button>

      {/* ── Expanded panel (Framer AnimatePresence height + opacity) ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.28, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            {/* Hover-to-reveal photo → links out (./category/x in the inspo).
                From FINDINGS: "hidden reveal-on-hover that links to another page" —
                EXPLORE is invisible until you hover the photo, then it's a real link. */}
            <Link
              href="/projects"
              className="group relative block overflow-hidden border-t"
              style={{ borderColor: "rgba(255,255,255,0.08)", height: 220 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/40" />

              {/* EXPLORE marquee — invisible by default, fades in on hover */}
              <div className="absolute inset-0 flex items-center overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Marquee speed={80} gradient={false}>
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <motion.span
                      key={idx}
                      animate={breathe}
                      className="flex items-center gap-6 mr-6"
                    >
                      <span
                        className="text-4xl md:text-5xl text-white"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 900,
                          letterSpacing: "-2px",
                        }}
                      >
                        EXPLORE
                      </span>
                      <span
                        className="text-4xl md:text-5xl"
                        style={{ color: "#f87800", fontWeight: 900 }}
                      >
                        ·
                      </span>
                    </motion.span>
                  ))}
                </Marquee>
              </div>
            </Link>

            {/* Description — opacity + y fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.12, duration: 0.3, ease: "easeOut" },
              }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
              className="pb-10 text-[#888] text-base md:text-lg leading-relaxed max-w-2xl"
              style={{
                paddingLeft: "clamp(130px, 13vw, 215px)",
                paddingRight: "0.5rem",
              }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main export ── */
export default function ServiceCategories() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  /* framer-fa8x55 from animations.json: rows container translates UP at 10% scroll speed.
     translateY = -0.1 × scrollY (parallax). We approximate this via section scroll progress. */
  const rowsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rowsProgress } = useScroll({
    target: rowsRef,
    offset: ["start end", "end start"],
  });
  /* Map full scroll range to a subtle upward movement (~60px total) */
  const rowsY = useTransform(rowsProgress, [0, 1], [0, -60]);

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="service-categories" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Glass border box — wraps heading + all rows (Image #6) ── */}
        <div
          className="relative rounded-[24px] overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >

          {/* framer-hv088x "Lines" — faint vertical grid lines spanning the whole
              glass box, visible behind both heading and rows in screenshot.png */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 12.5%)",
            }}
          />

          {/* Heading — framer-nr0gb + framer-r8tbyt: opacity 0.001→1, scroll-triggered,
              spring stiffness:116 damping:30 mass:1 delay:0.1 (= 1390ms duration) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 116,
              damping: 30,
              mass: 1,
              delay: 0.1,
            }}
            className="relative z-10 px-6 md:px-16 pt-12 md:pt-16 pb-8 md:pb-10"
          >
            <h2
              className="text-3xl md:text-4xl text-white mb-4 leading-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              We are your experts in these categories
            </h2>
            <p
              className="text-[#888] text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontWeight: 300 }}
            >
              Our creative toolbox overflows with video possibilities! From
              captivating stories to informative animations, we craft videos
              that fit every need.
            </p>
          </motion.div>

          {/* Rows — framer-fa8x55 parallax: translates up at 10% scroll speed */}
          <motion.div
            ref={rowsRef}
            style={{ y: rowsY }}
            className="relative z-10 px-4 md:px-14"
          >
            {SERVICE_CATEGORIES.map((item, i) => (
              <CategoryRow
                key={item.title}
                item={item}
                isOpen={openSet.has(i)}
                onToggle={() => toggle(i)}
              />
            ))}
            <div className="h-8 md:h-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
