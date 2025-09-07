import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Fatigue Relief Yoga – Para Vidya",
  description: "Energizing yoga practices to combat fatigue and restore natural vitality and energy.",
}

const fatigueReliefPractices = [
  {
    title: "Energizing Morning Flow",
    duration: "45 minutes",
    level: "All Levels",
    description: "Dynamic yoga flow designed to awaken the body and mind, boosting energy for the day ahead.",
    benefits: ["Increased energy", "Better circulation", "Mental alertness", "Improved stamina"]
  },
  {
    title: "Revitalizing Pranayama",
    duration: "25 minutes",
    level: "All Levels",
    description: "Breathing techniques to increase oxygen intake and boost natural energy levels.",
    benefits: ["Enhanced vitality", "Better oxygen flow", "Increased focus", "Natural energy boost"]
  },
  {
    title: "Energy Restoration Meditation",
    duration: "30 minutes",
    level: "All Levels",
    description: "Meditation practices to restore mental energy and combat mental fatigue.",
    benefits: ["Mental clarity", "Reduced brain fog", "Better concentration", "Restored focus"]
  },
  {
    title: "Vitality Workshop",
    duration: "90 minutes",
    level: "All Levels",
    description: "Comprehensive workshop combining energizing yoga, breathing, and lifestyle tips for sustained energy.",
    benefits: ["Long-term energy improvement", "Better lifestyle habits", "Sustained vitality", "Overall wellness"]
  }
]

export default function FatigueReliefYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Fatigue Relief Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Combat fatigue and restore your natural energy through invigorating yoga practices and breathing techniques.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {fatigueReliefPractices.map((practice) => (
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
