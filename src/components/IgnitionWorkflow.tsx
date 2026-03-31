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
    <section id="process" className="void-section section-padding">
      <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <span className="label-md">How We Work</span>
        <h2 className="text-5xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
          The Fuse-to <br />
          <span className="text-gradient-primary">Ignition.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, i) => (
          <div key={i} className="glass-card group flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-surface-variant flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform duration-500 ambient-glow-primary">
              <step.icon size={40} />
            </div>
            <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-6">{step.title}</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-32 flex flex-col items-center animate-in fade-in duration-1000">
         <button className="btn-primary px-16 group">
            Start Your Ignition
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
         </button>
      </div>
    </section>
  );
}



