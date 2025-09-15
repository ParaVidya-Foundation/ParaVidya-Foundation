import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Mission from "@/components/workshop/ayurveda/missionayur"

export const metadata: Metadata = {
  title: "Ayurveda Workshops – Para Vidya",
  description: "Learn the ancient science of Ayurveda for holistic health and wellness.",
}

export default function AyurvedaWorkshopsPage() {
  return (
    <div className="">
         <div className="top-img-about">
          <img
            src={"/Carousel/Online-Hawan.jpg"}
            alt="Ayurveda Workshops at Para Vidya"
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
     <Mission leftImg={"/Workshop/left.png"} rightImg={"/Workshop/right.png"} headline="Our Mission" text="Learn the ancient science of Ayurveda for holistic health and wellness.Learn the ancient science of Ayurveda for holistic health and wellness." />
    </div>
  )
}
