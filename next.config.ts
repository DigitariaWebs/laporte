import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable critters-based CSS inlining to avoid missing module in Vercel build
  experimental: {
    // optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
