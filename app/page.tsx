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
    image: "/SmallCarousel/gita.webp",
    buttonText: "Contact Us",
    buttonLink: "/workshop/Gita",
  },
  {
    subtitle: "Find inner peace and focus through guided practices. We guide you personally and resolve all queries.",
    image: "/SmallCarousel/yoga.webp",
    buttonText: "Learn More",
    buttonLink: "/workshop/yoga-workshops",
  },
  {
  
    subtitle: "Harness the power of sound to transform thoughts and destiny. Practice with our guidance and clear your doubts.",
    image: "/SmallCarousel/meditation.webp",
    buttonText: "Get Started",
    buttonLink: "/workshop/meditation-sessions",
  },
  {
  
    subtitle: "Learn to harmonize body, mind, and soul through practical classes for a balanced life. We guide you step by step in every session.",
    image: "/SmallCarousel/mantra.webp",
    buttonText: "Contact Us",
    buttonLink: "/workshop/sadhna",
  },
  {
    subtitle: "Discover natural wellness and vitality through ancient herbal wisdom. Join our sessions and have your questions clarified by our experts.",
    image: "/SmallCarousel/ayurveda.webp",
    buttonText: "Learn More",
    buttonLink: "/workshop/ayurveda-workshops",
  },
  {
  
    subtitle: "Awaken Your Inner Power with Mindful Rituals and Timeless Wisdom. Learn safely with expert teaching and ask questions .",
    image: "/SmallCarousel/tantra.webp",
    buttonText: "Get Started",
    buttonLink: "/workshop/Tantra",
  },
  {
  
    subtitle: "Apply the timeless truths of purpose, devotion, and self-discovery in daily life. Join our classes and get all your doubts answered.",
    image: "/SmallCarousel/gita1.webp",
    buttonText: "Contact Us",
    buttonLink: "/workshop/Gita",
  },
    {
  
    subtitle: "Discover the knowledge in ancient texts and use it in everyday life. Learn with our experts and ask questions .",
    image: "/SmallCarousel/veda_purana.webp",
    buttonText: "Contact Us",
    buttonLink: "/workshop/Sanskrit-workshops",
  },
  {
    subtitle: "Explore how stars and planets can affect your life, and how to read charts. Join our classes and get your questions answered.",
    image: "/SmallCarousel/astrology.webp",
    buttonText: "Learn More",
    buttonLink: "/workshop/Astrology-workshops",
  },
  {
  
    subtitle: "Learn sacred Vedic ceremonies and their meanings with expert guidance. We teach step by step and answer all your questions.",
    image: "/SmallCarousel/Karamkaand.webp",
    buttonText: "Get Started",
    buttonLink: "/workshop/Tantra",
  },
  {
  
    subtitle: "Learn from our experts, unlock deep  knowledge, and get all your doubts answered freely.",
    image: "/SmallCarousel/sanskrit.webp",
    buttonText: "Contact Us",
    buttonLink: "/workshop/sanskrit-workshops",
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
      {/* <NGOSocietyImpact /> */}
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
