"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // [5]

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const SupportUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const stage = stageRef.current!;
    const left = leftRef.current!;
    const right = rightRef.current!;

    // Keep your anchoring and values, but ensure true corners visually (no container padding).
    gsap.set(left, {
      position: "absolute",
      left: -200,        // your existing value preserved
      top: "50%",
      yPercent: -50,
      x: 0,
      willChange: "transform",
      pointerEvents: "none",
    });
    gsap.set(right, {
      position: "absolute",
      right: -200,       // your existing value preserved
      top: "50%",
      yPercent: -50,
      x: 0,
      willChange: "transform",
      pointerEvents: "none",
    });

    // Geometry helpers (your current values preserved)
    const half = () => stage.clientWidth / 11; // your value
    const meetAt = () => Math.max(0, half() - stage.clientWidth * 0.012); // your value
    const clampLeft = (v: number) => gsap.utils.clamp(0, meetAt(), v);
    const clampRight = (v: number) => gsap.utils.clamp(-meetAt(), 0, v);

    // Smooth micro-updates (your timings preserved)
    const toLeft = gsap.quickTo(left, "x", { duration: 1, ease: "power2.out" });
    const toRight = gsap.quickTo(right, "x", { duration: 1, ease: "power2.out" });

    // NEW: Floating animations (independent of ScrollTrigger)
    // Slightly different amplitudes/durations for each hand so they don’t mirror perfectly. [7][10]
    const floatTL = gsap.timeline({ defaults: { ease: "sine.inOut" } });
    floatTL
      .to(left, { y: "-=16", duration: 2.4, repeat: -1, yoyo: true }, 0)   // left gentle float [7][10]
      .to(right, { y: "-=20", duration: 2.8, repeat: -1, yoyo: true }, 0); // right gentle float [7][10]

    // ScrollTrigger phases (unchanged semantics)
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 0.9,
      // pin: true,
      // markers: true,
      onUpdate(self) {
        const p = self.progress;
        const meet = meetAt();

        let leftTarget: number;
        let rightTarget: number;

        if (p <= 0.5) {
          // Approach to meet (strictly capped)
          const t = p / 0.5;
          leftTarget = clampLeft(gsap.utils.interpolate(0, meet, t));
          rightTarget = clampRight(gsap.utils.interpolate(0, -meet, t));
        } else {
          // Separate from meet outward (not beyond outward limit)
          const t = (p - 0.5) / 0.5;
          const outLeft = half() * 0.1;
          const outRight = -half() * 0.1;
          leftTarget = clampLeft(gsap.utils.interpolate(meet, outLeft, t));
          rightTarget = clampRight(gsap.utils.interpolate(-meet, outRight, t));
        }

        // Apply clamped base positions
        gsap.set(left, { x: leftTarget });
        gsap.set(right, { x: rightTarget });

        // Direction-aware micro-bias, clamped
        const dir = self.direction; // 1 = down, -1 = up
        const nudge = Math.max(4, stage.clientWidth * 0.008);

        if (p <= 0.5) {
          // Only inward during approach
          if (dir === 1) {
            toLeft(clampLeft(leftTarget + nudge));
            toRight(clampRight(rightTarget - nudge));
          } else {
            toLeft(leftTarget);
            toRight(rightTarget);
          }
        } else {
          // Only outward during separation
          if (dir === -1) {
            toLeft(clampLeft(leftTarget - nudge));
            toRight(clampRight(rightTarget + nudge));
          } else {
            toLeft(leftTarget);
            toRight(rightTarget);
          }
        }
      },
      onRefresh() {
        // Re-clamp to current window
        const lc = clampLeft((gsap.getProperty(left, "x") as number) || 0);
        const rc = clampRight((gsap.getProperty(right, "x") as number) || 0);
        gsap.set(left, { x: lc });
        gsap.set(right, { x: rc });
      },
    });

    return () => {
      st.kill();
      floatTL.kill();
      ScrollTrigger.getAll().forEach((x) => x.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-start min-h-[140vh] overflow-hidden text-black px-0"
    >
      <h1 className={`mt-6 text-6xl md:text-8xl font-bold z-10 tracking-tight leading-tight ${cormorant.className}`}>
        Support Us
      </h1>

      {/* Stage */}
      <div ref={stageRef} className="relative w-full h-[60vh] md:h-[68vh] overflow-visible">
        {/* Left Hand */}
        <div ref={leftRef} className="w-[55%] md:w-[35%]">
          <Image
            src="/left.png"
            alt="Left Hand"
            width={1600}
            height={1600}
            className="w-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Hand */}
        <div ref={rightRef} className="w-[55%] md:w-[35%]">
          <Image
            src="/right.png"
            alt="Right Hand"
            width={1600}
            height={1600}
            className="w-full object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl z-10 px-6">
        <div className="text-center md:text-right">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 tracking-wide ${cormorant.className}`}>Donate Us</h2>
          <p className={`text-xl md:text-2xl text-gray-700 font-medium ${inter.className}`}>Donate as you wish</p>
        </div>
        <div className="text-center md:text-left">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 tracking-wide ${cormorant.className}`}>Spread The Word</h2>
          <p className={`text-xl md:text-2xl text-gray-700 font-medium ${inter.className}`}>Promote our teachings and channel</p>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;