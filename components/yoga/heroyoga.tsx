"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './heroyoga.module.css';
import { Poppins, Lora } from 'next/font/google';

// Modern, professional fonts
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-poppins' });
const lora = Lora({ subsets: ['latin'], weight: '400', variable: '--font-lora' });

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
  imageAlt = 'Hero Image',
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

  useEffect(() => {
    setIsLoaded(true); // Trigger animation on mount
  }, []);

  // Animation variants (respect reduced motion)
  const textVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };

  const imageVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, hover: { scale: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: EASE, delay: 0.15 },
        },
        hover: { scale: 1.02, transition: { duration: 0.25, ease: EASE } },
      };

  const floatVariants = prefersReducedMotion
    ? {}
    : {
        animate: {
          y: [0, -8, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        },
      };

  return (
    <section
      aria-labelledby="yoga-hero-heading"
      className={`relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center py-10 sm:py-14 px-4 sm:px-6 lg:px-8 ${poppins.variable} ${lora.variable} font-sans ${className}`}
    >
      <div aria-hidden="true" className={styles.texture} />
      {/* Decorative blurred accents */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
        {...floatVariants}
        animate={prefersReducedMotion ? undefined : 'animate'}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl"
        {...floatVariants}
        animate={prefersReducedMotion ? undefined : 'animate'}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text on the left */}
        <motion.div
          className="text-left px-2 sm:px-0"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.7,
                ease: EASE
              }
            }
          }}
        >

          <motion.h1
            id="yoga-hero-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 font-[var(--font-poppins)] leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.75,
                  ease: EASE 
                }
              }
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700/90 font-[var(--font-lora)] mb-6 sm:mb-8 max-w-xl leading-relaxed"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <motion.a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white px-6 py-3 shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors duration-300 font-[var(--font-poppins)] text-sm sm:text-base"
              aria-label="Join yoga program"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE, delay: 0.05 },
                },
              }}
            >
              Join Now
            </motion.a>

            <motion.a
              href="/yoga"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white/70 text-indigo-700 px-6 py-3 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors duration-300 font-[var(--font-poppins)] text-sm sm:text-base"
              aria-label="Explore yoga programs"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE, delay: 0.1 },
                },
              }}
            >
              Explore Programs
            </motion.a>
          </div>
        </motion.div>

        {/* Image on the right */}
        <motion.div
          className="relative h-56 sm:h-72 md:h-80 lg:h-[500px] w-full max-w-full md:max-w-md lg:max-w-lg mx-auto"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-200 via-white to-purple-200" />
          <div className="absolute -inset-1 -z-20 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/10 to-purple-500/20 blur-xl" />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 32vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;