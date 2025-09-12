"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const SupportUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !sectionRef.current) return;

    const left = leftRef.current;
    const right = rightRef.current;

    // Floating animation
    gsap.to(left, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(right, {
      y: -24,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hands move closer on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(left, { x: 150, ease: "power3.out" }, 0).to(
      right,
      { x: -150, ease: "power3.out" },
      0
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center h-[80vh] overflow-hidden text-black"
    >
      {/* Heading */}
      <h1
        className={`text-5xl md:text-7xl lg:text-8xl font-extrabold z-10 tracking-tight leading-tight text-center ${cormorant.className}`}
      >
        Support Us
      </h1>

      {/* Hands */}
      <div
        ref={leftRef}
        className="absolute top-1/2 -left-[15%] -translate-y-1/2 w-[55%] md:w-[45%] lg:w-[40%] pointer-events-none"
      >
        <Image
          src="/left.png"
          alt="Left Hand"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div
        ref={rightRef}
        className="absolute top-1/2 -right-[15%] -translate-y-1/2 w-[55%] md:w-[45%] lg:w-[40%] pointer-events-none"
      >
        <Image
          src="/right.png"
          alt="Right Hand"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 px-6 z-20">
        {/* Donate Us */}
        <a
          href="/donate"
          className="block text-center md:text-right group transition-transform duration-300 hover:scale-105"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-wide group-hover:text-red-600 transition-colors ${cormorant.className}`}
          >
            Donate Us
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-gray-700 font-medium ${inter.className}`}
          >
            Contribute as you wish
          </p>
        </a>

        {/* Spread The Word */}
        <a
          href="/donate"
          className="block text-center md:text-left group transition-transform duration-300 hover:scale-105"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-wide group-hover:text-blue-600 transition-colors ${cormorant.className}`}
          >
            Spread The Word
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-gray-700 font-medium ${inter.className}`}
          >
            Promote our teachings and mission
          </p>
        </a>
      </div>
    </section>
  );
};

export default SupportUs;
