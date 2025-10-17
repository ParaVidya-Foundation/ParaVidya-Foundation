import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo-enhanced'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/static/',
          '/.well-known/',
          '/temp/',
          '/test/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: [
      `${seoConfig.siteUrl}/sitemap.xml`,
      `${seoConfig.siteUrl}/image-sitemap.xml`,
    ],
    host: seoConfig.siteUrl,
  }
}