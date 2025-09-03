"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Playfair_Display } from "next/font/google";

// ✅ Professional serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type PaintRevealProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

const PaintReveal: React.FC<PaintRevealProps> = ({ imageSrc, title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden"
    >
      {/* ✅ Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold text-gray-900 leading-tight ${playfair.className}`}
        >
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
          {subtitle}
        </p>
      </motion.div>

      {/* ✅ Image with smooth paint reveal */}
      <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative max-h-[520px] w-auto overflow-hidden ">
          {/* Mask Layer (animated gradient simulates paint) */}
          <motion.div
            initial={{ x: "0%" }}
            animate={inView ? { x: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10 bg-[#fdf7ef]"
          />

          {/* Image */}
          <motion.img
            src={imageSrc}
            alt="painting"
            initial={{ scale: 1.05 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-0 max-h-[520px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaintReveal;
