import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopYoga from "@/components/workshop/yoga/workshopyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import { YogaCarousel } from "@/components/yoga/YogaCarousel"
import YogaTeacher from "@/components/workshop/yoga/YogaTeacher"
import MeditationHero from "@/components/workshop/meditation/MeditationHero"

export const metadata: Metadata = {
  title: "Yoga Workshops – Para Vidya",
  description: "Comprehensive yoga workshops for physical and spiritual wellness.",
}

export default function YogaWorkshopsPage() {
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
<br></br><br></br>
<CourseBanner
        title="Yoga Workshops"
        subtitle="Comprehensive yoga workshops for physical and spiritual wellness."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
