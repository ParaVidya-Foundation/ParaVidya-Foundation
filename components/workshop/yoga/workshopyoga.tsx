"use client";

import Image from "next/image";
import YogaForm from "./YogaForm";

export default function WorkshopYoga() {
  return (
    <section className="w-[90%] mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2b1e12] tracking-tight leading-tight mb-6">
          Workshop Yoga
        </h1>

        <p className="text-lg sm:text-xl text-[#4a3b2a] leading-relaxed max-w-2xl">
          Our yoga workshops offer <strong>comprehensive training</strong> in
          various traditional and modern styles.  
          From <strong>Hatha Yoga</strong>, <strong>Pranayama</strong>, and
          <strong> advanced asanas</strong> to specialized sessions for stress
          relief and inner balance — guided by experts from{" "}
          <span className="text-orange-600 font-semibold">
            Paravidya Foundation
          </span>
          .
        </p>
      </div>

      {/* Right Form */}
      <div className="flex-1 w-full md:w-auto flex justify-center">
        <YogaForm />
      </div>
    </section>
  );
}
