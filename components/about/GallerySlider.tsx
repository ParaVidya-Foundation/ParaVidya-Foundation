"use client";

import React from "react";
import Image from "next/image";
import GlowButton from "../ui/GlowButton";

const images: string[] = [
  "/Gallery/Water_distribution_1.webp",
  "/Gallery/Water_distribution_2.webp",
  "/Gallery/gaushala-6sep25-1.webp",
  "/Gallery/gaushala-6sep25-2.webp",
  "/Gallery/gaushala-6sep25-3.webp",
  "/Gallery/gaushala-6sep25-4.webp",
  "/Gallery/Gift_to_Brahmins.webp",
  "/Gallery/Gift_to_Brahmins1.webp",
  "/Gallery/Gift_to_Brahmins2.webp",
  "/Gallery/Gift_to_Brahmins3.webp",
];

const GallerySlider: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 backdrop-blur-[6vmax] -z-10" />

      {/* Header Text */}
      <div
  className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center z-10 px-4"
>
  <h1
    className="font-extrabold leading-tight"
    style={{
      textShadow: `
        0 2px 4px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.25),
        0 0 20px rgba(255, 165, 0, 0.3)
      `,
    }}
  >
    <span className="block text-6xl sm:text-5xl lg:text-6xl text-orange-500 tracking-tight drop-shadow-lg">
      GALLERY
    </span>
    <span
      className="block text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight"
      style={{
        textShadow: `
          0 3px 6px rgba(0, 0, 0, 0.35),
          0 6px 12px rgba(0, 0, 0, 0.25),
          0 0 25px rgba(255, 255, 255, 0.4)
        `,
      }}
    >
      OF OUR WORK
    </span>
  </h1>

  <div className="mt-6 flex justify-center">
    <GlowButton
      text="View Gallery"
      onClick={() => (window.location.href = "/gallery")}
    />
  </div>
</div>


      {/* Scrolling Rows */}
      <div className="space-y-10 w-full max-w-[1600px]">
        {/* Top row scrolls left */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left gap-6 sm:gap-8 lg:gap-10">
            {[...images, ...images].map((src, i) => (
              <div
                key={`top-${i}`}
                className="relative flex-shrink-0 w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 80vw, 40vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row scrolls right */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-right gap-6 sm:gap-8 lg:gap-10">
            {[...images, ...images].map((src, i) => (
              <div
                key={`bottom-${i}`}
                className="relative flex-shrink-0 w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 80vw, 40vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySlider;
