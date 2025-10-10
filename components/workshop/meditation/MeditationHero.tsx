"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeditationHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20 font-sans overflow-hidden">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ---------- LEFT HERO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-gradient-to-br from-[#fff9f5] to-[#fde8d8] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Meditation for <br />
                <span className="text-orange-500">Mind, Body & Soul</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Connect with your inner self, enhance focus, and experience
                serenity with guided meditation programs for all levels.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="px-8 py-3 bg-orange-500 text-white rounded-full text-sm md:text-base font-medium hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-200">
                  Start Program →
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px] flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1599447421416-7a1efb9e7a06?auto=format&fit=crop&w=900&q=80"
                alt="Meditation woman"
                fill
                className="object-cover rounded-3xl shadow-lg"
                priority
              />
            </div>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4 w-48 sm:w-56 transition-all hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900">489+</h3>
            <p className="text-sm text-gray-600 leading-snug">
              Successful wellness sessions and growing community members.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {["Mind", "Health", "Balance"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
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
            <p className="text-sm text-gray-600 mb-4">
              Personalized meditation plans curated by experienced mentors.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-full">
                Yoga
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-full">
                Mindfulness
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-full">
                Breathing
              </button>
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
              <Image
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
                alt="Morning Yoga"
                width={500}
                height={300}
                className="object-cover h-44 w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm">Session Type</p>
                <h4 className="text-white text-lg font-semibold">
                  Morning Yoga
                </h4>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <Image
                src="https://images.unsplash.com/photo-1606905052624-cb9b88eeb5e1?auto=format&fit=crop&w=800&q=80"
                alt="Pregnancy Care"
                width={500}
                height={300}
                className="object-cover h-44 w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm">Wellness</p>
                <h4 className="text-white text-lg font-semibold">
                  Pregnancy Care
                </h4>
              </div>
            </div>

            {/* WIDE CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl sm:col-span-2 transition-all group">
              <Image
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80"
                alt="Mentor Tips"
                width={1000}
                height={400}
                className="object-cover h-56 w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-1">
                  188 Hours of Online Classes
                </p>
                <h4 className="text-white text-lg font-semibold mb-3">
                  Tips from the world’s best mentors
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 rounded-full text-sm border-none focus:ring-2 focus:ring-orange-400 outline-none w-full sm:w-auto"
                  />
                  <button className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition">
                    Subscribe →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
