"use client";

/* EXPERIMENTAL — home-page-only version of AmbientGlow.tsx. Orange/yellow
   color cycling tied to scroll, active only between the "Our Handpicked /
   Featured Portfolio" section (marker id "home-glow-start", placed in
   page.tsx) and the vertical middle of the founder portrait photo inside the
   About/"Meet Sheraz" section. Fades in right after the start marker, holds,
   then fades out approaching that photo's midpoint — a clean "wipe out"
   instead of an abrupt cut. The photo is found via a DOM query (first <img>
   inside the "home-glow-end-wrap" marker page.tsx wraps around <About />) so
   no id/ref needs adding inside About.tsx itself.

   Two shapes share that same scroll range/color logic: desktop (xl+) gets
   semicircle blobs in the side margins (mirrors AmbientGlow.tsx); below xl
   there's no side margin for those to sit in (content is full-width), so
   mobile/tablet instead gets horizontal glow bands bleeding in from the top
   and bottom edges. */

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const COLOR_STOPS = ["#ff6a00", "#ffab42", "#ffe066", "#f87800", "#ff9d2e", "#ffd166", "#ff6a00"];
const STOP_POSITIONS = COLOR_STOPS.map((_, i) => i / (COLOR_STOPS.length - 1));

// Fallback if the portrait image can't be found yet — fraction of the whole
// About wrapper's height to end at instead.
const FALLBACK_END_FRACTION = 0.85;

// How far down the portrait photo the fade-out target sits — 1.0 (its
// bottom) ended up dragging the whole glow out all the way past the image;
// pulled back up to its middle so it's fully gone by then instead.
const IMAGE_END_FRACTION = 0.5;

export default function HomeSectionGlow() {
  const boundsRef = useRef({ start: 0, end: 1 });

  useEffect(() => {
    function measure() {
      const startEl = document.getElementById("home-glow-start");
      const endEl = document.getElementById("home-glow-end-wrap");
      if (!startEl || !endEl) return;
      const startY = startEl.getBoundingClientRect().top + window.scrollY;

      const portraitImg = endEl.querySelector("img");
      let endY;
      if (portraitImg) {
        const imgRect = portraitImg.getBoundingClientRect();
        endY = imgRect.top + window.scrollY + imgRect.height * IMAGE_END_FRACTION;
      } else {
        const endRect = endEl.getBoundingClientRect();
        endY = endRect.top + window.scrollY + endRect.height * FALLBACK_END_FRACTION;
      }
      boundsRef.current = { start: startY, end: Math.max(endY, startY + 1) };
    }
    measure();
    window.addEventListener("resize", measure);
    // Re-measure after below-fold content (images/video) settles layout
    const t = setTimeout(measure, 800);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const { scrollY } = useScroll();
  const rangeProgress = useTransform(scrollY, (y) => {
    const { start, end } = boundsRef.current;
    return Math.max(0, Math.min(1, (y - start) / (end - start)));
  });

  const opacity = useTransform(rangeProgress, [0, 0.08, 0.94, 1], [0, 0.28, 0.28, 0]);
  const leftColor = useTransform(rangeProgress, STOP_POSITIONS, COLOR_STOPS);
  const rightColor = useTransform(rangeProgress, STOP_POSITIONS, [...COLOR_STOPS].reverse());

  return (
    <>
      {/* Desktop (xl+) — semicircle blobs in the side margins */}
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
            opacity,
            filter: "blur(90px)",
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
            opacity,
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Mobile/tablet (below xl) — no side margins exist there, so instead
          of the side blobs, soft horizontal glow bands bleed in from the top
          and bottom edges. Same scroll range and color cycle as desktop. */}
      <div className="xl:hidden fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} aria-hidden>
        <motion.div
          className="absolute rounded-full"
          style={{
            left: "50%",
            x: "-50%",
            top: "-30vw",
            width: "140vw",
            height: "55vw",
            background: leftColor,
            opacity,
            filter: "blur(70px)",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            left: "50%",
            x: "-50%",
            bottom: "-30vw",
            width: "140vw",
            height: "55vw",
            background: rightColor,
            opacity,
            filter: "blur(70px)",
          }}
        />
      </div>
    </>
  );
}
