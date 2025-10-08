"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageQuote: React.FC = () => {
  return (
    <section className="relative w-full h-auto min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Quote.jpg" 
          alt="Inspirational Quote Background"
          fill
          className="object-cover object-right sm:object-center"
          priority
          sizes="100vw"
        />
  
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-snug mb-3 tracking-tight"
            >
              “ Work harder, stay humble, and let your light shine brighter every day. ”
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-amber-300 font-semibold italic"
            >
              ~ Gurudev Sunil Vashist
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-md lg:max-w-lg"
          >
            This quote reminds us that true success comes not just from effort,
            but from dedication and humility. Every step forward brings us closer
            to excellence.
          </motion.p>


        </motion.div>
      </div>

    </section>
  );
};

export default React.memo(ImageQuote);