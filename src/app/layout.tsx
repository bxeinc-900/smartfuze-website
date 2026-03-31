import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SmartFuze | Lighting the fuze on smart ideas",
  description: "SmartFuze is a mobile app studio that builds its own products. We operate at the intersection of creativity, technology, and execution to build apps we believe should exist.",
  keywords: ["SmartFuze", "mobile app studio", "app development", "product studio", "creative technology"],
  openGraph: {
    title: "SmartFuze | Lighting the fuze on smart ideas",
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
    "description": "A creative mobile app studio that builds its own products in Food & Drink, Health & Fitness, and Productivity.",
    "sameAs": [
      "https://x.com/smartfuze",
      "https://github.com/smartfuze",
      "https://linkedin.com/company/smartfuze"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased selection:bg-primary/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
