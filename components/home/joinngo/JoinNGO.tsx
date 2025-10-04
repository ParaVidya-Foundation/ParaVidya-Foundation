"use client";

import Link from "next/link";
import InfoCard from "./InfoCard";

export default function JoinNGO() {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center font-manrope">
      {/* Yellow brutalist glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-yellow-300 opacity-40 blur-3xl rounded-full -z-10" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 text-center max-w-4xl leading-tight tracking-tighter uppercase font-playfair">
        Great futures are built <br /> with a{" "}
        <span className="bg-yellow-400 px-2 rotate-1 inline-block rounded-sm">
          small charity
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl text-center font-medium font-manrope">
        The world&apos;s largest social fundraising platform, optimized for your NGO
        in a bold and minimal way.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/donate">
          <button className="px-6 py-3 bg-gray-900 text-white font-bold uppercase rounded-lg shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black] transition">
            Donate Now
          </button>
        </Link>
        <Link href="/video">
          <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold uppercase rounded-lg shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black] transition flex items-center gap-2">
            ▶ Watch Video
          </button>
        </Link>
      </div>

      {/* Brutalist Card Layout */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl w-full">
        {/* Big Left Card */}
        <div className="md:col-span-1">
          <InfoCard
            title="65%"
            description="17 Thousand People Died, Thousands Injured, Houses Destroyed. Turkey-Syria Grieves."
            bgColor="bg-green-800 text-white"
            footer={<span className="text-yellow-400">Donate Now</span>}
          />
        </div>

        {/* Middle Two Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <InfoCard
            title="Health"
            description="Lifeskills for 2,587 Children in South Africa"
            image="/images/child.jpg"
          />
          <InfoCard
            title="Education"
            description="Sponsor food & education for Orphans in Kenya"
            image="/images/orphans.jpg"
          />
        </div>

        {/* Big Right Card */}
        <div className="md:col-span-1">
          <InfoCard
            title="Your home for help"
            bgColor="bg-yellow-300"
            footer={<span className="text-gray-900">Explore More</span>}
          />
        </div>
      </div>
    </section>
  );
}
