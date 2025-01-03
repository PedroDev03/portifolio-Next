/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**",
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.cache = false; // Desativa o cache do Webpack
    return config;
  },
};

export default nextConfig;
