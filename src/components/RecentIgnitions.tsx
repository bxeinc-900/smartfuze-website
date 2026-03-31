"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    title: "VaultX Pro",
    category: "Productivity",
    desc: "The last file manager you'll ever need. Secure, fast, and remarkably simple.",
    image: "/assets/vaultx.png",
    color: "from-brain/20 to-transparent"
  },
  {
    title: "VibeCheck",
    category: "Entertainment",
    desc: "A new way to experience music and mood. Designed for the niche rhythm seeker.",
    image: "/assets/logo.png",
    color: "from-fuse/20 to-transparent"
  }
];

export default function RecentIgnitions() {
  return (
    <section id="ignitions" className="section-padding bg-white/[0.01]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-32">
        <div className="space-y-4">
          <span className="section-subtitle">The Portfolio</span>
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Recent <br />
            <span className="text-gradient-brain">Ignitions.</span>
          </h2>
        </div>
        <p className="text-white/40 text-lg md:text-xl max-w-md font-medium">
          A small selection of the products we&apos;ve built, launched, and own. 
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {apps.map((app, i) => (
          <div key={i} className="glass-card group cursor-pointer flex flex-col p-6 md:p-8">
            <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[2rem]">
               <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
               <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-0" />
               {app.image && (
                 <div className="relative w-full h-full">
                    <Image 
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 z-5"
                    />
                 </div>
               )}
               <div className="absolute top-6 right-6 z-20">
                    <div className="h-12 w-12 rounded-full glass border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight size={24} />
                    </div>
               </div>
            </div>
            
            <div className="space-y-4 mt-auto">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-spark">
                 {app.category}
               </span>
               <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
                 {app.title}
               </h3>
               <p className="text-white/40 text-lg leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                 {app.desc}
               </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-20 flex justify-center">
         <button className="btn-glass px-12 italic uppercase font-black tracking-widest">
            Explore All Products
         </button>
      </div>
    </section>
  );
}


