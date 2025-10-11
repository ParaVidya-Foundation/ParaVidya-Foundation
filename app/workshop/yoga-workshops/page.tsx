import { Metadata } from "next"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopYoga from "@/components/workshop/yoga/workshopyoga"
import { YogaCarousel } from "@/components/yoga/YogaCarousel"
import YogaTeacher from "@/components/workshop/yoga/YogaTeacher"
import MeditationHero from "@/components/workshop/meditation/MeditationHero"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

export const metadata: Metadata = {
  title: "Yoga Workshops – Para Vidya",
  description: "Comprehensive yoga workshops for physical and spiritual wellness.",
}

export default function YogaWorkshopsPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Mental Health Advocate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Yoga Practitioner",
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
    <div className="">
<MeditationHero/>

<WorkshopYoga />
<YogaTeacher/>
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Hatha Yoga Intensive Workshop",
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Pranayama Masterclass",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Yoga for Stress Relief",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
    },
  ]}
/>
<YogaCarousel/>
<section className="w-full">
          <TestimonialsComponent
            reels={testimonials}
            title="Our Yoga Workshops Testimonials"
          />
        </section>   
    </div>
  )
}
