import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brain/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuse/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-float" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
          <div className="animate-in fade-in zoom-in duration-1000">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 drop-shadow-[0_0_35px_var(--color-brain-glow)]">
              <Image 
                src="/assets/logo.png"
                alt="SmartFuze Logo"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="inline-flex items-center gap-2 glass-dark px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-spark border-spark/20">
              <Zap size={14} className="fill-spark animate-pulse" />
              Highly Explosive Ideas
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase italic">
              EXPLOSIVE <br />
              <span className="text-gradient-brain">Ideas</span>
            </h1>

            <div className="flex flex-col items-center gap-4">
              <p className="text-xl md:text-3xl font-bold uppercase tracking-tight text-white/90">
                Engineered for Mobile.
              </p>
              <p className="text-base md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto font-medium">
                At SmartFuze, we light the fuze on smart ideas. <br className="hidden md:block" />
                We don&apos;t build for clients. We build what should exist.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
              <button className="btn-brain group text-lg">
                Get Ignited
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn-secondary group text-lg">
                View Our Studio
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pt-24 animate-in fade-in duration-1000 delay-700">
            <span className="hover:text-brain transition-colors cursor-default">Food & Drink</span>
            <div className="h-1.5 w-1.5 rounded-full bg-brain/40" />
            <span className="hover:text-fuse transition-colors cursor-default">Health & Fitness</span>
            <div className="h-1.5 w-1.5 rounded-full bg-fuse/40" />
            <span className="hover:text-spark transition-colors cursor-default">Productivity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

