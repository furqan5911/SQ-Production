"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { STUDIO_GALLERY } from "@/lib/constants";

/* ── Slide card with image parallax hover ── */
function SlideCard({ slide }: { slide: (typeof STUDIO_GALLERY.slides)[0] }) {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleEnter = () => {
    if (imgRef.current) imgRef.current.style.transform = "translateY(-10%)";
  };
  const handleLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = "translateY(0%)";
  };

  return (
    <div
      className="relative overflow-hidden rounded-[30px] aspect-[3/2] cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Image 115% tall → room to travel 10% upward on hover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={slide.image}
        alt={slide.title}
        draggable={false}
        className="absolute left-0 w-full object-cover select-none"
        style={{
          top: "-7.5%",
          height: "115%",
          transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          transform: "translateY(0%)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%)" }}
      />
      <span className="absolute bottom-5 left-5 text-white font-bold text-lg pointer-events-none select-none leading-tight">
        {slide.title}
      </span>
    </div>
  );
}

/* ── Arrow overlay button ── */
function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
      style={{
        /* Positioned at the edge of the center card (~17% from each side) */
        [direction === "prev" ? "left" : "right"]: "17%",
        width: 52,
        height: 52,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

/* ── Book a Tour glass-pill button ── */
function BookTourBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={STUDIO_GALLERY.ctaHref}
      className="inline-flex items-center overflow-hidden"
      style={{
        height: 60,
        padding: 5,
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        background:
          "linear-gradient(112deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.11) 100%)",
        borderRadius: 40,
        borderTop: "2px solid rgba(255,255,255,0.5)",
        borderLeft: "2px solid rgba(255,255,255,0.5)",
        borderBottom: "2px solid transparent",
        borderRight: "2px solid transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden flex items-center h-full"
        style={{
          paddingTop: 17,
          paddingRight: 33,
          paddingBottom: 17,
          paddingLeft: hovered ? 20 : 0,
          transition: "padding-left 0.35s ease-out",
          backdropFilter: "blur(13px)",
          WebkitBackdropFilter: "blur(13px)",
          backgroundColor: "rgba(0,0,0,0.55)",
          borderRadius: 30,
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            background:
              "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,171,66) 51.7%, rgb(255,140,50) 75.4%, rgb(255,106,0) 100%)",
            borderRadius: 103,
            zIndex: 0,
            transition: "all 0.35s ease-out",
            ...(hovered
              ? { width: "9px", height: "8px", top: "21px", left: "34px" }
              : { width: "100%", height: "100%", top: 0, left: 0 }),
          }}
        />
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{
            width: 36,
            height: 36,
            zIndex: 1,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <motion.div
            className="absolute rounded-full"
            animate={hovered ? { scale: [0.5, 1.0, 0.6, 0.85, 0.5] } : { scale: 0.15 }}
            transition={
              hovered
                ? {
                    duration: 0.9,
                    repeat: Infinity,
                    times: [0, 0.15, 0.35, 0.5, 1.0],
                    ease: "easeInOut",
                  }
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
        <span
          className="relative text-white text-sm font-bold whitespace-nowrap"
          style={{ zIndex: 1 }}
        >
          {STUDIO_GALLERY.ctaLabel}
        </span>
      </div>
    </Link>
  );
}

/* ── Main section ── */
export default function StudioGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="studio-gallery" className="bg-transparent py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Glass border box ── */}
        <div
          className="rounded-[40px] overflow-hidden p-6 sm:p-10 md:p-[50px]"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
          {/* Heading block — padding comes from glass box, no inner pt/px */}
          <div className="flex flex-col items-center text-center gap-6 pb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 116, damping: 30, mass: 1, delay: 0.1 }}
              className="text-white w-full max-w-[620px]"
              style={{
                fontSize: "clamp(1.4rem, 5vw, 1.875rem)",
                fontWeight: 600,
                fontFamily: "Syne, sans-serif",
                letterSpacing: "-1.5px",
                lineHeight: 1.2,
              }}
            >
              {STUDIO_GALLERY.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 116, damping: 30, mass: 1, delay: 0.1 }}
              className="w-full max-w-[620px]"
              style={{
                fontSize: "clamp(0.95rem, 3.5vw, 1.125rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "-0.36px",
                lineHeight: 1.5,
              }}
            >
              {STUDIO_GALLERY.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 116, damping: 30, mass: 1, delay: 0.1 }}
            >
              <BookTourBtn />
            </motion.div>
          </div>

          {/* Carousel — edge-to-edge inside glass box, no horizontal padding */}
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {STUDIO_GALLERY.slides.map((slide, i) => (
                  <div
                    key={slide.title}
                    className="shrink-0 w-[82%] sm:w-[70%] md:w-[65%] px-1.5"
                    style={{
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                      transform: activeIndex === i ? "scale(1)" : "scale(0.78)",
                      transformOrigin: "center center",
                    }}
                  >
                    <SlideCard slide={slide} />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows at left / right edges of the active center card */}
            <CarouselArrow direction="prev" onClick={scrollPrev} />
            <CarouselArrow direction="next" onClick={scrollNext} />
          </div>
        </div>

      </div>
    </section>
  );
}
