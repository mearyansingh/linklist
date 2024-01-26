/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
   dest: "public",
   register: true,
   sw: "sw.js",
   cacheOnFrontEndNav: true,
   aggressiveFrontEndNavCaching: true,
   reloadOnOnline: true,
   swcMinify: true,
   disable: false,
   workboxOptions: {
      disableDevLogs: true
   }
});

const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: '*.googleusercontent.com',
         },
         {
            hostname: 's3.ap-south-1.amazonaws.com',
         },
         {
            hostname: "plus.unsplash.com"
         },
         {
            hostname: "images.unsplash.com"
         }
      ],
   },
   reactStrictMode: true, // Enable React strict mode for improved error handling
   compiler: {
      removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
   }
}

module.exports = withPWA(nextConfig) 
