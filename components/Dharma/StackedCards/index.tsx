// components/Card.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  reference: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function Card({
  i,
  title,
  description,
  src,
  reference,
  progress,
  range,
  targetScale,
}: CardProps) {
  // scale card based on the parent scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);

  // image subtle parallax & slight scale for premium feel
  const imageScale = useTransform(progress, [range[0], range[1]], [1.08, 1]);
  const imageY = useTransform(progress, [range[0], range[1]], [24, 0]);

  const isReverse = i % 2 === 1;

  return (
    <div className="w-[90%] h-screen flex items-center justify-center sticky top-0 z-0">
      <motion.article
        className={`flex flex-col relative w-[90%] max-w-7xl h-[90vh] rounded-2xl p-4 md:p-8 lg:p-12 shadow-2xl overflow-hidden bg-white transform-origin-top ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${isReverse ? 'md:text-right' : 'md:text-left'}`}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          zIndex: 1000 - i,
        }}
      >
        {/* Left Image */}
        <div className={`w-full md:w-1/2 relative overflow-hidden rounded-lg ${isReverse ? 'order-2 md:order-1' : 'order-1 md:order-1'}`}>
          <motion.div
            className="relative w-full h-full"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src={src} 
              alt="Bhagavad Gita"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className={`w-full md:w-1/2 text-center md:text-left flex flex-col justify-center ${isReverse ? 'order-1 md:order-2' : 'order-2 md:order-2'}`}>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl mb-6">
            <h3 id="gita-quote-title-0" className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
              “ {title} ”
            </h3>
            <p className="text-lg text-amber-800 font-semibold italic">~ {reference}</p>
          </div>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}