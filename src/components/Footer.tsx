"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SITE, FOOTER } from "@/lib/constants";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 4.5h7.3c3.4 0 5.1 1.9 5.1 4.2 0 1.8-.9 2.9-2.3 3.5 1.8.5 2.9 1.8 2.9 3.7 0 2.6-1.9 4.6-5.3 4.6H0V4.5zm6.7 6.2c1.3 0 2.1-.6 2.1-1.6 0-1.1-.8-1.6-2.1-1.6H2.8v3.2h3.9zm.4 6.3c1.4 0 2.2-.6 2.2-1.8 0-1.2-.8-1.8-2.2-1.8H2.8v3.6h4.3zM15.5 9h6.5v1.25h-6.5V9zm7 7.2c-.4 1.3-1.7 2.8-4.3 2.8-2.6 0-4.7-1.6-4.7-5 0-3.3 2-5.15 4.65-5.15 2.6 0 4.2 1.5 4.55 3.75.08.44.1 1.04.08 1.84h-6.47c.1 2.73 3 2.82 3.92 1.72l2.27.04zm-6.13-3.08h3.86c-.07-.92-.67-1.5-1.91-1.5-1.07 0-1.72.56-1.95 1.5z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: "100%", height: "100%", display: "block", fill: "#fff" }}>
    <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" />
  </svg>
);

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  LinkedIn: <LinkedInIcon />,
  YouTube: <YouTubeIcon />,
  Instagram: <InstagramIcon />,
  Behance: <BehanceIcon />,
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.3)",
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-block -mx-3 px-3 py-1.5 rounded-full text-[#888] text-sm transition-all duration-300 hover:text-white hover:bg-white/[0.06] hover:backdrop-blur-md hover:border hover:border-white/15"
    >
      {label}
    </Link>
  );
}

function SocialCircleIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.1 : 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
      className="w-14 h-14 rounded-full flex items-center justify-center text-black shrink-0"
      style={{
        background: "#f87800",
        boxShadow: hovered ? "0 4px 20px rgba(248,120,0,0.5)" : "0 4px 24px rgba(248,120,0,0.35)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <span className="[&>svg]:w-[22px] [&>svg]:h-[22px]">{icon}</span>
    </motion.a>
  );
}

function SocialPillLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="relative flex items-center justify-between w-full pl-2 pr-2 py-2 rounded-full overflow-hidden border border-white/30"
      style={{ transformOrigin: "center" }}
    >
      {/* Base resting tint */}
      <div className="absolute inset-0" style={cardStyle} />
      {/* Hover glow — fades in from the center */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(65% 65% at 50% 50%, var(--accent) 0%, rgba(255,171,66,0.3) 45%, transparent 80%)",
        }}
      />

      <span className="relative z-10 flex items-center gap-3 pl-4 text-white text-xs font-bold tracking-[0.15em] uppercase">
        <span className="text-[#f87800] shrink-0 [&>svg]:w-5 [&>svg]:h-5">
          {SOCIAL_ICONS[label]}
        </span>
        {label}
      </span>

      <motion.div
        animate={{
          rotate: hovered ? 0 : 90,
          backgroundColor: hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)",
        }}
        transition={{ type: "spring", stiffness: 240, damping: 20 }}
        className="relative z-10 rounded-full flex items-center justify-center shrink-0"
        style={{ width: 36, height: 36, padding: 8 }}
      >
        <ArrowUp />
      </motion.div>
    </motion.a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-8">
        {/* Brand */}
        <div className="mb-12 text-center">
          <Link href="/" className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white block mb-2">
            {SITE.name}
          </Link>
          <p className="text-[#888] text-[20px] leading-relaxed max-w-lg mx-auto mb-8">
            {SITE.subtagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: <FacebookIcon />,  href: FOOTER.socials.facebook },
              { icon: <GmailIcon />,     href: FOOTER.socials.email },
              { icon: <LinkedInIcon />,  href: FOOTER.socials.linkedin },
              { icon: <YouTubeIcon />,   href: FOOTER.socials.youtube },
              { icon: <InstagramIcon />, href: FOOTER.socials.instagram },
              { icon: <BehanceIcon />,   href: FOOTER.socials.behance },
            ].map((s, i) => (
              <SocialCircleIcon key={i} icon={s.icon} href={s.href} />
            ))}
          </div>
        </div>

        {/* Contact card + Quick Links / Legal / Social Medias card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-[40px] px-7 py-7 space-y-3" style={cardStyle}>
            <p className="text-white text-sm leading-relaxed">
              <strong className="font-bold">Address:</strong> {FOOTER.address}
            </p>
            <p className="text-white text-sm leading-relaxed">
              <strong className="font-bold">Email:</strong>{" "}
              <a href={`mailto:${FOOTER.email}`} className="hover:text-[#f87800] transition-colors">
                {FOOTER.email}
              </a>
            </p>
            <p className="text-white text-sm leading-relaxed">
              <strong className="font-bold">Phone:</strong> {FOOTER.phone}
            </p>
            <p className="text-white text-sm leading-relaxed">
              <strong className="font-bold">Business Hours:</strong> {FOOTER.hours}
            </p>
          </div>

          <div className="rounded-[40px] px-6 py-6 sm:px-8 sm:py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" style={cardStyle}>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {FOOTER.links.company.map((l) => (
                  <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Legal</h4>
              <ul className="space-y-3 mb-6">
                {FOOTER.links.legal.map((l) => (
                  <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
                ))}
              </ul>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Social Medias</h4>
              <ul className="space-y-3">
                {FOOTER.links.social.map((l) => (
                  <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social pill links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FOOTER.links.social.map((s) => (
            <SocialPillLink key={s.label} label={s.label} href={s.href} />
          ))}
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-sm">© {year} {SITE.name}. All rights reserved.</p>
          <p className="text-[#555] text-sm">Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
