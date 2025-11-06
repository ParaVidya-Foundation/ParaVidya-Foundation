"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CauseCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function Cause({ title, subtitle, imageSrc }: CauseCardProps) {
  // ✅ Fix hydration: Start visible for SSR, then animate in on client
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Reset visibility for animation
    setIsVisible(false);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`w-full max-w-md mx-auto p-4 sm:p-6 rounded-xl overflow-hidden
        transition-all duration-500 ease-out transform 
        ${isMounted && !isVisible ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}
        hover:scale-[1.02] hover:shadow-md`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* ✅ Full-resolution responsive image — no cropping */}
        <div className="w-full flex justify-center items-center rounded-lg overflow-hidden bg-gray-50">
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={600}
            priority={false}
            quality={90}
            loading="lazy"
            className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.03]"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          />
        </div>

        {/* ✅ Accessible and SEO-friendly text */}
        <div>
          <h2 className="text-xl sm:text-2xl font-calgary text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-manrope">
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
