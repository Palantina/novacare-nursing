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

  async redirects() {
    return [
      {
        source: "/about-palantina",
        destination: "/about-us",
        permanent: true, // 308/301 for SEO
      },
    ];
  },
};

module.exports = nextConfig;
