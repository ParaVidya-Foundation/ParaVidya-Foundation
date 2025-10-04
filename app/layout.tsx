import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import Header from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SkipToContent } from "@/components/skip-to-content"
import { GA } from "@/components/analytics/ga"
import { FacebookPixel } from "@/components/analytics/fb-pixel"
import "./globals.css"
import Navbar from "@/components/Navbar"
import WhatsappButton from "@/components/WhatsappButton"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://paravidyafoundation.com'),
  title: "ParaVidya Foundation - Spiritual Wellness & Yoga",
  description: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing for spiritual seekers.",
  keywords: [
    "yoga courses online",
    "spiritual wellness",
    "anger management yoga",
    "meditation practices",
    "holistic healing",
    "stress management yoga",
    "sleep therapy yoga",
    "wellness programs"
  ],
  authors: [{ name: "ParaVidya Foundation" }],
  creator: "ParaVidya Foundation",
  publisher: "ParaVidya Foundation",
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
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} font-sans antialiased`}>
      <head>
        <GA />
        <FacebookPixel />
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
