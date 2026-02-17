import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    root: '/home/roach/Projects/sites/ce206',
  },
  reactCompiler: true,
};

export default nextConfig;
