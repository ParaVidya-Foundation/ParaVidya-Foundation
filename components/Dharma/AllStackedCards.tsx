"use client";

import React, { JSX, useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import GitaCardDharma from "./GitaCardDharma";
import GitaCardKarma from "./GitaCardKarma";
import GitaCardAtman from "./GitaCardAtman";
import GitaCardBhakti from "./GitaCardBhakti";

const CARDS = [
  { id: "dharma", Component: GitaCardDharma },
  { id: "karma", Component: GitaCardKarma },
  { id: "atman", Component: GitaCardAtman },
  { id: "bhakti", Component: GitaCardBhakti },
] as const;

export default function StackedGitaQuotes(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // progress 0..1 - we'll set this inside RAF driven by Lenis
  const progress = useMotionValue(0);

  // client-only sizes/state
  const [viewportH, setViewportH] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 800);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth < 768 : false);

  // tuning
  const overlapVhDesktop = 70; // how much cards overlap on desktop (vh)
  const overlapVhMobile = 50; // how much cards overlap on mobile (vh)
  const baseCardHeightVh = 90; // visible card height in vh

  // update viewport state on mount / resize
  useEffect(() => {
    setIsClient(true);
    const update = () => {
      setViewportH(window.innerHeight || 800);
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // Set up Lenis + RAF to compute progress (0..1) relative to container scroll
  useEffect(() => {
    if (!isClient) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let rafId = 0;

    const frame = (time: number) => {
      lenis.raf(time);

      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const denom = rect.height - (window.innerHeight || 1);
        const raw = denom > 0 ? -rect.top / denom : rect.top < 0 ? 1 : 0;
        const clamped = Math.max(0, Math.min(1, raw));
        progress.set(clamped);
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]); // run once after client mount

  // compute container height using vh units (so pin effect works)
  const overlapVh = isMobile ? overlapVhMobile : overlapVhDesktop;
  const totalScrollVh = (CARDS.length - 1) * overlapVh;
  const containerHeightVh = baseCardHeightVh + totalScrollVh;

  // precompute transforms for each card in a stable order (hooksp must be called in same order each render)
  const transforms = CARDS.map((_, i) => {
    const segment = 1 / CARDS.length;
    const entranceStagger = 0.04;
    const start = Math.max(0, i * segment - entranceStagger);
    const end = Math.min(1, (i + 1) * segment + 0.0001);

    // initial offset in px (vh -> px)
    const initialOffsetPx = (i * overlapVh * viewportH) / 100;

    const y = useTransform(progress, [start, end], [initialOffsetPx, 0]);
    const scale = useTransform(progress, [start, end], [Math.max(0.86, 1 - i * 0.02), 1]);
    const rotate = useTransform(progress, [start, end], [-2 * i, 0]); // degrees numeric
    const opacity = useTransform(progress, [start, end], [Math.max(0.55, 0.75 - i * 0.06), 1]);

    return { y, scale, rotate, opacity, zIndex: CARDS.length - i };
  });

  // if not client yet, render placeholder to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="w-full py-12" aria-labelledby="gita-quotes-title" role="region">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="gita-quotes-title" className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Timeless Wisdom from Bhagavad Gita
          </h2>
          <div className="relative w-full mx-auto min-h-[70vh]">
            <p className="text-center text-gray-500">Loading…</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12" aria-labelledby="gita-quotes-title" role="region">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="gita-quotes-title" className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Timeless Wisdom from Bhagavad Gita
        </h2>

        {/* outer container sets overall scroll length (vh units) */}
        <div ref={containerRef} className="relative w-full mx-auto" style={{ height: `${containerHeightVh}vh` }}>
          {/* sticky area (pinned while container scrolls) */}
          <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* render cards — DOM order: top-most card first (i=0) */}
              {CARDS.map(({ id, Component }, i) => {
                const t = transforms[i];
                return (
                  <motion.div
                    key={id}
                    style={{
                      y: t.y,
                      scale: t.scale,
                      rotate: t.rotate,
                      opacity: t.opacity,
                      zIndex: t.zIndex,
                      pointerEvents: "auto",
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90vh] rounded-3xl overflow-hidden shadow-2xl bg-white"
                  >
                    <Component />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
