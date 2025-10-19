"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface CustomCarouselProps {
  images: string[];
  interval?: number;
  customStyles?: React.CSSProperties;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  images = [],
  interval = 5000,
  customStyles = {},
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Auto slide
  const startAutoSlide = useCallback(() => {
    if (images.length <= 1) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  }, [images.length, interval]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images.length) {
    return <p className="text-center text-gray-500">No images to display</p>;
  }

  return (
    <div
      className="carousel-container"
      style={customStyles}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="carousel-button carousel-button-left"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="carousel-button carousel-button-right"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .carousel-slides {
          display: flex;
          height: 100%;
          transition: transform 0.8s ease-in-out;
        }

        .carousel-slide {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .carousel-image {
          object-fit: contain; /* ✅ Always keep full image visible */
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.4);
          border: none;
          padding: 10px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.3s ease;
        }

        .carousel-button:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .carousel-button-left {
          left: 2%;
        }

        .carousel-button-right {
          right: 2%;
        }

        .carousel-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #d1d5db; /* gray-300 */
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .carousel-dot.active {
          background-color: #facc15; /* yellow-400 */
        }

        /* ✅ Responsive */
        @media (max-width: 1024px) {
          .carousel-container {
            height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 30vh; /* smaller height so no stretching */
          }

          .carousel-image {
            object-fit: contain; /* ✅ prevent stretch/crop */
          }

          .carousel-button {
            padding: 6px;
          }

          .carousel-dot {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomCarousel;