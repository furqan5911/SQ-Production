"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

interface Props {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  /** Override the subtitle's text size (defaults to "text-lg") — e.g. a
   * bigger one-liner on the service detail hero without affecting every
   * other page that passes a subtitle. */
  subtitleClassName?: string;
  heroImage?: string;
  children?: React.ReactNode;
}

export default function PageShell({ eyebrow, title, subtitle, centered, subtitleClassName, heroImage, children }: Props) {
  const hasText = Boolean(eyebrow || title);

  return (
    <>
      <Navbar />
      <main className="bg-transparent min-h-screen">
        {/* Page hero — full-bleed background image (when provided) sits
            behind the text; the max-w constraint moves to an inner wrapper
            so the image itself can span the whole section width. When
            there's no eyebrow/title (image-only hero, e.g. /about), give the
            section a minimum height so it still reads as a proper banner
            instead of collapsing to just its padding. */}
        <section className={`relative overflow-hidden pt-36 pb-20 px-6 md:px-10${!hasText && heroImage ? " min-h-[45vh] md:min-h-[55vh]" : ""}`}>
          {heroImage && (
            <>
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/75 to-[#0a0a0a]" />
            </>
          )}

          {hasText && (
            <div className={`max-w-7xl mx-auto${centered ? " text-center flex flex-col items-center" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={centered ? "w-full" : undefined}
              >
                {eyebrow && (
                  <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                    {eyebrow}
                  </span>
                )}
                {title && (
                  <h1 className={`text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-5${centered ? "" : " max-w-3xl"}`}>
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className={`text-[#888] ${subtitleClassName ?? "text-lg"} leading-relaxed max-w-2xl${centered ? " mx-auto text-center" : ""}`}>{subtitle}</p>
                )}
              </motion.div>

              <ScrollIndicator className="mt-16 w-fit self-start" />
            </div>
          )}
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}
