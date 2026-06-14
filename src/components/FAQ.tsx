"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
            Curious? Check Out the Scoop!
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`bg-[#111] border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-[#f87800]/30" : "border-[#222]"
                }`}
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? "text-[#f87800]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-7 h-7 rounded-full border border-[#333] flex items-center justify-center text-[#888] text-lg leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#888] text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
