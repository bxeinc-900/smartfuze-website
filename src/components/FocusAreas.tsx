import { Layout, Smartphone, PieChart, ArrowRight } from "lucide-react";

const precisionServices = [
  {
    title: "App Design",
    desc: "Intuitive UI/UX that captures attention and provides frictionless journeys. We design for clarity and conversion.",
    icon: Layout,
    color: "from-brain/20 to-transparent",
    linkText: "Explore Design"
  },
  {
    title: "Native Development",
    desc: "High-performance iOS and Android apps built with Swift, Kotlin, and Flutter. Speed, stability, and scale.",
    icon: Smartphone,
    color: "from-fuse/20 to-transparent",
    linkText: "Learn Tech Stack"
  },
  {
    title: "Product Strategy",
    desc: "From MVP to scale. Data-driven roadmaps to ensure market explosion. We build for the long term.",
    icon: PieChart,
    color: "from-spark/20 to-transparent",
    linkText: "View Strategy"
  }
];

export default function PrecisionServices() {
  return (
    <section id="studio" className="py-24 md:py-48 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-brain/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-fuse/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl space-y-6 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="section-subtitle">What we do</span>
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Precision <br />
            <span className="text-gradient-brain">Services.</span>
          </h2>
          <p className="text-white/50 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium pt-4">
            Built for Speed. Designed for Impact. <br />
            We specialize in bringing high-performance mobile products to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {precisionServices.map((service, i) => (
            <div 
              key={i} 
              className="group glass-dark p-8 lg:p-12 space-y-8 hover:border-brain/20 transition-all duration-700 relative rounded-[3rem] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-brain transition-all duration-500 shadow-xl group-hover:scale-110">
                  <service.icon size={32} />
                </div>
                
                <div className="mt-10 space-y-6">
                  <h3 className="text-3xl font-black tracking-tight uppercase italic">{service.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/70 transition-colors font-medium">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4">
                    <button className="flex items-center gap-2 text-spark font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all opacity-60 group-hover:opacity-100">
                      {service.linkText}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

