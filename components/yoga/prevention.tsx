"use client";

import { useState, useEffect, useRef } from "react";

interface InsightPoint {
  title: string;
  description: string;
}

interface AngerInsightCardProps {
  title: string;
  points: InsightPoint[];
}

export default function AngerInsightCard({ title, points }: AngerInsightCardProps) {
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

  return (
    <div
      ref={ref}
      className={`w-full mx-auto p-8 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        minHeight: "50vh",
      }}
    >
      <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center md:text-left tracking-wide">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-2">
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium text-xl">
                ●
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}