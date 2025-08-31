"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/Spotlight"; 
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google"; // modern clean font

// ✅ NGO-style clean font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// ✅ High-quality Unsplash images
const images = [
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602529717884-52a5bfc2c4fc?q=80&w=1800&auto=format&fit=crop",
];

type FloatingImage = {
  id: number;
  src: string;
  x: number;
  delay: number;
  duration: number;
};

const CinematicShowcase: React.FC = () => {
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);

  useEffect(() => {
    // ✅ Randomized spacing so images don’t overlap too much
    const randomized = images.map((src, i) => ({
      id: i,
      src,
      x: Math.random() * 70 - 35, // -35vw to +35vw
      delay: i * 2.5, // staggered so they enter in sequence
      duration: 18 + Math.random() * 6, // longer, smoother animations
    }));
    setFloatingImages(randomized);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent">
      {/* ✅ Subtle Grid Overlay with fade edges */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:60px_60px] opacity-20 select-none",
          "[background-image:linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)]"
        )}
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 15%, black 85%, transparent)",
        }}
      />
<Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="rgba(225, 255, 0, 0.5)" />

      {/* ✅ Centered Title */}
      <motion.h1
        className={`absolute z-20 text-black text-4xl sm:text-5xl md:text-7xl font-extrabold text-center drop-shadow-lg ${roboto.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Making a Change in Society
      </motion.h1>

      {/* ✅ Floating Cinematic Images */}
      {floatingImages.map((img) => (
        <motion.img
          key={img.id}
          src={img.src}
          alt="cinematic-img"
          className="absolute w-28 sm:w-40 md:w-56 lg:w-72 rounded-xl shadow-xl object-cover"
          style={{
            left: `${50 + img.x}%`,
            transform: "translateX(-50%)",
          }}
          initial={{
            y: "110vh",
            scale: 0.6,
            opacity: 0,
            filter: "blur(22px)",
          }}
          animate={{
            y: ["110vh", "-35vh"],
            scale: [0.6, 1.2],
            opacity: [0, 1, 1, 0], // stays visible longer
            filter: ["blur(22px)", "blur(2px)", "blur(2px)", "blur(28px)"], // clear for most of duration
          }}
          transition={{
            duration: img.duration,
            repeat: Infinity,
            delay: img.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CinematicShowcase;
