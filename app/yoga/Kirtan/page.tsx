import HeroSection from "@/components/yoga/heroyoga"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yoga – Para Vidya",
  description: "Yoga sessions, teachers, and benefits for holistic wellbeing.",
}

export default function YogaPage() {
  return (
<div>
  <HeroSection
        title="Kirtan & Bhakti"
        subtitle="Open the heart through devotional chanting and meditative rhythm—where breath, voice, and presence meet."
        imageSrc="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg"
        imageAlt="Devotional practice with serene ambiance"
      />
  </div>
  )
}
