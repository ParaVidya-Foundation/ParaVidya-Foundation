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
      className={`relative w-full max-w-[90%] mx-auto p-6 rounded-2xl overflow-hidden transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        height: "60vh",
        background: "rgba(255, 255, 150, 0.4)", // light yellow
        borderRadius: "56px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "10px solid rgba(255, 221, 0, 0.8)", // yellow border
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
        {/* Text Section */}
        <div className="flex-1 text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg">{subtitle}</p>
          <button
            onClick={handleJoin}
            disabled={isLoading}
            aria-label={
              isLoading
                ? `Processing ${buttonText.toLowerCase()} request`
                : `${buttonText} the course now`
            }
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full shadow-md rounded-2xl md:w-1/2 h-[80%] md:h-[98%] min-h-[200px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            width={400}
            height={300}
            className="object-cover w-full h-full"
           
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
