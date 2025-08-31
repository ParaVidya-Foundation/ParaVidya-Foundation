import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Para Vidya Foundation – Spiritual NGO",
  description:
    "Royal, minimal, modern spiritual NGO inspired by Hindu traditions. Workshops, Sadhna, Karamkand, Yoga, and Seva.",
  generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} font-sans antialiased`}>
      <head>
        <GA />
        <FacebookPixel />
      </head>
      <body className="bg-white text-[#111111]">
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
