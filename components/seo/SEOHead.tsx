"use client";

import Head from "next/head";
import { seoConfig } from "@/lib/seo-enhanced";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, unknown>;
  breadcrumbs?: Array<{name: string; url: string}>;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  keywords = [],
  noindex = false,
  nofollow = false,
  structuredData,
  breadcrumbs
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const pageDescription = description || seoConfig.defaultDescription;
  const pageCanonical = canonical || seoConfig.siteUrl;
  const pageOgImage = ogImage || `${seoConfig.siteUrl}${seoConfig.defaultOgImage}`;
  const pageKeywords = [...seoConfig.keywords.primary, ...keywords].join(", ");

  // Robots meta
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
    "max-image-preview:large",
    "max-snippet:-1",
    "max-video-preview:-1"
  ].join(", ");

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={seoConfig.siteName} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="your-google-site-verification-code" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonical} />
      
      {/* Theme and App Icons */}
      <meta name="msapplication-TileColor" content="#f37021" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:alt" content={ogImageAlt || pageTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageCanonical} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageOgImage} />
      <meta property="twitter:image:alt" content={ogImageAlt || pageTitle} />
      <meta property="twitter:site" content="@ParaVidyaNGO" />
      <meta property="twitter:creator" content="@ParaVidyaNGO" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": `${seoConfig.siteUrl}${crumb.url}`
              }))
            }, null, 2)
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Viewport for mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Critical font preloads - only load fonts that are actually used above the fold */}
      <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/Manrope-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Critical image preloads - only preload images that are above the fold */}
      <link rel="preload" href="/Logo.png" as="image" />
    </Head>
  );
}

// Convenience hook for dynamic SEO
export function useSEO(pageProps: SEOHeadProps) {
  return <SEOHead {...pageProps} />;
}
