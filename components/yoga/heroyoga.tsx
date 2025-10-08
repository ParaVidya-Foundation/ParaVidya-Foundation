"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero Image",
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

  useEffect(() => setIsLoaded(true), []);

  // ✅ Animation variants with proper typing
  const textVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE },
        },
      };

  const imageVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.97 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: EASE, delay: 0.1 },
        },
        hover: { scale: 1.02, transition: { duration: 0.3, ease: EASE } },
      };

  return (
    <header
      className={`relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* ✅ Left content */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={textVariants}
          className="text-left"
        >
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mileast text-gray-900 mb-4"
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            {subtitle}
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="#join"
              aria-label="Join Program"
              variants={textVariants}
              className="inline-flex items-center justify-center rounded-full bg-[#ff6b00] text-white px-6 py-3 font-medium text-sm sm:text-base transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/60"
            >
              Join Now
            </motion.a>

            <motion.a
              href="/programs"
              aria-label="Explore Programs"
              variants={textVariants}
              className="inline-flex items-center justify-center rounded-full border border-[#ff6b00] text-[#ff6b00] bg-transparent px-6 py-3 font-medium text-sm sm:text-base transition-colors duration-300 hover:bg-[#ff6b00]/10 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/40"
            >
              Explore Programs
            </motion.a>
          </div>
        </motion.div>

        {/* ✅ Right image — full resolution, responsive */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={imageVariants}
          whileHover="hover"
          className="relative w-full flex justify-center"
        >
          <div className="w-full max-w-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1000}
              height={1000}
              priority
              className="w-full h-auto rounded-2xl object-contain"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
