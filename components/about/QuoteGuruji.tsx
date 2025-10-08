"use client";

import Image from "next/image";

export default function QuoteGuruji() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 lg:px-8">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/TestGuruji.jpg" 
            alt="Bhagavad Gita"
            fill
            className="object-contain object-center transition-transform duration-500 hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-6 rounded-3xl shadow-lg border border-amber-100/50">
            <h3 id="gita-quote-title-0" className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">
              “ Work harder .... ...... Achieve more ”
            </h3>
            <p className="text-lg text-amber-800 font-semibold italic">~ Gurudev Sunil Vashist</p>
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg lg:max-w-none">
            This quote teaches us that by working harder, we can achieve more.
            It is a reminder to never give up and to always strive for excellence.
          </p>
        </div>
      </div>
    </section>
  );
}