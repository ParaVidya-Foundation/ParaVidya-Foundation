"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SupportUs = () => {
  const { scrollYProgress } = useScroll();

  // Hands cinematic parallax (closer at mid-scroll, apart again later)
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ["-60%", "-5%", "-35%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ["60%", "5%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.08]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-black px-6">
      {/* Title */}
      <motion.h1
        style={{ opacity }}
        className={`text-6xl md:text-8xl font-bold z-10 tracking-tight leading-tight ${cormorant.className}`}
      >
        Support Us
      </motion.h1>

      {/* Hands */}
      <div className="relative w-full flex items-center justify-between mt-10">
        {/* Left Hand */}
        <motion.div
          style={{ x: leftX, opacity, scale }}
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="w-[48%] md:w-[36%] -ml-4"
        >
          <Image
            src="/left.png"
            alt="Left Hand"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Hand */}
        <motion.div
          style={{ x: rightX, opacity, scale }}
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="w-[48%] md:w-[36%] -mr-4"
        >
          <Image
            src="/right.png"
            alt="Right Hand"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Supporting Text (aligned perfectly under hands) */}
      <div className="mt-32 md:mt-44 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl z-10">
        {/* Left Block */}
        <div className="text-center md:text-right">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 tracking-wide ${cormorant.className}`}
          >
            Donate Us
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-700 font-medium ${inter.className}`}
          >
            Donate as you wish
          </p>
        </div>

        {/* Right Block */}
        <div className="text-center md:text-left">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 tracking-wide ${cormorant.className}`}
          >
            Spread The Word
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-700 font-medium ${inter.className}`}
          >
            Promote our teachings and channel
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
