/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/weather',
  eslint: {
    dirs: ['.']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
