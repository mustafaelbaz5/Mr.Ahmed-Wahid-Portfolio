import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — deployable to any host (Vercel, Netlify, GitHub Pages…)
  output: "export",
  // Static export cannot use the on-demand image optimizer.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
