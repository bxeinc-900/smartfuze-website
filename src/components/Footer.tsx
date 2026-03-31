"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-white/5 bg-black">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image src="/assets/logo.png" alt="SmartFuze" fill className="object-contain" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase italic">SmartFuze</span>
            </div>
            <p className="text-white/40 text-lg font-medium leading-relaxed">
              We build mobile apps that are fun, useful, and actually smart. We own our products from spark to scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-spark">Studio</h4>
              <nav className="flex flex-col gap-4">
                <Link href="#studio" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Our Story</Link>
                <Link href="#ignitions" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Ignitions</Link>
                <Link href="#process" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Process</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-spark">Connect</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Instagram</a>
                <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">X / Twitter</a>
                <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              </nav>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-spark">Legal</h4>
                <nav className="flex flex-col gap-4">
                    <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Privacy</Link>
                    <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Terms</Link>
                </nav>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            © {currentYear} SmartFuze Product Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 opacity-20">
             <div className="h-px w-8 bg-white" />
             <div className="flex items-center gap-2">
                <Zap size={14} className="text-brain fill-brain" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em]">Handle with care</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


