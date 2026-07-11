"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import { SERVICE_DETAILS } from "@/lib/constants";

/* Per-panel marquee direction/speed — measured on the real site, each panel
   genuinely differs (not meant to be matched exactly, just shouldn't be a
   single hardcoded direction/speed):
     Pre-Production: rightward (dir 1), ~215px/s
     Production:     leftward  (dir -1), ~104px/s
     Post-Production: rightward (dir 1), ~109px/s */
const MARQUEE_CONFIG = [
  { direction: 1 as const, speed: 215 },
  { direction: -1 as const, speed: 104 },
  { direction: 1 as const, speed: 109 },
];

function ServiceItem({ item }: { item: { title: string; description: string; iconSvg: string } }) {
  const rotate = useMotionValue(0);
  const color = useMotionValue("rgb(255,255,255)");
  const controlsRef = useRef<{ stop: () => void }[]>([]);

  function handleHoverStart() {
    /* Slow underdamped spring with a visible overshoot/undershoot before
       settling over ~3-4s — matches the measured color curve, not a flat
       200ms ease. Color starts almost immediately on hover. */
    const colorControls = animate(color, "rgb(255,122,59)", { type: "spring", stiffness: 24, damping: 5 });
    /* One-shot spin-and-settle per hover (not a loop) — decelerates into
       rest, matches the measured ~1.1deg -> ~360deg curve. Re-verification
       found the icon starts ~0.5-1s after the color, not simultaneously. */
    const rotateControls = animate(rotate, 360, { type: "spring", stiffness: 24, damping: 5, delay: 0.7 });
    controlsRef.current = [colorControls, rotateControls];
  }

  function handleHoverEnd() {
    /* Stop any in-flight (or still-delayed) animation first — otherwise a
       quick hover-and-leave during the icon's 0.7s delay would still fire
       the spin after the mouse has already left. */
    controlsRef.current.forEach((c) => c.stop());
    controlsRef.current = [];
    /* Real site resets instantly on mouse-leave, not via an animated
       reverse — confirmed: first sample after leaving is already back at
       rest, regardless of how far into the hover-in animation it was. */
    rotate.set(0);
    color.set("rgb(255,255,255)");
  }

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="py-5 cursor-default"
    >
      <div className="flex items-start gap-3">
        {/* Orange Phosphor icon — already orange at rest, only rotation animates */}
        <motion.div
          className="shrink-0 mt-0.5"
          style={{ width: 24, height: 24, rotate }}
          dangerouslySetInnerHTML={{ __html: item.iconSvg }}
        />
        <div>
          <motion.h4
            style={{
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "Syne, sans-serif",
              letterSpacing: "-0.9px",
              lineHeight: "27px",
              color,
            }}
          >
            {item.title}
          </motion.h4>
          <p
            className="mt-1"
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.8)",
              lineHeight: "22.5px",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* Always-running horizontal marquee — not hover-triggered. Duplicates the
   image list 3x and loops the middle copy's width seamlessly, forever,
   independent of mouse position. */
function MarqueeStrip({
  images,
  direction,
  speed,
}: {
  images: string[];
  direction: 1 | -1;
  speed: number;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const repeated = [...images, ...images, ...images];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setSetWidth(el.scrollWidth / 3);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images]);

  useEffect(() => {
    if (!setWidth) return;
    const duration = setWidth / speed;
    const from = direction === 1 ? -setWidth : 0;
    const to = direction === 1 ? 0 : -setWidth;
    x.set(from);
    const controls = animate(x, to, { duration, ease: "linear", repeat: Infinity });
    return () => controls.stop();
  }, [setWidth, speed, direction, x]);

  return (
    <div
      className="relative mt-8 overflow-hidden rounded-2xl"
      style={{
        height: 200,
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
      }}
    >
      <motion.ul
        ref={trackRef}
        style={{ x, display: "flex", gap: 16, listStyle: "none", margin: 0, padding: 0 }}
      >
        {repeated.map((src, i) => (
          <li key={i} className="shrink-0" style={{ width: 280, height: 200 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.81)", borderRadius: 20 }}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

function ServiceGroup({
  group,
  groupIndex,
}: {
  group: (typeof SERVICE_DETAILS)[0];
  groupIndex: number;
}) {
  const { direction, speed } = MARQUEE_CONFIG[groupIndex % MARQUEE_CONFIG.length];

  return (
    <div
      className={groupIndex > 0 ? "pt-12 md:pt-20 lg:pt-28 border-t" : ""}
      style={groupIndex > 0 ? { borderColor: "rgba(255,255,255,0.1)" } : undefined}
    >
      {/* Panel-wide rounded glass outline — wraps the whole two-column
          panel (text + list together), not per-item. Real site renders
          this on a ::after pseudo-element; a plain wrapping border reads
          identically. Pure outline: no background, no blur. */}
      <div
        className="rounded-[40px] p-5 sm:p-8 md:p-12 [overflow:clip]"
        style={{ border: "1px solid rgba(255,255,255,0.3)" }}
      >
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20">

        {/* ── Left column ── flex col so mt-auto pushes marquee to bottom; order-last mirrors Production */}
        <div className={`flex flex-col min-w-0 ${groupIndex % 2 === 1 ? "md:order-last" : ""}`}>
          {/* inner — text pins; z-[1] keeps it above marquee; no background — real site is transparent */}
          <div className="md:sticky md:top-[120px] z-[1] min-w-0">
            <h2
              className="text-white mb-5 break-words"
              style={{
                fontSize: "clamp(1.4rem, 5vw, 1.875rem)",
                fontWeight: 600,
                fontFamily: "Syne, sans-serif",
                letterSpacing: "-1.5px",
                lineHeight: 1.2,
              }}
            >
              {group.title}
            </h2>

            {/* intro1 — small muted paragraph */}
            <p
              className="mb-5 break-words"
              style={{
                fontSize: "clamp(0.9rem, 4vw, 1.125rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "-0.36px",
                lineHeight: 1.6,
                overflowWrap: "break-word",
              }}
            >
              {group.intro1}
            </p>

            {/* intro2 — large display paragraph */}
            <p
              className="break-words"
              style={{
                fontSize: "clamp(1.1rem, 4.5vw, 2.25rem)",
                fontWeight: 300,
                color: "white",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                overflowWrap: "break-word",
              }}
            >
              {group.intro2}
            </p>
          </div>

          {/* mt-auto pushes marquee to bottom of stretched column — keeps it clear of pinned text */}
          <div className="mt-auto min-w-0 overflow-hidden">
            <MarqueeStrip images={group.images} direction={direction} speed={speed} />
          </div>
        </div>

        {/* ── Right column ── always-visible item list, no scroll reveal */}
        <div className="pt-1">
          {group.items.map((item) => (
            <ServiceItem key={item.title} item={item} />
          ))}
        </div>

      </div>
      </div>
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section id="service-details" className="bg-transparent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {SERVICE_DETAILS.map((group, i) => (
          <ServiceGroup key={group.title} group={group} groupIndex={i} />
        ))}
      </div>
    </section>
  );
}
