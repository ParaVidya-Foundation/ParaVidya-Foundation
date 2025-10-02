"use client";

import Image from "next/image";

export default function GitaQuoteSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 px-6 lg:px-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
            src="/Dharma.png" 
            alt="Bhagavad Gita"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">


          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
          <h3 id="gita-quote-title-0" className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
          “ यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः । <br />
          स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ ”
          </h3>
          <p className="text-lg text-amber-800 font-semibold italic">~ Bhagavad Gita (3.21)</p>
        </div>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            This verse teaches us that the actions of great individuals set an
            example for society. By walking on the path of righteousness
            (<span className="font-semibold">Dharma</span>), we inspire others
            to follow the same, creating a world rooted in values and truth.
          </p>
        </div>
      </div>
    </section>
  );
}
