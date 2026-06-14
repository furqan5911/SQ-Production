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

      {/* marquee with edge fades */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <Marquee gradient={false} speed={45} pauseOnHover>
          {BRAND_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                style={{ height: "28px", width: "auto" }}
                className="select-none"
                draggable={false}
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* separator line */}
      <div className="mt-20 border-t border-[#1a1a1a]" />
    </section>
  );
}
