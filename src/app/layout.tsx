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
  title: "SmartFuze | The Future of Data Fusion",
  description: "Seamlessly integrate, visualize, and harness your most complex data streams with SmartFuze's next-level intelligence engine.",
  keywords: ["data fusion", "AI intelligence", "data visualization", "enterprise data", "SmartFuze"],
  openGraph: {
    title: "SmartFuze | The Future of Data Fusion",
    description: "The next-level intelligence engine for complex data streams.",
    type: "website",
    url: "https://smartfuze.com",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
