import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brain/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuse/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-float" />
      
      <div className="container relative z-10 text-center">
        <div className="flex flex-col items-center space-y-12 max-w-5xl mx-auto">
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
            <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase italic text-white/95">
              We light the <br />
              <span className="text-gradient-brain">Fuze</span> on <br />
              smart ideas.
            </h1>

            <div className="flex flex-col items-center gap-6">
              <p className="text-xl md:text-3xl text-white/50 leading-relaxed max-w-2xl mx-auto font-medium">
                We build mobile apps that are <br />
                <span className="text-white">fun, useful, and actually smart.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
              <button className="btn-brain group text-lg px-12">
                Explore Our Apps
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn-secondary group text-lg px-12 italic uppercase font-black tracking-widest text-xs border-white/5 backdrop-blur-sm">
                See what we&apos;re building
              </button>
            </div>
          </div>

          <div className="pt-24 opacity-20 animate-in fade-in duration-1000 delay-700">
             <p className="text-[10px] font-black uppercase tracking-[0.6em]">Handle with care. Highly explosive.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


