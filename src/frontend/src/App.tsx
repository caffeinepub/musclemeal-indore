import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import BlogSection from "./components/BlogSection";
import DeliveryAreas from "./components/DeliveryAreas";
import DietCalculatorPage from "./components/DietCalculatorPage";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import HealthStats from "./components/HealthStats";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import RecipesPage from "./components/RecipesPage";
import SolutionSection from "./components/SolutionSection";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";

export type Page = "home" | "recipes" | "calculator";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-white text-foreground font-body">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? (
        <main>
          <HeroSection />
          <TrustBar />
          <HealthStats />
          <ProblemSection />
          <SolutionSection />
          <PricingSection />
          <HowItWorks />
          <BlogSection />
          <Testimonials />
          <DeliveryAreas />
          <FAQ />
          <FinalCTA />
          <Footer />
        </main>
      ) : currentPage === "recipes" ? (
        <main>
          <RecipesPage />
          <Footer />
        </main>
      ) : (
        <main>
          <DietCalculatorPage />
          <Footer />
        </main>
      )}
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}
