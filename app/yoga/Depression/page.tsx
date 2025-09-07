import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Depression Relief Yoga – Para Vidya",
  description: "Gentle, restorative practices to lift mood, re-energize the body, and cultivate inner hope.",
}

export default function DepressionReliefYogaPage() {
  return (
    <div>
      <HeroSection
        title="Depression Relief Yoga"
        subtitle="Support your emotional well-being with slow flows, soothing breathwork, and guided stillness that nurtures the nervous system and mind."
        imageSrc="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg"
        imageAlt="Restorative yoga pose with calm ambiance"
      />
  </div>
  )
}
