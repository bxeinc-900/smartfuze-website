import { Database, Zap, Cpu, Code2, Shield, Globe } from "lucide-react";

export default function ArchitectureDeepDive() {
  const steps = [
    { title: "Ingest", icon: Database, desc: "Connect any raw stream with sub-millisecond handshake." },
    { title: "Normalize", icon: Zap, desc: "AI-driven mapping ensures schema consistency across sources." },
    { title: "Fuse", icon: Cpu, desc: "Neural synthesis merges data into a single, logical fabric." },
    { title: "Audit", icon: Shield, desc: "Every transaction is cryptographically verified and logged." },
    { title: "Distribute", icon: Globe, desc: "Universal GraphQL or REST endpoints let you consume data globally." },
    { title: "Trigger", icon: Code2, desc: "Custom Webhooks and Logic-Fires respond to real-time events." }
  ];

  return (
    <section id="architecture" className="py-24 md:py-48 overflow-hidden relative border-y border-white/5 bg-black/40">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
            
            <div className="glass rounded-[var(--radius-4xl)] p-2 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              <div className="space-y-12 relative z-10 px-4 md:px-0">
                <div className="text-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-6">
                    Logical Architecture
                  </div>
                  <h3 className="text-3xl font-bold">The Fusion Protocol</h3>
                  <p className="text-white/40 mt-4 max-w-md mx-auto">
                    A proprietary multi-layered approach to consolidating Enterprise Intelligence.
                  </p>
                </div>

                <div className="relative h-[300px] w-full flex items-center justify-center">
                  {/* Hexagon System */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
                    {steps.map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-4 group/icon">
                        <div className="h-16 w-16 md:h-20 md:w-20 rounded-3xl glass-strong border border-white/10 flex items-center justify-center text-white/40 group-hover/icon:text-primary transition-all duration-500 scale-90 group-hover/icon:scale-110">
                          <step.icon size={32} />
                        </div>
                        <span className="text-sm font-bold text-white/20 group-hover/icon:text-white transition-colors uppercase tracking-[3px] text-center">{step.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Lines (Simulated with absolute orbs) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full animate-ping" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/40 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4">
                Architecture that <br />
                <span className="text-primary-light">never breaks.</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-xl">
                SmartFuze doesn't just copy data; it creates a dynamic, synchronized reflection of your entire business. 
              </p>
            </div>

            <div className="space-y-10">
              {steps.slice(0, 3).map((step, i) => (
                <div key={i} className="flex items-start gap-8 group">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center text-primary-light border-l border-primary/40 group-hover:border-primary transition-all duration-300 pl-4">
                    <step.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">{step.title} & Unify</h4>
                    <p className="text-white/40 group-hover:text-white/60 leading-relaxed transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
