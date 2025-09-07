import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Stress Management Yoga – Para Vidya",
  description: "Release tension with calming breath, gentle flows, and mindfulness to restore inner ease.",
}

export default function StressManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Stress Management Yoga"
        subtitle="Unwind with soothing sequences, grounding breathwork, and mindful pauses—practices designed to bring you back to balance."
        imageSrc="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
        imageAlt="Relaxing yoga for stress relief"
      />
  </div>
  )
}
