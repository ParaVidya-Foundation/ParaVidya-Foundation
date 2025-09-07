import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"

export const metadata: Metadata = {
  title: "Fatigue Relief Yoga – Para Vidya",
  description: "Energizing sequences and breath practices to overcome burnout and restore sustainable vitality.",
}

export default function FatigueReliefYogaPage() {
  return (
    <div>
      <HeroSection
        title="Fatigue Relief Yoga"
        subtitle="Reclaim your energy with gentle activations, balanced flows, and oxygenating breathwork that awaken body and mind."
        imageSrc="https://images.pexels.com/photos/4056538/pexels-photo-4056538.jpeg"
        imageAlt="Invigorating morning yoga session"
      />
    </div>
  )
}
