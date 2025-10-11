"use client";

import Script from "next/script";
import { seoConfig } from "@/lib/seo";

interface StructuredDataProps {
  type?: "organization" | "website" | "course" | "article";
  data?: Record<string, unknown>;
}

export function StructuredData({ type = "organization", data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ParaVidya Foundation",
          "alternateName": "ParaVidya",
          "url": seoConfig.siteUrl,
          "logo": `${seoConfig.siteUrl}/Logo.png`,
          "image": `${seoConfig.siteUrl}/Logo.png`,
          "description": "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "ParaVidya Foundation Team"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            seoConfig.social.facebook,
            seoConfig.social.instagram,
            seoConfig.social.youtube,
            seoConfig.social.linkedin,
            seoConfig.social.twitter
          ],
          "areaServed": "Worldwide",
          "serviceType": [
            "Yoga Training",
            "Meditation Classes",
            "Spiritual Wellness",
            "Holistic Healing",
            "Ayurveda Workshops",
            "Sanskrit Learning",
            "Dharma Education"
          ]
        };
      
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ParaVidya Foundation",
          "url": seoConfig.siteUrl,
          "description": "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
          "publisher": {
            "@type": "Organization",
            "name": "ParaVidya Foundation"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${seoConfig.siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };
      
      case "course":
        return data;
      
      case "article":
        return data;
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
