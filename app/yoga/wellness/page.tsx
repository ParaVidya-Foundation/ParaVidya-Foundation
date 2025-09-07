import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Wellness Yoga – Para Vidya",
  description: "Holistic wellness through gentle yoga practices for overall health and vitality.",
}

const wellnessPractices = [
  {
    title: "Gentle Hatha Flow",
    duration: "60 minutes",
    level: "All Levels",
    description: "A gentle flow of classical yoga postures designed to improve flexibility and strength while promoting relaxation.",
    benefits: ["Improved flexibility", "Better circulation", "Stress reduction", "Enhanced balance"]
  },
  {
    title: "Restorative Yoga",
    duration: "75 minutes",
    level: "Beginner",
    description: "Deep relaxation through supported poses that allow the body to release tension and restore natural energy.",
    benefits: ["Deep relaxation", "Improved sleep", "Reduced muscle tension", "Mental clarity"]
  },
  {
    title: "Wellness Pranayama",
    duration: "45 minutes",
    level: "All Levels",
    description: "Breathing techniques specifically designed to enhance overall wellness and vitality.",
    benefits: ["Increased energy", "Better lung function", "Improved focus", "Emotional balance"]
  },
  {
    title: "Mindful Movement",
    duration: "50 minutes",
    level: "All Levels",
    description: "Combination of gentle yoga, meditation, and mindful movement for holistic wellness.",
    benefits: ["Body awareness", "Mental calm", "Physical strength", "Spiritual connection"]
  }
]

export default function WellnessYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Wellness Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience holistic wellness through gentle, therapeutic yoga practices designed to nurture your body, mind, and spirit.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {wellnessPractices.map((practice) => (
          <Card key={practice.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{practice.title}</CardTitle>
              <div className="flex gap-4 text-sm text-gray-600">
                <span><strong>Duration:</strong> {practice.duration}</span>
                <span><strong>Level:</strong> {practice.level}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">{practice.description}</p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {practice.benefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
