import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Depression Relief Yoga – Para Vidya",
  description: "Healing yoga practices to support emotional well-being and provide relief from depression.",
}

const depressionReliefPractices = [
  {
    title: "Gentle Uplifting Flow",
    duration: "60 minutes",
    level: "All Levels",
    description: "Gentle yoga flow designed to lift mood and energy through heart-opening and energizing poses.",
    benefits: ["Improved mood", "Increased energy", "Better self-esteem", "Emotional balance"]
  },
  {
    title: "Energizing Pranayama",
    duration: "30 minutes",
    level: "All Levels",
    description: "Breathing techniques to increase energy levels and combat feelings of lethargy and sadness.",
    benefits: ["Increased vitality", "Better focus", "Improved mood", "Enhanced motivation"]
  },
  {
    title: "Healing Meditation",
    duration: "45 minutes",
    level: "All Levels",
    description: "Compassionate meditation practices to cultivate self-love and emotional healing.",
    benefits: ["Self-compassion", "Emotional healing", "Inner peace", "Positive mindset"]
  },
  {
    title: "Holistic Healing Workshop",
    duration: "120 minutes",
    level: "All Levels",
    description: "Comprehensive healing workshop combining yoga, meditation, and emotional support techniques.",
    benefits: ["Deep emotional healing", "Coping strategies", "Support network", "Long-term wellness"]
  }
]

export default function DepressionReliefYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Depression Relief Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find healing and emotional support through gentle yoga practices designed to uplift mood and restore inner light.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {depressionReliefPractices.map((practice) => (
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
