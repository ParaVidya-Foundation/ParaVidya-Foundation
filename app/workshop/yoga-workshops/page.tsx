import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopYoga from "@/components/workshop/yoga/workshopyoga"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Yoga Workshops – Para Vidya",
  description: "Comprehensive yoga workshops for physical and spiritual wellness.",
}

export default function YogaWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Yoga Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Comprehensive yoga workshops for physical and spiritual wellness. Enhance your practice with specialized sessions and intensive training." />
<WorkshopYoga />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Hatha Yoga Intensive Workshop",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Pranayama Masterclass",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Yoga for Stress Relief",
 
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Yoga Workshops"
        subtitle="Comprehensive yoga workshops for physical and spiritual wellness."
        imageSrc="/Workshop/yoga.png"
        buttonText="Join Now"
      />

    </div>
  )
}
