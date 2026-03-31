import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Zap } from "lucide-react";

const SocialIcon = ({ d, title }: { d: string; title: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-5 h-5 fill-current"
  >
    <title>{title}</title>
    <path d={d} />
  </svg>
);

const socialIcons = [
  { 
    name: "X", 
    href: "https://x.com", 
    d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com", 
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com", 
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
  }
];

export default function Footer() {
  const footerLinks = [
    { name: "Our Apps", href: "#apps" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/5 pt-24 pb-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brain/5 blur-[120px] -z-10 rounded-full" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 px-4 md:px-0">
          <div className="space-y-8 col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <Image
                  src="/assets/SmartFuze logo_02.png"
                  alt="SmartFuze Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase italic">SmartFuze</span>
            </Link>
            <p className="text-lg text-white/40 leading-relaxed max-w-sm font-medium">
              At SmartFuze, we light the <span className="text-white italic">fuze</span> on smart ideas. We build apps we believe should exist.
            </p>
            <div className="flex gap-6">
              {socialIcons.map((social) => (
                <Link key={social.name} href={social.href} className="text-white/20 hover:text-brain transition-colors">
                  <SocialIcon d={social.d} title={social.name} />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Explore</h4>
            <div className="flex flex-col gap-5">
              {footerLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Studio</h4>
            <div className="flex flex-col gap-5">
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Based in the overlap of creativity & execution. Handle with care. Highly explosive ideas only.
              </p>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-fuse">
                <Zap size={14} className="fill-fuse" />
                No Clients, Just Creation.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 opacity-40">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartFuze Studio. All rights reserved.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
