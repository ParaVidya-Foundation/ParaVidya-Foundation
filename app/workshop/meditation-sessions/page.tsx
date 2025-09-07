import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Meditation Sessions – Para Vidya",
  description: "Guided meditation sessions for inner peace and mindfulness.",
}

const meditationSessions = [
  {
    title: "Morning Meditation",
    date: "Daily",
    time: "6:00 AM - 7:00 AM",
    location: "Garden",
    desc: "Start your day with peaceful meditation in our serene garden setting.",
    type: "Silent Meditation",
  },
  {
    title: "Guided Visualization",
    date: "Tuesday & Thursday",
    time: "7:00 PM - 8:00 PM",
    location: "Meditation Hall",
    desc: "Experience deep relaxation through guided visualization techniques.",
    type: "Guided Meditation",
  },
  {
    title: "Chakra Meditation",
    date: "Saturday",
    time: "5:00 PM - 6:30 PM",
    location: "Energy Room",
    desc: "Balance your energy centers through specialized chakra meditation practices.",
    type: "Energy Meditation",
  },
  {
    title: "Mindfulness Workshop",
    date: "Monthly",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Room",
    desc: "Learn practical mindfulness techniques for daily life application.",
    type: "Workshop",
  },
]

export default function MeditationSessionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Meditation Sessions</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find inner peace and mindfulness through our various meditation practices.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {meditationSessions.map((session) => (
          <Card key={session.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{session.title}</CardTitle>
              <div className="text-sm text-blue-600 font-medium">{session.type}</div>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <div className="space-y-2">
                <p><strong>Schedule:</strong> {session.date}</p>
                <p><strong>Time:</strong> {session.time}</p>
                <p><strong>Location:</strong> {session.location}</p>
                <p className="mt-3">{session.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
