import { Zap, Hammer, Rocket, ArrowRight } from "lucide-react";

export default function IgnitionWorkflow() {
  const steps = [
    { 
      id: "01",
      title: "Spark", 
      icon: Zap, 
      desc: "Every app starts as a spark. We look for gaps in the market that deserve better software." 
    },
    { 
      id: "02",
      title: "Build", 
      icon: Hammer, 
      desc: "From idea to launch, everything is designed and handled in-house with precision engineering." 
    },
    { 
      id: "03",
      title: "Launch", 
      icon: Rocket, 
      desc: "We light the fuze and bring the idea to life. If it doesn't make life better, we don't launch it." 
    }
  ];

  return (
    <section id="process" className="py-24 md:py-48 overflow-hidden relative border-y border-white/5 bg-black/60">
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="section-subtitle">The Workflow</span>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-8">
            Spark → Build <br />
            <span className="text-gradient-brain">→ Launch.</span>
          </h2>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Our streamlined process ensures your idea is handled with care before we light the match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="relative mb-12">
                <div className="h-24 w-24 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white/20 group-hover:text-brain transition-all duration-700 group-hover:scale-110 group-hover:border-brain/40 shadow-2xl relative z-10 bg-black">
                  <step.icon size={32} />
                </div>
              </div>
              
              <div className="space-y-4 max-w-[280px]">
                <h4 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-white transition-colors">{step.title}</h4>
                <p className="text-white/40 group-hover:text-white/60 leading-relaxed transition-colors font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-brain to-transparent" />
             <button className="btn-secondary group px-10 italic uppercase border-white/5 font-black tracking-widest text-[10px]">
                That&apos;s it.
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-spark" />
             </button>
        </div>
      </div>
    </section>
  );
}


