// Enhanced SEO utilities for ParaVidya Foundation
// Production-ready SEO configuration with AI Search optimization

export const seoConfig = {
  siteName: "ParaVidya Foundation",
  siteUrl: "https://paravidyafoundation.com",
  defaultTitle: "ParaVidya Foundation - Spiritual Wellness & Yoga",
  defaultDescription: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
  
  // Enhanced social media profiles for entity recognition
  social: {
    instagram: "https://www.instagram.com/paravidya.foundation/",
    facebook: "https://www.facebook.com/profile.php?id=61579922933190",
    linkedin: "https://www.linkedin.com/company/paravidya-foundation/about/?viewAsMember=true",
    youtube: "https://www.youtube.com/@ParaVidyaFoundation",
    twitter: "https://x.com/ParaVidyaNGO",
    github: "https://github.com/paravidya-foundation", // Add if exists
    crunchbase: "", // Add if exists
    productHunt: "", // Add if exists
  },

  // Enhanced Open Graph images
  defaultOgImage: "/og-default.jpg",
  defaultOgImageSquare: "/og-square.jpg",
  
  // AI Search optimized keywords
  keywords: {
    primary: [
      "spiritual wellness",
      "yoga courses",
      "meditation classes",
      "holistic healing",
      "ayurveda workshops",
      "dharma education"
    ],
    yoga: [
      "yoga for stress management",
      "anger management yoga",
      "sleep therapy yoga", 
      "depression support yoga",
      "fatigue relief yoga",
      "immunity boosting yoga",
      "weight management yoga",
      "kirtan yoga practice",
      "wellness yoga classes",
      "hatha yoga",
      "pranayama",
      "asana practice"
    ],
    meditation: [
      "meditation for beginners",
      "mindfulness meditation",
      "spiritual meditation practices",
      "guided meditation",
      "breathing exercises",
      "transcendental meditation",
      "vipassana meditation",
      "loving-kindness meditation"
    ],
    wellness: [
      "holistic wellness",
      "spiritual healing",
      "mental health support",
      "stress relief techniques",
      "emotional wellness",
      "mind-body connection",
      "energy healing",
      "chakra balancing"
    ],
    services: [
      "yoga teacher training",
      "meditation instructor certification",
      "ayurveda consultation",
      "spiritual counseling",
      "wellness retreats",
      "corporate wellness programs"
    ]
  },

  // AI Search entity information
  entityInfo: {
    type: "Educational Organization",
    category: "Wellness & Education",
    industry: "Health & Wellness",
    founded: "2020",
    headquarters: "Gurugram, Haryana, India",
    mission: "Transform lives through ancient wisdom and modern wellness practices",
    values: ["Compassion", "Wisdom", "Service", "Integrity", "Excellence"]
  }
}

