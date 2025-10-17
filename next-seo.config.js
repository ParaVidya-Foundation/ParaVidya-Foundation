// Production-ready SEO configuration for ParaVidya Foundation
// This replaces the basic seo-config.ts with industry-standard setup

module.exports = {
  titleTemplate: '%s | ParaVidya Foundation',
  defaultTitle: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
  description: 'Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.',
  
  // Canonical URL configuration
  canonical: 'https://paravidyafoundation.com',
  
  // Open Graph configuration for social sharing
  openGraph: {
    type: 'website',
    url: 'https://paravidyafoundation.com',
    siteName: 'ParaVidya Foundation',
    title: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
    description: 'Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.',
    images: [
      {
        url: 'https://paravidyafoundation.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
      },
      {
        url: 'https://paravidyafoundation.com/og-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'ParaVidya Foundation Logo',
      }
    ],
    locale: 'en_US',
  },
  
  // Twitter Card configuration
  twitter: {
    handle: '@ParaVidyaNGO',
    site: '@ParaVidyaNGO',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags for enhanced SEO
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'yoga courses, meditation classes, spiritual wellness, holistic healing, ayurveda workshops, dharma education, stress management yoga, anger management, sleep therapy, depression support, immunity boost, weight management, kirtan practice, wellness programs, spiritual guidance, ancient wisdom, modern wellness, India yoga, online yoga classes'
    },
    {
      name: 'author',
      content: 'ParaVidya Foundation'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'theme-color',
      content: '#f37021'
    },
    {
      name: 'msapplication-TileColor',
      content: '#f37021'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
  ],
  
  // Link tags for enhanced performance and SEO
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: '32x32'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.google-analytics.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.googletagmanager.com'
    }
  ],
  
  // Language and locale configuration
  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://paravidyafoundation.com'
    }
  ],
  
  // Default structured data
  dangerouslySetAllPagesToNoIndex: false,
  dangerouslySetAllPagesToNoFollow: false,
  
  // Default noindex/nofollow for specific paths
  noindex: false,
  nofollow: false,
  
  // Default robots meta
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  }
};
