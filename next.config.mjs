/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Tells Next.js to export as static HTML files
    basePath: '', // Remove basePath if you're using custom domains like adityaajay.dev
    trailingSlash: true, // Adds trailing slash to URLs (e.g., `/about/`)
    images: {
      unoptimized: true, // Disable image optimization since GitHub Pages doesn't support it
    },
  };
  
export default nextConfig;