import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Reels        from "@/components/Reels";
import BrandPartners from "@/components/BrandPartners";
import Portfolio    from "@/components/Portfolio";
import Services     from "@/components/Services";
import Industries   from "@/components/Industries";
import About        from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ          from "@/components/FAQ";
import SkillsStrip  from "@/components/SkillsStrip";
import Collaborate  from "@/components/Collaborate";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <BrandPartners />
        <div className="bg-[#0a0a0a] h-20" />
        <Portfolio />
        <div className="bg-[#0a0a0a] h-20" />
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
