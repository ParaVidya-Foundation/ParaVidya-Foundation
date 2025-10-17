import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo-enhanced'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl
  
  // Static pages with enhanced metadata
  const staticPages = [
    {
      url: '',
      changeFrequency: 'daily' as const,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: '/about-us',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: '/dharma',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: '/donate',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: '/gallery',
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: '/workshop',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: '/yoga',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: new Date(),
    },
  ]

  // Workshop pages
  const workshopPages = [
    '/workshop/ayurveda-workshops',
    '/workshop/mantra-workshops',
    '/workshop/meditation-sessions',
    '/workshop/sadhna',
    '/workshop/spiritual-workshops',
    '/workshop/yoga-workshops',
    '/workshop/Sanskrit-workshops',
    '/workshop/Gita',
    '/workshop/Tantra',
    '/workshop/astrology',
  ]

  // Yoga therapy pages
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

  // Partnership pages
  const partnershipPages = [
    '/Partnership',
    '/Partnership/corporate',
    '/Partnership/JoinourNGO',
    '/Partnership/Events',
    '/Partnership/Camps',
    '/Partnership/AwarenessProgram',
    '/Partnership/Katha',
    '/Partnership/Donate',
    '/Partnership/TaxExemption',
  ]

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add static pages
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  })

  // Add workshop pages
  workshopPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  })

  // Add yoga pages
  yogaPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  })

  // Add partnership pages
  partnershipPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  })

  return sitemapEntries
}