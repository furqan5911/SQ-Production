import dynamic from "next/dynamic";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import { SITE }      from "@/lib/constants";
import Reels         from "@/components/Reels";
import BrandPartners from "@/components/BrandPartners";
import Portfolio     from "@/components/Portfolio";
import Services      from "@/components/Services";
import Industries    from "@/components/Industries";
import About         from "@/components/About";
import Footer        from "@/components/Footer";
import HomeSectionGlow from "@/components/HomeSectionGlow";

// Below-fold sections: JS bundles downloaded only when needed
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ          = dynamic(() => import("@/components/FAQ"));
const SkillsStrip  = dynamic(() => import("@/components/SkillsStrip"));
const Collaborate  = dynamic(() => import("@/components/Collaborate"));

export default function Home() {
  return (
    <>
      {/* Preload hero banner so it starts downloading before CSS parses the
          background-image — homepage-only, since Hero (and heroBg) only
          render here; a global preload in the root layout would force this
          download on every page, delaying LCP elsewhere. */}
      <link rel="preload" as="image" href={SITE.heroBg} fetchPriority="high" />
      <HomeSectionGlow />
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <BrandPartners />
        <div className="bg-transparent h-4" />
        {/* Gradient glow range starts here — see HomeSectionGlow.tsx */}
        <div id="home-glow-start" />
        <Portfolio />
        <div className="bg-transparent h-4" />
        <Industries />
        <Services />
        {/* Gradient glow fades out by the middle of this wrapper */}
        <div id="home-glow-end-wrap">
          <About />
        </div>
        <Testimonials />
        <FAQ />
        <SkillsStrip />
        <Collaborate />
      </main>
      <Footer />
    </>
  );
}
