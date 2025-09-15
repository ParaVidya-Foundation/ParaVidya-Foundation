import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import CourseBanner from "@/components/yoga/Coursebanner"
import WorkshopSanskrit from "@/components/workshop/sanskrit/workshopsanskrit"

export const metadata: Metadata = {
  title: "Sanskrit Workshops – Para Vidya",
  description: "Learn the ancient language of Sanskrit for spiritual and intellectual growth.",
}

export default function SanskritWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Sanskrit Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Learn the ancient language of Sanskrit for spiritual and intellectual growth. Discover the beauty and wisdom embedded in this sacred language." />
<WorkshopSanskrit />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Sanskrit Learning for Beginners",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Sanskrit Grammar and Literature",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Sanskrit Mantras and Chanting",
 
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Sanskrit Workshops"
        subtitle="Learn the ancient language of Sanskrit for spiritual and intellectual growth."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
