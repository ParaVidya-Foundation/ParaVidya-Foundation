import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Spiritual Workshops – Para Vidya",
  description: "Deep spiritual workshops and discourses for inner transformation.",
}

const spiritualWorkshops = [
  {
    title: "Bhagavad Gita Discourse Series",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Main Hall",
    desc: "In-depth study of the Bhagavad Gita with practical applications for modern life.",
    instructor: "Swami Paramarthananda",
  },
  {
    title: "Vedanta Philosophy Workshop",
    date: "Monthly",
    time: "2:00 PM - 5:00 PM",
    location: "Library",
    desc: "Understanding the fundamental principles of Vedanta and their relevance today.",
    instructor: "Dr. Ramanuja",
  },
  {
    title: "Upanishads Study Circle",
    date: "Bi-weekly",
    time: "6:00 PM - 8:00 PM",
    location: "Meditation Room",
    desc: "Exploring the profound wisdom of the Upanishads through guided discussions.",
    instructor: "Acharya Shankara",
  },
]

export default function SpiritualWorkshopsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Spiritual Workshops</h1>
      <p className="text-lg text-gray-700 mb-8">
        Deepen your spiritual understanding through our comprehensive workshops and discourses.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spiritualWorkshops.map((workshop) => (
          <Card key={workshop.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{workshop.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <div className="space-y-2">
                <p><strong>Schedule:</strong> {workshop.date}</p>
                <p><strong>Time:</strong> {workshop.time}</p>
                <p><strong>Location:</strong> {workshop.location}</p>
                <p><strong>Instructor:</strong> {workshop.instructor}</p>
                <p className="mt-3">{workshop.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
