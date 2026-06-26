"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { FOOTER } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const CALENDLY_URL = "https://calendly.com/teamsq-business/30min";

export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pb-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Contact details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Email</p>
            <a
              href={`mailto:${FOOTER.email}`}
              className="text-white text-xl font-bold hover:text-[#f87800] transition-colors"
            >
              {FOOTER.email}
            </a>
          </div>
          <div>
            <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Phone</p>
            <a
              href={`tel:${FOOTER.phone}`}
              className="text-white text-xl font-bold hover:text-[#f87800] transition-colors"
            >
              {FOOTER.phone}
            </a>
          </div>
          <div>
            <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Address</p>
            <p className="text-white text-xl font-bold">{FOOTER.address}</p>
          </div>

          {/* Social links */}
          <div>
            <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-4">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(FOOTER.socials).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  className="capitalize text-[#888] text-sm border border-[#333] px-4 py-2 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Calendly inline widget */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[#222]"
        >
          <div
            id="book"
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=f87800`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
