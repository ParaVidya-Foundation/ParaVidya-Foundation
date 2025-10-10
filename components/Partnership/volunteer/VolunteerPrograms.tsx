"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Program = {
  title: string;
  image: string;
  link: string;
};

type Props = {
  programs: Program[];
};

export default function VolunteerPrograms({ programs }: Props) {
  return (
    <section className="w-full px-6 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12 font-poppins text-gray-900"
      >
        Volunteer Programmes
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            {/* Image */}
            <Image
              src={program.image}
              alt={program.title}
              width={600}
              height={400}
              className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl text-shadow-2xl md:text-2xl font-semibold text-white mb-3">
                {program.title}
              </h3>
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
              >
                Explore
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
