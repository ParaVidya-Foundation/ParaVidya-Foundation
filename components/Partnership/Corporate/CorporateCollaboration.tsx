"use client"

import {
  HeartHandshake,
  Leaf,
  BookOpen,
  Utensils,
  ScrollText,
} from "lucide-react"
import { FaCow } from "react-icons/fa6"

export default function CorporateCollaboration() {
  const areas = [
    {
      icon: Leaf,
      title: "Promoting Yoga & Healthy Lifestyle",
      description:
        "We organize corporate yoga sessions, stress-management workshops, and holistic wellness programs designed to boost employee health, productivity, and happiness.",
    },
    {
      icon: ScrollText,
      title: "Promoting Dharma & Tantra",
      description:
        "Through ethical initiatives, we help corporates align with timeless spiritual values, creating meaningful workplace engagement rooted in cultural wisdom.",
    },
    {
      icon: BookOpen,
      title: "Teaching Sanskrit",
      description:
        "We promote the ancient language of Sanskrit, offering corporate-sponsored learning programs to preserve heritage while fostering mental clarity and intellectual growth.",
    },
    {
      icon: Utensils,
      title: "Food Donation",
      description:
        "Together with corporate partners, we run large-scale food distribution drives that fight hunger, reduce inequality, and build community goodwill.",
    },
    {
      icon: FaCow,
      title: "Gauseva",
      description:
        "Support traditional values and sustainability by partnering with us in protecting, feeding, and caring for cows, regarded as a symbol of compassion and abundance.",
    },
    {
      icon: HeartHandshake,
      title: "Gita Gyaan",
      description:
        "We organize Gita wisdom sessions for corporate teams, empowering employees with ethical decision-making, leadership skills, and resilience.",
    },
  ]

  return (
    <section className="relative py-20 px-6">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-transparent to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-calgary text-4xl md:text-5xl text-gray-900 leading-snug">
            Areas Where We Collaborate with <span className="text-[#f97f12]">Corporates</span>
          </h2>
          <p className="mt-4 font-manrope text-lg text-gray-600">
            At Para Vidya Foundation, we partner with corporates to create lasting social and cultural
            impact. Our initiatives combine <span className="font-semibold">holistic wellness, ethical values, and
            heritage preservation</span> with modern corporate needs.
          </p>
        </div>

        {/* Collaboration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#f97f12]/10 group-hover:bg-[#f97f12]/20 transition mb-6">
                <area.icon className="w-7 h-7 text-[#f97f12]" />
              </div>
              <h3 className="font-calgary text-xl text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="font-manrope text-gray-600 leading-relaxed">{area.description}</p>

              {/* Accent Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#f97f12]/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
