import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
  // Se você precisar de suporte a imagens de domínios externos
  images: {
    domains: [], // adicione os domínios necessários aqui
  },
};

export default nextConfig;
