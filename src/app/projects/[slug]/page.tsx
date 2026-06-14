"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProjectDetailPage() {
  const params  = useParams();
  const slug    = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-black mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-[#f87800] hover:underline">← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = PROJECTS.filter(
    (p) => p.slug !== slug && !p.slug.startsWith("placeholder")
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── Hero ── */}
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mx-auto">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* ── Meta row ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-b border-[#222]"
          >
            {[
              { label: "Client",   value: project.client },
              { label: "Year",     value: project.year },
              { label: "Category", value: project.category },
              { label: "Services", value: project.services.join(", ") },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-[#555] text-xs font-bold tracking-[0.2em] uppercase mb-1">{label}</p>
                <p className="text-white font-semibold text-sm">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* ── Description ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-14 text-center"
          >
            <p className="text-[#aaa] text-lg leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          {/* ── Videos — side by side 9:16 reel format ── */}
          {project.videos.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className={`grid gap-6 ${project.videos.length === 1 ? "grid-cols-1 max-w-sm mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
                {project.videos.map((v, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                      <video
                        src={v.src}
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-[#111]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Project Scope ── */}
          {project.scopePhases.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-20"
            >
              <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4 text-center">Scope</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Project Scope</h2>
              <p className="text-[#888] text-base leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                {project.scopeOverview}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {project.scopePhases.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#111] border border-[#222] rounded-2xl p-7"
                  >
                    <h3 className="text-white font-bold text-lg mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-[#888] text-sm leading-relaxed">
                          <span className="text-[#f87800] mt-1 shrink-0">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-[#111] border border-[#222] rounded-2xl p-7">
                  <h3 className="text-white font-bold text-lg mb-3">Project Timeline</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{project.timeline}</p>
                </div>
                {project.outcomes.length > 0 && (
                  <div className="bg-[#111] border border-[#222] rounded-2xl p-7">
                    <h3 className="text-white font-bold text-lg mb-4">Expected Outcomes</h3>
                    <ul className="space-y-2">
                      {project.outcomes.map((o, i) => (
                        <li key={i} className="flex gap-3 text-[#888] text-sm leading-relaxed">
                          <span className="text-[#f87800] mt-1 shrink-0">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Watch More Work CTA ── */}
          {project.clientInstagram && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-24 flex flex-col items-center gap-4 text-center"
            >
              <p className="text-[#555] text-sm">Liked what you saw? There&apos;s more where that came from.</p>
              <a
                href={project.clientInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f87800] text-black font-black text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full hover:bg-white transition-colors duration-200"
              >
                No cap, peep the full work 👀
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </motion.div>
          )}

        </div>

        {/* ── Related Projects ── */}
        {related.length > 0 && (
          <section className="border-t border-[#222] py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-3">More Work</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white">View Similar Projects</h2>
                </div>
                <Link
                  href="/projects"
                  className="hidden md:inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
                >
                  All Projects
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {related.map((item, i) => (
                  <div key={item.slug}>
                    <Link href={`/projects/${item.slug}`} className="group block">
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-[#f87800] text-black text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
                            View Project
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 px-1">
                        <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase">{item.category}</span>
                        <h3 className="text-white font-bold text-lg mt-1 group-hover:text-[#f87800] transition-colors duration-200">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
