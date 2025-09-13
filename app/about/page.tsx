import SupportBlock from "@/components/support-block"

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-3xl">
        About Us
      </h1>
      <section id="mission" className="mt-6 space-y-3">
        <h2 className="font-serif text-2xl">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To empower communities through education, nourishment, and spiritual wellbeing rooted in compassion.
        </p>
      </section>
      <section id="vision" className="mt-10 space-y-3">
        <h2 className="font-serif text-2xl">
          Our Vision
        </h2>
        <p className="text-gray-700">
          Every child nourished, educated, and inspired to lead a life of purpose and service.
        </p>
      </section>
      <section id="team" className="mt-10 space-y-3">
        <h2 className="font-serif text-2xl">
          Our Team
        </h2>
        <p className="text-gray-700">
          Guided by volunteers, educators, and community leaders who serve with humility.
        </p>
      </section>
      <div className="mt-12">
        <SupportBlock />
      </div>
    </main>
  )
}
