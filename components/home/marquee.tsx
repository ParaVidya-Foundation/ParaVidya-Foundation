"use client";

import React from "react";
import { Roboto } from "next/font/google";
import clsx from "clsx";

/* ===============================
   FONT (STATIC, FAST)
================================ */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const SERVICES =
  "Food Donation • Education • Yoga • Sadhna • Workshops • Astrology • Meditation • Spiritual Guidance • Community Service • Self Growth • Wellness • Cultural Programs";

const Marquee: React.FC = () => {
  return (
    <>
      <div className={clsx("marquee", roboto.className)}>
        <div className="marquee__track">
          <span className="marquee__text">{SERVICES}</span>
          <span className="marquee__text">{SERVICES}</span>
        </div>
      </div>

      {/* ===============================
          GLOBAL CSS (ZERO JS COST)
      =============================== */}
      <style jsx global>{`
        /* ===== Wrapper ===== */
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          background: linear-gradient(
            90deg,
            #fff9c4,
            #fff176,
            #fff9c4
          );
          padding: 1rem 0;
        }

        /* ===== Track ===== */
        .marquee__track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 22s linear infinite;
          will-change: transform;
        }

        /* ===== Text ===== */
        .marquee__text {
          display: inline-block;
          padding: 0 3rem;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 900;
          letter-spacing: 1px;
          color: #111;
        }

        /* ===== Animation ===== */
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* ===== Accessibility ===== */
        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(Marquee);
