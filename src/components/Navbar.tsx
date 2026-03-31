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

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`glass-nav h-24 flex items-center transition-all duration-700 ${
        scrolled ? "bg-surface-container/80 shadow-2xl" : "bg-transparent"
      }`}>
        <div className="container flex items-center justify-between relative px-6 md:px-12">
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
              <span className="font-bebas text-2xl tracking-tighter uppercase leading-none group-hover:text-gradient-primary transition-all duration-500">SmartFuze</span>
            </div>
          </Link>

          {/* Studio-Grade Nav */}
          <div className="hidden md:flex items-center gap-12 font-bebas">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary !px-8 !py-4 font-bebas text-sm">
              Get Ignited
            </Link>
          </div>

          {/* Mobile Toggle - Extreme Top Tier Layering */}
          <button 
            className="md:hidden z-[300] p-4 -mr-4 text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </nav>

      {/* Kinetic Menu Overlay - The Absolute Full Screen */}
      <div 
        className={`fixed inset-0 z-[250] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ backgroundColor: '#121212' }}
      >
        {/* Editorial Glow Background */}
        <div className="absolute top-1/4 left-1/4 w-[150%] h-[150%] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex flex-col items-center gap-10 z-10 font-bebas">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-6xl uppercase tracking-tighter hover:text-gradient-primary transition-all duration-300"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-3xl uppercase tracking-[0.3em] text-tertiary mt-12 border-b-2 border-tertiary/20 pb-2"
          >
            Get Ignited
          </Link>
        </div>

        {/* Studio Identifier Footer */}
        <div className="absolute bottom-16 w-full flex flex-col items-center gap-10 z-10 px-8">
          <div className="flex gap-12 text-sm font-bebas uppercase tracking-[0.3em] text-on-surface-variant">
            <a href="#" className="hover:text-white transition-colors">Insta</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">In</a>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
             <span className="text-[10px] font-medium tracking-[0.6em] text-white/20 uppercase">Handle with care</span>
             <p className="text-[9px] text-on-surface-variant uppercase tracking-[0.2em]">Kinetic Luminary Design System v2.0</p>
          </div>
        </div>
      </div>
    </>
  );
}


