import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppPortfolio from "@/components/AppPortfolio";
import FocusAreas from "@/components/FocusAreas";
import ProcessDeepDive from "@/components/ProcessDeepDive";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-brain/5 blur-[250px] pointer-events-none -z-20" />
      
      <Navbar />
      <Hero />
      <AppPortfolio />
      <FocusAreas />
      <ProcessDeepDive />
      <CTASection />
      <Footer />
    </main>
  );
}
