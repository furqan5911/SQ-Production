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
      <div className="grid md:grid-cols-2 gap-12 items-stretch">

        {/* Contact details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
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

          {/* Map — grows to fill remaining height */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden border border-[#222] bg-[#111] min-h-[200px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.792607500145!2d74.37663587397944!3d31.474890749390486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190722845e93dd%3A0xd1c081ae6ea4d38a!2sSQ%20Productions!5e0!3m2!1sen!2s!4v1782845742938!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SQ Productions location"
              className="w-full h-full min-h-[200px]"
            />
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
