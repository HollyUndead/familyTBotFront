import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  output: "export",
  allowedDevOrigins: ["wireless-kiln-departure.ngrok-free.dev"],
};

export default nextConfig;
