import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ayurveda Workshops – Para Vidya",
  description: "Learn the ancient science of Ayurveda for holistic health and wellness.",
}

const ayurvedaWorkshops = [
  {
    title: "Introduction to Ayurveda",
    date: "Monthly",
    time: "10:00 AM - 2:00 PM",
    location: "Wellness Center",
    desc: "Discover the fundamental principles of Ayurveda and your unique constitution.",
    focus: "Basic Principles",
  },
  {
    title: "Ayurvedic Cooking Workshop",
    date: "Bi-weekly",
    time: "11:00 AM - 1:00 PM",
    location: "Kitchen Studio",
    desc: "Learn to prepare healing meals according to Ayurvedic principles.",
    focus: "Nutrition & Cooking",
  },
  {
    title: "Herbal Medicine Making",
    date: "Quarterly",
    time: "9:00 AM - 4:00 PM",
    location: "Herb Garden",
    desc: "Create your own herbal remedies and understand plant medicine.",
    focus: "Herbal Medicine",
  },
  {
    title: "Ayurvedic Lifestyle Consultation",
    date: "Weekly",
    time: "2:00 PM - 5:00 PM",
    location: "Consultation Room",
    desc: "Personalized lifestyle recommendations based on your dosha.",
    focus: "Personal Consultation",
  },
]

export default function AyurvedaWorkshopsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Ayurveda Workshops</h1>
      <p className="text-lg text-gray-700 mb-8">
        Embrace the ancient wisdom of Ayurveda for natural health and balanced living.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {ayurvedaWorkshops.map((workshop) => (
          <Card key={workshop.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{workshop.title}</CardTitle>
              <div className="text-sm text-orange-600 font-medium">{workshop.focus}</div>
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
