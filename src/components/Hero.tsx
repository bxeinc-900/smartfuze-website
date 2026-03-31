"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brain/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuse/10 blur-[120px] rounded-full" />
      
      {/* Floating Glass Circles */}
      <div className="absolute top-1/3 right-[10%] w-32 h-32 glass border-white/5 animate-float opacity-30 hidden md:block" />
      <div className="absolute bottom-1/4 left-[15%] w-20 h-20 glass border-white/5 animate-float opacity-20 hidden md:block" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 text-center px-6">
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="section-subtitle">Based in Vancouver, Canada</span>
          
          <h1 className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
            We light the <br />
            <span className="text-gradient-brain">Fuze.</span>
          </h1>
          
          <p className="text-white/40 text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
             We build mobile apps that are <br className="hidden md:block" />
             <span className="text-white">fun, useful, and actually smart.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button className="btn-primary w-full sm:w-auto group">
              Our Recent Ignitions
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn-glass w-full sm:w-auto">
              Our Full Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}



