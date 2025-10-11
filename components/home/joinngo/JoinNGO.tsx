"use client";

import Link from "next/link";
import InfoCard from "./InfoCard";

export default function JoinNGO() {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center font-manrope">
      {/* Yellow brutalist glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-yellow-300 opacity-40 blur-3xl rounded-full -z-10" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-mileast text-gray-900 text-center max-w-4xl uppercase leading-tight">
        Great futures are built <br /> with a{" "}
        <span className="bg-yellow-400 px-2 rotate-1 inline-block rounded-sm">
          small charity
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl text-center font-medium font-manrope">
        Join <span className="font-semibold text-orange-600">Paravidya Foundation</span>. Explore internships, contribute to spiritual education, 
        and be part of a movement that revives Dharma, Karmakand, and Indian culture with purpose.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/Partnership/JoinourNGO">
          <button className="px-6 py-3 bg-gray-900 text-white font-bold uppercase rounded-lg shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black] transition">
            Join Our NGO
          </button>
        </Link>
        <Link href="/Partnership/JoinourNGO/Internship">
          <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold uppercase rounded-lg shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black] transition flex items-center gap-2">
            Explore Internships
          </button>
        </Link>
      </div>

      {/* Brutalist Card Layout */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full">
        {/* Big Left Card */}
        <Link href="/donate">
        <div className="md:col-span-1">
          <InfoCard
            title={<span className="text-yellow-400">Donate Us</span>}
            description={<span className="text-yellow-400">Donate to Paravidya Foundation and support our work in preserving Indian culture and spirituality.</span>}
            bgColor="bg-green-900 text-white"
            footer={<span className="text-yellow-400">Donate Now</span>}
          />
        </div>
        </Link>
        {/* Middle Two Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <InfoCard
            title="Internships"
            description="Gain hands-on experience in content creation, social media, research, and spiritual outreach."
            image="/teaching_volunteer.webp"
          />
          <InfoCard
            title="Volunteer Programs"
            description="Contribute to workshops, events, and awareness drives that preserve Indian cultural and spiritual values."
            image="/health_volunteer.webp"
          />
        </div>

        {/* Big Right Card */}
        <Link href="/Partnership/corporate">
        <div className="md:col-span-1">
          <InfoCard
            title="Corporate Partnerships"
            description="Partner with Paravidya Foundation to create lasting social and cultural impact."
       
            bgColor="bg-yellow-300"
            footer={<span className="text-gray-900">Know More</span>}
          />
        </div>
        </Link>
      </div>
    </section>
  );
}
