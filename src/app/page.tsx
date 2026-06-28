import dynamic from "next/dynamic";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Reels         from "@/components/Reels";
import BrandPartners from "@/components/BrandPartners";
import Portfolio     from "@/components/Portfolio";
import Services      from "@/components/Services";
import Industries    from "@/components/Industries";
import About         from "@/components/About";
import Footer        from "@/components/Footer";

// Below-fold sections: JS bundles downloaded only when needed
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ          = dynamic(() => import("@/components/FAQ"));
const SkillsStrip  = dynamic(() => import("@/components/SkillsStrip"));
const Collaborate  = dynamic(() => import("@/components/Collaborate"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <BrandPartners />
        <div className="bg-transparent h-4" />
        <Portfolio />
        <div className="bg-transparent h-4" />
        <Services />
        <Industries />
        <About />
        <Testimonials />
        <FAQ />
        <SkillsStrip />
        <Collaborate />
      </main>
      <Footer />
    </>
  );
}
