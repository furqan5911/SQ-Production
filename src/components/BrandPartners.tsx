"use client";

import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { BRAND_LOGOS } from "@/lib/constants";

export default function BrandPartners() {
  return (
    <section id="partners" className="bg-[#0a0a0a] py-20 overflow-hidden">
      {/* heading */}
      <motion.div
        className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-3">
          Trusted by leading brands
        </p>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
          Standing Tall with Our Esteemed{" "}
          <span className="text-[#f87800]">Brand Partners</span>
        </h2>
      </motion.div>

      {/* Pill bar */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div
          style={{
            height: "88px",
            borderRadius: "80px",
            border: "1px solid rgba(255,255,255,0.25)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Marquee gradient={false} speed={45} pauseOnHover style={{ height: "100%", overflow: "hidden" }}>
            {BRAND_LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-40 hover:opacity-90 transition-opacity duration-300 cursor-default"
                style={{
                  width: "172px",
                  height: "88px",
                  borderRight: "1px solid rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: "32px", width: "auto" }}
                  className="select-none"
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>

          {/* Left fade edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "100%",
              background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 10,
              borderRadius: "80px 0 0 80px",
            }}
          />
          {/* Right fade edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "80px",
              height: "100%",
              background: "linear-gradient(to left, #0a0a0a 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 10,
              borderRadius: "0 80px 80px 0",
            }}
          />
        </div>
      </div>

    </section>
  );
}
