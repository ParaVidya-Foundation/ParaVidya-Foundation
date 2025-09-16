import { Metadata } from "next"
import { YogaCarousel } from "@/components/yoga/YogaCarousel"

export const metadata: Metadata = {
  title: "Yoga & Wellness – Para Vidya",
  description: "Comprehensive yoga practices for physical, mental, and spiritual wellness.",
}

export default function YogaPage() {
  return (
<>
<div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Yoga Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>

       <YogaCarousel/>
</>
  )
}
