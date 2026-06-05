import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-xxc1-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-ord5-3.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 768, 1024, 1200, 1440],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
