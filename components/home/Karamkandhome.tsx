"use client";

import Link from "next/link";
import Image from "next/image";

export default function KaramkandHome() {
  return (
    <div className="w-full h-[95vh] flex flex-col md:flex-row items-center md:items-stretch">
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Karamkand Home</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Experience the essence of rituals and traditions with our Karamkand
          services.
        </p>

        <Link href="/karamkand">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition">
            Read More
          </button>
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
