You are an expert Next.js developer and SEO specialist with deep knowledge of 2025 Google algorithm updates (e.g., emphasis on E-E-A-T, Core Web Vitals, mobile-first indexing, and AI-driven search like SGE). Your task is to fully audit and optimize my entire Next.js project for maximum SEO, audience reach, and user engagement. The goal is to rank higher in search results, drive more organic traffic (targeting keywords like "anger management courses", "astrology learning app", "digital temple donations"), improve social sharing (e.g., via LinkedIn/X shares), and boost on-page engagement (e.g., lower bounce rates via faster loads and intuitive UX).

### Project Context
- This is a Next.js 15+ app using App Router (/app directory).
- Key pages/components: Home (with CourseBanner for free courses), /contribute (HowToContribute card), /payment (PaymentPage with Razorpay integration), /insights (AngerInsightCard for anger secrets/prevention), /courses (grid of CauseCard for astrology/anger management courses).
- API routes: /api/payment, /api/payment/confirm (secure, with email receipts via Nodemailer).
- Current setup: Responsive Tailwind CSS, semantic HTML in components, Next/Image for images, but no dynamic metadata, sitemap, or structured data.
- Target audience: Spiritual seekers, anger management users, astrology learners (India-focused, English/Hindi potential).
- Primary keywords: "free anger management course", "online jyotish vidya", "digital temple donation", "surprising secrets about anger".
- Secondary: Long-tail like "prevent anger with self-awareness techniques", "master astrology from basic to advanced".

### SEO Optimization Goals (2025 Best Practices)
Implement these across the entire project for crawlability, indexability, speed, and relevance:
1. **Metadata & Head Management**: Use Next.js Metadata API (export const metadata) for dynamic titles, descriptions, canonical URLs, robots tags. Add Open Graph (OG) and Twitter Cards for social sharing. Ensure unique per-page (e.g., home: "Free Online Anger Management & Astrology Courses | Sadhana App").
2. **Content & On-Page SEO**: Enforce H1-H6 hierarchy (e.g., page title as H1, component titles as H2). Add alt texts to all images (e.g., "Illustration of righteousness in anger management"). Include keyword-rich, engaging content (e.g., 300+ words per page with internal links). Add schema.org JSON-LD for courses (Course type) and articles (Article for insights).
3. **Performance & Core Web Vitals**: Optimize images (lazy loading, WebP via Next/Image). Preload critical resources. Ensure <3s LCP, <100ms FID, <4s CLS. Add loading="lazy" to non-critical elements.
4. **Technical SEO**: Generate dynamic sitemap.xml (via next-sitemap or API route). Add robots.txt. Use generateStaticParams for SSG on static pages. Canonical tags to prevent duplicates. Mobile-responsive (already good, but audit with Tailwind breakpoints).
5. **Engagement & Reach**: Add rel="nofollow" to payment links. Internal linking (e.g., from banner to courses). Breadcrumbs for navigation. AMP if feasible (but prioritize PWA). Analytics hooks (e.g., Google Analytics via next/script).
6. **Accessibility & UX**: ARIA labels on interactive elements (e.g., buttons in banners). Semantic tags (<article>, <section>). Fast redirects (e.g., post-payment to thank-you page with schema).

### Step-by-Step Instructions
1. **Audit Phase**: Scan all files (pages/*.tsx, components/*.tsx, app/layout.tsx, app/page.tsx, etc.). List issues (e.g., "No metadata in /payment, missing alt on images in CauseCard").
2. **Implementation Phase**:
   - Update root layout.tsx: Add global metadata, Google Fonts (serif/sans-serif for readability), and <head> injections.
   - Per-page: Add/export metadata objects with dynamic params (e.g., { title: 'Anger Prevention | Sadhana App', description: '...', openGraph: { images: '/og-anger.jpg' } }).
   - Components: Wrap content in <article> or <section>, add alt/aria-labels (e.g., in CourseBanner Image: alt="Join free online course illustration").
   - Images: Ensure all use Next/Image with sizes, priority for LCP images.
   - New Files: Create /app/sitemap.ts for dynamic sitemap. Add /public/robots.txt. Add /app/globals.css with SEO-friendly resets.
   - Structured Data: Add <script type="application/ld+json"> in layouts for FAQPage/Article on insights pages.
   - Performance: Add next.config.js optimizations (e.g., images: { domains: ['example.com'] }, experimental: { optimizeCss: true }).


Prioritize non-breaking changes. Make code clean, TypeScript-strict, and commented (e.g., "// SEO: Dynamic OG for social sharing"). Aim for 20%+ traffic uplift via better rankings/engagement.

https://www.instagram.com/paravidya.foundation/

https://www.facebook.com/profile.php?id=61579922933190

https://www.linkedin.com/company/paravidya-foundation/about/?viewAsMember=true

https://www.youtube.com/@ParaVidyaFoundation

https://www.reddit.com/user/Spare_Inspection36/

https://x.com/ParaVidyaNGO