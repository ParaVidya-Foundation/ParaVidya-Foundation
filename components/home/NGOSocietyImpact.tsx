"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

type VerticalImageLoopProps = {
  title?: string;
  cols?: string[][];
  height?: string | number;
};

const DEFAULT_COLS: string[][] = [
  [
    "https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg",
    "https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg",
    "https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg",
  ],
  [
    "https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg",
    "https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg",
    "https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg",
  ],
  [
    "https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg",
    "https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg",
    "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg",
  ],
];

const VerticalImageLoop: React.FC<VerticalImageLoopProps> = ({
  title = "Making a Change in Society",
  cols = DEFAULT_COLS,
  height = "100vh",
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const ctx = gsap.context(() => {
      const inners: HTMLElement[] = Array.from(
        gallery.querySelectorAll(".vil-inner")
      );

      inners.forEach((inner, i) => {
        // Clone enough children to ensure continuous flow
        const children = Array.from(inner.children);
        children.forEach((child) => {
          inner.appendChild(child.cloneNode(true));
        });

        const totalHeight = inner.scrollHeight / 2;
        const direction = i % 2 === 0 ? -1 : 1;

        gsap.to(inner, {
          y: direction * -totalHeight,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            y: (y) => {
              // Wrap the y translation so it loops seamlessly
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
      <section
        className="vil-section"
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      >
        <h1 className="vil-title">{title}</h1>
      </section>

      <div className="vil-gallery" ref={galleryRef} aria-hidden>
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
                    className="w-full h-full object-cover"
                    loading="lazy"
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

        .vil-section {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

       .vil-title {
  font-family: "Poppins", "Inter", sans-serif;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.02em;

  /* Gradient Mask */
  background: linear-gradient(90deg, #111, #555, #111);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animation */
  animation: shine 4s linear infinite;

  /* Subtle depth */
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 3;
}

@keyframes shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}


        .vil-gallery {
          position: absolute;
          inset: 0;
          display: flex;
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

        .vil-item {
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
            min-width: 33%;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalImageLoop;
