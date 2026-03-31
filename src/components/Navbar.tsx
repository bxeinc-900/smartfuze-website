"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Apps", href: "#apps" },
    { name: "Process", href: "#process" },
    { name: "Studio", href: "#studio" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark py-4" : "py-8"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-all group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(212,45,47,0.3)] group-hover:scale-110 transition-transform">
            <Image
              src="/assets/SmartFuze logo_02.png"
              alt="SmartFuze Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl md:text-2xl tracking-tighter uppercase italic leading-[0.8]">SmartFuze</span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-spark leading-none mt-1">Studio</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brain transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="#contact" className="btn-secondary py-2.5 px-6 text-[11px] font-black tracking-[0.1em] flex items-center gap-2 group border-white/5 uppercase italic hover:border-brain/30">
            Light the Fuze
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-fuse" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 glass rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black animate-in fade-in duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-12 p-8">
             <button 
              className="absolute top-8 right-8 text-white p-2 glass rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-4xl font-black uppercase italic tracking-tighter hover:text-brain transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="btn-brain w-full justify-center mt-8 text-xl italic uppercase font-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Light the Fuze
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

