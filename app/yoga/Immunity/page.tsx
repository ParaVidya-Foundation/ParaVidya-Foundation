import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Immunity Boost Yoga – Para Vidya",
  description: "Strengthen your immune system naturally through specialized yoga practices and breathing techniques.",
}

const immunityBoostPractices = [
  {
    title: "Immune System Flow",
    duration: "60 minutes",
    level: "All Levels",
    description: "Yoga flow specifically designed to stimulate the lymphatic system and boost immune function.",
    benefits: ["Stronger immune system", "Better lymphatic drainage", "Improved circulation", "Enhanced detoxification"]
  },
  {
    title: "Lung Strengthening Pranayama",
    duration: "35 minutes",
    level: "All Levels",
    description: "Breathing exercises to strengthen respiratory system and improve lung capacity for better immunity.",
    benefits: ["Stronger lungs", "Better oxygen intake", "Improved respiratory health", "Enhanced immune response"]
  },
  {
    title: "Stress Reduction Meditation",
    duration: "40 minutes",
    level: "All Levels",
    description: "Meditation practices to reduce stress hormones that can weaken the immune system.",
    benefits: ["Reduced stress", "Lower cortisol levels", "Better immune function", "Improved overall health"]
  },
  {
    title: "Wellness Immunity Workshop",
    duration: "120 minutes",
    level: "All Levels",
    description: "Comprehensive workshop combining yoga, breathing, and lifestyle practices for optimal immune health.",
    benefits: ["Complete immune support", "Healthy lifestyle habits", "Long-term wellness", "Disease prevention"]
  }
]

export default function ImmunityBoostYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Immunity Boost Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Strengthen your body's natural defense system through specialized yoga practices that enhance immune function and overall health.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {immunityBoostPractices.map((practice) => (
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
