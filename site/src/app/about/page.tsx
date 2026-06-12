import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "About — VideoHut",
  description: "Established in 2015, we craft captivating visual narratives that help brands tell their story.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Est. 2015"
      title="About Our Agency"
      subtitle="We have dedicated ourselves to crafting captivating visual narratives that help brands tell their story — from concept to final cut."
    >
      <About />
      <Testimonials />
      <FAQ />
    </PageShell>
  );
}
