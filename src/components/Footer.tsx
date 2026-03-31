"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="void-section py-32 border-none">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-12 max-w-sm">
            <div className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
                <Image src="/assets/SmartFuze logo_02.png" alt="SmartFuze" fill className="object-contain" />
              </div>
              <span className="font-bebas text-3xl uppercase group-hover:text-gradient-primary transition-all duration-500">SmartFuze</span>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We build mobile apps that are fun, useful, and actually smart. We own our products from spark to scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 font-bebas">
            <div className="space-y-8">
              <h4 className="text-sm uppercase tracking-[0.4em] text-tertiary">Studio</h4>
              <nav className="flex flex-col gap-5">
                <Link href="#studio" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Our Story</Link>
                <Link href="#ignitions" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Ignitions</Link>
                <Link href="#process" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Process</Link>
              </nav>
            </div>
            <div className="space-y-8">
              <h4 className="text-sm uppercase tracking-[0.4em] text-tertiary">Connect</h4>
              <nav className="flex flex-col gap-5">
                <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Instagram</a>
                <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">X / Twitter</a>
                <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">LinkedIn</a>
              </nav>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1 font-bebas">
               <h4 className="text-sm uppercase tracking-[0.4em] text-tertiary">Legal</h4>
                <nav className="flex flex-col gap-5">
                    <Link href="#" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Privacy</Link>
                    <Link href="#" className="text-on-surface-variant hover:text-white transition-colors text-xl uppercase tracking-tighter">Terms</Link>
                </nav>
            </div>
          </div>
        </div>

        <div className="mt-48 pt-20 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-on-surface-variant">
            © {currentYear} SmartFuze Product Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-3">
                <Zap size={14} className="text-primary fill-primary" />
                <span className="text-[10px] font-bebas uppercase tracking-[0.6em]">Handle with care</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


