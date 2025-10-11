import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import Header from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SkipToContent } from "@/components/skip-to-content"
import { GA } from "@/components/analytics/ga"
import { FacebookPixel } from "@/components/analytics/fb-pixel"
import { StructuredData } from "@/components/seo/structured-data"
import "./globals.css"
import Navbar from "@/components/Navbar"
import WhatsappButton from "@/components/WhatsappButton"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  fallback: ["serif"],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
  fallback: ["sans-serif"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://paravidyafoundation.com'),
  title: {
    default: "ParaVidya Foundation - Spiritual Wellness & Yoga",
    template: "%s | ParaVidya Foundation"
  },
  description: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
  keywords: [
    "yoga courses online",
    "spiritual wellness",
    "anger management yoga",
    "meditation practices",
    "holistic healing",
    "stress management yoga",
    "sleep therapy yoga",
    "wellness programs",
    "ayurveda workshops",
    "sanskrit learning",
    "bhagavad gita classes",
    "mantra workshops",
    "paravidya foundation"
  ],
  authors: [{ name: "ParaVidya Foundation" }],
  creator: "ParaVidya Foundation",
  publisher: "ParaVidya Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/Paravidyalogosvg.svg",
        type: "image/svg+xml",
      },
      {
        url: "/Logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/Logo.png",
        type: "image/png",
        sizes: "16x16",
      }
    ],
    shortcut: "/Paravidyalogosvg.svg",
    apple: [
      {
        url: "/Logo.png",
        sizes: "180x180",
      }
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paravidyafoundation.com',
    siteName: 'ParaVidya Foundation',
    title: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
    description: 'Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ParaVidyaNGO',
    creator: '@ParaVidyaNGO',
    title: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
    description: 'Transform your life through ancient wisdom and modern wellness practices.',
    images: ['/og-default.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://paravidyafoundation.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} font-sans antialiased`}>
      <head>
        <GA />
        <FacebookPixel />
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className="bg-white text-[#111111]" suppressHydrationWarning={true}>
        <SkipToContent />
        <Navbar />
        <Header />
        
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  )
}
