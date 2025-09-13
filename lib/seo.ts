// SEO Configuration for ParaVidya Foundation
export const seoConfig = {
  siteName: "ParaVidya Foundation",
  siteUrl: "http://localhost:3000", // Update with actual domain for production
  defaultTitle: "ParaVidya Foundation - Spiritual Wellness & Yoga",
  defaultDescription: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/paravidya.foundation/",
    facebook: "https://www.facebook.com/profile.php?id=61579922933190",
    linkedin: "https://www.linkedin.com/company/paravidya-foundation/about/?viewAsMember=true",
    youtube: "https://www.youtube.com/@ParaVidyaFoundation",
    twitter: "https://x.com/ParaVidyaNGO",
  },

  // Default Open Graph images
  defaultOgImage: "/og-default.jpg",
  
  // Keywords by category
  keywords: {
    yoga: [
      "yoga for stress management",
      "anger management yoga",
      "sleep therapy yoga", 
      "depression support yoga",
      "fatigue relief yoga",
      "immunity boosting yoga",
      "weight management yoga",
      "kirtan yoga practice",
      "wellness yoga classes"
    ],
    meditation: [
      "meditation for beginners",
      "mindfulness meditation",
      "spiritual meditation practices",
      "guided meditation",
      "breathing exercises"
    ],
    wellness: [
      "holistic wellness",
      "spiritual healing",
      "mental health support",
      "stress relief techniques",
      "emotional wellness"
    ]
  }
}

// Generate structured data for courses
export function generateCourseSchema(course: {
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  price?: string;
  url: string;
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
    "courseMode": "online",
    "educationalLevel": "beginner",
    "url": `${seoConfig.siteUrl}${course.url}`,
    "offers": course.price ? {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR"
    } : {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  }
}

// Generate structured data for articles
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  url: string;
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
      "url": seoConfig.siteUrl
    },
    "datePublished": article.datePublished || new Date().toISOString(),
    "url": `${seoConfig.siteUrl}${article.url}`
  }
}

// Generate FAQ schema
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
