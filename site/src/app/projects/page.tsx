import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Projects — VideoHut",
  description: "Browse our complete portfolio of commercials, corporate films, documentaries, and more.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Our Projects"
      subtitle="From coming up with creative concepts to delivering outstanding campaigns — browse our full portfolio across all categories."
    >
      <Portfolio />
    </PageShell>
  );
}
