import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Weight Management Yoga – Para Vidya",
  description: "Healthy weight management through yoga practices that support metabolism and mindful eating.",
}

const weightManagementPractices = [
  {
    title: "Metabolism Boosting Flow",
    duration: "60 minutes",
    level: "All Levels",
    description: "Dynamic yoga flow designed to increase metabolism and support healthy weight management.",
    benefits: ["Increased metabolism", "Better digestion", "Improved circulation", "Enhanced energy"]
  },
  {
    title: "Digestive Health Pranayama",
    duration: "30 minutes",
    level: "All Levels",
    description: "Breathing techniques to improve digestion and support healthy metabolism.",
    benefits: ["Better digestion", "Improved metabolism", "Reduced bloating", "Enhanced nutrient absorption"]
  },
  {
    title: "Mindful Eating Meditation",
    duration: "35 minutes",
    level: "All Levels",
    description: "Meditation practices to develop mindful eating habits and healthy relationship with food.",
    benefits: ["Mindful eating", "Better food choices", "Reduced emotional eating", "Healthy habits"]
  },
  {
    title: "Holistic Weight Wellness Workshop",
    duration: "120 minutes",
    level: "All Levels",
    description: "Comprehensive workshop combining yoga, nutrition education, and lifestyle practices for sustainable weight management.",
    benefits: ["Sustainable weight management", "Healthy lifestyle habits", "Nutrition education", "Long-term wellness"]
  }
]

export default function WeightManagementYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Weight Management Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Achieve healthy weight management through yoga practices that support metabolism, mindful eating, and overall wellness.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {weightManagementPractices.map((practice) => (
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
