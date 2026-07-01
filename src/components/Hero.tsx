"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE } from "@/lib/constants";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [btnHovered, setBtnHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-100 md:scale-110"
        style={{
          backgroundImage: `url(${SITE.heroBg})`,
          y: bgY,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-24 w-full"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="inline-block text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase mb-6"
        >
          Video Production Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" as const }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6"
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
          className="text-[#aaa] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SITE.subtagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: "easeOut" as const }}
          className="flex items-center justify-center"
        >
          {/* Outer glass pill */}
          <Link
            href="/contact#book"
            className="shrink-0 inline-flex items-center overflow-hidden"
            style={{
              height: 60,
              padding: 5,
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              background: "linear-gradient(112deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.11) 100%)",
              borderRadius: 40,
              borderTop: "2px solid rgba(255,255,255,0.5)",
              borderLeft: "2px solid rgba(255,255,255,0.5)",
              borderBottom: "2px solid transparent",
              borderRight: "2px solid transparent",
            }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            {/* Inner dark pill */}
            <div
              className="relative overflow-hidden flex items-center h-full"
              style={{
                paddingTop: 17,
                paddingRight: 33,
                paddingBottom: 17,
                paddingLeft: btnHovered ? 20 : 0,
                transition: "padding-left 0.35s ease-out",
                backdropFilter: "blur(13px)",
                WebkitBackdropFilter: "blur(13px)",
                backgroundColor: "rgba(0,0,0,0.55)",
                borderRadius: 30,
              }}
            >
              {/* Orb — full gradient default, shrinks to strip on hover */}
              <div
                className="absolute pointer-events-none"
                style={{
                  background: "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,171,66) 51.7%, rgb(255,140,50) 75.4%, rgb(255,106,0) 100%)",
                  borderRadius: 103,
                  zIndex: 0,
                  transition: "all 0.35s ease-out",
                  ...(btnHovered
                    ? { width: "9px", height: "8px", top: "21px", left: "34px" }
                    : { width: "100%", height: "100%", top: 0, left: 0 }
                  ),
                }}
              />
              {/* Spotlight circle */}
              <div
                className="relative shrink-0 rounded-full overflow-hidden"
                style={{
                  width: 36,
                  height: 36,
                  zIndex: 1,
                  opacity: btnHovered ? 1 : 0,
                  transition: "opacity 0.25s ease",
                }}
              >
                <motion.div
                  className="absolute rounded-full"
                  animate={btnHovered
                    ? { scale: [0.5, 1.0, 0.6, 0.85, 0.5] }
                    : { scale: 0.15 }
                  }
                  transition={btnHovered
                    ? { duration: 0.9, repeat: Infinity, times: [0, 0.15, 0.35, 0.5, 1.0], ease: "easeInOut" }
                    : { duration: 0.3, ease: "easeOut" }
                  }
                  style={{
                    width: 18,
                    height: 18,
                    top: "calc(50% - 9px)",
                    left: "calc(50% - 9px)",
                    backgroundColor: "rgb(255,0,13)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
              {/* Text */}
              <span className="relative text-white text-sm font-bold whitespace-nowrap" style={{ zIndex: 1 }}>
                {SITE.ctaPrimary}
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom fade — blends hero image into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />

      {/* Scroll indicator */}
      <ScrollIndicator className="absolute bottom-10 left-6 md:left-12" />

    </section>
  );
}
