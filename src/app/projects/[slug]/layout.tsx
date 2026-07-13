import type { Metadata } from "next";
import { PROJECTS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }>; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: { absolute: "Project — SQ Productions" } };

  const title = project.slug === "ai-ads" ? "AI Work" : project.title;
  const description =
    typeof project.description === "string" && project.description.length > 160
      ? `${project.description.slice(0, 157)}...`
      : (project.description as string) ?? project.subtitle;

  return {
    title: { absolute: `${title} — SQ Productions` },
    description,
    openGraph: { title, description, images: [{ url: project.image }], type: "article" },
    twitter: { card: "summary_large_image", title, description, images: [project.image] },
  };
}

export default function ProjectSlugLayout({ children }: Props) {
  return children;
}
