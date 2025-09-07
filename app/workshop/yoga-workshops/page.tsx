import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Yoga Workshops – Para Vidya",
  description: "Comprehensive yoga workshops for physical and spiritual wellness.",
}

const yogaWorkshops = [
  {
    title: "Hatha Yoga Intensive",
    date: "Weekend",
    time: "8:00 AM - 12:00 PM",
    location: "Yoga Studio",
    desc: "Deep dive into classical Hatha Yoga postures and breathing techniques.",
    level: "All Levels",
  },
  {
    title: "Pranayama Masterclass",
    date: "Monthly",
    time: "4:00 PM - 6:00 PM",
    location: "Breathing Room",
    desc: "Master the art of breath control for enhanced vitality and mental clarity.",
    level: "Intermediate",
  },
  {
    title: "Yoga for Stress Relief",
    date: "Weekly",
    time: "6:00 PM - 7:30 PM",
    location: "Relaxation Studio",
    desc: "Gentle yoga practices specifically designed to reduce stress and anxiety.",
    level: "Beginner",
  },
  {
    title: "Advanced Asana Workshop",
    date: "Bi-monthly",
    time: "9:00 AM - 3:00 PM",
    location: "Advanced Studio",
    desc: "Explore challenging postures with proper alignment and safety techniques.",
    level: "Advanced",
  },
]

export default function YogaWorkshopsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Yoga Workshops</h1>
      <p className="text-lg text-gray-700 mb-8">
        Enhance your yoga practice with our specialized workshops and intensive sessions.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {yogaWorkshops.map((workshop) => (
          <Card key={workshop.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{workshop.title}</CardTitle>
              <div className="text-sm text-green-600 font-medium">{workshop.level}</div>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <div className="space-y-2">
                <p><strong>Schedule:</strong> {workshop.date}</p>
                <p><strong>Time:</strong> {workshop.time}</p>
                <p><strong>Location:</strong> {workshop.location}</p>
                <p className="mt-3">{workshop.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
