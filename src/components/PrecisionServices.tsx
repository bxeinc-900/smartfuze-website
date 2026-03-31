import { Heart, Zap, Coffee, Clock, Sparkles } from "lucide-react";

const principles = [
  {
    title: "Simple. Useful. Fun.",
    desc: "If it doesn't make sense, or it doesn't make life better—we don't build it.",
    icon: Sparkles,
  },
  {
    title: "Ideas are easy. Execution is everything.",
    desc: "Every app starts as a spark—and ends as something people use every day.",
    icon: Zap,
  },
  {
    title: "Built in-house. Always.",
    desc: "From idea to launch, everything we create is designed, built, and managed by us.",
    icon: Heart,
  }
];

export default function PrecisionServices() {
  return (
    <section id="studio" className="py-24 md:py-48 relative overflow-hidden bg-black">
      <div className="container relative z-10">
        {/* Main Philosophy Block */}
        <div className="max-w-5xl mx-auto space-y-12 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="section-subtitle">Our Philosophy</span>
          <h2 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85]">
            No clients. <br />
            <span className="text-gradient-brain">Just creation.</span>
          </h2>
          <p className="text-white/40 text-2xl md:text-4xl max-w-3xl leading-relaxed font-medium pt-4">
            We don’t build apps for other companies. <br />
            <span className="text-white">We build the ones we believe should exist.</span>
          </p>
        </div>
        
        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-32">
          {principles.map((principle, i) => (
            <div key={i} className="space-y-6 group">
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-brain transition-colors duration-500">
                <principle.icon size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight leading-tight">{principle.title}</h3>
              <p className="text-white/40 text-lg leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Niche Categories */}
        <div className="pt-24 border-t border-white/5">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">What we build</h4>
                <div className="flex flex-wrap gap-8 md:gap-16">
                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-brain/10 flex items-center justify-center text-brain group-hover:scale-110 transition-transform">
                            <Coffee size={18} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Food & Drink</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-fuse/10 flex items-center justify-center text-fuse group-hover:scale-110 transition-transform">
                            <Heart size={18} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Health & Fitness</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-spark/10 flex items-center justify-center text-spark group-hover:scale-110 transition-transform">
                            <Clock size={18} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Productivity</span>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}


