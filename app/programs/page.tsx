"use client"

import SupportBlock from "@/components/support-block"

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header>
        <h1 className="font-serif text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
          Programs
        </h1>
        <p className="mt-2 text-gray-700">Explore our classes, camps, and free food distribution initiatives.</p>
      </header>

      <section id="classes">
        <h2 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
          Online Classes
        </h2>
        <p className="mt-2 text-gray-700">
          Weekly sessions on values, languages, meditation, and life skills for children and youth.
        </p>
        <button
          onClick={() => window.location.href = "/contact"}
          className="mt-3 inline-block rounded-md bg-[var(--color-brand)] px-4 py-2 text-white hover:bg-[#e68a2d] cursor-pointer"
        >
          Enroll Now
        </button>
      </section>

      <section id="camps">
        <h2 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
          Camps
        </h2>
        <p className="mt-2 text-gray-700">
          Energizing camps during weekends and holidays with activities, art, and service.
        </p>
        <button
          onClick={() => window.location.href = "/contact"}
          className="mt-3 inline-block rounded-md border border-[var(--color-brand)] px-4 py-2 text-[var(--color-brand)] hover:bg-[var(--color-brand)]/10 cursor-pointer"
        >
          Join a Camp
        </button>
      </section>

      <section id="food">
        <h2 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
          Free Food Distribution
        </h2>
        <p className="mt-2 text-gray-700">
          Regular distribution of healthy vegetarian meals to underserved communities.
        </p>
        <button 
          onClick={() => window.location.href = "/donate"} 
          className="mt-3 inline-block rounded-md border px-4 py-2 hover:bg-gray-50 cursor-pointer"
        >
          Sponsor Meals
        </button>
      </section>

      <SupportBlock />
    </main>
  )
}
