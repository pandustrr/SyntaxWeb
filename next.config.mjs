import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Batasi worker untuk cPanel shared hosting (mencegah EAGAIN / nproc limit)
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization, X-Requested-With' },
        ],
      },
    ];
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/core': path.resolve(__dirname, 'src/core'),
      '@/config': path.resolve(__dirname, 'src/config/constants.ts'),
      '@/modules/shared': path.resolve(__dirname, 'src/modules/shared/index.ts'),
      '@/modules/home': path.resolve(__dirname, 'src/modules/home/index.ts'),
      '@/modules/contact': path.resolve(__dirname, 'src/modules/contact/index.ts'),
      '@/modules/portfolio': path.resolve(__dirname, 'src/modules/portfolio/index.ts'),
      '@/modules/pricelist': path.resolve(__dirname, 'src/modules/pricelist/index.ts'),
      '@/modules/admin': path.resolve(__dirname, 'src/modules/admin/index.ts'),
    };
    return config;
  },
};

export default nextConfig;
