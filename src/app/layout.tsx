import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SmartFuze | We light the fuze on smart ideas",
  description: "SmartFuze is a premium product studio building mobile apps that are fun, useful, and actually smart. We own our products from spark to scale.",
  keywords: ["SmartFuze", "product studio", "mobile app studio", "creative technology", "app engineering"],
  openGraph: {
    title: "SmartFuze | We light the fuze on smart ideas",
    description: "Built to spark something bigger. We build the apps we believe should exist.",
    type: "website",
    url: "https://smartfuze.com",
    images: ["/assets/SmartFuze logo_02.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SmartFuze",
    "url": "https://smartfuze.com",
    "logo": "https://smartfuze.com/assets/SmartFuze logo_02.png",
    "description": "A premium product studio that builds its own products in Food & Drink, Health & Fitness, and Productivity.",
    "sameAs": [
      "https://x.com/smartfuze",
      "https://github.com/smartfuze",
      "https://linkedin.com/company/smartfuze"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${plusJakartaSans.variable} ${bebasNeue.variable} font-sans antialiased selection:bg-primary/30 text-white bg-background`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
