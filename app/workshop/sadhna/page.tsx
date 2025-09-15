import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopSadhna from "@/components/workshop/sadhna/workshopsadhna"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Sadhna – Para Vidya",
  description: "Description, philosophy, and spiritual practices for daily sadhna.",
}

export default function SadhnaPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Sadhna at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Cultivate inner discipline and devotion through daily spiritual practices. Our sadhna guidance blends mantra, meditation, and seva for spiritual growth." />
<WorkshopSadhna />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Daily Sadhna Practices",
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Mantra and Meditation Sadhna",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Seva and Spiritual Service",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Sadhna"
        subtitle="Cultivate inner discipline and devotion through daily spiritual practices."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
