"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export type DisclosureItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

interface DisclosuresProps {
  items: DisclosureItem[];
}

export default function Disclosures({ items }: DisclosuresProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const liItems = list.querySelectorAll<HTMLLIElement>("li");

    const setIndex = (event: Event) => {
      const closest = (event.target as HTMLElement).closest("li");
      if (closest) {
        const index = Array.from(liItems).indexOf(closest);
        // JS sets a grid-template-columns value when an item is active.
        // Keep the fractions modest (3fr : 1fr), but JS can adjust them.
        const cols = Array.from(liItems)
          .map((_, i) => (index === i ? "3fr" : "1fr"))
          .join(" ");
        list.style.setProperty("grid-template-columns", cols);
        liItems.forEach((item, i) =>
          item.setAttribute("data-active", (index === i).toString())
        );
      }
    };

    list.addEventListener("focus", setIndex, true);
    list.addEventListener("click", setIndex);
    list.addEventListener("pointermove", setIndex);

    return () => {
      list.removeEventListener("focus", setIndex, true);
      list.removeEventListener("click", setIndex);
      list.removeEventListener("pointermove", setIndex);
    };
  }, []);

  return (
    <section className="container">
      <div className="textBlock">
        <h1 className="title">Disclosures</h1>
        <p className="subtitle">
          Explore our collection of short guides and pages. Hover, focus, or
          click a card to bring it forward and reveal more.
        </p>
      </div>

      <ul ref={listRef} className="grid" aria-label="Disclosures list">
  {items.map((item, idx) => (
    <li key={idx} data-active={idx === 0 ? "true" : "false"}>
      <article>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {/* ✅ Fixed Link */}
        <Link 
          href={item.href} 
          className="readLink" 
          aria-label={`Read more about ${item.title}`}
        >
          <span>Read More</span>
        </Link>

        <div className="relative w-full h-full">
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </li>
  ))}
</ul>

      <style jsx>{`
        /* Variables & base */
        :root {
          --max-width: 1180px;
          --gap: 16px;
          --radius: 14px;
          --card-height: clamp(220px, 28vh, 320px);
          --accent: #2563eb; /* blue */
          --muted: #6b7280;
          --surface: #ffffff;
          --shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
        }

        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 28px 16px;
          font-family: Inter, "Segoe UI", Roboto, system-ui, -apple-system,
            "Helvetica Neue", Arial;
          color: #0f172a;
        }

        .textBlock {
          text-align: center;
          margin-bottom: 18px;
        }

        .title {
          font-family: var(--font-mileast), ui-serif, Georgia, serif;
          font-weight: 400;
          font-size: clamp(1.45rem, 3.2vw, 2.25rem);
          margin: 0 0 8px 0;
          color: #071034;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .subtitle {
          margin: 0;
          color: var(--muted);
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          max-width: 72ch;
          line-height: 1.5;
        }

        /* Grid - JS may override grid-template-columns inline */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--gap);
          align-items: stretch;
          transition: grid-template-columns 420ms cubic-bezier(0.2, 0.9, 0.2, 1),
            gap 220ms ease;
        }

        /* Cards */
        .grid li {
          list-style: none;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          min-height: var(--card-height);
          background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(250,250,250,0.8));
          box-shadow: var(--shadow);
          transform-origin: center;
          transition: transform 360ms cubic-bezier(0.2, 0.9, 0.2, 1),
            box-shadow 360ms ease;
          cursor: pointer;

          /* entrance animation */
          opacity: 0;
          transform: translateY(10px) scale(0.995);
          animation: cardEnter 540ms cubic-bezier(0.2,0.8,0.2,1) forwards;
        }

        /* staggered entrance delays for up to 12 items */
        .grid li:nth-child(1) { animation-delay: 60ms; }
        .grid li:nth-child(2) { animation-delay: 120ms; }
        .grid li:nth-child(3) { animation-delay: 180ms; }
        .grid li:nth-child(4) { animation-delay: 240ms; }
        .grid li:nth-child(5) { animation-delay: 300ms; }
        .grid li:nth-child(6) { animation-delay: 360ms; }
        .grid li:nth-child(7) { animation-delay: 420ms; }
        .grid li:nth-child(8) { animation-delay: 480ms; }
        .grid li:nth-child(9) { animation-delay: 540ms; }
        .grid li:nth-child(10){ animation-delay: 600ms; }
        .grid li:nth-child(11){ animation-delay: 660ms; }
        .grid li:nth-child(12){ animation-delay: 720ms; }

        @keyframes cardEnter {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* When a card is active (set by JS) make it stand out */
        .grid li[data-active="true"] {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 38px rgba(2, 6, 23, 0.14);
          z-index: 4;
        }

        /* Article overlay content */
        .grid article {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          gap: 12px;
          z-index: 3;

          /* subtle dark gradient for readability */
          background: linear-gradient(
            180deg,
            rgba(2,6,23,0.05) 0%,
            rgba(2,6,23,0.18) 40%,
            rgba(2,6,23,0.45) 100%
          );
          color: #fff;
          pointer-events: none; /* keep pointer events to li for global handling */
        }

        /* Heading and body copy */
        .grid h3 {
          margin: 0;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          font-weight: 600;
          color: #ffffff;
          text-shadow: 0 6px 22px rgba(2,6,23,0.35);
        }

        .grid p {
          margin: 0;
          color: rgba(255,255,255,0.95);
          font-size: clamp(0.88rem, 1.6vw, 1rem);
          line-height: 1.45;
          max-width: 40ch;
          opacity: 0.98;
        }

        /* Read link is styled as a pill */
        .readLink {
          display: inline-block;
          pointer-events: auto;
          text-decoration: none;
          background: var(--accent);
          color: white;
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 6px 18px rgba(37,99,235,0.18);
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }
        .readLink:hover,
        .readLink:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(37,99,235,0.22);
          background: #1e40af;
        }

        /* background image */
        .grid img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: grayscale(0.18) contrast(1.02) saturate(0.95);
          transition: transform 700ms cubic-bezier(0.2,0.9,0.2,1), filter 420ms ease;
          transform-origin: center;
        }

        .grid li:hover img,
        .grid li[data-active="true"] img {
          transform: scale(1.06);
          filter: grayscale(0) contrast(1.04) saturate(1.05);
        }

        /* focus visible for keyboard users */
        .grid li:focus-within,
        .grid li:focus {
          outline: 3px solid rgba(37,99,235,0.12);
          outline-offset: 6px;
        }

        /* Mobile adjustments */
        @media (max-width: 900px) {
          .container { padding: 20px 14px; }
          .grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .grid li {
            min-height: clamp(160px, 26vh, 240px);
            border-radius: 12px;
          }
          .grid article {
            padding: 16px;
          }
          .grid p { max-width: 60ch; font-size: 0.95rem; }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          :root { --card-height: 220px; }
          .title { font-size: clamp(1.25rem, 5.5vw, 1.6rem); }
          .subtitle { font-size: 0.95rem; padding-inline: 8px; }
          .grid img { object-position: center; }
        }
      `}</style>
    </section>
  );
}
