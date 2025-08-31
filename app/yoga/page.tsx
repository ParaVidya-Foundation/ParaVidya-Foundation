import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yoga – Para Vidya",
  description: "Yoga sessions, teachers, and benefits for holistic wellbeing.",
}

export default function YogaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-4">Yoga</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="border rounded-md p-4">
          <h3 className="heading-serif text-xl">Hatha Yoga</h3>
          <p className="text-sm text-gray-700 mt-2">Balance body and mind with classical postures.</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="heading-serif text-xl">Pranayama</h3>
          <p className="text-sm text-gray-700 mt-2">Breathwork for energy and calm.</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="heading-serif text-xl">Meditation</h3>
          <p className="text-sm text-gray-700 mt-2">Inner stillness through guided practice.</p>
        </div>
      </div>
    </div>
  )
}
