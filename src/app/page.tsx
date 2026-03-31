import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationsMosaic from "@/components/IntegrationsMosaic";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ArchitectureDeepDive from "@/components/ArchitectureDeepDive";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-primary/5 blur-[250px] pointer-events-none -z-20" />
      
      <Navbar />
      <Hero />
      <IntegrationsMosaic />
      <CapabilitiesGrid />
      <ArchitectureDeepDive />
      <CTASection />
      <Footer />
    </main>
  );
}
