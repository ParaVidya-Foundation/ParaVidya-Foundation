"use client";

import Image from "next/image";

interface MissionProps {
  leftImg: string;
  rightImg: string;
  headline: string;
  text: string;
}

export default function Mission({
  leftImg,
  rightImg,
  headline,
  text,
}: MissionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 h-full">
      {/* Left Image */}
      <div className="absolute inset-y-0 left-0 flex items-center animate-float">
        <Image
          src={leftImg}
          alt="Left decoration"
          width={180}
          height={180}
          className="opacity-80 drop-shadow-lg max-w-[25vw] md:max-w-[180px]"
        />
      </div>

      {/* Right Image */}
      <div className="absolute inset-y-0 right-0 flex items-center animate-float-slow">
        <Image
          src={rightImg}
          alt="Right decoration"
          width={180}
          height={180}
          className="opacity-80 drop-shadow-lg max-w-[25vw] md:max-w-[180px]"
        />
      </div>

      {/* Mission Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight font-[Poppins]">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-[Inter]">
          {text}
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
