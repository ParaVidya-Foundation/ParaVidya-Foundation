"use client"

import { useState } from "react"

export default function CorporateWorkshopForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    designation: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ Basic validation
    const phoneRegex = /^[0-9]{10,15}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) return alert("Please enter your name")
    if (!phoneRegex.test(formData.contact))
      return alert("Please enter a valid contact number")
    if (!emailRegex.test(formData.email))
      return alert("Please enter a valid email address")
    if (!formData.designation.trim())
      return alert("Please enter your designation")
    if (!formData.message.trim()) return alert("Please enter your message")

    // 🚀 Replace with API integration
    console.log("Form Submitted:", formData)
    alert("Form submitted successfully!")
  }

  return (
    <section>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Corporate Workshop Enquiry
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Fill out the form below and we’ll get in touch with you shortly.  
            You can also contact us directly at{" "}
            <span className="font-semibold text-[#f97f12]">
              +91 9871130487
            </span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition"
            />
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition"
            />
          </div>

          {/* Designation */}
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleChange}
              placeholder="Your role in the company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition resize-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#f97f12] text-white font-medium text-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
