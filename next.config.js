/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Removed 'standalone' output for Vercel compatibility
  // Vercel handles the deployment automatically
}

module.exports = nextConfig