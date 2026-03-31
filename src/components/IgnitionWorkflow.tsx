"use client";

import { Zap, Hammer, Rocket, ArrowRight } from "lucide-react";

export default function IgnitionWorkflow() {
  const steps = [
    { 
      title: "Spark", 
      icon: Zap, 
      desc: "Every app starts as a spark. We look for gaps in the market that deserve better software." 
    },
    { 
      title: "Build", 
      icon: Hammer, 
      desc: "From idea to launch, everything is designed and handled in-house with precision engineering." 
    },
    { 
      title: "Launch", 
      icon: Rocket, 
      desc: "We light the fuze and bring the idea to life. If it doesn't make life better, we don't launch it." 
    }
  ];

  return (
    <section id="process" className="section-padding bg-black">
      <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <span className="section-subtitle">How We Work</span>
        <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
          The Fuse-to <br />
          <span className="text-gradient-brain">Ignition.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, i) => (
          <div key={i} className="glass-card group flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-full glass border-white/5 flex items-center justify-center text-brain mb-10 group-hover:scale-110 transition-transform">
              <step.icon size={32} />
            </div>
            <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-6">{step.title}</h4>
            <p className="text-white/40 text-lg leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-32 flex flex-col items-center animate-in fade-in duration-1000">
         <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
         <button className="btn-primary px-12 group">
            Start Your Ignition
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
         </button>
      </div>
    </section>
  );
}



