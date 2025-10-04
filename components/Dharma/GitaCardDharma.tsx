"use client";

import Image from "next/image";

type Props = { className?: string };

export default function GitaCardDharma({ className = "" }: Props) {
  return (
    <article
      className={`h-full w-full bg-white flex flex-col md:flex-row items-center ${className}`}
      role="article"
      aria-labelledby="gita-dharma-title"
    >
      {/* Text first on mobile (order-1), image bottom on mobile (order-2) */}
      <div className="w-full md:w-1/2 p-6 md:p-10 order-1 md:order-2 flex flex-col justify-center h-full">
        <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
          <h3 id="gita-dharma-title" className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
            “ यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः । स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ ”
          </h3>
          <p className="text-amber-800 italic font-semibold mt-2">– Bhagavad Gita (3.21)</p>
        </div>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          The behaviour of great souls sets the benchmark for society — when someone acts nobly, others follow that example.
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          This verse emphasizes that living according to dharma naturally influences the community and shapes culture through steady example.
        </p>
      </div>

      <div className="w-full md:w-1/2 relative h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
            src="/Dharma.png" 
            alt="Bhagavad Gita"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

    </article>
  );
}
