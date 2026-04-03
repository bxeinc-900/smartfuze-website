"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Cpu, Globe, Search, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";

export default function CeliacScanner() {
  return (
    <main className="min-h-screen relative text-white bg-void selection:bg-primary/30">
      {/* Dynamic Backgrounds */}
      <div className="fixed top-0 left-0 w-full h-[1000px] bg-primary/5 blur-[250px] pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-0 w-full h-[1000px] bg-tertiary/5 blur-[250px] pointer-events-none -z-20" />
      
      <Navbar />

      {/* Case Study Hero */}
      <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <Link href="/#ignitions" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bebas uppercase tracking-widest">Back to Ignitions</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="label-md">Recent Ignition: Health & Fitness</span>
              <h1 className="display-lg">
                Celiac <br />
                <span className="text-gradient-primary">Scanner.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
                The AI-powered security ecosystem providing real-time safety scores by cross-referencing 30+ medical authorities.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-card px-6 py-4 flex items-center gap-3">
                  <ShieldCheck className="text-primary" />
                  <span className="text-sm font-black uppercase tracking-widest">Certified Safe</span>
                </div>
                <div className="glass-card px-6 py-4 flex items-center gap-3">
                  <Cpu className="text-tertiary" />
                  <span className="text-sm font-black uppercase tracking-widest">Neural Label Intelligence</span>
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] -z-10" />
              <div className="relative aspect-[4/5] md:aspect-square group max-w-lg mx-auto">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent blur-2xl rounded-full opacity-50" />
                 <Image 
                   src="/assets/scanner-mockup.png"
                   alt="Celiac Scanner Hero"
                   fill
                   className="object-contain"
                   priority
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Intelligence Section */}
      <section className="void-section py-24 px-6 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
             <span className="label-md">The Intelligence</span>
             <h2 className="display-lg leading-tight scale-90">
               Beyond the <br /> <span className="text-secondary">Barcode.</span>
             </h2>
             <p className="text-xl text-on-surface-variant leading-relaxed">
               Most scanners rely on outdated barcode databases. SmartFuze engineered a multimodal AI that "reads" the entire label, identifying hidden gluten sources like yeast extract or malt vinegar that others miss.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 space-y-6 hover:translate-y-[-8px] transition-transform duration-500">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bebas uppercase">Trust 30 Database</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Aggregating data from 30+ international Celiac authorities to create a definitive, real-time safety ecosystem.
              </p>
            </div>

            <div className="glass-card p-8 space-y-6 hover:translate-y-[-8px] transition-transform duration-500">
              <div className="h-12 w-12 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bebas uppercase">Traffic Light Logic</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Instant visual feedback: Green (Certified Safe), Yellow (Review Carefully), and Red (Contains Gluten).
              </p>
            </div>

            <div className="glass-card p-8 space-y-6 hover:translate-y-[-8px] transition-transform duration-500">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-2xl font-bebas uppercase">Safe Swap Engine</h3>
              <p className="text-on-surface-variant leading-relaxed">
                If a product isn't safe, our AI suggests an Amazon-verified gluten-free alternative for immediate delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Innovation Section (Features) */}
      <section className="py-24 px-6 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square lg:order-2">
               <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
               <Image 
                 src="/assets/restaurant-finder.webp"
                 alt="Restaurant Menu Scanning"
                 fill
                 className="object-contain"
               />
            </div>

            <div className="space-y-12 lg:order-1">
              <div className="space-y-6">
                <span className="label-md">Innovation</span>
                <h2 className="display-lg scale-90 origin-left">Dining <br /> <span className="text-gradient-primary">Armor.</span></h2>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  We extended the tech to restaurants. Users can pan the camera over a physical menu, and the AI highlights safe dishes while flagging cross-contamination risks in seconds.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                   <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center">
                      <Zap className="text-primary" size={20} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bebas uppercase tracking-widest text-white mb-2">Millisecond Response</h4>
                      <p className="text-on-surface-variant">Real-time processing on-device for uncompromising privacy and speed.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center">
                      <ShieldCheck className="text-tertiary" size={20} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bebas uppercase tracking-widest text-white mb-2">Medical Grade Consensus</h4>
                      <p className="text-on-surface-variant">Validated against the latest GFCO and AOAC standards globally.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmartThinking / Process Integration */}
      <section className="void-section py-24 px-6 relative">
         <div className="container text-center max-w-4xl mx-auto space-y-12">
            <span className="label-md">The SmartFuze Blueprint</span>
            <h2 className="display-lg scale-90">Building the <br /> <span className="text-primary italic">Guardian.</span></h2>
            <p className="text-2xl text-on-surface-variant leading-relaxed italic font-medium">
              "We didn't just build a scanner; we built a peace-of-mind engine. By combining computer vision with a vast knowledge graph of allergen data, we turned a medical necessity into a seamless, high-tech experience."
            </p>
            <div className="pt-8">
              <Link href="/#contact" className="btn-primary px-12 italic uppercase font-black tracking-widest">
                Ignite Your Project
              </Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
