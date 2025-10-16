import { Metadata } from "next"
import Image from "next/image"
import { YogaCarousel } from "@/components/yoga/YogaCarousel"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

export const metadata: Metadata = {
  title: "Yoga & Wellness Programs - Holistic Health Solutions | ParaVidya Foundation",
  description: "Comprehensive yoga practices for physical, mental, and spiritual wellness. Expert-guided programs for stress, anger, sleep, depression, immunity, and overall wellbeing.",
  keywords: [
    "yoga wellness programs",
    "holistic health solutions",
    "stress management yoga",
    "anger management yoga",
    "sleep therapy yoga",
    "depression support yoga",
    "immunity boosting yoga",
    "weight management yoga",
    "paravidya foundation",
    "yoga classes online"
  ],
  openGraph: {
    title: "Yoga & Wellness Programs - Holistic Health Solutions | ParaVidya Foundation",
    description: "Comprehensive yoga practices for physical, mental, and spiritual wellness. Expert-guided programs for stress, anger, sleep, and overall wellbeing.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga & Wellness Programs at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga & Wellness Programs - Holistic Health Solutions | ParaVidya Foundation",
    description: "Comprehensive yoga practices for physical, mental, and spiritual wellness.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function YogaPage() {

  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Yoga Instructor",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Meditation Enthusiast",
      videoUrl: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      title: "Wellness Coach",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

  return (
<>
<div className="top-img-about relative w-full overflow-hidden rounded-2xl">
  <Image
    src="/Carousel/Online-Hawan.jpg"
    alt="Sanskrit Learning Workshops at ParaVidya Foundation - Ancient Language for Modern Minds"
    width={1920}
    height={1080}
    className="w-full h-auto object-contain"
    priority
  />
</div>


       <YogaCarousel/>
       <TestimonialsComponent
      reels={testimonials}
      title="Our Yoga Testimonials"
    />
</>

  )
}
