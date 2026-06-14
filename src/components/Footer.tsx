import Link from "next/link";
import { SITE, FOOTER } from "@/lib/constants";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 4.5h7.3c3.4 0 5.1 1.9 5.1 4.2 0 1.8-.9 2.9-2.3 3.5 1.8.5 2.9 1.8 2.9 3.7 0 2.6-1.9 4.6-5.3 4.6H0V4.5zm6.7 6.2c1.3 0 2.1-.6 2.1-1.6 0-1.1-.8-1.6-2.1-1.6H2.8v3.2h3.9zm.4 6.3c1.4 0 2.2-.6 2.2-1.8 0-1.2-.8-1.8-2.2-1.8H2.8v3.6h4.3zM15.5 9h6.5v1.25h-6.5V9zm7 7.2c-.4 1.3-1.7 2.8-4.3 2.8-2.6 0-4.7-1.6-4.7-5 0-3.3 2-5.15 4.65-5.15 2.6 0 4.2 1.5 4.55 3.75.08.44.1 1.04.08 1.84h-6.47c.1 2.73 3 2.82 3.92 1.72l2.27.04zm-6.13-3.08h3.86c-.07-.92-.67-1.5-1.91-1.5-1.07 0-1.72.56-1.95 1.5z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-white block mb-4">
              {SITE.name}
            </Link>
            <p className="text-[#888] text-sm leading-relaxed max-w-sm mb-6">
              {SITE.subtagline}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FacebookIcon />,  href: FOOTER.socials.facebook,  color: "#1877F2" },
                { icon: <GmailIcon />,     href: FOOTER.socials.email,     color: "#EA4335" },
                { icon: <LinkedInIcon />,  href: FOOTER.socials.linkedin,  color: "#0A66C2" },
                { icon: <YouTubeIcon />,   href: FOOTER.socials.youtube,   color: "#FF0000" },
                { icon: <InstagramIcon />, href: FOOTER.socials.instagram, color: "#E4405F" },
                { icon: <BehanceIcon />,   href: FOOTER.socials.behance,   color: "#1769FF" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-125"
                  style={{ color: s.color, borderColor: s.color + "55" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-3">
              {FOOTER.links.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#888] text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Legal</h4>
            <ul className="space-y-3 mb-6">
              {FOOTER.links.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#888] text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-widest uppercase">Contact</h4>
            <a href={`mailto:${FOOTER.email}`} className="text-[#888] text-sm hover:text-[#f87800] transition-colors block">
              {FOOTER.email}
            </a>
          </div>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-sm">© {year} {SITE.name}. All rights reserved.</p>
          <p className="text-[#555] text-sm">Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
