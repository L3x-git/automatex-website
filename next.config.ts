import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly pin the workspace root to this project so Turbopack
  // ignores the stray package-lock.json in C:/Users/ADMIN.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;