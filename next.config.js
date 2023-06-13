/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    distDir: 'build',
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.genshin.dev'
      }
    ]
  }
}

module.exports = nextConfig
