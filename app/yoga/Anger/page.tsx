import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Anger Management Yoga – Para Vidya",
  description: "Transform reactivity into resilience with breath-led practices, grounding postures, and mindful awareness.",
}



export default function AngerManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Anger Management Yoga"
        subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
        imageSrc="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
        imageAlt="Grounded yoga posture promoting calm and control"
      />
    </div>
  )
}
