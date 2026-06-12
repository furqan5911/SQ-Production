"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageShell({ eyebrow, title, subtitle, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Page hero */}
        <section className="pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#888] text-lg max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </motion.div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}
