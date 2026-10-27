import { Routes, Route } from "react-router-dom";
import QOrbit from "@/components/QOrbit";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "./pages/Home.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <QOrbit />
      <WhatsAppButton />
    </>
  );
}
