"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pl-6 pr-6 md:pl-52 md:pr-32 pt-4">
      {/* Glass pill container — wraps logo + nav + CTA in one bar */}
      <div
        className="max-w-5xl mx-auto flex items-center justify-between px-5 md:px-6 h-[52px] md:h-[56px] transition-all duration-300"
        style={{
          background: "rgba(13, 13, 13, 0.2)",
          backdropFilter: "blur(9px)",
          WebkitBackdropFilter: "blur(9px)",
          borderRadius: "44px",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt={SITE.name} className="h-20 md:h-24 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                relative text-[15px] tracking-wide px-4 py-1.5 rounded-full transition-all duration-200
                ${isActive(link.href)
                  ? "text-[#f87800] bg-white/10"
                  : "text-white hover:text-[#f87800] hover:bg-white/10"
                }
              `}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#f87800]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-white text-black text-[15px] font-bold px-5 py-1.5 rounded-full hover:bg-[#f87800] hover:text-black transition-colors duration-200 shrink-0"
        >
          {SITE.ctaPrimary}
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden mt-2 rounded-2xl"
            style={{
              background: "rgba(13, 13, 13, 0.95)",
              backdropFilter: "blur(9px)",
              WebkitBackdropFilter: "blur(9px)",
              borderRadius: "24px",
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    px-4 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200
                    ${isActive(link.href)
                      ? "text-[#f87800] bg-white/10"
                      : "text-white hover:text-[#f87800] hover:bg-white/10"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-full text-center hover:bg-[#f87800] transition-colors duration-200"
              >
                {SITE.ctaPrimary}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
