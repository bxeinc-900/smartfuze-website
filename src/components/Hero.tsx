import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Now in Early Access: Fusion 2.0
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Ignite Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Data Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg">
              SmartFuze seamlessly integrates, visualizes, and harnesses your most complex data streams into actionable insights. Fusion at the speed of thought.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary group">
                Schedule a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary inline-flex items-center gap-2 group">
                <span className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                  <Play size={16} fill="white" />
                </span>
                Watch the Video
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-white/40 uppercase tracking-widest pt-8">
              Trusted By
              <div className="h-[1px] w-12 bg-white/10" />
              <span className="text-white/60">DataCorp</span>
              <span className="text-white/60">InsightFlow</span>
              <span className="text-white/60">NexusAI</span>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative glass p-4 rounded-3xl overflow-hidden shadow-2xl border-white/10">
              <Image 
                src="/assets/SmartFuze logo_02.png"
                alt="SmartFuze Dashboard"
                width={800}
                height={500}
                className="rounded-2xl w-full h-auto object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
            
            {/* Floating Glass Element */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl border-white/10 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <Play size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium">REAL-TIME SYNC</div>
                  <div className="text-sm font-bold">128 data streams fused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
