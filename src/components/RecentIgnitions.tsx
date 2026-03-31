import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ignitions = [
  {
    name: "VaultX Pro",
    tag: "FinTech",
    desc: "The next generation of decentralized finance management. Secure, fast, and highly explosive.",
    image: "/assets/vaultx.png",
    featured: true,
    color: "from-brain/20 to-transparent"
  },
  {
    name: "VibeCheck",
    tag: "Social",
    desc: "A mood-first social experience designed for the next generation.",
    image: null,
    featured: false,
    color: "from-fuse/20 to-transparent"
  },
  {
    name: "PulseFlow",
    tag: "Health",
    desc: "Real-time biometric insights for elite performance.",
    image: null,
    featured: false,
    color: "from-spark/20 to-transparent"
  }
];

export default function RecentIgnitions() {
  return (
    <section id="ignitions" className="py-24 md:py-48 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-4">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Recent <br />
              <span className="text-gradient-brain">Ignitions.</span>
            </h2>
          </div>
          <div className="max-w-md">
             <p className="text-white/40 text-lg font-medium leading-relaxed">
              We don&apos;t build for everyone. We build for the gaps. <br />
              Our studio creates products that rethink categories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Card */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-[3rem] glass-dark border border-white/5 hover:border-brain/20 transition-all duration-700 h-[500px] md:h-[650px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000">
               {ignitions[0].image ? (
                <Image 
                  src={ignitions[0].image} 
                  alt={ignitions[0].name} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                />
               ) : (
                <div className="w-full h-full bg-white/5" />
               )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brain bg-brain/10 px-4 py-1.5 rounded-full border border-brain/20">
                {ignitions[0].tag}
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">{ignitions[0].name}</h3>
              <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium">
                {ignitions[0].desc}
              </p>
              <div className="pt-6">
                 <button className="flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-xs group/btn">
                    Launch Case Study <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
              </div>
            </div>
          </div>

          {/* Side Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {ignitions.slice(1).map((app, i) => (
              <div 
                key={app.name}
                className="flex-1 group relative overflow-hidden rounded-[2.5rem] glass-dark border border-white/5 hover:border-fuse/20 transition-all duration-700 p-8 flex flex-col justify-end min-h-[300px]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-fuse">
                    {app.tag}
                  </span>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">{app.name}</h3>
                  <p className="text-white/40 group-hover:text-white/60 transition-colors font-medium">
                    {app.desc}
                  </p>
                  <div className="pt-4">
                    <ArrowUpRight size={24} className="text-white/20 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
            <button className="btn-secondary px-12 italic uppercase tracking-widest text-xs font-black">
              View All Ignitions
            </button>
        </div>
      </div>
    </section>
  );
}

