import { Metadata } from "next"
import Image from "next/image"
import Mission from "@/components/workshop/ayurveda/missionayur"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import WorkshopMantra from "@/components/workshop/mantra/workshopmantra"
import CourseBanner from "@/components/yoga/Coursebanner"

export const metadata: Metadata = {
  title: "Sacred Mantra Workshops - Transform Through Sound | ParaVidya Foundation",
  description: "Harness the power of sacred mantras for spiritual transformation. Learn Vedic chanting, Gayatri mantra, and healing sound practices with expert guidance.",
  keywords: [
    "mantra workshops",
    "sacred mantras",
    "vedic chanting",
    "gayatri mantra",
    "spiritual transformation",
    "sound healing",
    "paravidya foundation",
    "mantra meditation"
  ],
  openGraph: {
    title: "Sacred Mantra Workshops - Transform Through Sound | ParaVidya Foundation",
    description: "Harness the power of sacred mantras for spiritual transformation. Learn Vedic chanting and healing sound practices.",
    type: "website",
    images: [
      {
        url: "/Carousel/Online-Hawan.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred Mantra Workshops at ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Mantra Workshops - Transform Through Sound | ParaVidya Foundation",
    description: "Harness the power of sacred mantras for spiritual transformation.",
    images: ["/Carousel/Online-Hawan.jpg"],
  },
}

export default function MantraWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/Carousel/Online-Hawan.jpg"
            alt="Sacred Mantra Workshops at ParaVidya Foundation - Transform Through Sound"
            fill
            sizes="100vw"
            className="object-cover"
            priority
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
