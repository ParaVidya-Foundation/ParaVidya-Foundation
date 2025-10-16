"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeditationHero() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-manrope overflow-hidden"
      aria-label="Meditation and Yoga Programs - Paravidya Foundation"
    >
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* ---------- LEFT HERO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-gradient-to-br from-[#fff9f5] to-[#fde8d8] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-sm flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 font-mileast">
                Meditation for <br />
                <span className="text-orange-500">Mind, Body &amp; Soul</span>
              </h1>

              <p className="text-gray-700 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Join <span className="font-semibold text-orange-600">Paravidya Foundation</span>’s holistic 
                meditation programs — designed to balance your inner self, enhance focus, and awaken serenity 
                through guided techniques for all levels.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button 
                  className="px-8 py-3 bg-orange-500 text-white rounded-full text-sm md:text-base font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Start meditation program with ParaVidya Foundation"
                >
                  Start Program →
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[440px]">
              <Image
                src="/Yoga/Hero.webp"
                alt="Meditation session at Paravidya Foundation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          {/* TOP CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Guided Wellness Programs
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-snug">
              Explore curated meditation, pranayama, and mindfulness sessions by 
              expert mentors for stress relief and emotional balance.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Yoga", "Mindfulness", "Breathing"].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-full"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* CARD 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <div className="relative w-full h-48 sm:h-52">
                <Image
                  src="/Yoga/Morning.webp"
                  alt="Morning Yoga Session"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm opacity-90">Session Type</p>
                <h4 className="text-white text-lg font-semibold">Morning Yoga</h4>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <div className="relative w-full h-48 sm:h-52">
                <Image
                  src="/Yoga/Breathing.webp"
                  alt="Breathing Meditation Techniques"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm opacity-90">Wellness</p>
                <h4 className="text-white text-lg font-semibold">
                  Breathing Techniques
                </h4>
              </div>
            </div>

            {/* WIDE CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl sm:col-span-2 transition-all group">
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src="/Yoga/yoga.webp"
                  alt="Mentor Yoga Tips - Paravidya Foundation"
                  fill
                  sizes="100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-1 opacity-90">
                  188 Hours of Online Classes
                </p>
                <h4 className="text-white text-lg font-semibold mb-3">
                  Tips from the world’s best mentors
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
