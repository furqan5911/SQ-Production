import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — VideoHut",
  description: "Let's collaborate. Get in touch with the VideoHut team.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Get in touch"
      title="Let's Collaborate"
      subtitle="Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."
      centered
    >
      <ContactSection />
    </PageShell>
  );
}
