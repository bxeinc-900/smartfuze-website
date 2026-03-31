import Link from "next/link";
import Image from "next/image";
import { Zap, Mail, ArrowUpRight } from "lucide-react";

const SocialIcon = ({ d, title }: { d: string; title: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-5 h-5 fill-current"
  >
    <title>{title}</title>
    <path d={d} />
  </svg>
);

const socialIcons = [
  { 
    name: "X", 
    href: "https://x.com", 
    d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com", 
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" 
  }
];

export default function Footer() {
  const footerLinks = [
    { name: "Ignitions", href: "#ignitions" },
    { name: "Our Studio", href: "#studio" },
    { name: "The Process", href: "#process" },
    { name: "Get Ignited", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/5 pt-24 pb-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brain/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10 px-4 md:px-0">
          <div className="space-y-10 col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/assets/logo.png"
                  alt="SmartFuze Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase italic leading-none">SmartFuze</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-spark leading-none mt-1">Product Studio</span>
              </div>
            </Link>
            
            <p className="text-lg text-white/40 leading-relaxed max-w-sm font-medium">
              At SmartFuze, we light the <span className="text-brain italic font-black uppercase tracking-tighter">fuze</span> on smart ideas. We build apps we believe should exist.
            </p>
            
            <div className="flex gap-8">
              {socialIcons.map((social) => (
                <Link key={social.name} href={social.href} className="text-white/20 hover:text-brain transition-all duration-300 transform hover:scale-110">
                  <SocialIcon d={social.d} title={social.name} />
                </Link>
              ))}
              <a href="mailto:ignite@smartfuze.com" className="text-white/20 hover:text-fuse transition-all transform hover:scale-110">
                 <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Navigation</h4>
            <div className="flex flex-col gap-6">
              {footerLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-brain transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Studio Philosophy</h4>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-white/30 font-medium leading-relaxed">
                Ideas are easy. Execution is everything. <br />
                Handle with care. Highly explosive products only.
              </p>
              <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-spark">
                <Zap size={14} className="fill-spark animate-pulse" />
                No Clients, Just Creation.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 relative z-10">
          <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartFuze Studio. Engineered for Mobile.
          </p>
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Digital Product Assets</Link>
            <Link href="#" className="hover:text-white transition-colors">Usage Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

