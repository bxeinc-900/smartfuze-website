import { ArrowRight, Zap, Target } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-48 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brain/10 blur-[200px] -z-10 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-fuse/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container px-4 text-center space-y-16 relative">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark border border-brain/20 text-xs font-black uppercase tracking-[0.3em] text-white">
            <Zap size={14} className="text-fuse fill-fuse animate-pulse" />
            Highly Explosive Ideas
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-[9rem] font-black italic tracking-tighter leading-[0.85] mb-4 uppercase">
            Light <br />
            <span className="text-gradient-brain">the Fuze.</span>
          </h2>
          <p className="text-white/60 text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-medium">
            Some ideas deserve to exist. We build those. <br />
            <span className="text-white">What's your next big spark?</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-12">
          <button className="btn-brain px-12 py-6 text-xl group w-full sm:w-auto">
            Our Apps
            <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary px-12 py-6 text-xl w-full sm:w-auto hover:bg-white/10 uppercase tracking-widest font-black italic">
            Get in Touch
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-[10px] text-white/20 mt-12 flex items-center justify-center gap-3 uppercase tracking-[0.4em] font-black">
          <Target size={14} /> Built in-house. No clients. No fluff.
        </p>
      </div>
    </section>
  );
}