// Enhanced structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ParaVidya Foundation",
    "alternateName": ["ParaVidya", "Paravidya Foundation"],
    "url": seoConfig.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${seoConfig.siteUrl}/Logo.png`,
      "width": 300,
      "height": 300
    },
    "image": {
      "@type": "ImageObject",
      "url": `${seoConfig.siteUrl}/og-default.jpg`,
      "width": 1200,
      "height": 630
    },
    "description": seoConfig.defaultDescription,
    "foundingDate": "2020",
    "foundingLocation": {
      "@type": "Place",
      "name": "Gurugram, Haryana, India"
    },
    "founder": {
      "@type": "Person",
      "name": "ParaVidya Foundation Team"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6C, Sector-14, Mehrauli Road",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
      "postalCode": "122001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91-98711-30487",
      "email": "contact@paravidya.org",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": Object.values(seoConfig.social).filter(Boolean),
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "Yoga Training",
      "Meditation Classes",
      "Spiritual Wellness",
      "Holistic Healing",
      "Ayurveda Workshops",
      "Dharma Education",
      "Corporate Wellness",
      "Wellness Retreats"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wellness Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yoga Classes",
            "description": "Comprehensive yoga training for all levels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meditation Sessions",
            "description": "Guided meditation and mindfulness practices"
          }
        }
      ]
    }
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ParaVidya Foundation",
    "alternateName": "ParaVidya",
    "url": seoConfig.siteUrl,
    "description": seoConfig.defaultDescription,
    "publisher": {
      "@type": "Organization",
      "name": "ParaVidya Foundation",
      "url": seoConfig.siteUrl
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${seoConfig.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Wellness Programs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Yoga Programs",
            "url": `${seoConfig.siteUrl}/yoga`
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Meditation Sessions",
            "url": `${seoConfig.siteUrl}/workshop/meditation-sessions`
          }
        }
      ]
    }
  }
}

export function generateCourseSchema(course: {
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  price?: string;
  url: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "ParaVidya Foundation",
      "url": seoConfig.siteUrl
    },
    "instructor": {
      "@type": "Person",
      "name": course.instructor || "ParaVidya Foundation Instructors"
    },
    "courseMode": ["online", "offline"],
    "educationalLevel": course.level || "beginner",
    "educationalUse": "instruction",
    "learningResourceType": "course",
    "teaches": course.description,
    "coursePrerequisites": "No prior experience required",
    "url": `${seoConfig.siteUrl}${course.url}`,
    "image": `${seoConfig.siteUrl}/course-default.jpg`,
    "offers": {
      "@type": "Offer",
      "price": course.price || "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "seller": {
        "@type": "Organization",
        "name": "ParaVidya Foundation"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  category?: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "ParaVidya Foundation",
      "url": seoConfig.siteUrl
    },
    "category": service.category || "Wellness Services",
    "serviceType": service.name,
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "url": `${seoConfig.siteUrl}${service.url}`,
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "INR"
    } : {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  }
}

export function generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  steps: Array<{name: string; text: string; image?: string}>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "image": `${seoConfig.siteUrl}/howto-default.jpg`,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image ? `${seoConfig.siteUrl}${step.image}` : undefined
    }))
  }
}

export function generatePersonSchema(person: {
  name: string;
  title?: string;
  bio?: string;
  image?: string;
  socialProfiles?: Array<{platform: string; url: string}>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.title,
    "description": person.bio,
    "image": person.image ? `${seoConfig.siteUrl}${person.image}` : undefined,
    "worksFor": {
      "@type": "Organization",
      "name": "ParaVidya Foundation"
    },
    "sameAs": person.socialProfiles?.map(profile => profile.url) || []
  }
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author || "ParaVidya Foundation"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ParaVidya Foundation",
      "url": seoConfig.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${seoConfig.siteUrl}/Logo.png`
      }
    },
    "datePublished": article.datePublished || new Date().toISOString(),
    "dateModified": article.dateModified || new Date().toISOString(),
    "url": `${seoConfig.siteUrl}${article.url}`,
    "image": article.image ? `${seoConfig.siteUrl}${article.image}` : `${seoConfig.siteUrl}/article-default.jpg`,
    "articleSection": article.category || "Wellness",
    "wordCount": article.description.length,
    "inLanguage": "en"
  }
}

// AI Search optimization utilities
export function generateKnowledgeHubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ParaVidya Knowledge Hub",
    "description": "Comprehensive resource for spiritual wellness, yoga, and meditation practices",
    "url": `${seoConfig.siteUrl}/knowledge-hub`,
    "mainEntity": {
      "@type": "ItemList",
      "name": "Wellness Resources",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Yoga for Beginners Guide",
            "url": `${seoConfig.siteUrl}/guides/yoga-beginners`
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Meditation Techniques",
            "url": `${seoConfig.siteUrl}/guides/meditation-techniques`
          }
        }
      ]
    }
  }
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${seoConfig.siteUrl}${crumb.url}`
    }))
  }
}

// Generate local business schema (if applicable)
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ParaVidya Foundation",
    "description": seoConfig.defaultDescription,
    "url": seoConfig.siteUrl,
    "telephone": "+91-98711-30487",
    "email": "contact@paravidya.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6C, Sector-14, Mehrauli Road",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
      "postalCode": "122001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4728,
      "longitude": 77.0504
    },
    "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-17:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Worldwide"
    }
  }
}
