import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Yoga & Wellness – Para Vidya",
  description: "Comprehensive yoga practices for physical, mental, and spiritual wellness.",
}

const yogaCategories = [
  {
    title: "Wellness Yoga",
    description: "Holistic wellness through gentle yoga practices",
    link: "/yoga/wellness",
    icon: "🌱",
  },
  {
    title: "Stress Management",
    description: "Yoga techniques to reduce stress and anxiety",
    link: "/yoga/Stress",
    icon: "🧘‍♂️",
  },
  {
    title: "Anger Management",
    description: "Transform anger through mindful yoga practices",
    link: "/yoga/Anger",
    icon: "🔥",
  },
  {
    title: "Depression Relief",
    description: "Healing yoga for emotional well-being",
    link: "/yoga/Depression",
    icon: "💙",
  },
  {
    title: "Sleep Therapy",
    description: "Restorative yoga for better sleep",
    link: "/yoga/Sleep",
    icon: "😴",
  },
  {
    title: "Fatigue Relief",
    description: "Energizing yoga to combat fatigue",
    link: "/yoga/Fatigue",
    icon: "⚡",
  },
  {
    title: "Immunity Boost",
    description: "Strengthen immunity through yoga",
    link: "/yoga/Immunity",
    icon: "🛡️",
  },
  {
    title: "Weight Management",
    description: "Yoga for healthy weight management",
    link: "/yoga/OverWeight",
    icon: "⚖️",
  },
]

const yogaTypes = [
  {
    title: "Hatha Yoga",
    description: "Balance body and mind with classical postures and breathing techniques.",
    benefits: ["Improved flexibility", "Better posture", "Stress relief"],
  },
  {
    title: "Pranayama",
    description: "Breathwork practices for energy, calm, and mental clarity.",
    benefits: ["Enhanced lung capacity", "Mental focus", "Emotional balance"],
  },
  {
    title: "Meditation",
    description: "Inner stillness and mindfulness through guided practice.",
    benefits: ["Reduced anxiety", "Better sleep", "Increased awareness"],
  },
]

export default function YogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Yoga & Wellness</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover the transformative power of yoga for physical, mental, and spiritual well-being.
      </p>

      <h2 className="heading-serif text-2xl mb-6">Specialized Yoga Programs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {yogaCategories.map((category) => (
          <Link key={category.title} href={category.link}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <h2 className="heading-serif text-2xl mb-6">Core Yoga Practices</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {yogaTypes.map((type) => (
          <Card key={type.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">{type.description}</p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {type.benefits.map((benefit, index) => (
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
