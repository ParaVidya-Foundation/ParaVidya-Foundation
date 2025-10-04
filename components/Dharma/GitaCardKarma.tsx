"use client";

import Image from "next/image";

type Props = { className?: string };

export default function GitaCardKarma({ className = "" }: Props) {
  return (
    <article
      className={`h-full w-full bg-white flex flex-col md:flex-row items-center ${className}`}
      role="article"
      aria-labelledby="gita-karma-title"
    >
      <div className="w-full md:w-1/2 p-6 md:p-10 order-1 md:order-2 flex flex-col justify-center h-full">
        <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
          <h3 id="gita-karma-title" className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
            कर्मण्येवाधिकारस्ते — You have the right to action alone
          </h3>
          <p className="text-amber-800 italic font-semibold mt-2">– Bhagavad Gita (2.47)</p>
        </div>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Focus on your duty and the action itself rather than attachment to results — this leads to clarity and inner freedom.
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          The Gita’s teaching on karma helps teams focus on consistent effort and ethical process rather than outcome anxiety.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 h-56 md:h-full order-2 md:order-1 rounded-2xl overflow-hidden">
        <Image
          src="/Dharma.png"
          alt="Karma illustration"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </article>
  );
}
