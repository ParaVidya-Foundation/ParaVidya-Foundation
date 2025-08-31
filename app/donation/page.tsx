import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donation – Para Vidya",
  description: "Support our mission. Donate via Stripe or UPI (placeholders).",
}

export default function DonationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <h1 className="heading-serif text-3xl mb-2">Donate</h1>
      <p className="text-gray-700">Your contribution powers workshops, sadhna programs, and community seva.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form action="/api/donate" method="POST" className="rounded-lg border p-5 bg-white">
          <h2 className="heading-serif text-xl mb-3">Stripe (Placeholder)</h2>
          <label htmlFor="amount" className="block text-sm">Amount (INR)</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min={100}
            defaultValue={500}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
          <label htmlFor="email" className="block text-sm mt-3">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded border px-3 py-2" required />
          <button className="btn btn-primary mt-4 w-full" type="submit">
            Donate with Stripe
          </button>
          <p className="text-xs text-gray-600 mt-2">Integration placeholder. Connect Stripe later.</p>
        </form>

        <div className="rounded-lg border p-5 bg-white">
          <h2 className="heading-serif text-xl mb-3">UPI (Placeholder)</h2>
          <p className="text-sm text-gray-700">Scan the QR or send to: upi@paravidya</p>
          <div className="mt-3 h-40 w-40 bg-gray-100 grid place-items-center rounded">QR</div>
          <button className="btn btn-outline-gold mt-4 w-full">I sent the donation</button>
        </div>
      </div>
    </div>
  )
}
