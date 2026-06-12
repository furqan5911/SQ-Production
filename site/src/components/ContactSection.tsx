"use client";

import { motion } from "motion/react";
import { FOOTER } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ContactSection() {
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
            <div className="flex gap-3">
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

        {/* Contact form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-[#111] border border-[#222] rounded-2xl p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[#555] text-xs tracking-widest uppercase block mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#f87800] transition-colors"
              />
            </div>
            <div>
              <label className="text-[#555] text-xs tracking-widest uppercase block mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#f87800] transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-[#555] text-xs tracking-widest uppercase block mb-2">Subject</label>
            <input
              type="text"
              placeholder="Project brief, pricing, general enquiry..."
              className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#f87800] transition-colors"
            />
          </div>
          <div>
            <label className="text-[#555] text-xs tracking-widest uppercase block mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#f87800] transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f87800] text-black font-bold py-3.5 rounded-full text-sm hover:bg-white transition-colors duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
