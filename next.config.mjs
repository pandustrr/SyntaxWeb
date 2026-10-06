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
};

export default nextConfig;
