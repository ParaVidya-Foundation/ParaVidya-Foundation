"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

export default function YouthInternshipHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-24 px-6 text-center overflow-hidden bg-gradient-to-b from-yellow-100 via-yellow-50 to-transparent">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200 opacity-30 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-extrabold tracking-tight text-[#4A0404] font-poppins"
      >
        Youth Internship Programme
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl font-inter"
      >
        Be the Youth Who{" "}
        <span className="text-[#4A0404] font-semibold">
         Inspires a Generation.
        </span>
      </motion.p>

      <Link href="/Partnership/JoinourNGO/Internship">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-8"
      >
       <GlowButton text="Get Started" />
      </motion.div>
      </Link>
    </section>
  );
}
