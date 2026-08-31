import SiteLayout from "@/components/mosaic/SiteLayout";
import Hero from "@/components/mosaic/Hero";
import About from "@/components/mosaic/About";
import Services from "@/components/mosaic/Services";
import Industries from "@/components/mosaic/Industries";
import Approach from "@/components/mosaic/Approach";
import Insights from "@/components/mosaic/Insights";
import Contact from "@/components/mosaic/Contact";

const Index = () => (
  <SiteLayout>
    <Hero />
    <About />
    <Services />
    <Industries />
    <Approach />
    <Insights />
    <Contact />
  </SiteLayout>
);

export default Index;
