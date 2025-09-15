import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopMeditation from "@/components/workshop/meditation/workshopmeditation"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Meditation Sessions – Para Vidya",
  description: "Guided meditation sessions for inner peace and mindfulness.",
}

export default function MeditationSessionsPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Meditation Sessions at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Guided meditation sessions for inner peace and mindfulness. Experience various meditation techniques for spiritual growth and mental clarity." />
<WorkshopMeditation />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Morning Meditation Session",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Guided Visualization Techniques",
  
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Chakra Meditation Workshop",
 
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Meditation Sessions"
        subtitle="Guided meditation sessions for inner peace and mindfulness."
        imageSrc="/Workshop/meditation.png"
        buttonText="Join Now"
      />

    </div>
  )
}
