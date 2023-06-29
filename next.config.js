/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.dog.ceo", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.hubspot.com",
        port: "",
        pathname:
          "/hs-fs/hubfs/parts-url-hero.jpg",
      },
    ],
  },
};

module.exports = nextConfig
