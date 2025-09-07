import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mantra Workshops – Para Vidya",
  description: "Learn the power of sacred mantras for spiritual transformation.",
}

const mantraWorkshops = [
  {
    title: "Gayatri Mantra Workshop",
    date: "Weekly",
    time: "7:00 AM - 8:00 AM",
    location: "Sacred Hall",
    desc: "Learn the correct pronunciation and meaning of the powerful Gayatri Mantra.",
    mantra: "Om Bhur Bhuvaḥ Swaḥ",
  },
  {
    title: "Maha Mrityunjaya Mantra",
    date: "Bi-weekly",
    time: "6:00 PM - 7:00 PM",
    location: "Healing Room",
    desc: "Master the healing mantra for protection and spiritual strength.",
    mantra: "Om Tryambakam Yajamahe",
  },
  {
    title: "Om Chanting Circle",
    date: "Daily",
    time: "6:30 PM - 7:00 PM",
    location: "Meditation Garden",
    desc: "Join our community for collective Om chanting and energy healing.",
    mantra: "Om",
  },
  {
    title: "Vedic Mantra Intensive",
    date: "Monthly",
    time: "9:00 AM - 5:00 PM",
    location: "Vedic Study Room",
    desc: "Deep study of ancient Vedic mantras and their spiritual significance.",
    mantra: "Various Vedic Mantras",
  },
]

export default function MantraWorkshopsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Mantra Workshops</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover the transformative power of sacred mantras for spiritual growth.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {mantraWorkshops.map((workshop) => (
          <Card key={workshop.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{workshop.title}</CardTitle>
              <div className="text-sm text-purple-600 font-medium italic">{workshop.mantra}</div>
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
