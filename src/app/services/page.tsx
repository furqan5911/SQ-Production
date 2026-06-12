import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Services — VideoHut",
  description: "End-to-end video production: pre-production, production, and post-production services.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="What We Do"
      title="Our Services"
      subtitle="Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun."
    >
      <Services />
      <Industries />
      <FAQ />
    </PageShell>
  );
}
