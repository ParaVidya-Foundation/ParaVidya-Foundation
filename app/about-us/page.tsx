import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us – Para Vidya",
  description: "Mission, vision, and team behind the Para Vidya Foundation.",
}

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-4">About Us</h1>
      <p className="text-gray-700 max-w-2xl">
        We are a spiritual NGO devoted to spreading wisdom through Sadhna, Karamkand, and Yoga.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {["Acharya Ji", "Seva Lead", "Yoga Teacher"].map((name) => (
          <div key={name} className="border rounded-md p-4 bg-white">
            <div className="h-32 w-full rounded bg-gray-100" aria-hidden="true" />
            <h3 className="heading-serif text-xl mt-3">{name}</h3>
            <p className="text-sm text-gray-700">Short bio placeholder text.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
