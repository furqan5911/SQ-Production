"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  animate,
  motion,
  AnimatePresence,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { SERVICE_CATEGORIES } from "@/lib/constants";

/* ── Fix 4/8 (FIX-SERVICECATEGORIES.md): while a row is open, a fixed
   ~2.1s timer (not scroll) cyclically swaps which of the 3 fanned photos is
   front/mid/back. Fix 8: the real site's 3 cards are genuinely different
   pixel sizes (front 316x210, mid 407x271, back 614x408 — same ~1.5:1
   aspect, back literally the biggest, just lowest z so it only peeks out),
   not one box uniformly scaled down — so slots carry explicit w/h, not a
   shared box + scale. Values below are that same ratio scaled down to fit
   this panel; tune by eye against the real site if needed. */
/* Fix 9: real site fans ~2:1 horizontal:vertical (204px x-travel, 99px
   y-travel) — side-to-side dominant, not diagonal. y values cut roughly in
   half vs. the original pass to bring the ratio back from ~1.3:1. */
const FAN_SLOTS = [
  { x: -40, y: -10, w: 380, h: 253, z: 10 },  // back — biggest, lowest z, mostly hidden
  { x: 70, y: 35, w: 252, h: 168, z: 50 },    // mid
  { x: 140, y: 60, w: 196, h: 130, z: 100 },  // front — smallest, topmost z
];

