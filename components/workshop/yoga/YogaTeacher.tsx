"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const YogaTeacher: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* ---------- LEFT SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
            The journey to your <span className="text-orange-500">true self</span>.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
            Discover peace, strength, and balance through mindful yoga. Our classes
            blend ancient wisdom with modern wellness for your body, mind, and soul.
          </p>

         <GlowButton text="Know More" onClick={() => {window.location.href = "/yoga"}}/>
        </motion.div>

        {/* ---------- RIGHT SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex-1 flex items-center justify-center w-full"
        >
          {/* Decorative Background Images */}
          <div className="absolute -top-8 -right-8 hidden md:block">
            <Image
              src="/Yoga/depression.webp"
              alt="Yoga background"
              width={160}
              height={160}
              className="rounded-3xl shadow-lg rotate-6 opacity-90 object-cover"
            />
          </div>
          <div className="absolute bottom-0 -left-8 hidden md:block">
            <Image
              src="/Yoga/depression.webp"
              alt="Yoga background"
              width={140}
              height={140}
              className="rounded-3xl shadow-lg -rotate-6 opacity-90 object-cover"
            />
          </div>

          {/* Main Video Thumbnail */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/Yoga/yoga-main.jpg"
              alt="Yoga Session"
              width={700}
              height={450}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <button
              onClick={() => setShowVideo(true)}
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 backdrop-blur-sm transition-all"
            >
              <div className="bg-white/90 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full shadow-xl backdrop-blur-md hover:scale-110 transition-transform">
                <Play className="text-orange-500 w-6 sm:w-7 h-6 sm:h-7" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ---------- YOUTUBE POPUP MODAL ---------- */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
          >
            <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-orange-400/30">
              <iframe
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                title="Yoga Session"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <button
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(YogaTeacher);
