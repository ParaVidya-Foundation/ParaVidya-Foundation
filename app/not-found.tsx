"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      {/* Animated 404 Ball */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1.1, 1],
          opacity: 1,
          x: [0, -30, 30, 0],
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 shadow-lg flex items-center justify-center">
          <span className="text-4xl sm:text-5xl font-semibold text-gray-800">
            404
          </span>
          <div className="absolute -z-10 inset-0 blur-3xl bg-orange-300 opacity-50"></div>
        </div>
      </motion.div>

      {/* NOT FOUND Text */}
      <h1
        className={`${playfair.className} text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide text-gray-900 mb-4`}
      >
        NOT FOUND!
      </h1>

      {/* Subtitle */}
      <p
        className={`${inter.className} text-gray-600 text-base sm:text-lg max-w-md mb-8`}
      >
        Looks like you’ve wandered off the path. Don’t worry — let’s get you
        back to the home page.
      </p>

      {/* Return Button */}
      <Link
        href="/"
        className={`${inter.className} px-6 py-3 border border-orange-500 text-orange-600 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300`}
      >
        ↩ Return to the Home Page
      </Link>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
