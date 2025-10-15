/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Strict development checks for better reliability
  reactStrictMode: true,

  // ✅ Code quality enforcement
  eslint: {
    ignoreDuringBuilds: false, // Fail build if major linting issues
  },
  typescript: {
    ignoreBuildErrors: false, // Enforce type safety
  },

  // ✅ Image optimization
  images: {
    formats: ['image/avif', 'image/webp'], // Modern, efficient formats
    deviceSizes: [320, 480, 640, 768, 1024, 1200, 1600, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['img.youtube.com', 'i.ytimg.com', 'img.icons8.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'plus.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img.icons8.com', pathname: '/**' },
    ],
    minimumCacheTTL: 86400, // Cache images for 1 day
  },

  // ✅ Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@radix-ui/react-icons'],
    scrollRestoration: true,
  },

  // ✅ Compression for faster delivery
  compress: true,

  // ✅ Disable unnecessary headers
  poweredByHeader: false,

  // ✅ Enable standalone output for AWS Amplify (faster cold starts)
  output: 'standalone',

  // ✅ Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ✅ Advanced security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security & performance
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },

          // ✅ Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com https://img.icons8.com https://images.unsplash.com https://plus.unsplash.com; " +
              "font-src 'self' data: https://fonts.gstatic.com; " +
              "connect-src 'self' https://www.google-analytics.com; " +
              "frame-ancestors 'none'; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self';",
          },

          // ✅ Cache control for static assets
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ✅ Internationalization (helps SEO)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
