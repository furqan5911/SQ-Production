"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "@/lib/constants";

const imageVariants = {
  hidden: { opacity: 0, x: 80,  scale: 0.92, rotate: -6 },
  center: {
    opacity: 1, x: 0,   scale: 1,    rotate: -6,
    transition: { type: "spring" as const, stiffness: 320, damping: 26 },
  },
  left: {
    opacity: 1, x: -60, scale: 1,    rotate: -6,
    transition: { type: "spring" as const, stiffness: 320, damping: 26 },
  },
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [cardHovered, setCardHovered] = useState(false);
  const [btnHovered,  setBtnHovered]  = useState(false);
  const [isExpanded,  setIsExpanded]  = useState(false);

  // Floating image disappears when card is expanded
  const floatState = isExpanded || !cardHovered ? "hidden" : btnHovered ? "left" : "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
    >
      <div
        className="relative border-b border-[#1e1e1e]"
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => { setCardHovered(false); setBtnHovered(false); }}
      >
        {/* Floating preview image — slides in from right on hover */}
        <motion.div
          variants={imageVariants}
          animate={floatState}
          className="absolute -top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.title}
            className="w-56 h-40 object-cover rounded-2xl border border-white/10 shadow-2xl"
          />
        </motion.div>

        {/* Card body */}
        <div className="py-8 md:py-10">
          <div className="flex flex-col gap-4">
            <h3
              className={`text-xl md:text-2xl font-bold transition-colors duration-300
                          ${cardHovered || isExpanded ? "text-[#f87800]" : "text-white"}`}
            >
              {service.title}
            </h3>
            <p className="text-[#888] text-sm leading-relaxed max-w-lg">
              {service.description}
            </p>

            {/* Accordion expanded content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="expanded"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-6 md:gap-10 pt-5 pb-3 items-start">
                    {/* Service image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-36 h-28 md:w-52 md:h-40 object-cover rounded-xl flex-shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Detail bullet list */}
                    <ul className="flex flex-col justify-center gap-3 py-1">
                      {service.details.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-white text-[11px] md:text-xs
                                     font-bold tracking-[0.15em] uppercase"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#f87800] flex items-center
                                           justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5" fill="none" stroke="black" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Learn More / Hide Details toggle button */}
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="inline-flex items-center gap-3 text-white text-[11px]
                         font-bold tracking-[0.2em] uppercase w-fit mt-1 cursor-pointer"
            >
              {isExpanded ? "Hide Details" : "Learn More"}
              <span
                className={`w-8 h-8 rounded-full bg-[#f87800] flex items-center justify-center
                            transition-transform duration-200 ${btnHovered ? "scale-110" : ""}`}
              >
                {isExpanded ? (
                  /* Minus icon when expanded */
                  <svg className="w-3 h-3" fill="none" stroke="black" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14"/>
                  </svg>
                ) : (
                  /* Arrow icon when collapsed */
                  <svg className="w-3 h-3" fill="none" stroke="black" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

          {/* Left — sticky heading */}
          <div className="md:sticky md:top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                From Concept To Completion:<br />
                We&apos;ve Got You Covered!
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold
                           px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
              >
                Explore Services
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — borderless cards with accordion */}
          <div className="flex flex-col pt-28 border-t border-[#1e1e1e]">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
