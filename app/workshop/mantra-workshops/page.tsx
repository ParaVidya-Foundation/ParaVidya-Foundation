import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopMantra from "@/components/workshop/mantra/workshopmantra"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Mantra Workshops – Para Vidya",
  description: "Learn the power of sacred mantras for spiritual transformation.",
}

export default function MantraWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Mantra Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Learn the power of sacred mantras for spiritual transformation. Discover the ancient wisdom and healing properties of Vedic mantras." />
<WorkshopMantra />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Gayatri Mantra Workshop",
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Maha Mrityunjaya Mantra",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Vedic Mantra Intensive",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Mantra Workshops"
        subtitle="Learn the power of sacred mantras for spiritual transformation."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
