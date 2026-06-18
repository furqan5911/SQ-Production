"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function ProjectCard({ item }: { item: (typeof PROJECTS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstVideo = item.videos[0]?.src;

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Link
      href={`/projects/${item.slug}`}
      className="group relative shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail image */}
      <img
        src={item.image}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${firstVideo ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
      />

      {/* Hover-play video */}
      {firstVideo && (
        <video
          ref={videoRef}
          src={firstVideo}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#f87800] text-black text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
          View Project
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase block">
          {item.category}
        </span>
        <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [btnHovered, setBtnHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["35%", "-30%"]);

  const featured = PROJECTS.slice(0, 4);

  return (
    <div ref={sectionRef} style={{ height: "190vh" }} className="relative bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                Our Handpicked<br />Featured Portfolio
              </h2>
            </div>
            {/* Outer glass pill */}
            <Link
              href="/projects"
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
              {/* Inner dark pill — padding-left animates 0→20px on hover */}
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
                {/* Orb — default: fills button fully; hover: shrinks to tiny 4% strip at left:34px */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    background: "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,171,66) 51.7%, rgb(201,145,109) 75.4%, rgb(255,99,111) 100%)",
                    borderRadius: 103,
                    zIndex: 0,
                    transition: "all 0.35s ease-out",
                    ...(btnHovered
                      ? { width: "9px", height: "8px", top: "21px", left: "34px" }
                      : { width: "100%", height: "100%", top: 0, left: 0 }
                    ),
                  }}
                />
                {/* Spotlight circle — 36×36 circular container clips the dot */}
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
                  See All Projects
                </span>
              </div>
            </Link>
          </motion.div>

          <div className="overflow-visible">
            <motion.div style={{ x }} className="flex gap-6 will-change-transform">
              {featured.map((item) => (
                <ProjectCard key={item.slug} item={item} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
