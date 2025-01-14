/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML Export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static exports
}

export default nextConfig
