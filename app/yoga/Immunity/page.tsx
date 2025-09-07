import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Immunity Boost Yoga – Para Vidya",
  description: "Fortify your body's defenses with detoxifying twists, lymph-stimulating flows, and pranayama.",
}


export default function ImmunityBoostYogaPage() {
  return (
<div>   
  <HeroSection
        title="Immunity Boost Yoga"
        subtitle="Support immune function with cleansing sequences, balanced movement, and breath that calms inflammation and restores balance."
        imageSrc="https://images.pexels.com/photos/3822661/pexels-photo-3822661.jpeg"
        imageAlt="Detoxifying yoga twist aiding immunity"
      />
    </div>
  )
}
