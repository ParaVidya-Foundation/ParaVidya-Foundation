import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Sleep Therapy Yoga – Para Vidya",
  description: "Unwind your system with restorative postures, relaxing breath, and guided stillness for deeper sleep.",
}

export default function SleepTherapyYogaPage() {
  return (
<div>
  <HeroSection
        title="Sleep Therapy Yoga"
        subtitle="Soothe the nervous system with restorative shapes, breath that lengthens the exhale, and practices that invite deep rest."
        imageSrc="https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg"
        imageAlt="Calming evening yoga promoting sleep"
      />
  </div>
  )
}
