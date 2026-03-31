import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'celiac-scanner-website.vercel.app',
      },
    ],
  },
};

export default nextConfig;
