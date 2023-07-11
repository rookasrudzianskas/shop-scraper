/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: [
      'images.unsplash.com', 'links.papareact.com', 'upload.wikimedia.org'
    ]
  }
}

module.exports = nextConfig
