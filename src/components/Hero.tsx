"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="void-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Kinetic Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 blur-[120px] rounded-full" />
      
      <div className="container relative z-10 text-center px-6">
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="label-md">
            Product Studio v2.0
          </div>
          
          <div className="relative w-[200px] h-[200px] mb-12 animate-float">
            <Image 
              src="/assets/SmartFuze logo_02.png" 
              alt="SmartFuze Brain Bomb" 
              fill 
              sizes="200px"
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="display-lg mb-12">
            We light the <br />
            <span className="text-gradient-primary">fuze on <br className="md:hidden" /> smart ideas.</span>
          </h1>
          
          <p className="text-on-surface-variant text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
             We build mobile apps that are <br className="hidden md:block" />
             <span className="text-white">fun, useful, and actually smart.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button className="btn-primary w-full sm:w-auto group">
              View Our Ignitions
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn-glass w-full sm:w-auto">
              The Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Kinetic Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}



