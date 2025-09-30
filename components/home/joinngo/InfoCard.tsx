"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  description?: string;
  image?: string;
  bgColor?: string;
  footer?: ReactNode;
}

export default function InfoCard({
  title,
  description,
  image,
  bgColor,
  footer,
}: InfoCardProps) {
  return (
    <div
      className={`relative w-64 md:w-72 h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 ${bgColor}`}
    >
      {/* Background image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay if image */}
      {image && <div className="absolute inset-0 bg-black/40" />}

      {/* Card content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <h2
            className={`text-lg md:text-xl font-bold mb-3 ${
              image ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-sm leading-snug ${
                image ? "text-gray-100" : "text-gray-700"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* Footer button or extra */}
        {footer && (
          <div className="flex items-center justify-between mt-4 text-sm font-medium">
            {footer}
            <ArrowUpRight className="w-5 h-5 text-yellow-500" />
          </div>
        )}
      </div>
    </div>
  );
}
