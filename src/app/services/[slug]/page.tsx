import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SERVICE_ALBUM_CARDS } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICE_ALBUM_CARDS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = SERVICE_ALBUM_CARDS.find((c) => c.slug === params.slug);
  return { title: card ? `${card.title} — SQ Productions` : "Service" };
}

export default function ServiceSlugPage({ params }: Props) {
  const card = SERVICE_ALBUM_CARDS.find((c) => c.slug === params.slug);
  if (!card) return <div className="text-white p-20">Service not found.</div>;

  return (
    <PageShell
      eyebrow="What We Do"
      title={card.title}
      subtitle={card.subtitle}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 text-center">
        <p className="text-white/60 text-lg mb-10">
          Detailed information for this service is coming soon.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#f87800] text-black font-bold text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-orange-400 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </PageShell>
  );
}
