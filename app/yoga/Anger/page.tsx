import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Anger Management Yoga – Para Vidya",
  description: "Transform anger and emotional reactivity through mindful yoga practices and breathing techniques.",
}

const angerManagementPractices = [
  {
    title: "Cooling Breath Practice",
    duration: "30 minutes",
    level: "All Levels",
    description: "Specialized breathing techniques to cool the body and calm the mind during moments of anger.",
    benefits: ["Immediate cooling effect", "Reduced emotional intensity", "Better self-control", "Calm response"]
  },
  {
    title: "Emotional Release Flow",
    duration: "75 minutes",
    level: "All Levels",
    description: "Dynamic yoga flow designed to release pent-up emotions and transform anger into positive energy.",
    benefits: ["Emotional release", "Increased self-awareness", "Better emotional regulation", "Inner peace"]
  },
  {
    title: "Mindful Anger Meditation",
    duration: "45 minutes",
    level: "All Levels",
    description: "Meditation practices to observe anger without judgment and develop compassionate responses.",
    benefits: ["Emotional intelligence", "Compassionate responses", "Reduced reactivity", "Inner wisdom"]
  },
  {
    title: "Transformation Workshop",
    duration: "120 minutes",
    level: "All Levels",
    description: "Comprehensive workshop combining yoga, meditation, and emotional healing for anger transformation.",
    benefits: ["Deep emotional healing", "Lasting behavioral change", "Improved relationships", "Personal growth"]
  }
]

export default function AngerManagementYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Anger Management Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Transform anger and emotional reactivity through mindful yoga practices that cultivate patience, compassion, and inner peace.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {angerManagementPractices.map((practice) => (
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
