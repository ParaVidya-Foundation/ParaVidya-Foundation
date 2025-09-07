import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workshops & Events – Para Vidya",
  description: "Comprehensive workshops and events for spiritual growth and wellness.",
}

const workshopCategories = [
  {
    title: "Spiritual Workshops",
    description: "Deep spiritual discourses and philosophical studies",
    link: "/workshop/spiritual-workshops",
    icon: "🕉️",
  },
  {
    title: "Meditation Sessions",
    description: "Guided meditation and mindfulness practices",
    link: "/workshop/meditation-sessions",
    icon: "🧘",
  },
  {
    title: "Yoga Workshops",
    description: "Comprehensive yoga practices and techniques",
    link: "/workshop/yoga-workshops",
    icon: "🧘‍♀️",
  },
  {
    title: "Ayurveda Workshops",
    description: "Ancient healing science and wellness practices",
    link: "/workshop/ayurveda-workshops",
    icon: "🌿",
  },
  {
    title: "Mantra Workshops",
    description: "Sacred chanting and spiritual sound practices",
    link: "/workshop/mantra-workshops",
    icon: "🔔",
  },
]

const upcoming = [
  {
    title: "Gita Discourse Series",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Main Hall",
    desc: "A comprehensive exploration of the Bhagavad Gita with practical applications.",
  },
  {
    title: "Meditation Retreat",
    date: "Monthly",
    time: "6:00 AM - 8:00 PM",
    location: "Retreat Center",
    desc: "Silence, reflection, and guided sadhna for inner transformation.",
  },
]

export default function WorkshopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-6">Workshops & Events</h1>
      <p className="text-lg text-gray-700 mb-8">
        Join our comprehensive workshops and events designed for spiritual growth and holistic wellness.
      </p>

      <h2 className="heading-serif text-2xl mb-6">Workshop Categories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {workshopCategories.map((category) => (
          <Link key={category.title} href={category.link}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <h2 className="heading-serif text-2xl mb-6">Featured Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {upcoming.map((event) => (
          <Card key={event.title} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <div className="space-y-2">
                <p><strong>Schedule:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="mt-3">{event.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
