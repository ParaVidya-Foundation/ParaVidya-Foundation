"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
})

export default function HeroSection() {
  return (
    <section
      className={`relative flex items-center justify-center h-screen w-full text-center px-6 ${poppins.className}`}
    >
      {/* Yellow Shining Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-yellow-400 opacity-30 blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-3xl">
        {/* Logo */}
        <Image
          src="/Logo.png" // replace with your logo path
          alt="Yoga Logo"
          width={150}
          height={150}
          priority
          className="mb-4"
        />

        {/* Title */}
        <h1 className="text-4xl text-shadow-lg md:text-6xl font-extrabold leading-tight text-white">
          Embrace the <span className="text-yellow-400">Power of Dharma</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-900 max-w-2xl leading-relaxed">
          Discover balance, inner peace, and strength with our holistic yoga practices designed for every soul.
        </p>

        {/* Call to Action */}
        <a
          href="/join"
          className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  )
}
