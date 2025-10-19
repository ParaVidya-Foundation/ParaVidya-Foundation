You are an expert Next.js SEO developer.

My website (https://paravidyafoundation.com) is showing the wrong snippet on Google — it displays "Contact Us. Copyright © 2025..." instead of the actual homepage description.

Fix this completely and optimize SEO sitewide.

Do the following step by step using clean, production-level Next.js 14 (App Router) and TypeScript code:

1️⃣ **Meta & OG Optimization**
- Add strong <title>, <meta name="description">, and <meta name="keywords"> for homepage and reusable for all pages.
- Ensure meta tags render on the server (SSR/SSG) so crawlers read them.
- Add canonical URL, Open Graph, and Twitter meta tags.
- Use next-seo or a custom `<SEOHead />` component to centralize these tags.

2️⃣ **Structured Data (JSON-LD)**
Add schema markup in <Head>:
- **Organization Schema**
- **Website Schema with SearchAction**
- Include name, url, description, logo, and social links.
- Example:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Para Vidya Foundation",
  "url": "https://paravidyafoundation.com",
  "logo": "https://paravidyafoundation.com/logo.png",
  "description": "Para Vidya Foundation spreads knowledge rooted in ancient wisdom and modern understanding.",
  "sameAs": [
    "https://www.instagram.com/paravidyafoundation",
    "https://www.linkedin.com/company/paravidyafoundation"
  ]
}
and

json
Copy code
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://paravidyafoundation.com",
  "name": "Para Vidya Foundation",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://paravidyafoundation.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
3️⃣ Semantic HTML Structure

Add <main> around core content.

Add <footer role="contentinfo"> to isolate footer text from being indexed as main content.

Keep only one <h1> tag per page with keyword-rich text.

Ensure every page has descriptive alt tags for images.

4️⃣ Image SEO + Schema

Add descriptive alt text and filenames for all images.

Generate an image sitemap automatically for all static assets and public images.

Add imageObject schema where relevant to help images rank in Google Images.

5️⃣ Sitemap Generator

Add a dynamic sitemap generator script under /app/sitemap.ts or /pages/api/sitemap.xml that lists all static + dynamic routes with correct lastModified, priority, and changefreq.

Also include images in the sitemap.

6️⃣ Robots & Verification

Add <meta name="robots" content="index, follow" /> globally.

Add Google site verification meta tag.

Prevent unwanted sections (like footer, admin pages) from being crawled.

7️⃣ Performance & Indexing

Ensure Lighthouse SEO score is 100.

Optimize Core Web Vitals (LCP, CLS, FID).

Add preload for fonts, lazy-load non-critical images.

Use structured data validator to confirm schema correctness.

8️⃣ Deployment & Reindexing

Make sure the final build is deployed on AWS Amplify with proper SSR.

Then in Google Search Console:

Resubmit the sitemap.

Request indexing for homepage.

Verify snippet updates after re-crawl.