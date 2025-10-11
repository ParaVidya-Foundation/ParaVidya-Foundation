import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopAyur from "@/components/workshop/ayurveda/workshopayur"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Ayurveda Workshops - Ancient Healing Science | ParaVidya Foundation",
  description: "Learn the ancient science of Ayurveda for holistic health and wellness. Expert-led workshops on natural healing, herbal medicine, and Ayurvedic lifestyle practices.",
  keywords: [
    "ayurveda workshops",
    "ancient healing science",
    "holistic health",
    "herbal medicine",
    "ayurvedic lifestyle",
    "natural wellness",
    "traditional medicine",
    "paravidya foundation"
  ],
  openGraph: {
    title: "Ayurveda Workshops - Ancient Healing Science | ParaVidya Foundation",
    description: "Learn the ancient science of Ayurveda for holistic health and wellness. Expert-led workshops on natural healing and Ayurvedic practices.",
    type: "website",
    images: [
      {
        url: "/Carousel/Ayurveda.jpg",
        width: 1200,
        height: 630,
        alt: "Ayurveda Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurveda Workshops - Ancient Healing Science | ParaVidya Foundation",
    description: "Learn the ancient science of Ayurveda for holistic health and wellness.",
    images: ["/Carousel/Ayurveda.jpg"],
  },
}

export default function AyurvedaWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/Carousel/Ayurveda.jpg"
            alt="Ayurveda Workshops at ParaVidya Foundation - Ancient Science for Holistic Health"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Learn the ancient science of Ayurveda for holistic health and wellness.Learn the ancient science of Ayurveda for holistic health and wellness." />
<WorkshopAyur />
     <FeaturedVideos
  headline="Featured Videos"
  description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
  exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
  videos={[
    {
      id: "VIDEO_ID_1",
      title: "ParaVidya: Meditation Techniques for Inner Peace",
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Yoga for Beginners — 30 Minute Session",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Healthy Diet & Wellness Tips",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
    },
  ]}
/>
<br></br><br></br>
<CourseBanner
        title="Ayurveda Workshops"
        subtitle="Learn the ancient science of Ayurveda for holistic health and wellness."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
