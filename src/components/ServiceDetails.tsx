"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICE_DETAILS } from "@/lib/constants";

function ServiceItem({
  item,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  item: { title: string; description: string; iconSvg: string };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 116, damping: 30, mass: 1, delay: 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="py-5 border-b cursor-default"
      style={{ borderColor: "rgba(255,255,255,0.12)" }}
    >
      <div className="flex items-start gap-3">
        {/* Orange Phosphor icon */}
        <div
          className="shrink-0 mt-0.5"
          style={{ width: 24, height: 24 }}
          dangerouslySetInnerHTML={{ __html: item.iconSvg }}
        />
        <div>
          {/* Title: white normally, orange on hover — matches inspo */}
          <h4
            style={{
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "Syne, sans-serif",
              letterSpacing: "-0.9px",
              lineHeight: "27px",
              color: isHovered ? "rgb(255, 115, 0)" : "rgb(255,255,255)",
              transition: "color 0.2s ease",
            }}
          >
            {item.title}
          </h4>
          {/* Description always visible */}
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
    </motion.div>
  );
}

function ServiceGroup({
  group,
  groupIndex,
}: {
  group: (typeof SERVICE_DETAILS)[0];
  groupIndex: number;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const previewImage =
    hoveredIdx !== null
      ? group.images[hoveredIdx % group.images.length]
      : null;

  return (
    <div
      className={groupIndex > 0 ? "pt-20 md:pt-28 border-t" : ""}
      style={groupIndex > 0 ? { borderColor: "rgba(255,255,255,0.1)" } : undefined}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

        {/* ── Left column ── sticky, text + animated hover preview image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 116, damping: 30, mass: 1, delay: 0.1 }}
          className="md:sticky md:top-28 self-start"
        >
          <h2
            className="text-white mb-5"
            style={{
              fontSize: 30,
              fontWeight: 600,
              fontFamily: "Syne, sans-serif",
              letterSpacing: "-1.5px",
              lineHeight: "36px",
            }}
          >
            {group.title}
          </h2>

          {/* intro1 — small muted paragraph */}
          <p
            className="mb-5"
            style={{
              fontSize: 18,
              fontWeight: 300,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "-0.36px",
              lineHeight: "27px",
            }}
          >
            {group.intro1}
          </p>

          {/* intro2 — large display paragraph */}
          <p
            style={{
              fontSize: "clamp(1.5rem, 6vw, 2.25rem)",
              fontWeight: 300,
              color: "white",
              letterSpacing: "-1.44px",
              lineHeight: 1.2,
            }}
          >
            {group.intro2}
          </p>

          {/* Preview image that flies in from the right when hovering an item */}
          <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ height: 200 }}>
            <AnimatePresence mode="wait">
              {previewImage && (
                <motion.div
                  key={previewImage + String(hoveredIdx)}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Right column ── always-visible item list */}
        <div className="pt-1">
          {group.items.map((item, i) => (
            <ServiceItem
              key={item.title}
              item={item}
              index={i}
              isHovered={hoveredIdx === i}
              onHover={() => setHoveredIdx(i)}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section id="service-details" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {SERVICE_DETAILS.map((group, i) => (
          <ServiceGroup key={group.title} group={group} groupIndex={i} />
        ))}
      </div>
    </section>
  );
}
