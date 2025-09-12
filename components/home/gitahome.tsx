// components/HeroCarousel.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Slide = {
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
};

type HeroCarouselProps = {
  slides: Slide[];
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // Auto change every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full flex justify-center items-center py-6 md:py-10 px-4">
      <div
        className={`relative w-[85%] max-w-7xl h-[65vh] md:h-[75vh] min-h-[360px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl flex items-center ${poppins.className}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <img
              src={slides[current].image}
              alt="carousel-slide"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Text + Button */}
        <div className="relative z-10 px-8 md:px-14 lg:px-20 max-w-[520px] md:max-w-[640px]">
          {slides[current].subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow-lg">
              {slides[current].subtitle}
            </p>
          )}
          {slides[current].buttonText && slides[current].buttonLink && (
            <Link href={slides[current].buttonLink}>
              <button className="mt-6 px-7 py-3 rounded-full bg-white text-black font-semibold text-base md:text-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                {slides[current].buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
