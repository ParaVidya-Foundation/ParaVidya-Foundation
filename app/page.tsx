import CustomCarousel from "@/components/carousel"
import DonationSection from "@/components/home/donationsection"
import Marquee from "@/components/home/marquee"
import NGOSocietyImpact from "@/components/home/NGOSocietyImpact"
import SupportUs from "@/components/home/Supportus"
import { Metadata } from "next"
import KaramkandHome from "@/components/home/Karamkandhome"
import GitaHome from "@/components/home/Workshop"
import VideoSeries from "@/components/home/VideoSeries"
import NewsletterSection from "@/components/home/Newletter/NewsletterSection"
import JoinNGO from "@/components/home/joinngo/JoinNGO"

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
  
    subtitle: "Apply the timeless truths of purpose, devotion, and self-discovery in daily life. Join our classes and get all your doubts answered.",
    image: "/SmallCarousel/gita.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    subtitle: "Find inner peace and focus through guided practices. We guide you personally and resolve all queries.",
    image: "/SmallCarousel/yoga.png",
    buttonText: "Learn More",
    buttonLink: "/about-us",
  },
  {
  
    subtitle: "Harness the power of sound to transform thoughts and destiny. Practice with our guidance and clear your doubts.",
    image: "/SmallCarousel/gita1.png",
    buttonText: "Get Started",
    buttonLink: "/workshop",
  },
  {
  
    subtitle: "Learn to harmonize body, mind, and soul through practical classes for a balanced life. We guide you step by step in every session.",
    image: "/SmallCarousel/gita1.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    subtitle: "Discover natural wellness and vitality through ancient herbal wisdom. Join our sessions and have your questions clarified by our experts.",
    image: "/SmallCarousel/ayurveda.webp",
    buttonText: "Learn More",
    buttonLink: "/about-us",
  },
  {
  
    subtitle: "Awaken Your Inner Power with Mindful Rituals and Timeless Wisdom. Learn safely with expert teaching and ask questions .",
    image: "/SmallCarousel/tantra.webp",
    buttonText: "Get Started",
    buttonLink: "/workshop",
  },
  {
  
    subtitle: "Apply the timeless truths of purpose, devotion, and self-discovery in daily life. Join our classes and get all your doubts answered.",
    image: "/SmallCarousel/gita1.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },

    {
  
    subtitle: "Discover the knowledge in ancient texts and use it in everyday life. Learn with our experts and ask questions .",
    image: "/SmallCarousel/veda_purana.webp",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    subtitle: "Explore how stars and planets can affect your life, and how to read charts. Join our classes and get your questions answered.",
    image: "/SmallCarousel/astrology.webp",
    buttonText: "Learn More",
    buttonLink: "/about-us",
  },
  {
  
    subtitle: "Learn sacred Vedic ceremonies and their meanings with expert guidance. We teach step by step and answer all your questions.",
    image: "/SmallCarousel/gita1.png",
    buttonText: "Get Started",
    buttonLink: "/workshop",
  },
  {
  
    subtitle: "Learn from our experts, unlock deep  knowledge, and get all your doubts answered freely.",
    image: "/SmallCarousel/sanskrit.webp",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      <CustomCarousel
        images={[
          "/Carousel/Join.jpg",
          "/Carousel/Katha.jpg",
          "/Carousel/Ayurveda.jpg",
          "/Carousel/Workplace-Challanges.jpg",
        ]}     
      />
      <Marquee />
      <NGOSocietyImpact />
      <KaramkandHome />
      <DonationSection />
      
      <GitaHome slides={slides} />
      <VideoSeries />
      <JoinNGO />
      <SupportUs />
      <NewsletterSection />
    </>
  )
}
