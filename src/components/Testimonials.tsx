"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { TESTIMONIALS, TESTIMONIALS_BG } from "@/lib/constants";

const QUOTE_GRADIENT = "linear-gradient(107deg, rgb(255,255,255) 0%, rgba(255,255,255,0.8) 100%)";
const CARD_BG = "linear-gradient(95deg, rgba(255,255,255,0.1) 2.21%, rgba(255,255,255,0.02) 100%)";

function QuoteIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="rgba(255,255,255,0.9)">
      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {direction === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function ArrowButton({ direction, onClick, className = "" }: { direction: "prev" | "next"; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={`shrink-0 flex items-center justify-center rounded-full ${className}`}
      style={{
        width: 65,
        height: 65,
        background: "rgba(255,255,255,0.1)",
      }}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

function TestimonialCard({ item, active }: { item: typeof TESTIMONIALS[0]; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: active ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="relative overflow-hidden"
      style={{
        borderRadius: 40,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        background: CARD_BG,
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      {/* Thin diagonal light line — sweeps left-to-right on hover, right-to-left on leave */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ left: hovered ? "112%" : "-16%" }}
        transition={
          hovered
            ? { type: "spring", stiffness: 110, damping: 26 }
            : { type: "spring", stiffness: 70, damping: 16 }
        }
        style={{
          top: "-50%",
          width: "6%",
          height: "200%",
          rotate: 9,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          background: "rgba(255,255,255,0.55)",
          zIndex: 5,
        }}
      />

      <div className="relative z-10 flex flex-col p-8 sm:p-10 md:p-12">
        {!logoError && item.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt=""
            onError={() => setLogoError(true)}
            className="h-9 md:h-10 w-auto object-contain object-left mb-8 md:mb-10"
          />
        )}

        {/* Star rating */}
        <div className="flex items-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => {
            const filled = i <= Math.floor(item.stars);
            const half = !filled && i === Math.ceil(item.stars) && item.stars % 1 !== 0;
            return (
              <svg key={i} width={18} height={18} viewBox="0 0 24 24">
                {half ? (
                  <>
                    <defs>
                      <linearGradient id={`half-${i}`}>
                        <stop offset="50%" stopColor="#f87800" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                      </linearGradient>
                    </defs>
                    <path fill={`url(#half-${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </>
                ) : (
                  <path fill={filled ? "#f87800" : "rgba(255,255,255,0.2)"} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                )}
              </svg>
            );
          })}
        </div>

        <p
          className="font-semibold text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8"
          style={{
            backgroundImage: QUOTE_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {item.quote}
        </p>

        <div className="mb-6 md:mb-8">
          <QuoteIcon size={40} />
        </div>

        <p
          className="font-bold uppercase"
          style={{ fontSize: 20, letterSpacing: "-0.08em", color: "rgba(255,255,255,0.8)" }}
        >
          {item.name}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    const node = emblaApi.slideNodes()[idx];
    if (node) setHeight(node.offsetHeight);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-24">
      {TESTIMONIALS_BG && (
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={TESTIMONIALS_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-white text-center leading-tight mb-12 md:mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <motion.div
            animate={{ height }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
            style={{
              overflow: "hidden",
              maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {TESTIMONIALS.map((item, i) => (
                  <div key={item.name} className="shrink-0 w-[88%] sm:w-[78%] md:w-[68%] lg:w-[62%] px-2 md:px-3">
                    <TestimonialCard item={item} active={i === selectedIndex} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <ArrowButton
            direction="prev"
            onClick={scrollPrev}
            className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20"
          />
          <ArrowButton
            direction="next"
            onClick={scrollNext}
            className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20"
          />
        </div>
      </div>
    </section>
  );
}
