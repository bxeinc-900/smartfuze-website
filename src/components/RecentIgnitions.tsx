"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    title: "Celiac Scanner",
    category: "Health & Fitness",
    desc: "The only AI-powered digital guardian for gluten-free living. Cross-referencing 30+ medical authorities in real-time.",
    image: "https://celiac-scanner-website.vercel.app/_next/image?url=%2Fmockups_person%2Fscanner.png&w=1080&q=75",
    color: "from-primary/20 to-transparent",
    href: "/celiac-scanner"
  },
  {
    title: "VibeCheck",
    category: "Entertainment",
    desc: "A new way to experience music and mood. Designed for the niche rhythm seeker.",
    image: "/assets/logo.png",
    color: "from-secondary/20 to-transparent"
  }
];

export default function RecentIgnitions() {
  return (
    <section id="ignitions" className="void-section">
      <div className="container section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="flex flex-col items-start gap-4">
            <span className="label-md">Recent Ignitions</span>
            <h2 className="display-lg">
              The apps we <br />
              <span className="text-gradient-primary">brought to life.</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-sm">
            A small selection of the products we&apos;ve built, launched, and own. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {apps.map((app, i) => (
            <Link href={app.href || "#"} key={i} className="glass-card group cursor-pointer flex flex-col p-6 md:p-8">
              <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[1.5rem]">
                 <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
                 <div className="absolute inset-0 bg-surface-variant/40 group-hover:bg-transparent transition-colors z-0" />
                 {app.image && (
                   <div className="relative w-full h-full">
                      <Image 
                        src={app.image}
                        alt={app.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 z-5"
                      />
                   </div>
                 )}
                 <div className="absolute top-6 right-6 z-20">
                      <div className="h-14 w-14 rounded-full bg-surface-variant/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <ArrowUpRight size={28} />
                      </div>
                 </div>
              </div>
              
              <div className="space-y-4 mt-auto">
                 <span className="text-[10px] font-bebas uppercase tracking-[0.4em] text-tertiary">
                   {app.category}
                 </span>
                 <h3 className="text-3xl md:text-5xl font-bebas uppercase tracking-tighter">
                   {app.title}
                 </h3>
                 <p className="text-on-surface-variant text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                   {app.desc}
                 </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
           <button className="btn-glass px-12 italic uppercase font-black tracking-widest">
              Explore All Products
           </button>
        </div>
      </div>
    </section>
  );
}


