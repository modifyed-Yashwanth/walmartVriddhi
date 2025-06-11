import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "docs.walmartvriddhi.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
