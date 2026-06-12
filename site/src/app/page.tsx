import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Showreel     from "@/components/Showreel";
import BrandPartners from "@/components/BrandPartners";
import Portfolio    from "@/components/Portfolio";
import Services     from "@/components/Services";
import Industries   from "@/components/Industries";
import About        from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ          from "@/components/FAQ";
import Blog         from "@/components/Blog";
import SkillsStrip  from "@/components/SkillsStrip";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <BrandPartners />
        <Portfolio />
        <Services />
        <Industries />
        <About />
        <Testimonials />
        <FAQ />
        <Blog />
        <SkillsStrip />
      </main>
      <Footer />
    </>
  );
}
