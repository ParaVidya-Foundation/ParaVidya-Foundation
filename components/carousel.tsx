"use client"

import React, { useState, useEffect, useRef } from "react"

interface CustomCarouselProps {
  images: string[]
  interval?: number
  customStyles?: React.CSSProperties
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  images = [],
  interval = 5000,
  customStyles = {},
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide() // cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // run once

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      handleNext()
    }, interval)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (!images.length) {
    return <p className="text-center text-gray-500">No images to display</p>
  }

  return (
    <div
      className="carousel-container"
      style={customStyles}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Image container */}
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="carousel-button carousel-button-left"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="carousel-button carousel-button-right"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* Dots for navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-slides {
          display: flex;
          transition: transform 1s ease-in-out;
        }

        .carousel-slide {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(96, 96, 96, 0.5);
          border: none;
          padding: 10px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.3s ease;
        }

        .carousel-button:hover {
          background-color: rgba(96, 96, 96, 0.7);
        }

        .carousel-button-left {
          left: 2%;
        }

        .carousel-button-right {
          right: 2%;
        }

        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: gray;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .carousel-dot.active {
          background-color: blue;
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 25vh !important;
          }

          .carousel-button {
            padding: 6px;
          }

          .carousel-dots {
            gap: 4px;
          }

          .carousel-dot {
            width: 6px;
            height: 6px;
          }

          .carousel-image {
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  )
}

export default CustomCarousel
