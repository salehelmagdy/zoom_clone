import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDir: true,
    turbo: true,
    // Ensure Turbopack is enabled
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
