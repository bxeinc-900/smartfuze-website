"use client";

import { Heart, Zap, Coffee, Clock, Sparkles } from "lucide-react";

const principles = [
  {
    title: "Simple. Useful. Fun.",
    desc: "If it doesn't make sense, or it doesn't make life better—we don't build it.",
    icon: Sparkles,
  },
  {
    title: "Execution is everything.",
    desc: "Every app starts as a spark—and ends as something people use every day.",
    icon: Zap,
  },
  {
    title: "Built in-house.",
    desc: "From idea to launch, everything we create is owned and managed by us.",
    icon: Heart,
  }
];

export default function PrecisionServices() {
  return (
    <section id="studio" className="section-padding">
      <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="section-subtitle">The Studio Philosophy</span>
        <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
          No clients. <br />
          <span className="text-gradient-brain">Just creation.</span>
        </h2>
        <p className="text-white/40 text-xl md:text-3xl max-w-2xl font-medium">
          We don&apos;t build apps for other companies. <br />
          <span className="text-white">We build the ones we believe should exist.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((principle, i) => (
          <div key={i} className="glass-card group hover:translate-y-[-8px] transition-all duration-500">
            <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-spark mb-8 group-hover:scale-110 transition-transform">
              <principle.icon size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{principle.title}</h3>
            <p className="text-white/40 text-lg leading-relaxed font-medium">
              {principle.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40">
        <div className="flex items-center gap-3">
            <Coffee size={24} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Food & Drink</span>
        </div>
        <div className="flex items-center gap-3">
            <Heart size={24} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Health & Fitness</span>
        </div>
        <div className="flex items-center gap-3">
            <Clock size={24} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Productivity</span>
        </div>
      </div>
    </section>
  );
}



