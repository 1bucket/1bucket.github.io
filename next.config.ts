import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Forces Next.js to build a static 'out' folder
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // Disables image optimization (not supported on GH Pages)
  },
};

export default nextConfig;
