import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sleep Therapy Yoga – Para Vidya",
  description: "Restorative yoga practices to improve sleep quality and combat insomnia naturally.",
}

const sleepTherapyPractices = [
  {
    title: "Bedtime Restorative Flow",
    duration: "45 minutes",
    level: "All Levels",
    description: "Gentle restorative poses designed to prepare the body and mind for deep, restful sleep.",
    benefits: ["Better sleep quality", "Reduced insomnia", "Deep relaxation", "Improved sleep onset"]
  },
  {
    title: "Calming Pranayama",
    duration: "20 minutes",
    level: "All Levels",
    description: "Breathing techniques to activate the parasympathetic nervous system and promote sleep.",
    benefits: ["Faster sleep onset", "Reduced anxiety", "Calm nervous system", "Better sleep depth"]
  },
  {
    title: "Sleep Meditation",
    duration: "30 minutes",
    level: "All Levels",
    description: "Guided meditation practices to quiet the mind and prepare for peaceful sleep.",
    benefits: ["Quiet mind", "Reduced racing thoughts", "Peaceful sleep", "Better dream quality"]
  },
  {
    title: "Sleep Wellness Workshop",
    duration: "90 minutes",
    level: "All Levels",
    description: "Comprehensive workshop on sleep hygiene, yoga, and meditation for optimal rest.",
    benefits: ["Sleep education", "Long-term sleep improvement", "Better sleep habits", "Overall wellness"]
  }
]

export default function SleepTherapyYogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Sleep Therapy Yoga</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover natural sleep solutions through restorative yoga practices that promote deep, restful sleep and combat insomnia.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {sleepTherapyPractices.map((practice) => (
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
