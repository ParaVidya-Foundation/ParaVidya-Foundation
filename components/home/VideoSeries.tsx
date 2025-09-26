"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const seriesData = [
  {
    title: "आरती और मंत्र",
    src: "/VideoSeries/aarti.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Aarti",
  },
  {
    title: "ज्योतिष विज्ञान",
    src: "/VideoSeries/astrology.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Astrology",
  },
  {
    title: "आयुर्वेद और स्वास्थ्य",
    src: "/VideoSeries/ayurveda.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Ayurveda",
  },
  {
    title: "गुरु दीक्षा",
    src: "/VideoSeries/Gurudiksha.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_GuruDiksha",
  },
  {
    title: "हवन विधि",
    src: "/VideoSeries/Havanvidhi.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_HavanVidhi",
  },
  {
    title: "कर्मकांड",
    src: "/VideoSeries/Karamkaand.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Karmakand",
  },
  {
    title: "महाकाव्य और पुराण",
    src: "/VideoSeries/maha.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Mahakavya",
  },
  {
    title: "मंत्र जाप",
    src: "/VideoSeries/mantrajaap.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_MantraJaap",
  },
  {
    title: "संस्कृत शिक्षा",
    src: "/VideoSeries/sanskrit.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Sanskrit",
  },
  {
    title: "वेद और पुराण",
    src: "/VideoSeries/veda_purana.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_VedaPurana",
  },
  {
    title: "योग साधना",
    src: "/VideoSeries/yoga.webp",
    url: "https://www.youtube.com/playlist?list=PLAcharyaPrashant_Yoga",
  },
];

export default function VideoSeries() {
  // Duplicate the list for seamless marquee
  const items = useMemo(() => [...seriesData, ...seriesData], []);

  // pause flag toggled on hover/focus
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full bg-[#ffd84b5a] py-16">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Acharya Prashant&apos;s Video Series
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-lg text-gray-700 max-w-3xl"
        >
          To a roaring spirit yearning for freedom and joy, Acharya
          Prashant&apos;s discourses come as a solace.
        </motion.p>

        <p className="mt-2 text-gray-600 max-w-3xl">
          Thousands of hours of sessions on various scriptures and life topics
          (in the light of Vedanta) have been compiled and structured in the
          form of <span className="font-bold text-orange-600">486 video
          series.</span>
        </p>

        <p className="mt-2 text-gray-600 max-w-3xl">
          These video series are aimed at liberating the troubled mind from the
          shackles of ignorance and suffering.
        </p>

        <div className="mt-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
            Explore Video Series
          </button>
        </div>
      </div>

      {/* Marquee / Slider */}
      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-hidden="false"
      >
        {/* track: duplicated items => translateX(-50%) loops seamlessly */}
        <div
          className={`marquee-track ${paused ? "paused" : ""}`}
          aria-label="Video series carousel"
        >
          {items.map((item, idx) => (
            <Link
              href={item.url}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open playlist: ${item.title}`}
              className="no-underline"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.98 }}
                className="series-card"
              >
                <div className="image-wrap">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={260}
                    className="object-cover rounded-2xl"
                    priority={false}
                  />
                </div>
                <div className="title">{item.title}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* scoped CSS (styled-jsx) */}
      <style jsx>{`
        /* marquee animation: translateX 0 -> -50% (duplicate technique) */
        .marquee-track {
          display: flex;
          gap: 1rem;
          align-items: center;
          width: max-content;
          padding: 1rem 2rem;
          /* animation */
          animation: marquee 36s linear infinite;
        }

        /* pause controlled by toggling class */
        .marquee-track.paused {
          animation-play-state: paused;
        }

        /* individual card */
        .series-card {
          min-width: 180px;
          max-width: 280px;
          border-radius: 12px;
          overflow: hidden;
          background: white;
          box-shadow: 0 8px 24px rgba(16, 24, 40, 0.08);
          transition: box-shadow 0.18s ease, transform 0.18s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .series-card:focus,
        .series-card:active {
          outline: none;
        }

        .image-wrap {
          width: 100%;
          height: 140px;
          position: relative;
        }

        .image-wrap :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .title {
          padding: 0.6rem 0.75rem;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
        }

        /* responsive card sizes */
        @media (min-width: 640px) {
          .series-card {
            min-width: 200px;
          }
          .image-wrap {
            height: 160px;
          }
        }

        @media (min-width: 1024px) {
          .series-card {
            min-width: 260px;
          }
          .image-wrap {
            height: 180px;
          }
        }

        /* marquee keyframes - translate left by 50% (since list duplicated) */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
