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
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <BrandPartners />
        <Portfolio />
        <Services />
        <Industries />
        <About />
        <Testimonials />
        <FAQ />
<SkillsStrip />
      </main>
      <Footer />
    </>
  );
}
