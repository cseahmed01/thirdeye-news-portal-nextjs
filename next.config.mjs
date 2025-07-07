/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // cdn.zzazzo.com
      {
        protocol: "http",
        hostname: "cdn.zzazzo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Optional: Alternative approach using rewrites (comment out if using API routes)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/proxy/:path*',
  //       destination: 'http://192.168.4.14:8000/api/v1/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
