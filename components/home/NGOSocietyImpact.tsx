
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

type VerticalImageLoopProps = {
  cols?: string[][];
  height?: string;
};

const DEFAULT_COLS: string[][] = [
  [
    "/makingchange/community-outreach-1.jpeg",
    "/makingchange/education-initiative-1.JPG",
    "/makingchange/social-impact-1.jpeg",
    "/makingchange/volunteer-work-1.JPG",
  ],
  [
    "/makingchange/community-service-1.jpeg",
    "/makingchange/charity-event-1.JPG",
    "/makingchange/ngo-activities-1.jpeg",
  ],
  [
    "/makingchange/social-change-1.jpeg",
    "/makingchange/community-support-1.jpeg",
    "/makingchange/foundation-work-1.jpeg",
  ],
];

const VerticalImageLoop: React.FC<VerticalImageLoopProps> = ({
  cols = DEFAULT_COLS,
  height = "100vh",
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const ctx = gsap.context(() => {
      const inners: HTMLElement[] = Array.from(gallery.querySelectorAll(".vil-inner"));
      const maxHeight = Math.max(...inners.map((inner) => inner.scrollHeight));

      inners.forEach((inner, i) => {
        if (!inner.dataset.cloned) {
          const children = Array.from(inner.children);
          children.forEach((child) => inner.appendChild(child.cloneNode(true)));
          inner.dataset.cloned = "true";
        }

        const direction = i === 1 ? 1 : -1; // Middle column scrolls up
        gsap.to(inner, {
          y: direction * -maxHeight,
          duration: 30,
          ease: "none",
          repeat: -1,
          modifiers: {
            y: (y) => {
              const mod = maxHeight;
              return `${(parseFloat(y) % mod) + (direction * mod)}px`;
            },
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="vil-root relative w-full"
      style={{
        height,
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      {/* Background Gallery */}
      <div className="vil-gallery absolute inset-0 flex justify-center gap-2" ref={galleryRef} role="img" aria-label="Rotating gallery of community impact images">
        {cols.map((col, ci) => (
          <div className="vil-col flex-1" key={ci}>
            <div className="vil-inner flex flex-col gap-2">
              {col.map((src, si) => (
                <div className="vil-item" key={`${ci}-${si}`}>
                  <Image
                    src={src}
                    alt={`Gallery image ${ci}-${si} - Community impact`}
                    width={250}
                    height={333}
                    className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 shadow-md"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Center Text */}
      <div className={`absolute inset-0 flex items-center justify-center text-center ${poppins.className}`}>
        <h1 className="vil-title px-8 text-white" style={{ textShadow: "0 0 10px rgba(0, 128, 128, 0.9), 0 0 20px rgba(0, 128, 128, 0.7)" }}>
          Making a Change in Society
        </h1>
      </div>

      <style jsx>{`
        .vil-root {
          overflow: hidden;
        }

        .vil-gallery {
          pointer-events: none;
        }

        .vil-col {
          min-width: 0;
        }

        .vil-item img {
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .vil-title {
          font-size: clamp(2rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.2;
        }

        @media (max-width: 900px) {
          .vil-gallery {
            gap: 0.6rem;
          }
        }

        @media (max-width: 640px) {
          .vil-gallery {
            gap: 0.4rem;
          }
          .vil-col {
            flex: 1 1 33%;
          }
          .vil-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalImageLoop;
