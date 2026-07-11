/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.guim.co.uk",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "static1.squarespace.com",
      },
      {
        protocol: "http",
        hostname: "static1.squarespace.com",
      },
      {
        protocol: "https",
        hostname: "cdn.presskithero.com",
      },
      {
        protocol: "https",
        hostname: "film-business.com",
      },
    ],
  },
};

module.exports = nextConfig;
