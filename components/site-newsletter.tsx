"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setSubscribed(true)
    setEmail("")
  }

  if (subscribed) {
    return (
      <div className="text-sm text-white/80">
        Thank you for subscribing!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:border-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-[var(--color-gold)] px-3 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-gold)]/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}
