"use client"

import Image from "next/image"
import Link from "next/link"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"] })

export default function AwarenessHero() {
  return (
    <section
      className={`relative w-full text-black ${manrope.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empower Change with <span className="text-[#f97f12]">Our NGO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            Join hands to create awareness, spread wisdom, and inspire collective action 
            for a better tomorrow. Together, we make a difference.
          </p>

          <div className="pt-4">
            <Link
              href="/join"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-full text-white bg-[#f97f12] hover:bg-black transition-colors duration-300 shadow-lg"
            >
              Become a Volunteer →
            </Link>
          </div>
        </div>

        {/* Right: Image/GIF */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square">
            <Image
              src="/Awareness.png" // replace with your GIF
              alt="NGO Awareness Campaign"
              fill
              priority
              unoptimized // important for GIFs
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
