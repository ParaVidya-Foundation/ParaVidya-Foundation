"use client";

import Script from "next/script";
import { 
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateCourseSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateHowToSchema,
  generatePersonSchema,
  generateArticleSchema,
  generateKnowledgeHubSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema
} from "@/lib/seo-enhanced";
// Note: seoConfig is imported for future use

interface StructuredDataProps {
  type: 
    | "organization" 
    | "website" 
    | "course" 
    | "service" 
    | "faq" 
    | "howto" 
    | "person" 
    | "article" 
    | "knowledge-hub"
    | "breadcrumb"
    | "local-business";
  data?: Record<string, unknown>;
}

export function StructuredDataEnhanced({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return generateOrganizationSchema();
      
      case "website":
        return generateWebSiteSchema();
      
      case "course":
        return data ? generateCourseSchema(data as {
          title: string;
          description: string;
          instructor?: string;
          duration?: string;
          price?: string;
          url: string;
          level?: 'beginner' | 'intermediate' | 'advanced';
          category?: string;
        }) : null;
      
      case "service":
        return data ? generateServiceSchema(data as {
          name: string;
          description: string;
          url: string;
          category?: string;
          price?: string;
        }) : null;
      
      case "faq":
        return data ? generateFAQSchema(data.faqs as Array<{question: string; answer: string}>) : null;
      
      case "howto":
        return data ? generateHowToSchema(data as {
          name: string;
          description: string;
          steps: Array<{name: string; text: string; image?: string}>;
        }) : null;
      
      case "person":
        return data ? generatePersonSchema(data as {
          name: string;
          title?: string;
          bio?: string;
          image?: string;
          socialProfiles?: Array<{platform: string; url: string}>;
        }) : null;
      
      case "article":
        return data ? generateArticleSchema(data as {
          title: string;
          description: string;
          author?: string;
          datePublished?: string;
          dateModified?: string;
          url: string;
          image?: string;
        }) : null;
      
      case "knowledge-hub":
        return generateKnowledgeHubSchema();
      
      case "breadcrumb":
        return data ? generateBreadcrumbSchema(data.breadcrumbs as Array<{name: string; url: string}>) : null;
      
      case "local-business":
        return generateLocalBusinessSchema();
      
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
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// Convenience components for common use cases
export function OrganizationSchema() {
  return <StructuredDataEnhanced type="organization" />;
}

export function WebSiteSchema() {
  return <StructuredDataEnhanced type="website" />;
}

export function CourseSchema({ course }: { course: {
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  price?: string;
  url: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
} }) {
  return <StructuredDataEnhanced type="course" data={course} />;
}

export function ServiceSchema({ service }: { service: {
  name: string;
  description: string;
  url: string;
  category?: string;
  price?: string;
} }) {
  return <StructuredDataEnhanced type="service" data={service} />;
}

export function FAQSchema({ faqs }: { faqs: Array<{question: string; answer: string}> }) {
  return <StructuredDataEnhanced type="faq" data={{ faqs }} />;
}

export function HowToSchema({ howTo }: { howTo: {
  name: string;
  description: string;
  steps: Array<{name: string; text: string; image?: string}>;
} }) {
  return <StructuredDataEnhanced type="howto" data={howTo} />;
}

export function PersonSchema({ person }: { person: {
  name: string;
  title?: string;
  bio?: string;
  image?: string;
  socialProfiles?: Array<{platform: string; url: string}>;
} }) {
  return <StructuredDataEnhanced type="person" data={person} />;
}

export function ArticleSchema({ article }: { article: {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
} }) {
  return <StructuredDataEnhanced type="article" data={article} />;
}

export function KnowledgeHubSchema() {
  return <StructuredDataEnhanced type="knowledge-hub" />;
}

export function BreadcrumbSchema({ breadcrumbs }: { breadcrumbs: Array<{name: string; url: string}> }) {
  return <StructuredDataEnhanced type="breadcrumb" data={{ breadcrumbs }} />;
}

export function LocalBusinessSchema() {
  return <StructuredDataEnhanced type="local-business" />;
}
