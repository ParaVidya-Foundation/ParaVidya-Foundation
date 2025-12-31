"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface InfoCardProps {
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  bgColor?: string;
  footer?: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  bgColor = "",
  footer,
}) => {
  return (
    <div
      className={`relative w-64 md:w-72 h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 ${bgColor}`}
    >
      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt={typeof title === "string" ? title : "InfoCard image"}
          fill
          sizes="(max-width: 768px) 256px, 288px"
          className="object-cover"
          priority={false}
        />
      )}

      {/* Overlay */}
      {image && <div className="absolute inset-0 bg-black/40" />}

      {/* Content */}
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

        {footer && (
          <div className="flex items-center justify-between mt-4 text-sm font-medium">
            {footer}
            <ArrowUpRight className="w-5 h-5 text-yellow-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(InfoCard);
