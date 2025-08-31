import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Karamkand – Para Vidya",
  description: "Traditional religious rituals performed with authenticity and devotion.",
}

const rituals = [
  "Ganesh Puja",
  "Satyanarayan Katha",
  "Griha Pravesh",
  "Wedding Rituals",
  "Shraddha Karma",
  "Navagraha Shanti",
]

export default function KaramkandPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-4">Karamkand</h1>
      <ul className="grid md:grid-cols-2 gap-3">
        {rituals.map((r) => (
          <li key={r} className="border rounded-md p-3">
            {r}
          </li>
        ))}
      </ul>
    </div>
  )
}
