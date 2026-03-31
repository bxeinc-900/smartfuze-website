"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="void-section">
      <div className="container section-padding">
        <div className="surface-section p-12 md:p-32 rounded-[4rem] text-center overflow-hidden relative ambient-glow-primary">
          {/* Kinetic Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <h2 className="display-lg">
                Have a smart <br />
                <span className="text-gradient-primary">Idea?</span>
              </h2>
              <p className="text-on-surface-variant text-xl md:text-3xl leading-relaxed">
                We&apos;re always looking for the next niche to disrupt. <br />
                Let&apos;s talk about building something that matters.
              </p>
              <div className="flex justify-center pt-8">
                 <button className="btn-primary !px-20 !py-8 font-bebas text-lg group">
                    Get Ignited
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

