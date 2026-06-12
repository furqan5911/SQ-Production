"use client";

import Marquee from "react-fast-marquee";
import { SKILLS_STRIP } from "@/lib/constants";

export default function SkillsStrip() {
  const doubled = [...SKILLS_STRIP, ...SKILLS_STRIP];

  return (
    <section className="bg-[#f87800] py-4 overflow-hidden">
      <Marquee gradient={false} speed={50}>
        {doubled.map((skill, i) => (
          <span key={i} className="mx-8 text-black text-sm font-bold tracking-widest uppercase flex items-center gap-8">
            {skill}
            <span className="text-black/40 text-lg">âœ¦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
