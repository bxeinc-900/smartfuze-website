"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Our Studio", href: "#studio" },
  { name: "Ignitions", href: "#ignitions" },
  { name: "The Process", href: "#process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`glass-nav h-24 flex items-center transition-all duration-700 ${
      scrolled ? "bg-surface-container/80 shadow-2xl" : "bg-transparent"
    }`}>
      <div className="container flex items-center justify-between">
        {/* Animated Logo */}
        <Link href="/" className="flex items-center gap-3 group z-[60]">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/assets/SmartFuze logo_02.png"
              alt="SmartFuze Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter uppercase italic leading-none group-hover:text-gradient-primary transition-all duration-500">SmartFuze</span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-tertiary leading-none mt-1">Product Studio</span>
          </div>
        </Link>

        {/* Studio-Grade Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary !px-6 !py-3">
            Get Ignited
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-[110] p-4 -mr-4 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Kinetic Menu Overlay - Moved outside container for true full-screen */}
      <div className={`fixed inset-0 bg-surface-container/98 backdrop-blur-[60px] z-[100] flex flex-col items-center justify-center transition-all duration-700 md:hidden ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        <div className="flex flex-col items-center gap-12 pt-12">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl font-black uppercase italic tracking-tighter hover:text-gradient-primary transition-all duration-300"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-tertiary mt-8 border-b-2 border-tertiary/20 pb-2"
          >
            Get Ignited
          </Link>
        </div>

        {/* Bottom Metadata for Premium Look */}
        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6">
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/10 italic">Handle with care</span>
        </div>
      </div>
    </nav>
  );
}


