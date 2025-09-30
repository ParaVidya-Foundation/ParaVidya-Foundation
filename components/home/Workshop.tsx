"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// Fonts now imported globally

type Slide = {
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
};

interface GitaHomeProps {
  slides: Slide[];
}

const Workshop: React.FC<GitaHomeProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Auto change every 8 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    console.warn(`Failed to load image: ${slides[index]?.image}`);
  };

  if (!slides.length) {
    return (
      <div className="w-full h-32 flex items-center justify-center text-gray-500">
        No slides to display
      </div>
    );
  }

  return (
    <section className="w-full flex justify-center items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4">
      <div
        className={`relative w-[95%] sm:w-[90%] lg:w-[85%] max-w-7xl 
          h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 
          min-h-[280px] rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] 
          overflow-hidden shadow-xl flex items-center font-manrope`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <Image
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              fill
              className="object-cover"
              priority={current === 0}
              quality={90}
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     (max-width: 1280px) 80vw,
                     75vw"
              onLoad={() => handleImageLoad(current)}
              onError={() => handleImageError(current)}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Loading indicator */}
            {!loadedImages.has(current) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Text + Button */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-14 max-w-[90%] sm:max-w-[520px] md:max-w-[640px]">
          {slides[current].subtitle && (
            <motion.p
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                         text-white font-medium leading-relaxed drop-shadow-lg font-manrope"
            >
              {slides[current].subtitle}
            </motion.p>
          )}

          {slides[current].buttonText && slides[current].buttonLink && (
            <motion.div
              key={`button-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link href={slides[current].buttonLink} passHref>
                <button
                  className="mt-4 sm:mt-6 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 
                             rounded-full bg-white text-black font-semibold 
                             text-sm sm:text-base md:text-lg shadow-md 
                             hover:bg-gray-100 transition-all duration-300"
                  aria-label={slides[current].buttonText}
                >
                  {slides[current].buttonText}
                </button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Navigation dots */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Workshop;
