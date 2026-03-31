import { Search, Globe, Rocket, ArrowRight } from "lucide-react";

export default function IgnitionWorkflow() {
  const steps = [
    { 
      id: "01",
      title: "Discovery", 
      icon: Search, 
      desc: "We dig deep into the vision, target market, and technical constraints to map out the future. We look for gaps that deserve better software." 
    },
    { 
      id: "02",
      title: "Development", 
      icon: Globe, 
      desc: "Our proprietary fusion protocol ensures your product is built for scale from day one. Precision engineering with zero bloat." 
    },
    { 
      id: "03",
      title: "Ignition", 
      icon: Rocket, 
      desc: "We deploy the app to the world and monitor the blast radius for performance. Constant iteration for the products we own." 
    }
  ];

  return (
    <section id="process" className="py-24 md:py-48 overflow-hidden relative border-y border-white/5 bg-black/60">
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="section-subtitle">How we build</span>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-8">
            The Fuse-to <br />
            <span className="text-gradient-brain">Ignition</span> Workflow.
          </h2>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Our streamlined process ensures your idea is handled with care before we light the match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line (Dashed) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-white/10 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="relative mb-12">
                <div className="h-24 w-24 rounded-[2.5rem] glass-dark border border-white/10 flex items-center justify-center text-white/20 group-hover:text-brain transition-all duration-700 group-hover:scale-110 group-hover:border-brain/40 shadow-2xl relative z-10">
                  <step.icon size={40} />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-brain text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_15px_var(--color-brain-glow)] z-20">
                  {step.id}
                </div>
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-brain/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>
              
              <div className="space-y-4 max-w-[280px]">
                <h4 className="text-3xl font-black italic uppercase tracking-tight group-hover:text-white transition-colors">{step.title}</h4>
                <p className="text-white/40 group-hover:text-white/60 leading-relaxed transition-colors font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-brain to-transparent" />
             <button className="btn-secondary group px-10 italic uppercase border-white/5">
                Our Full Protocol
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-spark" />
             </button>
        </div>
      </div>
    </section>
  );
}

