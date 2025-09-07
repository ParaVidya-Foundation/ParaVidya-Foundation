import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Weight Management Yoga – Para Vidya",
  description: "Sustainable weight balance through metabolic-boosting flows, mindful movement, and breath awareness.",
}

export default function WeightManagementYogaPage() {
  return (
<div>
  <HeroSection
        title="Weight Management Yoga"
        subtitle="Build consistency with functional flows, conscious breathing, and mindful awareness that supports a healthier relationship with your body."
        imageSrc="https://images.pexels.com/photos/4325465/pexels-photo-4325465.jpeg"
        imageAlt="Yoga flow supporting healthy weight"
      />
  </div>
  )
}
