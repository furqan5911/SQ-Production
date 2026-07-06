import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageShell from "@/components/PageShell";
import ServiceAlbumCards from "@/components/ServiceAlbumCards";

// Below-fold sections: JS bundles downloaded only when needed
const ServiceCategories = dynamic(() => import("@/components/ServiceCategories"));
const FAQ                = dynamic(() => import("@/components/FAQ"));

const title = "Services";
const description = "End-to-end video production: pre-production, production, and post-production services.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="What We Do"
      title="Our Services"
      subtitle="Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun."
      centered
    >
      <ServiceAlbumCards />
      <ServiceCategories />
      <FAQ />
    </PageShell>
  );
}
