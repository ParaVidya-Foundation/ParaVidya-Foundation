"use client"

import { useState } from "react"
import { DonationTier } from "@/components/donation-tier"

export default function DonatePage() {
  const [custom, setCustom] = useState<string>("")

  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="font-serif text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
            Your Support Changes Lives
          </h1>
          <p className="mt-2 text-gray-700">
            Help us offer free education and meals. Choose an amount or enter a custom donation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <DonationTier
              amount="₹500"
              title="Sponsor Meals (1 week)"
              description="Sponsor a child's meals for a week."
            />
            <DonationTier
              amount="₹2000"
              title="Fund Classes (1 month)"
              description="Fund free classes for an entire month."
              highlight
            />
            <div className="rounded-xl border p-6">
              <label className="text-sm text-gray-600">Custom amount</label>
              <input
                className="mt-2 w-full rounded-md border px-3 py-2"
                placeholder="₹500, ₹1000..."
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
              />
              <p className="mt-2 text-xs text-gray-500">Enter any amount you wish to contribute.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <button
              onClick={() => window.location.href = "upi://pay?pa=paravidya@upi&pn=Para%20Vidya%20Foundation&cu=INR"}
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-green)] px-5 py-2.5 text-white hover:brightness-95 cursor-pointer"
            >
              Pay with UPI
            </button>
            <button
              onClick={() => window.open("https://paypal.me/example", "_blank", "noopener,noreferrer")}
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-blue)] px-5 py-2.5 text-white hover:brightness-95 cursor-pointer"
            >
              Pay with PayPal
            </button>
            <button
              onClick={() => window.open("https://buy.stripe.com/test_123", "_blank", "noopener,noreferrer")}
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-brand)] px-5 py-2.5 text-[var(--color-brand)] hover:bg-[var(--color-brand)]/10 cursor-pointer"
            >
              Pay with Stripe
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-md border bg-white p-4">
              <h3 className="font-medium">Education</h3>
              <p className="mt-1 text-sm text-gray-700">Classes, learning materials, online tools.</p>
            </div>
            <div className="rounded-md border bg-white p-4">
              <h3 className="font-medium">Nutrition</h3>
              <p className="mt-1 text-sm text-gray-700">Meal procurement, preparation, distribution.</p>
            </div>
            <div className="rounded-md border bg-white p-4">
              <h3 className="font-medium">Operations</h3>
              <p className="mt-1 text-sm text-gray-700">Volunteer support, logistics, outreach.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
