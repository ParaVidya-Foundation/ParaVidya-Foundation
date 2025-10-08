"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImages = [
  { src: "/Gallery/gaushala-6sep25-2.webp", title: "Gaushala Seva" },
  { src: "/Gallery/gaushala-6sep25-1.webp", title: "Selfless Service" },
  { src: "/Gallery/gaushala-6sep25-3.webp", title: "Harmony & Balance" },
  { src: "/Gallery/gaushala-6sep25-4.webp", title: "Compassion in Action" },
];

const Abouthero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
          src="/logo.png"
          alt="Paravidya Foundation Logo"
          width={120}
          height={120}
          className="mx-auto drop-shadow-md"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffb400] mb-4 tracking-wide"
      >
        WELCOME TO PARAVIDYA FOUNDATION
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed"
      >
        Embracing the wisdom of{" "}
        <span className="text-[#ffb400] font-semibold">Sanatan Dharma</span> and
        the path of{" "}
        <span className="text-[#ffb400] font-semibold">Seva</span>. Join our
        journey of knowledge, compassion, and inner awakening.
      </motion.p>

      {/* Floating Polaroid Frames */}
      <div className="grid grid-cols-2 gap-4 place-items-center mt-14 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
        {heroImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ rotate: index % 2 === 0 ? -5 : 5, y: 0 }}
            animate={{
              y: [0, -10, 0],
              rotate: index % 2 === 0 ? [-5, -3, -5] : [5, 3, 5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="group relative w-40 h-52 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Frame Border */}
            <div className="absolute inset-0 rounded-lg border-4 border-white shadow-inner pointer-events-none" />

            {/* Image */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
            />

            {/* Caption */}
            <div className="absolute bottom-3 left-0 w-full text-center">
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 bg-white/80 backdrop-blur-md py-1 px-2 rounded-md inline-block mx-auto shadow">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`

        @media (max-width: 640px) {
          section {
            padding: 4rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default React.memo(Abouthero);