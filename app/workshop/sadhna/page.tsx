import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopSadhna from "@/components/workshop/sadhna/workshopsadhna"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Sadhna Workshops - Daily Spiritual Practice | ParaVidya Foundation",
  description: "Learn to harmonize body, mind, and soul through daily spiritual practices. Expert guidance on meditation, mantra, and devotional practices for balanced living.",
  keywords: [
    "sadhna workshops",
    "daily spiritual practice",
    "meditation practice",
    "spiritual discipline",
    "devotional practices",
    "inner harmony",
    "paravidya foundation",
    "spiritual growth"
  ],
  openGraph: {
    title: "Sadhna Workshops - Daily Spiritual Practice | ParaVidya Foundation",
    description: "Learn to harmonize body, mind, and soul through daily spiritual practices. Expert guidance on meditation and devotional practices.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Sadhna Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadhna Workshops - Daily Spiritual Practice | ParaVidya Foundation",
    description: "Learn to harmonize body, mind, and soul through daily spiritual practices.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function SadhnaPage() {
  return (
    <div className="">
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
