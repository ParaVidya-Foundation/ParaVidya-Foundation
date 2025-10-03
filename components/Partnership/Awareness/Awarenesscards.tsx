"use client"

import Image from "next/image"
import Link from "next/link"

const topics = [
  {
    title: "Ayurveda",
    description:
      "Discover the timeless science of Ayurveda – balancing body, mind, and spirit through natural healing, diet, and lifestyle practices.",
    image: "/awareness/ayurveda.jpg",
    link: "/awareness/ayurveda",
  },
  {
    title: "Bhagavad Gita",
    description:
      "Learn the essence of the Bhagavad Gita – a spiritual guide to living with wisdom, clarity, and purpose in modern times.",
    image: "/awareness/gita.jpg",
    link: "/awareness/gita",
  },
  {
    title: "Tantra",
    description:
      "Understand Tantra beyond misconceptions – a path of transformation, sacred energy, and spiritual awakening.",
    image: "/awareness/tantra.jpg",
    link: "/awareness/tantra",
  },
  {
    title: "Mantra",
    description:
      "Experience the power of sound and vibration through Mantras – tools for meditation, healing, and inner strength.",
    image: "/awareness/mantra.jpg",
    link: "/awareness/mantra",
  },
  {
    title: "Right Path to Dharma",
    description:
      "Explore Dharma as the foundation of righteous living – aligning actions with truth, duty, and cosmic order.",
    image: "/awareness/dharma.jpg",
    link: "/awareness/dharma",
  },
]

export default function AwarenessPrograms() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
          Awareness <span className="text-[#f97f12]">Programs</span>
        </h2>

        <div className="space-y-20">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-[45%] h-[220px] md:h-[280px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="md:w-[55%]">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {topic.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {topic.description}
                </p>

                <Link
                  href={topic.link}
                  className="mt-6 inline-block px-6 py-2 rounded-lg border-2 border-[#f97f12] text-[#f97f12] font-medium transition hover:bg-[#f97f12] hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
