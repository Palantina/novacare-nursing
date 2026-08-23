/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // optional: Pixabay
      },
      {
        protocol: "https",
        hostname: "cdn.pexels.com", // optional: Pexels
      },
    ],
  },
};

module.exports = nextConfig;
