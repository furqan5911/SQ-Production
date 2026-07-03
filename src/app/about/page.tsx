import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageShell from "@/components/PageShell";
import About from "@/components/About";

// Below-fold sections: JS bundles downloaded only when needed
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ          = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
  title: "About — VideoHut",
  description: "Established in 2015, we craft captivating visual narratives that help brands tell their story.",
};

export default function AboutPage() {
  return (
    <PageShell heroImage="https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/SQ%20productions%20banner.png">
      <About />
      <Testimonials />
      <FAQ />
    </PageShell>
  );
}
