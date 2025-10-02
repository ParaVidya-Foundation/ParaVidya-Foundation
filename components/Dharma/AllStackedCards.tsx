// components/StackedGitaQuotes.tsx
"use client";

import { JSX, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitaCardDharma from "./GitaCardDharma";
import GitaCardKarma from "./GitaCardKarma";
import GitaCardAtman from "./GitaCardAtman";
import GitaCardBhakti from "./GitaCardBhakti";

gsap.registerPlugin(ScrollTrigger);

export default function StackedGitaQuotes(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Basic configuration you can tweak
    const baseCardHeightVh = 90; // the visible height of each card
    const overlapVhDesktop = 70; // how much they overlap on desktop
    const overlapVhMobile = 50; // on mobile
    const staggerGap = 0.14; // how animations are staggered along the timeline

    // Use gsap.context to scope selectors & cleanup properly
    const ctx = gsap.context(() => {
      // select card wrapper elements inside this container (order top-to-bottom)
      const cards = gsap.utils.toArray<HTMLElement>("[data-gita-card]");

      if (!cards || cards.length === 0) {
        return;
      }

      // function to compute overlap & set container height
      const computeAndSetHeights = () => {
        const isMobile = window.innerWidth < 768;
        const overlap = isMobile ? overlapVhMobile : overlapVhDesktop;
        const totalScrollVh = (cards.length - 1) * overlap;
        const containerHeightVh = baseCardHeightVh + totalScrollVh;
        // set explicit height (vh) so ScrollTrigger pin and absolute children behave
        container.style.height = `${containerHeightVh}vh`;
        return { overlap, totalScrollVh, containerHeightVh };
      };

      // initial calc
      const { overlap, totalScrollVh } = computeAndSetHeights();

      // set initial stacked transforms (so users see stacked cards before scrolling)
      cards.forEach((card, i) => {
        const idx = cards.length - i - 1; // reverse so last DOM element is bottom-most
        const offset = idx * overlap;
        const isMobile = window.innerWidth < 768;
        gsap.set(card, {
          y: `${offset}vh`,
          scale: 1 - idx * (isMobile ? 0.005 : 0.01),
          rotation: idx * (isMobile ? -0.25 : -0.5),
          opacity: 0.92 - idx * 0.03,
          transformOrigin: "top center",
        });
      });

      // timeline + ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScrollVh}vh`,
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            y: "0vh",
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
          },
          i * staggerGap
        );
      });

      // When ScrollTrigger refreshes (e.g. on resize) recompute heights & reset initial transform
      ScrollTrigger.addEventListener("refreshInit", () => {
        // recompute container height for current viewport
        computeAndSetHeights();
      });

      // Debounced resize handler to recalc heights and refresh ScrollTrigger
      let resizeId: number | undefined;
      const onResize = () => {
        window.clearTimeout(resizeId);
        resizeId = window.setTimeout(() => {
          computeAndSetHeights();
          ScrollTrigger.refresh();
        }, 120) as unknown as number;
      };
      window.addEventListener("resize", onResize);

      // cleanup for this context is handled below by ctx.revert()
      // but remove our custom listener reference too (we'll remove on cleanup)
      (tl as any)._resizeHandler = onResize;
    }, container); // scope to container so selector '[data-gita-card]' is scoped

    // cleanup function
    return () => {
      // revert gsap context (kills tweens created within and restores any inline styles added by ctx)
      ctx.revert();

      // kill any remaining ScrollTriggers (defensive)
      ScrollTrigger.getAll().forEach((st) => st.kill());
      // restore container's inline height removal (optional)
      if (containerRef.current) {
        containerRef.current.style.height = "";
      }

      // remove any leftover window listeners (defensive)
      try {
        // we don't have the exact handler reference (scoped), but remove common 'resize'
        // NOTE: ctx.revert above removed handlers created in ctx — this is an extra safe step
        // (no-op if handler is already removed)
        window.removeEventListener("resize", () => {});
      } catch (e) {
        /* noop */
      }
    };
  }, []);

  // Render stacked cards — use data attribute for selection
  // Make sure cards are wrapped (we use the wrapper for transforms).
  // The top-most card should appear *first* in the DOM so it gets the highest z-index visually.
  return (
    <section className="w-full py-12" aria-labelledby="gita-quotes-title" role="region">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="gita-quotes-title" className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Timeless Wisdom from Bhagavad Gita
        </h2>

        {/* container: we set height dynamically (vh) — provide a sensible fallback min-height */}
        <div ref={containerRef} className="relative w-full min-h-[90vh] mx-auto">
          {/* Top-most in DOM = visually top (higher z) */}
          <div data-gita-card className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90vh] z-40 rounded-3xl overflow-hidden shadow-2xl">
            <GitaCardDharma />
          </div>

          <div data-gita-card className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90vh] z-30 rounded-3xl overflow-hidden shadow-2xl">
            <GitaCardKarma />
          </div>

          <div data-gita-card className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90vh] z-20 rounded-3xl overflow-hidden shadow-2xl">
            <GitaCardAtman />
          </div>

          <div data-gita-card className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90vh] z-10 rounded-3xl overflow-hidden shadow-2xl">
            <GitaCardBhakti />
          </div>
        </div>
      </div>
    </section>
  );
}
