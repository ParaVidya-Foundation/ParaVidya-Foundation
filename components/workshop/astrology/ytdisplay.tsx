"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import YoutubeGallery from "./YoutubeGallery";

const YtDisplay: React.FC = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
      <Head>
        <title>YouTube Channels | ParaVidya Foundation</title>
        <meta
          name="description"
          content="Watch ParaVidya Foundation's official YouTube videos on Vedic Astrology, Mahavidya, and spiritual knowledge. Experience authentic Vedic wisdom and guidance."
        />
        <meta
          name="keywords"
          content="ParaVidya Foundation, YouTube, astrology, vedic astrology, Mahavidya, Jyotish, spirituality, meditation, remedies, Sadhana"
        />
        <meta property="og:title" content="YouTube Channels | ParaVidya Foundation" />
        <meta
          property="og:description"
          content="Explore our official YouTube channels sharing divine wisdom, astrology lessons, and spiritual guidance."
        />
        <meta property="og:image" content="/Videos/aboutusyt.png" />
        <link rel="canonical" href="https://paravidya.org/youtube" />
      </Head>

      {/* ✅ Main Section */}
      <section className="py-16 px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
            Our YouTube Channels
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover ParaVidya Foundation’s official YouTube platforms —
            spreading light through authentic knowledge of <strong>Vedic Astrology</strong>,
            <strong> Mahavidya Sadhana</strong>, and <strong>spiritual transformation</strong>.
            Subscribe and join our journey towards self-realization.
          </p>
        </div>

        {/* 🎥 YouTube Gallery + About Image */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto px-4">
          {/* 🧿 Left - YouTube Gallery */}
          <div className="flex-1 w-full">
            <YoutubeGallery />
          </div>

          {/* 🌺 Right - About Image */}
          <div className="flex-1 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[550px]">
              <Image
                src="/Videos/aboutusyt.png"
                alt="About ParaVidya Foundation YouTube Channel"
                width={700}
                height={700}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(YtDisplay);
