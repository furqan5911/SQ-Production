"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Marquee from "react-fast-marquee";

const REELS = [
  { id: 1, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelpage1.mp4" },
  { id: 2, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelpage2.mp4" },
  { id: 3, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelh1.mp4" },
  { id: 4, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelh2.mp4" },
  { id: 5, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelh3.mp4" },
  { id: 6, src: "https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Reelhome/reelh4.mp4" },
];

function fmt(s: number) {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (current / duration) * 100 : 0;

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play().catch(() => {}); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) * v.duration;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: "min(92vw, calc(88dvh * 9 / 16))" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <video
          ref={videoRef}
          key={src}
          src={src}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          onTimeUpdate={() => setCurrent(videoRef.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
        />

        {/* Top bar — back button + label */}
        <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-5 pb-10 bg-gradient-to-b from-black/75 to-transparent flex items-center justify-between">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-white/20 hover:bg-white/25 transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back
          </button>
        </div>

        {/* Center — play icon shown only when paused, click video to toggle */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              key="play-icon"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5">
                <svg className="w-9 h-9 fill-white" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom bar — progress + time + pause button */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-12 bg-gradient-to-t from-black/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Time */}
          <div className="flex justify-between text-white/60 text-[10px] font-mono tabular-nums mb-2">
            <span>{fmt(current)}</span>
            <span>{fmt(duration)}</span>
          </div>

          {/* Seekable progress bar */}
          <div
            className="w-full h-1 bg-white/25 rounded-full cursor-pointer relative mb-4"
            onClick={handleSeek}
          >
            <div className="h-full bg-[#f87800] rounded-full" style={{ width: `${progress}%` }} />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>

          {/* Pause/play button */}
          <div className="flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-white/15 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/25 transition-colors"
            >
              {playing ? (
                <svg className="w-5 h-5 fill-white" viewBox="0 0 256 256">
                  <rect x="72" y="40" width="40" height="176" rx="8"/>
                  <rect x="144" y="40" width="40" height="176" rx="8"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-white" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default function Reels() {
  const [modal, setModal] = useState<{ src: string } | null>(null);
  const [play, setPlay] = useState(true);
  const [reelsActive, setReelsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Start loading reel videos only when the section is near the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReelsActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // After React re-renders with the new preload value, imperatively play all reel videos
  useEffect(() => {
    if (!reelsActive || !sectionRef.current) return;
    sectionRef.current.querySelectorAll<HTMLVideoElement>("video[data-reel]").forEach(v => {
      v.load();
      v.play().catch(() => {});
    });
  }, [reelsActive]);

  function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relY = (e.clientY - rect.top) / rect.height;
    const inCenter = relY >= 0.3 && relY <= 0.7;
    setPlay(!inCenter);
  }

  function handleCardMouseLeave() {
    setPlay(true);
  }

  return (
    <section ref={sectionRef} className="bg-transparent pt-20 pb-0 overflow-hidden">

      {/* Heading — centered, no "Reels" label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 md:px-10 mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
          no cap, we ate fr.
        </h2>
      </motion.div>

      {/* Continuous marquee strip — autoFill removes the loop gap */}
      <Marquee gradient={false} speed={70} autoFill play={play}>
        {REELS.map((reel) => (
          <div
            key={reel.id}
            onClick={() => reel.src && setModal({ src: reel.src })}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className={`relative mx-3 w-[190px] md:w-[220px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#111] flex-shrink-0 ${reel.src ? "cursor-pointer group" : "cursor-default"}`}
          >
            {reel.src ? (
              <>
                <video
                  src={reel.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={reelsActive ? "metadata" : "none"}
                  data-reel
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 256 256">
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                <svg className="w-8 h-8 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="4"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span className="text-white text-[10px] tracking-widest uppercase">Soon</span>
              </div>
            )}
          </div>
        ))}
      </Marquee>

      {/* Custom video modal */}
      <AnimatePresence>
        {modal && (
          <VideoModal
            src={modal.src}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
