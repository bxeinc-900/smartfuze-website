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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/assets/logo.png"
              alt="SmartFuze Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter uppercase italic leading-none">SmartFuze</span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-spark leading-none mt-1">Product Studio</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
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
          className="md:hidden z-50 p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-12 transition-all duration-700 md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}>
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase italic tracking-tighter hover:text-brain transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-spark"
          >
            Get Ignited
          </Link>
        </div>
      </div>
    </nav>
  );
}


