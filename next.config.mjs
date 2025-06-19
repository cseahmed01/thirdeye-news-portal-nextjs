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
};

export default nextConfig;
