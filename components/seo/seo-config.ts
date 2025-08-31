import type { DefaultSeoProps } from "next-seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const title = "Para Vidya Foundation – Spiritual NGO"
const description =
  "Royal, minimal, and modern spiritual NGO inspired by Hindu traditions. Workshops, Sadhna, Karamkand, Yoga, and Seva."

export const defaultSEO: DefaultSeoProps = {
  title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Para Vidya Foundation",
    images: [{ url: `${siteUrl}/og` }],
  },
  twitter: { cardType: "summary_large_image", site: "@paravidya" },
  additionalMetaTags: [
    { name: "keywords", content: "NGO, Spiritual, Sadhna, Karamkand, Yoga, Workshop, India, Donation" },
    { name: "theme-color", content: "#f37021" },
  ],
}
