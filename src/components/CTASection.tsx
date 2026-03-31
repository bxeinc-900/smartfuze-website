import { ArrowRight, Lock, Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-48 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/20 blur-[200px] -z-10 rounded-full animate-pulse" />
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/15 blur-[150px] -z-10 rounded-full" />
      
      <div className="container px-4 text-center space-y-16 relative">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary-light">
            <Lock size={14} className="animate-pulse" />
            Limited Beta Now Available
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-4">
            Think globally, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
              fuse seamlessly.
            </span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Stop stitching and start building. Secure your spot in the early access program and see what SmartFuze can do for your business.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-12">
          <button className="btn-primary px-12 py-6 text-xl group w-full sm:w-auto">
            Secure Early Access 
            <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary px-12 py-6 text-xl w-full sm:w-auto hover:bg-white/10">
            Speak with an AI Architect
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-white/20 mt-12 flex items-center justify-center gap-2 uppercase tracking-widest">
          <Rocket size={14} /> 14-day expedited onboarding for selected partners
        </p>
      </div>
    </section>
  );
}
