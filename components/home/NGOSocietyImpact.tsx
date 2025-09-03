"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/Spotlight";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

// ✅ Clean modern font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// ✅ High-quality Unsplash images
const baseImages = [
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602529717884-52a5bfc2c4fc?q=80&w=1800&auto=format&fit=crop",
];

// ✅ Duplicate for density
const images = [...baseImages, ...baseImages];

type FloatingImage = {
  id: number;
  src: string;
  fromLeft: boolean;
  delay: number;
  duration: number;
  size: number;
  lane: number; // dedicated vertical track
};

const CinematicShowcase: React.FC = () => {
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);

  useEffect(() => {
    const lanes = 6; // number of vertical tracks (no overlaps)
    const randomized = images.map((src, i) => ({
      id: i,
      src,
      fromLeft: i % 2 === 0, // alternate left/right
      delay: Math.random() * 5,
      duration: 16 + Math.random() * 8,
      size: 140 + Math.random() * 120,
      lane: i % lanes, // assign each image to a lane
    }));
    setFloatingImages(randomized);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent">
      {/* ✅ Subtle Grid Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:60px_60px] opacity-10 select-none",
          "[background-image:linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)]"
        )}
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
        }}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="rgba(225, 255, 0, 0.5)"
      />

      {/* ✅ Title */}
      <motion.h1
        className={`absolute z-20 text-black text-4xl sm:text-5xl md:text-7xl font-extrabold text-center drop-shadow-xl ${roboto.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Making a Change in Society
      </motion.h1>

      {/* ✅ Floating Images (perfect lanes, no overlap, crisp) */}
      {floatingImages.map((img) => {
        const laneHeight = 100 / 6; // divide screen into 6 tracks
        const startY = 110; // start below screen
        const endY = -30; // end above screen
        const laneOffset = laneHeight * img.lane + laneHeight / 2;

        return (
          <motion.img
            key={img.id}
            src={img.src}
            alt="cinematic-img"
            className="absolute rounded-2xl shadow-2xl object-cover"
            style={{
              width: `${img.size}px`,
              top: `${laneOffset}vh`, // assign to lane
            }}
            initial={{
              x: img.fromLeft ? "-25vw" : "125vw", // strictly from side
              opacity: 0,
              filter: "blur(8px)",
            }}
            animate={{
              x: img.fromLeft ? ["-25vw", "50vw", "110vw"] : ["125vw", "50vw", "-10vw"],
              opacity: [0, 1, 1, 0],
              filter: ["blur(8px)", "blur(1px)", "blur(1px)", "blur(8px)"], // ✅ sharp in middle
            }}
            transition={{
              duration: img.duration,
              repeat: Infinity,
              delay: img.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default CinematicShowcase;
