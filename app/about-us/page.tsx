import { Metadata } from "next"
import Abouthero from "@/components/about/Abouthero"
import ImageQuote from "@/components/about/imagequote"

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision | ParaVidya Foundation",
  description: "Learn about ParaVidya Foundation's mission to transform lives through ancient wisdom and modern wellness practices. Discover our vision, values, and dedicated team committed to spiritual wellness.",
  keywords: [
    "about paravidya foundation",
    "spiritual wellness organization",
    "yoga foundation mission",
    "ancient wisdom modern practices",
    "wellness foundation vision",
    "spiritual growth organization",
    "holistic healing foundation",
    "yoga meditation foundation"
  ],
  openGraph: {
    title: "About Us - Our Mission & Vision | ParaVidya Foundation",
    description: "Learn about ParaVidya Foundation's mission to transform lives through ancient wisdom and modern wellness practices. Discover our vision and dedicated team.",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About ParaVidya Foundation - Our Mission & Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Our Mission & Vision | ParaVidya Foundation",
    description: "Learn about ParaVidya Foundation's mission to transform lives through ancient wisdom and modern wellness practices.",
    images: ["/og-about.jpg"],
  },
}

export default function AboutUsPage() {
  return (
    <div>
      <Abouthero />
      <ImageQuote />
    </div>
  )
}
