import type React from "react"
import { Metadata } from "next"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Sadhna – Para Vidya",
  description: "Description, philosophy, and spiritual practices for daily sadhna.",
}

export default function SadhnaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-4">Sadhna</h1>
      <p className="text-gray-700 max-w-2xl">
        Cultivate inner discipline and devotion. Our sadhna guidance blends mantra, meditation, and seva.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Feature
          icon={<Icons.om className="h-6 w-6 text-[var(--color-primary)]" />}
          title="Mantra"
          desc="Daily chanting for clarity and focus."
        />
        <Feature
          icon={<Icons.lotus className="h-6 w-6 text-[var(--color-primary)]" />}
          title="Meditation"
          desc="Breath and awareness practices."
        />
        <Feature
          icon={<Icons.diya className="h-6 w-6 text-[var(--color-primary)]" />}
          title="Seva"
          desc="Compassion in action."
        />
      </div>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-5">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="heading-serif text-xl">{title}</h3>
      </div>
      <p className="text-gray-700 mt-2 text-sm">{desc}</p>
    </div>
  )
}
