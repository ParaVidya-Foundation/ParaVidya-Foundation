import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Workshop – Para Vidya",
  description: "Upcoming and past events, workshops, and discourses.",
}

const upcoming = [
  {
    title: "Gita Discourse Series",
    date: "Sep 20, 2025",
    location: "Delhi",
    desc: "A 5-part exploration of the Bhagavad Gita.",
  },
  {
    title: "Meditation Retreat",
    date: "Oct 5, 2025",
    location: "Rishikesh",
    desc: "Silence, reflection, and guided sadhna.",
  },
]
const past = [
  { title: "Chanting Workshop", date: "Aug 2025", location: "Varanasi", desc: "Naad yoga and mantra chanting." },
]

export default function WorkshopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Workshops & Events</h1>

      <h2 className="heading-serif text-2xl mb-3">Upcoming</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {upcoming.map((e) => (
          <Card key={e.title} className="bg-white">
            <CardHeader>
              <CardTitle>{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p>
                {e.date} • {e.location}
              </p>
              <p className="mt-2">{e.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="heading-serif text-2xl mt-10 mb-3">Past</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {past.map((e) => (
          <Card key={e.title} className="bg-white">
            <CardHeader>
              <CardTitle>{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p>
                {e.date} • {e.location}
              </p>
              <p className="mt-2">{e.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
