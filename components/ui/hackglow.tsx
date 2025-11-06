"use client";

import { useEffect, useRef, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface HyperplexedProps {
  title: string;
}

export default function Hyperplexed({ title }: HyperplexedProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // ✅ Fix hydration: Only enable interactive effects after mount
    setIsClient(true);
    const heading = headingRef.current;
    if (!heading) return;

    heading.dataset.value = title;

    const handleMouseOver = () => {
      if (!heading.dataset.value) return;

      let iteration = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        heading.innerText = heading.innerText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return heading.dataset.value![index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= heading.dataset.value!.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
      }, 30);
    };

    heading.addEventListener("mouseover", handleMouseOver);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      heading.removeEventListener("mouseover", handleMouseOver);
    };
  }, [title]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 
        ref={headingRef} 
        data-value={title} 
        className="vil-title"
        suppressHydrationWarning
      >
        {title}
      </h1>

      <style jsx>{`
  .vil-title {
    font-family: "Poppins", "Inter", sans-serif;
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 800;
    text-align: center;
    letter-spacing: -0.02em;

    /* White base */
    color: #fff;
    position: relative;
    display: inline-block;
    cursor: pointer;

    /* Simple yellow glow */
    text-shadow: 
      0 0 6px rgba(255, 255, 0, 0.6),
      0 0 12px rgba(255, 255, 0, 0.4);
    
    transition: text-shadow 0.3s ease;
  }

  .vil-title:hover {
    text-shadow: 
      0 0 12px rgba(255, 255, 0, 0.9),
      0 0 20px rgba(255, 255, 0, 0.7);
  }
`}</style>

    </div>
  );
}
