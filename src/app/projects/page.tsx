"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, CLIENT_MARQUEE } from "@/lib/constants";

const CATEGORIES = ["All", "AI Ads", "Architecture", "Branding", "Celebrity & Creator", "Commercial", "Documentary", "Fashion", "Fitness", "Music Video", "Product", "Short Films"];

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  show:   (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── Full-viewport hero ── */}
        <section className="relative h-screen flex items-start overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero-bg.jpg"
              alt="Projects hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero text — top left */}
          <div className="relative z-10 pt-28 md:pt-40 px-6 md:px-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none mb-4 md:mb-6">
                Our Projects
              </h1>
              <p className="text-[#aaa] text-base md:text-xl max-w-xl leading-relaxed">
                From coming up with creative concepts to delivering outstanding campaigns — we&apos;re your crew ready to turn your project dreams into reality.
              </p>
            </motion.div>
          </div>

        </section>

        {/* ── Client names marquee ── */}
        <div className="bg-[#f87800] py-4">
          <Marquee gradient={false} speed={60}>
            {[...CLIENT_MARQUEE, ...CLIENT_MARQUEE, ...CLIENT_MARQUEE].map((name, i) => (
              <span key={i} className="mx-10 text-black text-sm font-bold tracking-widest uppercase flex items-center gap-10">
                {name}
                <span className="text-black/40 text-lg">✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="flex flex-col items-center px-8 md:px-16 py-10 gap-3 w-fit">
          <span
            className="text-white text-[10px] font-bold tracking-[0.35em] uppercase"
            style={{ writingMode: "vertical-lr" }}
          >
            Scroll
          </span>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            style={{ originY: 0 }}
            className="w-px h-16 bg-white/40"
          />
        </div>

        {/* ── Category filters ── */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto pt-14 mb-10">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? "bg-[#f87800] border-[#f87800] text-black"
                    : "border-[#333] text-[#888] hover:border-[#f87800] hover:text-[#f87800]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-32">
          {filtered.length === 0 ? (
            <p className="text-[#555] text-center py-24 text-lg">No projects in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.slug}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <Link href={`/projects/${item.slug}`} className="group block">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]">
                      {item.videos[0]?.src ? (
                        <video
                          src={item.videos[0].src}
                          poster={item.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-[#f87800] text-black text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 px-1">
                      <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg mt-1 group-hover:text-[#f87800] transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}
