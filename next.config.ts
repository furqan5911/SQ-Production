import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b15bbd49746c4d96b2482593b2520339.r2.dev",
      },
    ],
  },
};

export default nextConfig;
