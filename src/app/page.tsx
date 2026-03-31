import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentIgnitions from "@/components/RecentIgnitions";
import PrecisionServices from "@/components/PrecisionServices";
import IgnitionWorkflow from "@/components/IgnitionWorkflow";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-primary/10 blur-[300px] pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-0 w-full h-[800px] bg-secondary/5 blur-[300px] pointer-events-none -z-20" />
      
      <Navbar />
      <Hero />
      <PrecisionServices />
      <RecentIgnitions />
      <IgnitionWorkflow />
      <CTASection />
      <Footer />
    </main>
  );
}

