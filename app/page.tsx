import CustomCarousel from "@/components/carousel"
import DonationSection from "@/components/home/donationsection"
import Marquee from "@/components/home/marquee"
import NGOSocietyImpact from "@/components/home/NGOSocietyImpact"
import SupportUs from "@/components/home/Supportus"
import { Metadata } from "next"
import PaintReveal from "../components/home/Paintreveal"
import KaramkandHome from "@/components/home/Karamkandhome"
import GitaHome from "@/components/home/gitahome"

export const metadata: Metadata = {
  title: "Spiritual Wellness & Yoga Courses | ParaVidya Foundation",
  description: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, anger management, and holistic healing for spiritual seekers.",
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
  openGraph: {
    title: "Spiritual Wellness & Yoga Courses | ParaVidya Foundation",
    description: "Transform your life through ancient wisdom and modern wellness practices. Expert yoga courses, meditation guidance, and holistic healing.",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "ParaVidya Foundation - Spiritual Wellness & Yoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Wellness & Yoga Courses | ParaVidya Foundation",
    description: "Transform your life through ancient wisdom and modern wellness practices.",
    images: ["/og-home.jpg"],
  },
}

const slides = [
  {

    subtitle: "Innovative solutions for modern problems.",
    image: "SmallCarousel/gita.png",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
  
    subtitle: "Seamless integration with cutting-edge tech.",
    image: "SmallCarousel/gita2.png",
    buttonText: "Get Started",
    buttonLink: "/services",
  },
  {
  
    subtitle: "Be part of the innovation revolution.",
    image: "SmallCarousel/gita1.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      <CustomCarousel
        images={[
          "/Carousel/Your-One-Stop-for-Sacred-Rituals.jpg",
          "/Carousel/About-us.jpg",
          "/Carousel/Navgrah-Shanti.jpg",
          "/Carousel/Online-Hawan.jpg",
        ]}     
      />
      <Marquee />
      <NGOSocietyImpact />
      <KaramkandHome />
      <DonationSection />
      <GitaHome slides={slides} />
      <PaintReveal
        imageSrc="/Logo.png"
        title="Dharmo Rakshati Rakshitah"
        subtitle="They say dharma protects its protector. Experience firsthand how the most ancient Vedic traditions nurture your soul."
      />

      <SupportUs />
    </>
  )
}
