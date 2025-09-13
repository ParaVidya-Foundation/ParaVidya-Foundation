"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CauseCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function Cause({ title, subtitle, imageSrc }: CauseCardProps) {
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
      className={`w-full max-w-sm mx-auto p-4 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 shadow-md overflow-hidden transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } hover:shadow-lg hover:-translate-y-1 hover:scale-102`}
      style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-full h-32 overflow-hidden rounded-md">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            width={256}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-medium text-gray-900 tracking-wide">{title}</h2>
        <p className="text-gray-600 text-base leading-snug">{subtitle}</p>
      </div>
    </div>
  );
}