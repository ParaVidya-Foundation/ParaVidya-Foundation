import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopMantra from "@/components/workshop/mantra/workshopmantra"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Bhagavad Gita Workshops - Ancient Wisdom for Modern Life | ParaVidya Foundation",
  description: "Discover the timeless teachings of the Bhagavad Gita. Learn practical wisdom for purpose, devotion, and self-discovery in daily life through expert-guided workshops.",
  keywords: [
    "bhagavad gita workshops",
    "ancient wisdom",
    "spiritual guidance",
    "self-discovery",
    "dharma teachings",
    "vedic philosophy",
    "paravidya foundation",
    "gita classes"
  ],
  openGraph: {
    title: "Bhagavad Gita Workshops - Ancient Wisdom for Modern Life | ParaVidya Foundation",
    description: "Discover the timeless teachings of the Bhagavad Gita. Learn practical wisdom for purpose, devotion, and self-discovery in daily life.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Bhagavad Gita Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagavad Gita Workshops - Ancient Wisdom for Modern Life | ParaVidya Foundation",
    description: "Discover the timeless teachings of the Bhagavad Gita for modern life.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function GitaWorkshopsPage() {
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

     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Apply the timeless truths of the Bhagavad Gita for purpose, devotion, and self-discovery in daily life. Learn practical wisdom from ancient teachings." />
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
        title="Bhagavad Gita Workshops"
        subtitle="Apply the timeless truths of purpose, devotion, and self-discovery in daily life."
        imageSrc="/Workshop/ayurveda.png"
        buttonText="Join Now"
      />

    </div>
  )
}
