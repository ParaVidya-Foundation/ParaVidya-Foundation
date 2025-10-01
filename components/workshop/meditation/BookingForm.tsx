"use client"
import { useState } from "react"

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", number: "", email: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneRegex = /^[0-9]{10,15}$/
    if (!formData.name.trim()) return alert("Please enter your name")
    if (!phoneRegex.test(formData.number)) return alert("Enter a valid phone number")
    alert("✅ Booking request submitted!")
  }

  return (
    <div className="w-full h-full bg-[#fffaf7] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-2">
          Book your class today!
        </h2>
        <p className="text-gray-600 mb-8 font-manrope">
          Book your class today and step onto your mat at <b>ParaVidya Yoga</b>!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition font-manrope"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition font-manrope"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition font-manrope"
          />
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-[#fcd9c1] text-gray-900 font-semibold font-manrope text-lg shadow-md hover:bg-[#fbbd95] transition"
          >
            Book Class →
          </button>
        </form>
      </div>
    </div>
  )
}
