"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE } from "@/lib/constants";

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // SVG text shrinks slightly as you scroll (1268 â†’ 1023px wide)
  const svgWidth = useTransform(scrollYProgress, [0, 1], [1268, 1023]);
  const svgHeight = useTransform(svgWidth, (w) => w * (80 / 518));

  // Video card grows from small centered card to near-fullscreen
  const videoWidth = useTransform(scrollYProgress, [0, 1], ["35vw", "92vw"]);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ["36vh", "94vh"]);
  const videoTop = useTransform(scrollYProgress, [0, 1], ["32vh", "3vh"]);
  const videoLeft = useTransform(scrollYProgress, [0, 1], ["32.5vw", "4vw"]);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (!started) {
      v.muted = false;
      v.play();
      setStarted(true);
      setMuted(false);
    } else {
      v.muted = !v.muted;
      setMuted(v.muted);
    }
  }

  return (
    <section
      ref={sectionRef}
      id="showreel"
      style={{ height: "200vh" }}
      className="relative"
    >
      {/* Sticky viewport-locked container */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", background: "#0d0d0d" }}
      >
        {/* SHOWREEL SVG text â€” centered, fades white â†’ transparent left to right */}
        <div
          className="absolute top-[8vh] left-0 right-0 flex justify-center"
          style={{ zIndex: 2, pointerEvents: "none" }}
        >
          <motion.svg
            style={{ width: svgWidth, height: svgHeight }}
            viewBox="0 0 518 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="showreel-grad"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="80"
                x2="518"
                y2="0"
              >
                <stop offset="11.68%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <text
              y="73"
              fontFamily="'Syne', sans-serif"
              fontWeight="800"
              fontSize="80"
              textLength="514"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#showreel-grad)"
            >
              SHOWREEL
            </text>
          </motion.svg>
        </div>

        {/* Video card â€” scroll-driven zoom from center outward */}
        <motion.div
          style={{
            position: "absolute",
            width: videoWidth,
            height: videoHeight,
            top: videoTop,
            left: videoLeft,
            borderRadius: "40px",
            overflow: "hidden",
            zIndex: 4,
          }}
        >
          <video
            ref={videoRef}
            src={SITE.showreelVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Dark overlay â€” fades out when playing with audio */}
          <div
            className="absolute inset-0 bg-black/25 pointer-events-none transition-opacity duration-500"
            style={{ opacity: started && !muted ? 0 : 1 }}
          />

          {/* Play / mute button */}
          <button
            onClick={handlePlay}
            aria-label={started && !muted ? "Mute" : "Play showreel"}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-4"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                backgroundColor: "rgba(255,255,255,0.16)",
                borderRadius: "104px",
              }}
            >
              <svg
                className="w-7 h-7 fill-white flex-shrink-0"
                viewBox="0 0 256 256"
              >
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
              </svg>
              <span
                className="text-white font-bold text-sm tracking-widest overflow-hidden whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-[180px] group-hover:opacity-100 transition-all duration-300 ease-out"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {started && !muted ? "MUTE" : "PLAY SHOWREEL"}
              </span>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
