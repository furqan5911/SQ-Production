import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SERVICE_ALBUM_CARDS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_ALBUM_CARDS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const card = SERVICE_ALBUM_CARDS.find((c) => c.slug === slug);
  return { title: card ? `${card.title} — SQ Productions` : "Service" };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const card = SERVICE_ALBUM_CARDS.find((c) => c.slug === slug);
  if (!card) return <div className="text-white p-20">Service not found.</div>;

  return (
    <PageShell
      eyebrow="What We Do"
      title={card.title}
      subtitle={card.subtitle}
      heroImage={card.image}
      centered
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Overview ── */}
        <div className="py-4 pb-16 text-center">
          <p className="text-[#aaa] text-lg leading-relaxed max-w-3xl mx-auto">
            {card.overview}
          </p>
        </div>

        {/* ── What We Do ── */}
        <div className="pb-20">
          <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4 text-center">
            The Offering
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {card.whatWeDo.map((item) => (
              <div
                key={item.title}
                className="bg-[#111] border border-[#222] rounded-2xl p-7"
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why section (optional) ── */}
        {"whyPoints" in card && Array.isArray((card as Record<string, unknown>).whyPoints) && (
          <div className="pb-20">
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4 text-center">
              The Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Why AI Content?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {((card as Record<string, unknown>).whyPoints as { title: string; description: string }[]).map((item) => (
                <div key={item.title} className="bg-[#111] border border-[#222] rounded-2xl p-7">
                  <h3 className="text-[#f87800] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Process section (optional) ── */}
        {"process" in card && Array.isArray((card as Record<string, unknown>).process) && (
          <div className="pb-20">
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4 text-center">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Our Process
            </h2>
            <div className="flex flex-col gap-4">
              {((card as Record<string, unknown>).process as { step: string; title: string; description: string }[]).map((item) => (
                <div key={item.step} className="flex gap-6 bg-[#111] border border-[#222] rounded-2xl p-7">
                  <span className="text-[#f87800] font-black text-3xl shrink-0 leading-none">{item.step}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="pb-20 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#f87800] text-black font-bold text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-orange-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
