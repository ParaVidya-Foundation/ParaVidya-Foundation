/**
 * Security Headers Configuration
 * Enterprise-grade security headers for Next.js production
 */

export const securityHeaders = [
  // Force HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  
  // Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  
  // XSS Protection (legacy but still useful)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  
  // Referrer policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  
  // Permissions policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  
  // CORS policy
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin'
  },
  
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.youtube.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com https://img.youtube.com https://i.ytimg.com https://img.icons8.com https://images.unsplash.com https://plus.unsplash.com https://maps.gstatic.com https://maps.googleapis.com https://www.gstatic.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.google.com https://www.googletagmanager.com https://www.facebook.com https://maps.googleapis.com https://www.youtube.com",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com https://www.youtube.com https://youtube.com",
      "child-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com https://www.youtube.com https://youtube.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ')
  }
];

