"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hyperplexed from "../ui/hackglow";
import Image from "next/image";

type VerticalImageLoopProps = {
  title?: string;
  cols?: string[][];
  height?: string | number;
};

const DEFAULT_COLS: string[][] = [
  ["/Carousel/About-us.jpg", "/Carousel/Navgrah-Shanti.jpg", "/Carousel/Online-Hawan.jpg"],
  ["/Carousel/Your-One-Stop-for-Sacred-Rituals.jpg", "/Logo.png", "/Havan.png"],
  ["/SmallCarousel/gita.png", "/SmallCarousel/gita1.png", "/SmallCarousel/gita2.png"],
];

const VerticalImageLoop: React.FC<VerticalImageLoopProps> = ({
  cols = DEFAULT_COLS,
  height = "100vh",
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const ctx = gsap.context(() => {
      const inners: HTMLElement[] = Array.from(gallery.querySelectorAll(".vil-inner"));

      inners.forEach((inner, i) => {
        const children = Array.from(inner.children);

        if (inner.dataset.cloned !== "true") {
          children.forEach((child) => {
            inner.appendChild(child.cloneNode(true));
          });
          inner.dataset.cloned = "true";
        }

        const totalHeight = inner.scrollHeight / 2;
        const direction = i % 2 === 0 ? -1 : 1;

        gsap.to(inner, {
          y: direction * -totalHeight,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            y: (y) => {
              const mod = totalHeight;
              return `${(parseFloat(y) % mod) - mod}px`;
            },
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="vil-root"
      ref={rootRef}
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <section className="vil-section">
        <Hyperplexed title="Making a Change in Society" />
      </section>

      <div className="vil-gallery" ref={galleryRef} aria-hidden="true" role="presentation">
        {cols.map((col, ci) => (
          <div className="vil-col" key={ci}>
            <div className="vil-inner">
              {col.map((src, si) => (
                <div className="vil-item" key={`${ci}-${si}`}>
                  <Image
                    src={src}
                    alt={`gallery-${ci}-${si}`}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .vil-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        /* Responsive height */
        .vil-section {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          height: 100vh;
        }

        @media (max-width: 768px) {
          .vil-section {
            height: 50vh; /* Mobile: only half screen */
          }
        }

        .vil-gallery {
          position: absolute;
          inset: 0;
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
          justify-content: center;
          align-items: stretch;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .vil-col {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          min-width: 0;
        }

        .vil-inner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .vil-item img {
          width: 100%;
          border-radius: 14px;
          object-fit: cover;
          filter: grayscale(1);
          transition: filter 0.4s ease, transform 0.4s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .vil-item img:hover {
          filter: grayscale(0) saturate(1.2);
          transform: scale(1.04);
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
        }
      `}</style>
    </div>
  );
};

export default VerticalImageLoop;
