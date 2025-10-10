"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GlowButton from "../ui/GlowButton";

type Slide = {
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  videoId?: string; // YouTube video ID (optional)
};

interface GitaHomeProps {
  slides: Slide[];
}

const Workshop: React.FC<GitaHomeProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto change every 8 seconds (only if video not playing)
  useEffect(() => {
    if (slides.length <= 1 || isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length, isVideoPlaying]);

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

  const currentSlide = slides[current];
  const videoUrl = currentSlide.videoId
    ? `https://www.youtube.com/embed/${currentSlide.videoId}?autoplay=1&rel=0`
    : null;

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
              src={currentSlide.image}
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

        {/* ✅ Embedded Video (visible, paused until clicked) */}
        {currentSlide.videoId && (
          <div className="absolute inset-0 flex justify-center items-center z-20">
            {!isVideoPlaying ? (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="relative w-[85%] sm:w-[80%] lg:w-[70%] aspect-video rounded-2xl overflow-hidden group"
                aria-label="Play video"
              >
                <Image
                  src={`https://img.youtube.com/vi/${currentSlide.videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                src={videoUrl!}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-[85%] sm:w-[80%] lg:w-[70%] aspect-video rounded-2xl border-none"
              ></iframe>
            )}
          </div>
        )}

        {/* Text + Button */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-14 max-w-[90%] sm:max-w-[520px] md:max-w-[640px]">
          {currentSlide.subtitle && (
            <motion.p
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                         text-white font-medium leading-relaxed drop-shadow-lg font-manrope"
            >
              {currentSlide.subtitle}
            </motion.p>
          )}
          <br />
          {currentSlide.buttonText && currentSlide.buttonLink && (
            <motion.div
              key={`button-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link href={currentSlide.buttonLink} passHref>
                <GlowButton text={currentSlide.buttonText} />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Navigation dots */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsVideoPlaying(false);
                }}
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
