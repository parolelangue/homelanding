import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { staleTimes: { dynamic: 0, static: 0 } },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['asamvn.com.vn'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'asamvn.com.vn',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'asamvn.com.vn',
        pathname: '/upload/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;
