"use client";

import Image from "next/image";

export default function WorkshopYoga() {
  return (
    <section className="w-[90%] mx-auto py-10 px-6 md:px-12 flex flex-col md:flex-row items-end justify-between gap-12">
      {/* Text Section */}
      <div className="flex-1 text-left">

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-brown-900 tracking-tight leading-tight mb-6">
          Workshop Yoga
        </h1>
        
        </div>
        <p className="text-2xl md:text-xl text-brown-700 leading-relaxed max-w-2xl">
          Our yoga workshops offer comprehensive training in various styles and techniques. 
          From{" "}
          <strong>Hatha Yoga, Pranayama, and advanced asanas</strong> to specialized sessions for stress relief, 
          we provide expert guidance for practitioners of all levels.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-end items-center relative z-10 -mb-[25px] -bottom-20">
        <Image
          src="/Workshop/ayurveda.png"
          alt="Workshop Yoga"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
