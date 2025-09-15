"use client";

import Link from "next/link";
import Image from "next/image";

export default function KaramkandHome() {
  return (
    <div className="w-full h-[95vh] flex flex-col md:flex-row items-center">
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Karamkand Home
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Experience the essence of rituals and traditions with our Karamkand services.
        </p>

        <Link href="/karamkand">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition">
            Read More
          </button>
        </Link>
      </div>

      {/* Right Image Section (stuck to extreme right) */}
      <div className="relative h-[95vh] ml-auto w-full">
        <Image
          src="/Havan.png"
          alt="Karamkand"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
