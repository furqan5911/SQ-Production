import type { Metadata } from "next";

const title = "Projects";
const description =
  "From coming up with creative concepts to delivering outstanding campaigns — browse our video production portfolio across commercials, fashion films, music videos, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
