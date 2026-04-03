import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized is required for Cloudflare Pages / edge runtime
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'celiac-scanner.pages.dev',
      },
    ],
  },
};

export default nextConfig;

if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}
