import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/about-us', 
    '/contact',
    '/dharma',
    '/donation',
    '/donate',
    '/gallery',
    '/karamkand',
    '/programs',
    '/workshop',
    '/workshop/ayurveda-workshops',
    '/workshop/mantra-workshops',
    '/workshop/meditation-sessions',
    '/workshop/sadhna',
    '/workshop/spiritual-workshops',
    '/workshop/yoga-workshops',
    '/yoga',
  ]

  // Dynamic yoga pages
  const yogaPages = [
    '/yoga/Anger',
    '/yoga/Stress',
    '/yoga/Sleep',
    '/yoga/Depression',
    '/yoga/Fatigue',
    '/yoga/Immunity',
    '/yoga/OverWeight',
    '/yoga/Kirtan',
    '/yoga/wellness',
  ]

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add static pages
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1 : 0.8,
    })
  })

  // Add yoga pages
  yogaPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  return sitemapEntries
}