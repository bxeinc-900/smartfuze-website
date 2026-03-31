import { 
  Database, 
  Cloud, 
  Zap, 
  Lock, 
  Globe, 
  Cpu, 
  RefreshCw, 
  ShieldCheck 
} from "lucide-react";

export default function IntegrationsMosaic() {
  const integrations = [
    { icon: Database, label: "PostgreSQL", color: "#336791" },
    { icon: Cloud, label: "AWS", color: "#FF9900" },
    { icon: Zap, label: "FastAPI", color: "#05998B" },
    { icon: Lock, label: "Auth0", color: "#EB5424" },
    { icon: Globe, label: "Firebase", color: "#FFCA28" },
    { icon: Cpu, label: "OpenAI", color: "#412991" },
    { icon: RefreshCw, label: "HubSpot", color: "#FF7A59" },
    { icon: ShieldCheck, label: "Okta", color: "#007DC1" },
  ];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Fused with your <span className="text-primary">entire ecosystem</span>.</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            SmartFuze connects natively with 100+ platforms out of the box. No custom code required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {integrations.map((item, i) => (
            <div 
              key={i} 
              className="card flex flex-col items-center justify-center p-8 gap-4 group cursor-default"
            >
              <div 
                className="p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                <item.icon size={32} />
              </div>
              <span className="text-sm font-bold text-white/60 tracking-wider group-hover:text-white transition-colors uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mosaic "Glow" Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
      </div>
    </section>
  );
}
