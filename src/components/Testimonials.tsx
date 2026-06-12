"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Avatar({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false);
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] overflow-hidden shrink-0 flex items-center justify-center">
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-[#f87800] text-xs font-bold">{initials}</span>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">Clients</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex gap-3">
            {[scrollPrev, scrollNext].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                className="w-11 h-11 rounded-full border border-[#333] flex items-center justify-center text-white hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
                aria-label={i === 0 ? "Previous" : "Next"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {i === 0
                    ? <path d="M19 12H5M12 5l-7 7 7 7"/>
                    : <path d="M5 12h14M12 5l7 7-7 7"/>
                  }
                </svg>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="shrink-0 w-[85vw] sm:w-[42vw] lg:w-[30vw] bg-[#111] border border-[#222] rounded-2xl p-8"
              >
                <p className="text-[#f87800] text-2xl mb-4">&ldquo;</p>
                <p className="text-white text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar src={t.avatar} name={t.name} />
                  <div>
                    <p className="text-white text-sm font-bold">{t.name}</p>
                    <p className="text-[#555] text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
