import { Lightbulb, Zap, Rocket, ShieldCheck, Heart, Terminal, ArrowRight } from "lucide-react";

export default function ProcessDeepDive() {
  const steps = [
    { title: "Identify", icon: Lightbulb, desc: "We look for niches that deserve better software." },
    { title: "Ignite", icon: Zap, desc: "A spark of creativity meets intentional execution." },
    { title: "Build", icon: Terminal, desc: "Precision engineering with zero bloat." },
    { title: "Verify", icon: ShieldCheck, desc: "Every feature is tested for real-world impact." },
    { title: "Launch", icon: Rocket, desc: "We light the fuse and bring the idea to life." },
    { title: "Evolve", icon: Heart, desc: "Constant iteration for the products we own." }
  ];

  return (
    <section id="process" className="py-24 md:py-48 overflow-hidden relative border-y border-white/5 bg-black/40">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brain/10 blur-[150px] -z-10 rounded-full" />
            
            <div className="glass-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden group border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-brain/10 to-transparent pointer-events-none" />
              
              <div className="space-y-12 relative z-10 px-4 md:px-0">
                <div className="text-center">
                  <div className="inline-block px-5 py-2 rounded-full bg-brain/10 text-fuse text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    Studio Workflow
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">The <span className="text-gradient-brain">Spark</span> Protocol</h3>
                  <p className="text-white/40 mt-6 max-w-sm mx-auto font-medium">
                    Our proprietary approach to building apps people actually use.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative">
                  {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group/icon">
                      <div className="h-20 w-20 rounded-[2rem] glass-dark border border-white/5 flex items-center justify-center text-white/20 group-hover/icon:text-brain transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:border-brain/30 shadow-2xl">
                        <step.icon size={32} />
                      </div>
                      <span className="text-[10px] font-black text-white/20 group-hover/icon:text-white transition-colors uppercase tracking-[4px] text-center">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-4">
                Execution is <br />
                <span className="text-gradient-brain">Everything.</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Ideas are easy. Bringing them to life is where most people fail. SmartFuze is built for the long haul. 
              </p>
            </div>

            <div className="space-y-10">
              {steps.slice(0, 3).map((step, i) => (
                <div key={i} className="flex items-start gap-8 group cursor-default">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center text-brain border-l-2 border-brain/20 group-hover:border-brain transition-all duration-300 pl-6">
                    <step.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic uppercase tracking-tight mb-2 group-hover:text-brain transition-colors">{step.title}</h4>
                    <p className="text-white/40 group-hover:text-white/70 leading-relaxed transition-colors font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="pt-8">
                <button className="btn-secondary group">
                  See Our Full Roadmap
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
