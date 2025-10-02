"use client"

import Image from "next/image"
import Link from "next/link"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

export default function JoinNGOSection() {
  return (
    <section
      className={`relative w-full flex justify-center py-16 px-6 md:px-12 ${manrope.className}`}
    >
      <div className="relative w-[90%] md:w-[80%] rounded-3xl overflow-hidden shadow-2xl text-white min-h-[600px] md:min-h-[500px] flex items-center">
        
        {/* Background Image */}
        <Image
          src="/awarenesscamp.jpg"
          alt="Join Our NGO"
          fill
          className="object-cover object-center"
          priority
        />
  
        {/* Grid layout for content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left side empty (just image showing) */}
          <div className="hidden md:block"></div>

          {/* Right side text */}
          <div className="flex flex-col justify-center p-8 md:p-14 space-y-6 text-right">
            <h2 className="text-3xl text-shadow-lg md:text-5xl font-extrabold leading-snug text-white">
              Join Our NGO & <br />
              <span className="text-[#f97f12]">Help Us Spread Awareness</span>
            </h2>

            <p className="text-lg text-shadow-lg md:text-xl leading-relaxed text-gray-200">
              We are committed to creating awareness about{" "}
              <span className="font-semibold text-shadow-lg">Ayurveda, Gita, Tantra, Mantra, and Dharma</span>. 
              Together, we can empower society with ancient wisdom, holistic well-being, and a path toward a more conscious future.
            </p>

            <p className="text-lg text-shadow-lg md:text-xl leading-relaxed text-gray-300">
              Join us in this sacred mission and contribute to transforming lives through knowledge, service, and collective action.
            </p>

            <div>
              <Link
                href="/Partnership/JoinourNGO"
                className="inline-block mt-4 text-lg font-semibold text-white border-b-2 border-white hover:text-[#f97f12] hover:border-[#f97f12] transition-colors duration-300"
              >
                Become a Volunteer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
