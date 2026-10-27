import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import FullPortfolio from "@/components/FullPortfolio";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingLeadCard from "@/components/FloatingLeadCard";

export default function PortfolioPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content-area" className="relative pt-24">
        <FullPortfolio />
      </main>
      <Footer />
      <LeadPopup />
      <FloatingLeadCard />
    </>
  );
}
