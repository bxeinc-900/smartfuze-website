import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "The Fuse", href: "#" },
    { name: "Capabilities", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
  ];

  return (
    <footer className="border-t border-white/5 pt-24 pb-12 bg-black/40 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16 px-4 md:px-0">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/new SmartFuze logo_03 small.png"
                alt="SmartFuze Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl tracking-tight">SmartFuze</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Fusing data, intelligence, and business logic into a single, cohesive engine for state-of-the-art companies.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <Link key={idx} href="#" className="p-2 glass rounded-lg text-white/60 hover:text-white transition-colors">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80">Platform</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80">Resources</h4>
            <div className="flex flex-col gap-4">
              {["API Reference", "Status", "Changelog", "Security"].map((item) => (
                <Link key={item} href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80">Newsletter</h4>
            <p className="text-sm text-white/40">
              Get the latest updates on data intelligence.
            </p>
            <div className="flex glass rounded-full p-1 pl-4 border-white/10 group focus-within:border-primary transition-colors">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-transparent border-none outline-none text-sm text-white flex-1 placeholder:text-white/20"
              />
              <button className="bg-primary p-2 rounded-full text-white hover:brightness-110 transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 px-4 md:px-0">
          <p className="text-xs text-white/20 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartFuze AI Corp. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
