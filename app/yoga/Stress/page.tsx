import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Stress Management Yoga – Para Vidya",
  description: "Effective yoga techniques to reduce stress, anxiety, and promote mental well-being.",
}

const stressReliefPractices = [
  {
    title: "Calming Flow",
    duration: "60 minutes",
    level: "All Levels",
    description: "Gentle yoga flow designed to release physical tension and calm the nervous system.",
    benefits: ["Reduced cortisol levels", "Improved sleep", "Better mood", "Enhanced relaxation"]
  },
  {
    title: "Anxiety Relief Pranayama",
    duration: "30 minutes",
    level: "Beginner",
    description: "Specific breathing techniques to activate the parasympathetic nervous system and reduce anxiety.",
    benefits: ["Immediate calm", "Reduced panic attacks", "Better focus", "Emotional stability"]
  },
  {
    title: "Stress Release Meditation",
    duration: "45 minutes",
    level: "All Levels",
    description: "Guided meditation practices to release mental stress and cultivate inner peace.",
    benefits: ["Mental clarity", "Reduced overthinking", "Better decision making", "Inner peace"]
  },
  {
    title: "Tension Release Workshop",
    duration: "90 minutes",
    level: "All Levels",
    description: "Comprehensive workshop combining yoga, breathing, and meditation for deep stress relief.",
    benefits: ["Complete relaxation", "Improved coping skills", "Better stress management", "Long-term resilience"]
  }
]

export default function StressManagementYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Stress Management Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Learn powerful yoga techniques to manage stress, reduce anxiety, and cultivate mental resilience in daily life.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {stressReliefPractices.map((practice) => (
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
