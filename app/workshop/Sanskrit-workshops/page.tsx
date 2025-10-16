import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import CourseBanner from "@/components/yoga/Coursebanner"
import WorkshopSanskrit from "@/components/workshop/sanskrit/workshopsanskrit"

export const metadata: Metadata = {
  title: "Sanskrit Learning Workshops - Ancient Language for Modern Minds | ParaVidya Foundation",
  description: "Learn the ancient language of Sanskrit for spiritual and intellectual growth. Discover Vedic texts, mantras, and the beauty of this sacred language with expert guidance.",
  keywords: [
    "sanskrit workshops",
    "ancient language learning",
    "vedic texts",
    "sanskrit grammar",
    "spiritual language",
    "sanskrit mantras",
    "paravidya foundation",
    "sanskrit classes"
  ],
  openGraph: {
    title: "Sanskrit Learning Workshops - Ancient Language for Modern Minds | ParaVidya Foundation",
    description: "Learn the ancient language of Sanskrit for spiritual and intellectual growth. Discover Vedic texts and sacred mantras.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Sanskrit Learning Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanskrit Learning Workshops - Ancient Language for Modern Minds | ParaVidya Foundation",
    description: "Learn the ancient language of Sanskrit for spiritual and intellectual growth.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function SanskritWorkshopsPage() {
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
  
      thumbnail: "/Carousel/About-us.jpg",
    },
    {
      id: "VIDEO_ID_2",
      title: "ParaVidya: Sanskrit Grammar and Literature",
  
      thumbnail: "/Carousel/Navgrah-Shanti.jpg",
    },
    {
      id: "VIDEO_ID_3",
      title: "ParaVidya Foundation: Sanskrit Mantras and Chanting",
 
      thumbnail: "/Carousel/Online-Hawan.jpg",
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
