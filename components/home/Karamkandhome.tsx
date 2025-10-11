"use client";

import Link from "next/link";
import Image from "next/image";
import GlowButton from "../ui/GlowButton";

export default function KaramkandHome() {
  return (
    <div className="w-full h-[95vh] flex flex-col md:flex-row items-center md:items-stretch">
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left px-6 md:px-16 max-w-3xl mx-auto">
  <h1 className="text-4xl md:text-6xl font-mileast mb-6 text-gray-900">
    Explore our Vedic Knowledge
  </h1>

  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-manrope">
    At Para Vidya Foundation, we help you learn basic to advanced Vedic
    knowledge and practice genuine Vedic rituals and Karam Kaand — whether it&apos;s
    for daily puja or important life ceremonies — while also solving all your
    doubts. Our mission is to provide the right knowledge of Vedic practices,
    guiding you toward peace, prosperity, and divine blessings.
  </p>

  <Link href="/karamkand">
   <GlowButton text="Read More" />
  </Link>
</div>


      {/* Right Image Section (attached to extreme right) */}
      <div className="relative w-full md:w-[45%] lg:w-[40%] h-[50vh] md:h-full flex justify-end">
        <Image
          src="/Havan.png"
          alt="Karamkand"
          fill
          className="object-contain object-right"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
        />
      </div>
    </div>
  );
}
