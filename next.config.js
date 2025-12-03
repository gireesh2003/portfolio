/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'picsum.photos'],
  },
};

module.exports = nextConfig;
