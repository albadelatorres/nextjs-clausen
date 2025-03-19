import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Habilita la exportación estática
  images: {
    unoptimized: true, // Evita la optimización de imágenes (necesario para sitios estáticos)
  },
  devIndicators: {
    appIsrStatus: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
