import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Potential Future Sections: Capabilities, Testimonials, CTA */}
      <section id="capabilities" className="py-24 md:py-48">
        <div className="container px-4">
          <div className="max-w-3xl space-y-4 mb-24">
            <h2 className="text-4xl md:text-5xl font-bold">Unrivaled capabilities in <span className="text-primary">high-speed fusion</span>.</h2>
            <p className="text-white/40 text-lg leading-relaxed">
              We've built the most resilient, high-throughput engine for fusing disparate data sources into a single source of truth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Universal Adapters", desc: "Connect any data stream, from legacy databases to real-time events." },
              { title: "Dynamic Scaling", desc: "Auto-scaling infrastructure that adjusts to your data velocity in milliseconds." },
              { title: "Neural Synthesis", desc: "AI-driven mapping that identifies patterns across isolated silos." }
            ].map((cap, i) => (
              <div key={i} className="card p-12 space-y-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="font-bold text-xl">{i+1}</span>
                </div>
                <h3 className="text-2xl font-bold">{cap.title}</h3>
                <p className="text-white/40 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 bg-primary/5 border-y border-primary/10 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/10 blur-[150px] -translate-y-1/2 -z-10" />
        <div className="container px-4 text-center space-y-12 relative">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Ready to fuse your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">entire infrastructure?</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Join the early access program and see what SmartFuze can do for your specific data challenges today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button className="btn-primary px-12 py-5 text-lg">Request Access Now</button>
            <button className="btn-secondary px-12 py-5 text-lg">Speak With an Architect</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
