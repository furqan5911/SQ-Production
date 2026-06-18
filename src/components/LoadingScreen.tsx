"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const ICON        = "/images/sq-icon.png";
const EXTRUDE_N   = 6;   // fewer layers = less GPU compositing per frame
const EXTRUDE_GAP = 3.5; // wider gap so total depth stays visible (~21px)
const FREQ        = 1.6;
const AMP_PCT     = 5;

function waveClip(fillPct: number, phase: number): string {
  const steps = 22; // fewer points = less string work per frame, still smooth
  const pts: string[] = [];
  const bottom = (100 + AMP_PCT + 4).toFixed(1);
  pts.push(`0% ${bottom}%`);
  for (let i = 0; i <= steps; i++) {
    const xPct = ((i / steps) * 100).toFixed(1);
    const yPct =
      fillPct
      + Math.sin(((i / steps) * FREQ * 2 * Math.PI) + phase) * AMP_PCT
      + Math.sin(((i / steps) * FREQ * 0.6 * 2 * Math.PI) + phase * 1.3) * (AMP_PCT * 0.4);
    pts.push(`${xPct}% ${Math.max(-(AMP_PCT + 4), yPct).toFixed(1)}%`);
  }
  pts.push(`100% ${bottom}%`);
  return `polygon(${pts.join(", ")})`;
}

function eio(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const mask: React.CSSProperties = {
  WebkitMaskImage:    `url(${ICON})`,
  WebkitMaskSize:     "contain",
  WebkitMaskRepeat:   "no-repeat",
  WebkitMaskPosition: "center",
  maskImage:          `url(${ICON})`,
  maskSize:           "contain",
  maskRepeat:         "no-repeat",
  maskPosition:       "center",
};

const extrusionLayers = Array.from({ length: EXTRUDE_N }, (_, i) => {
  const t = i / (EXTRUDE_N - 1);
  const r = Math.round(210 - t * 180);
  const g = Math.round(60  - t * 58);
  const a = (0.9 - t * 0.55).toFixed(2);
  return { z: -(i + 1) * EXTRUDE_GAP, color: `rgba(${r},${g},0,${a})` };
});

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  // logoRef  → the preserve-3d extrusion group (rotated)
  // fillRef  → flat wave-fill overlay (same rotateY, separate DOM — clip-path works here)
  const logoRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const FILL_MS  = 2000;
    const WAVE_SPD = 2.0;
    let startTs: number | null = null;
    let rafId: number;
    let running = false;

    function loop(ts: number) {
      if (!running) { rafId = requestAnimationFrame(loop); return; }
      if (!startTs) startTs = ts;

      const raw   = Math.min((ts - startTs) / FILL_MS, 1);
      const eased = eio(raw);

      // Two 180° legs — same direction split
      let rotY: number;
      if (raw <= 0.5) {
        rotY = eio(raw * 2) * 180;
      } else {
        rotY = 180 - eio((raw - 0.5) * 2) * 180;
      }

      const rotStr = `rotateY(${rotY.toFixed(2)}deg)`;

      // Both the 3D extrusion group AND the flat fill overlay get the same rotation
      // so they appear locked together inside the shared perspective container
      if (logoRef.current) logoRef.current.style.transform = rotStr;

      // Wave fill — clip-path works here because fillRef is NOT inside preserve-3d
      // fillPct: 100 = empty (wave at bottom), -(AMP_PCT*2) = full (wave above top)
      const fillPct = 100 - eased * (100 + AMP_PCT * 2);
      const phase   = (ts / 1000) * WAVE_SPD;
      if (fillRef.current) {
        fillRef.current.style.transform = rotStr;
        fillRef.current.style.clipPath  = waveClip(fillPct, phase);
      }


      if (raw < 1) rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);
    const t1 = setTimeout(() => { running = true; }, 140);
    const t2 = setTimeout(() => setVisible(false), FILL_MS + 140 + 500);
    return () => { cancelAnimationFrame(rafId); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#0a0a0a", willChange: "opacity" }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } }}
        >
          {/* ── Logo area — centered, responsive size ─────────────────── */}
          {/*
           * One perspective container, two children that both get the same rotateY:
           *   1. logoRef  — preserve-3d group with extrusion depth layers + ghost
           *   2. fillRef  — flat overlay with wave clip-path + orange mask fill
           * Kept separate so clip-path isn't trapped inside preserve-3d (browsers flatten it).
           */}
          <div
            style={{
              position: "relative",
              width: "clamp(80px, 18vw, 100px)",
              height: "clamp(80px, 18vw, 100px)",
              perspective: "480px",
              perspectiveOrigin: "50% 50%",
            }}
          >
              {/* ── 3D extrusion group ── */}
              <div
                ref={logoRef}
                style={{
                  position: "absolute", inset: 0,
                  transformStyle: "preserve-3d",
                  transform: "rotateY(0deg)",
                  willChange: "transform",
                }}
              >
                {/* Depth / side-face layers */}
                {extrusionLayers.map(({ z, color }, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute", inset: 0,
                      transform: `translateZ(${z}px)`,
                      backgroundColor: color,
                      backfaceVisibility: "visible",
                      willChange: "transform",
                      ...mask,
                    }}
                  />
                ))}

                {/* Ghost blueprint — front face */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute", inset: 0,
                    transform: "translateZ(1px)",
                    opacity: 0.13,
                    backgroundColor: "#ffffff",
                    backfaceVisibility: "visible",
                    ...mask,
                  }}
                />
              </div>

              {/* ── Wave fill overlay (flat — clip-path works perfectly here) ── */}
              <div
                ref={fillRef}
                style={{
                  position: "absolute", inset: 0,
                  transform: "rotateY(0deg)",
                  willChange: "transform, clip-path",
                  // Starts with everything clipped away (wave below element)
                  clipPath: `polygon(0% 110%, 100% 110%)`,
                }}
              >
                <div
                  style={{
                    width: "100%", height: "100%",
                    backgroundColor: "#f87800",
                    ...mask,
                  }}
                />
              </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
