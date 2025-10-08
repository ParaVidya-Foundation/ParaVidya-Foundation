"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

interface CourseBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  buttonText?: string;
}

const CourseBanner = ({
  title,
  subtitle,
  imageSrc,
  buttonText = "Join Now",
}: CourseBannerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleJoin = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      window.open("https://wa.me/919871130487", "_blank");
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-[1200px] mx-auto p-6 md:p-10 rounded-[40px] overflow-hidden transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        background: "rgba(255, 255, 170, 0.35)",
        borderRadius: "40px",
        border: "6px solid rgba(255, 221, 0, 0.8)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-full">
        {/* Text Section */}
        <div className="flex-1 text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-akeila text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg font-manrope">
            {subtitle}
          </p>
          <button
            onClick={handleJoin}
            disabled={isLoading}
            aria-label={
              isLoading
                ? `Processing ${buttonText.toLowerCase()} request`
                : `${buttonText} the course now`
            }
            className="inline-flex items-center justify-center px-8 py-3 bg-yellow-500 text-black text-lg font-medium rounded-full shadow-md hover:bg-yellow-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
