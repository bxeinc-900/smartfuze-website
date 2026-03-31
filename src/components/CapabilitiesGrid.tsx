import { Cpu, Zap, ShieldCheck, Layers, GitBranch, Database } from "lucide-react";

const capabilities = [
  {
    title: "Universal Data Adapters",
    desc: "Seamlessly ingest data from any source—REST, GraphQL, gRPC, or legacy SQL. SmartFuze normalizes every byte into actionable intelligence.",
    icon: Database,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Neural Mapping Engine",
    desc: "Autonomous schema detection and semantic mapping. Let our AI identify relationships across siloed infrastructure without manual configuration.",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Millisecond Latency",
    desc: "Built on a zero-copy data fabric. Processes millions of events per second with sub-5ms latency for critical real-time decision making.",
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Enterprise Security",
    desc: "End-to-end encryption with granular RBAC and SOC2 compliance. Your data fusion remains private, secure, and fully auditable.",
    icon: ShieldCheck,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Multi-Cloud Fabric",
    desc: "Deploy across AWS, Azure, and GCP simultaneously. Unite your multi-cloud strategy into a single, cohesive logical layer.",
    icon: Layers,
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Logic Orchestration",
    desc: "Define complex business logic at the fusion layer. Trigger events and workflows directly as data merges and transforms.",
    icon: GitBranch,
    color: "from-rose-500/20 to-red-500/20"
  }
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="py-24 md:py-48 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container px-4">
        <div className="max-w-3xl space-y-4 mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Unrivaled capabilities for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">state-of-the-art</span> companies.
          </h2>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
            We've built the most resilient, high-throughput engine for fusing disparate data sources into a single source of truth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className="group card p-8 lg:p-10 space-y-6 hover:border-white/20 transition-all duration-500 relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[var(--radius-3xl)]`} />
              
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                  <cap.icon size={28} />
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">{cap.title}</h3>
                  <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
