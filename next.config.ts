import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['tailwindcss'],
  },
};

export default nextConfig;
