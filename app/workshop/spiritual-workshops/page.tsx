import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopSpiritual from "@/components/workshop/spiritual/workshopspiritual"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Spiritual Workshops - Inner Transformation | ParaVidya Foundation",
  description: "Deep spiritual workshops and discourses for inner transformation. Explore ancient scriptures, spiritual practices, and profound wisdom for awakening consciousness.",
  keywords: [
    "spiritual workshops",
    "inner transformation",
    "spiritual discourses",
    "consciousness awakening",
    "ancient scriptures",
    "spiritual wisdom",
    "paravidya foundation",
    "spiritual growth"
  ],
  openGraph: {
    title: "Spiritual Workshops - Inner Transformation | ParaVidya Foundation",
    description: "Deep spiritual workshops and discourses for inner transformation. Explore ancient scriptures and profound spiritual wisdom.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Spiritual Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Workshops - Inner Transformation | ParaVidya Foundation",
    description: "Deep spiritual workshops and discourses for inner transformation.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function SpiritualWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/Carousel/Online-Hawan.jpg"
            alt="Spiritual Workshops at ParaVidya Foundation - Inner Transformation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Deep spiritual workshops and discourses for inner transformation. Explore the profound wisdom of ancient scriptures and spiritual practices." />
<WorkshopSpiritual />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Bhagavad Gita Discourse Series",
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Vedanta Philosophy Workshop",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Upanishads Study Circle",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Spiritual Workshops"
        subtitle="Deep spiritual workshops and discourses for inner transformation."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