function fanSlotAt(continuousIndex: number) {
  const wrapped = ((continuousIndex % 3) + 3) % 3;
  const i0 = Math.floor(wrapped);
  const i1 = (i0 + 1) % 3;
  const t = wrapped - i0;
  const a = FAN_SLOTS[i0];
  const b = FAN_SLOTS[i1];
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    w: a.w + (b.w - a.w) * t,
    h: a.h + (b.h - a.h) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

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
  const [isHovered, setIsHovered] = useState(false);

  /* framer-1nf6ux6 scroll data from animations.json:
       Row entering viewport (scrollYProgress = 0): scale ≈ 1.38
       Row exiting  viewport (scrollYProgress = 1): scale ≈ 1.20
     Each number breathes larger as the row enters, shrinks as it leaves. */
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const numberScale = useTransform(scrollYProgress, [0, 1], [1.38, 1.2]);

  /* Fix 4 (corrected + feel update) — autoplay timer, not scroll: restarts
     at 0 every time the row opens, ticks forward every ~2.1s while open,
     stops/resets when closed. Spring slowed down (lower stiffness, higher
     mass) so a swap settles in ~1.3-1.5s like the real site, not ~0.6s.
     Fix 10: damping raised 6 → 14 (damping ratio ~0.36 → ~0.84) so it
     overshoots once and decays smoothly, instead of bouncing back and forth
     across the resting value like a "pump." */
  const fanPhaseRaw = useMotionValue(0);
  const fanPhase = useSpring(fanPhaseRaw, { stiffness: 70, damping: 14, mass: 1 });

  /* Real site's swap has a dramatic elastic "pop" — one card balloons to
     2.2x-6.6x its resting size before snapping back to 1.0, rather than
     smoothly crossfading between two already-close sizes. Layered as an
     extra multiplicative scale on top of each card's explicit w/h (Fix 8),
     kicked via an imperative `from` on every tick so the spring travels
     through that wide range instead of easing between close numbers. */
  const popScale = useMotionValue(1);

  useEffect(() => {
    fanPhaseRaw.set(0);
    popScale.set(1);
    if (!isOpen) return;
    let tick = 0;
    const interval = setInterval(() => {
      tick += 1;
      fanPhaseRaw.set(tick);
      animate(popScale, 1, { type: "spring", stiffness: 70, damping: 14, mass: 1, from: 2.4 });
    }, 2100);
    return () => clearInterval(interval);
  }, [isOpen, fanPhaseRaw, popScale]);

  const fanX0 = useTransform(fanPhase, (p) => fanSlotAt(0 + p).x);
  const fanY0 = useTransform(fanPhase, (p) => fanSlotAt(0 + p).y);
  const fanW0 = useTransform(fanPhase, (p) => fanSlotAt(0 + p).w);
  const fanH0 = useTransform(fanPhase, (p) => fanSlotAt(0 + p).h);
  const fanZ0 = useTransform(fanPhase, (p) => Math.round(fanSlotAt(0 + p).z));

  const fanX1 = useTransform(fanPhase, (p) => fanSlotAt(1 + p).x);
  const fanY1 = useTransform(fanPhase, (p) => fanSlotAt(1 + p).y);
  const fanW1 = useTransform(fanPhase, (p) => fanSlotAt(1 + p).w);
  const fanH1 = useTransform(fanPhase, (p) => fanSlotAt(1 + p).h);
  const fanZ1 = useTransform(fanPhase, (p) => Math.round(fanSlotAt(1 + p).z));

  const fanX2 = useTransform(fanPhase, (p) => fanSlotAt(2 + p).x);
  const fanY2 = useTransform(fanPhase, (p) => fanSlotAt(2 + p).y);
  const fanW2 = useTransform(fanPhase, (p) => fanSlotAt(2 + p).w);
  const fanH2 = useTransform(fanPhase, (p) => fanSlotAt(2 + p).h);
  const fanZ2 = useTransform(fanPhase, (p) => Math.round(fanSlotAt(2 + p).z));

  const fanImages = [
    { x: fanX0, y: fanY0, w: fanW0, h: fanH0, z: fanZ0 },
    { x: fanX1, y: fanY1, w: fanW1, h: fanH1, z: fanZ1 },
    { x: fanX2, y: fanY2, w: fanW2, h: fanH2, z: fanZ2 },
  ];

  return (
    <div ref={rowRef} className="relative">

      {/* Fix 7: title+number block tilts ~2deg on hover (open or closed),
          resets to 0deg on un-hover — independent of open/closed state. */}
      <motion.div
        animate={{ rotate: isHovered ? 2 : 0 }}
        transition={{ rotate: { type: "spring", stiffness: 200, damping: 20 } }}
      >
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
            fontSize: "clamp(39px, 12vw, 115px)",
            fontWeight: 900,
            fontFamily: "Syne, sans-serif",
            letterSpacing: "-6px",
            opacity: 0.37,
            y: -40,
            scale: numberScale,
            transformOrigin: "top left",
            zIndex: 0,
          }}
        >
          {item.number}
        </motion.div>

        {/* ── Clickable row: title left, arrow right ── */}
        <button
          onClick={onToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 w-full flex items-center justify-between gap-4 text-left"
          style={{
            minHeight: 170,
            /* Left padding positions the title on top of the number's right edge — matching
               the inspo where title appears overlaid on the number's right portion */
            paddingLeft: "clamp(50px, 12vw, 110px)",
            paddingRight: "0.5rem",
          }}
        >
          <motion.h3
            animate={{
              y: [0, -4, 0],
              color: isHovered && !isOpen ? "rgba(255,255,255,0.57)" : "rgba(255,255,255,1)",
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

          {/* Arrow: ↓ SVG, 3-state machine measured against the real site:
                idle-collapsed:    rotate(-90deg) = →, white
                hovered-collapsed: rotate(0deg)   = ↓, orange (hover affordance only)
                expanded:          rotate(180deg) = ↑, white (never orange once open) ── */}
          <motion.div
            className="shrink-0"
            animate={{
              rotate: isOpen ? 180 : isHovered ? 0 : -90,
              color: !isOpen && isHovered ? "rgb(255,122,59)" : "rgba(255,255,255,0.8)",
            }}
            transition={{
              rotate: { type: "spring", stiffness: 200, damping: 20 },
              color: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <ArrowIcon />
          </motion.div>
        </button>
      </motion.div>

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
            {/* Fanned 3-photo "card deck" + static EXPLORE affordance, links out.
                Real-site target is /category/<slug> in a new tab; until that
                filtered-archive route exists, this points at /projects. */}
            <Link
              href="/projects"
              target="_blank"
              className="group relative block border-t overflow-hidden"
              style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: 220, paddingTop: 20 }}
            >
              {/* Fix 5: overlay must be a sibling of the images INSIDE this
                  div, not a sibling of this div at the <Link> level —
                  otherwise its `absolute inset-0` resolves against the
                  full-width row instead of the photo. Sized to fit the
                  widest/tallest fan slot (Fix 8: back card is 380x253). */}
              <div className="relative" style={{ width: "min(420px, 100%)", height: 220 }}>
                {fanImages.map((fan, idx) => (
                  <motion.img
                    key={idx}
                    src={item.images[idx]}
                    alt={item.title}
                    className="absolute left-0 top-0 rounded-xl border border-white/10 object-cover shadow-2xl"
                    style={{
                      x: fan.x,
                      y: fan.y,
                      width: fan.w,
                      height: fan.h,
                      scale: popScale,
                      zIndex: fan.z,
                    }}
                  />
                ))}

                {/* Static EXPLORE label + circular arrow — fades in on hover, no motion.
                    Fix 5 (z-index): fan images get an explicit zIndex (72-100, from
                    fanZ/scale), so this needs to be above that range or it renders
                    fully opaque but hidden underneath the front image. */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/50 group-hover:opacity-100"
                  style={{ zIndex: 200 }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 56, height: 56, backgroundColor: "#2dd4bf" }}
                  >
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0a0a0a"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                  <span
                    className="text-xs text-white"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, letterSpacing: "2px" }}
                  >
                    EXPLORE
                  </span>
                </div>
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
                paddingLeft: "clamp(50px, 12vw, 110px)",
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
    <section id="service-categories" className="bg-transparent py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Glass border box — wraps heading + all rows (Image #6) ── */}
        <div
          className="relative rounded-[40px] overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
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
              className="text-lg md:text-xl text-white mb-2 leading-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              We are your experts in these categories
            </h2>
            <p
              className="text-[#888] text-xs md:text-sm leading-relaxed max-w-xl"
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
