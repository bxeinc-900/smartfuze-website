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
      <div className="container flex items-center justify-between relative">
        {/* Animated Logo */}
        <Link href="/" className="flex items-center gap-3 group z-[60]">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/assets/SmartFuze logo_02.png"
              alt="SmartFuze Logo"
              fill
              sizes="40px"
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

        {/* Mobile Toggle - Elevated above overlay */}
        <button 
          className="md:hidden z-[210] p-4 -mr-4 text-white hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Kinetic Menu Overlay - Solid Hex Background for Zero Bleed-through */}
      <div className={`fixed inset-0 bg-[#121212] z-[200] flex flex-col items-center justify-center transition-all duration-700 md:hidden ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        {/* Ambient Glow for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col items-center gap-12 z-10">
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
            className="text-3xl font-black uppercase tracking-widest text-tertiary mt-8 border-b-2 border-tertiary/20 pb-2"
          >
            Get Ignited
          </Link>
        </div>

        {/* Bottom Metadata - Re-aligned to center */}
        <div className="absolute bottom-16 w-full flex flex-col items-center gap-8 z-10 px-6">
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-[10px] font-medium text-center text-on-surface-variant max-w-xs leading-relaxed">
            We light the fuze on smart ideas. <br />
            <span className="text-white/10 italic text-[8px] uppercase tracking-[0.4em] mt-3 block">Handle with care</span>
          </p>
        </div>
      </div>
    </nav>
  );
}


