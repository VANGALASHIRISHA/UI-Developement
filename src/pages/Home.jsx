import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingLeadCard from "@/components/FloatingLeadCard";
import AIMascot from "@/components/AIMascot";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content-area" className="relative">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <About />
        <Portfolio />
        <Technologies />
        <Process />
        <Team />
        <Stats />
        <Testimonials />
        <Contact />
        <AIMascot />
      </main>
      <Footer />
      <LeadPopup />
      <FloatingLeadCard />
    </>
  );
}
