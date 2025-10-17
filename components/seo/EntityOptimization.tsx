"use client";

import Script from "next/script";
import { seoConfig } from "@/lib/seo-enhanced";

// AI Search Entity Optimization Component
// Enhances brand entity recognition for Google SGE, Perplexity, and Bing Copilot

interface EntityOptimizationProps {
  entityType?: 'organization' | 'person' | 'service' | 'course';
  customData?: Record<string, unknown>;
}

export function EntityOptimization({ 
  entityType = 'organization', 
  customData = {} 
}: EntityOptimizationProps) {
  // entityType parameter is kept for future extensibility of different entity types
  // Currently only organization type is implemented
  console.debug('Entity type:', entityType);
  
  // Generate comprehensive entity schema for AI Search optimization
  const generateEntitySchema = () => {
    const baseEntity = {
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
      "description": seoConfig.defaultDescription,
      "foundingDate": "2020",
      "foundingLocation": {
        "@type": "Place",
        "name": "Gurugram, Haryana, India"
      },
      "mission": "Transform lives through ancient wisdom and modern wellness practices",
      "values": ["Compassion", "Wisdom", "Service", "Integrity", "Excellence"],
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
        "Dharma Education"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Yoga Alliance"
          }
        }
      ],
      "knowsAbout": [
        "Yoga",
        "Meditation",
        "Spiritual Wellness",
        "Holistic Healing",
        "Ayurveda",
        "Dharma",
        "Stress Management",
        "Mental Health",
        "Wellness Coaching"
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "International Yoga Community"
        }
      ],
      "award": [
        {
          "@type": "Award",
          "name": "Excellence in Spiritual Education",
          "dateReceived": "2023"
        }
      ],
      "sameAs": Object.values(seoConfig.social).filter(Boolean),
      ...customData
    };

    return baseEntity;
  };

  // Generate Knowledge Graph enhancement
  const generateKnowledgeGraphSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Thing",
      "name": "ParaVidya Foundation",
      "description": seoConfig.defaultDescription,
      "url": seoConfig.siteUrl,
      "image": `${seoConfig.siteUrl}/Logo.png`,
      "sameAs": Object.values(seoConfig.social).filter(Boolean),
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Industry",
          "value": "Health & Wellness"
        },
        {
          "@type": "PropertyValue", 
          "name": "Founded",
          "value": "2020"
        },
        {
          "@type": "PropertyValue",
          "name": "Headquarters",
          "value": "Gurugram, India"
        },
        {
          "@type": "PropertyValue",
          "name": "Services",
          "value": "Yoga, Meditation, Spiritual Wellness"
        },
        {
          "@type": "PropertyValue",
          "name": "Target Audience",
          "value": "Spiritual Seekers, Wellness Enthusiasts"
        }
      ]
    };
  };

  const entitySchema = generateEntitySchema();
  const knowledgeGraphSchema = generateKnowledgeGraphSchema();

  return (
    <>
      <Script
        id="entity-optimization-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(entitySchema, null, 2)
        }}
      />
      
      <Script
        id="entity-optimization-knowledge-graph"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(knowledgeGraphSchema, null, 2)
        }}
      />
    </>
  );
}

// Brand Entity Component for consistent entity recognition
export function BrandEntity() {
  return (
    <EntityOptimization 
      entityType="organization"
      customData={{
        "brand": {
          "@type": "Brand",
          "name": "ParaVidya Foundation",
          "logo": `${seoConfig.siteUrl}/Logo.png`,
          "slogan": "Transform Your Life Through Ancient Wisdom"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+91-98711-30487",
            "email": "contact@paravidya.org",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6C, Sector-14, Mehrauli Road",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "addressCountry": "IN",
          "postalCode": "122001"
        }
      }}
    />
  );
}

// Service Entity Component
export function ServiceEntity({ 
  serviceName, 
  serviceDescription, 
  serviceUrl 
}: {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}) {
  return (
    <EntityOptimization 
      entityType="service"
      customData={{
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "Organization",
          "name": "ParaVidya Foundation"
        },
        "serviceType": serviceName,
        "url": `${seoConfig.siteUrl}${serviceUrl}`,
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${serviceName} Services`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": serviceName,
                "description": serviceDescription
              }
            }
          ]
        }
      }}
    />
  );
}

// Course Entity Component
export function CourseEntity({ 
  courseName, 
  courseDescription, 
  courseUrl,
  instructor,
  duration,
  level = 'beginner'
}: {
  courseName: string;
  courseDescription: string;
  courseUrl: string;
  instructor?: string;
  duration?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}) {
  return (
    <EntityOptimization 
      entityType="course"
      customData={{
        "@type": "Course",
        "name": courseName,
        "description": courseDescription,
        "provider": {
          "@type": "Organization",
          "name": "ParaVidya Foundation",
          "url": seoConfig.siteUrl
        },
        "instructor": {
          "@type": "Person",
          "name": instructor || "ParaVidya Foundation Instructors"
        },
        "courseMode": ["online", "offline"],
        "educationalLevel": level,
        "timeRequired": duration,
        "url": `${seoConfig.siteUrl}${courseUrl}`,
        "teaches": courseDescription,
        "coursePrerequisites": "No prior experience required",
        "educationalUse": "instruction"
      }}
    />
  );
}
