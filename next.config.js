/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true, // 必要であれば
    },
    }

module.exports = nextConfig