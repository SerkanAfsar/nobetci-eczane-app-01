import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
};

export default nextConfig;
