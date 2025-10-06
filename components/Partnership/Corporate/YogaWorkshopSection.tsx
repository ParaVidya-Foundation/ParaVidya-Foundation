"use client"

import Image from "next/image"
import Link from "next/link"

export default function YogaWorkshopSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Corporate-yoga.webp"
            alt="Corporate Yoga & Workshops"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Bring <span className="text-[#f97f12]">Wellness</span> to Your Workplace
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Whether you want to organize a <span className="font-semibold">Yoga class</span>, a{" "}
            <span className="font-semibold">workshop</span>, or a{" "}
            <span className="font-semibold">wellness program</span> at your office, 
            our team will create tailored sessions that refresh, energize, and engage your employees.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-xl bg-[#f97f12] text-white font-medium text-lg shadow-md hover:bg-[#e56e0e] hover:shadow-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
