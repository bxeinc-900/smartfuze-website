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
    <section id="studio" className="surface-section section-padding rounded-[4rem]">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="label-md">The Studio Philosophy</span>
        <h2 className="display-lg mb-8">
          No clients. <br />
          <span className="text-gradient-primary">Just creation.</span>
        </h2>
        <p className="text-on-surface-variant text-xl md:text-3xl max-w-2xl">
          We don&apos;t build apps for other companies. <br />
          <span className="text-white">We build the ones we believe should exist.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((principle, i) => (
          <div key={i} className="glass-card group hover:translate-y-[-8px] transition-all duration-500">
            <div className="h-20 w-20 rounded-[1.5rem] bg-surface-variant flex items-center justify-center text-tertiary mb-10 group-hover:scale-110 transition-transform">
              <principle.icon size={36} />
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{principle.title}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
              {principle.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-32 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-surface-variant text-tertiary"><Coffee size={24} /></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant">Food & Drink</span>
        </div>
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-surface-variant text-tertiary"><Heart size={24} /></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant">Health & Fitness</span>
        </div>
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-surface-variant text-tertiary"><Clock size={24} /></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant">Productivity</span>
        </div>
      </div>
    </section>
  );
}



