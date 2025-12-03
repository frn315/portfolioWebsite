/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.jsdelivr.net", "cdn.simpleicons.org", "cdn-icons-png.flaticon.com", "avatars.githubusercontent.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
