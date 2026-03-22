/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for directory-based routing on static hosts
  trailingSlash: true,
};


export default nextConfig;
