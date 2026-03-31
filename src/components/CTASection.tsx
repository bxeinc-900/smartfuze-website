"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="section-padding">
      <div className="glass-card bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-32 text-center overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brain/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fuse/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Have a smart <br />
              <span className="text-gradient-brain">Idea?</span>
            </h2>
            <p className="text-white/40 text-xl md:text-3xl font-medium leading-relaxed">
              We&apos;re always looking for the next niche to disrupt. <br />
              Let&apos;s talk about building something that matters.
            </p>
            <div className="flex justify-center pt-8">
               <button className="btn-primary px-16 py-6 text-sm group">
                  Get Ignited
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
        </div>
      </div>
    </section>
  );
}

