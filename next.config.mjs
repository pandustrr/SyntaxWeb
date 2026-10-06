import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  // Batasi worker untuk cPanel shared hosting (mencegah EAGAIN / nproc limit)
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
