import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog — VideoHut",
  description: "Tips, gear guides, trends and insights from our video production team.",
};

export default function BlogsPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title="Our Blog"
      subtitle="Tips, gear guides, industry trends and behind-the-scenes insights from the VideoHut team."
    >
      <Blog />
    </PageShell>
  );
}
