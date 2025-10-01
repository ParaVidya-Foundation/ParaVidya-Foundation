import { Metadata } from "next"
import { YogaCarousel } from "@/components/yoga/YogaCarousel"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

export const metadata: Metadata = {
  title: "Yoga & Wellness – Para Vidya",
  description: "Comprehensive yoga practices for physical, mental, and spiritual wellness.",
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
<div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Yoga Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
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
