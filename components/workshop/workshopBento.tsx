'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface GridItem {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  aspectRatio: string;
}

const gridItems: GridItem[] = [
  { 
    id: 1, 
    title: 'Better Now Closer - Building stronger connections', 
    link: '/page1', 
    imageUrl: '/Dharma.png',
    aspectRatio: '4:3' // 1200x900px recommended
  },
  { 
    id: 2, 
    title: 'Collaboration - Working together seamlessly', 
    link: '/page2', 
    imageUrl: '/Dharma.png',
    aspectRatio: '3:4' // 900x1200px recommended
  },
  { 
    id: 3, 
    title: 'Team Adaptation - Evolving with your team', 
    link: '/page3', 
    imageUrl: '/Dharma.png',
    aspectRatio: '16:9' // 1600x900px recommended
  },
  { 
    id: 4, 
    title: 'Sync - Stay in perfect harmony', 
    link: '/page4', 
    imageUrl: '/Dharma.png',
    aspectRatio: '16:9' // 1600x900px recommended
  },
  { 
    id: 5, 
    title: 'Bring People Together - Unite your community', 
    link: '/page5', 
    imageUrl: '/Dharma.png',
    aspectRatio: '21:9' // 2100x900px recommended (ultra-wide)
  },
  { 
    id: 6, 
    title: 'Communication - Connect instantly', 
    link: '/page6', 
    imageUrl: '/Dharma.png',
    aspectRatio: '16:9' // 1600x900px recommended
  },
  { 
    id: 7, 
    title: 'Engagement - Interactive experiences', 
    link: '/page7', 
    imageUrl: '/Dharma.png',
    aspectRatio: '16:9' // 1600x900px recommended
  },
  { 
    id: 8, 
    title: 'Innovation - Pushing boundaries', 
    link: '/page8', 
    imageUrl: '/Dharma.png',
    aspectRatio: '21:9' // 2100x900px recommended (ultra-wide)
  },
];

const BentoGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen py-4 px-3 sm:py-8 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Grid Container */}
        <section className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-6 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">

          {/* Item 1 - Large Featured (Top Left) */}
          <a
            href={gridItems[0].link}
            aria-label={gridItems[0].title}
            className="group relative col-span-2 md:col-span-4 lg:col-span-6 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(1)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[0].imageUrl}
              alt={gridItems[0].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              className="object-contain p-4 md:p-6 lg:p-8 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 2 - Tall (Top Right) */}
          <a
            href={gridItems[1].link}
            aria-label={gridItems[1].title}
            className="group relative col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(2)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[1].imageUrl}
              alt={gridItems[1].title}
              fill
              priority
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-4 md:p-6 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 3 - Wide (Second Row Left) */}
          <a
            href={gridItems[2].link}
            aria-label={gridItems[2].title}
            className="group relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(3)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[2].imageUrl}
              alt={gridItems[2].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 md:p-5 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 4 - Medium (Second Row Right) */}
          <a
            href={gridItems[3].link}
            aria-label={gridItems[3].title}
            className="group relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(4)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[3].imageUrl}
              alt={gridItems[3].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 md:p-5 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 5 - Ultra Wide Featured (Third Row Full Width) */}
          <a
            href={gridItems[4].link}
            aria-label={gridItems[4].title}
            className="group relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 lg:row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(5)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 group-hover:from-violet-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[4].imageUrl}
              alt={gridItems[4].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4 md:p-6 lg:p-8 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 6 - Medium (Bottom Right Top) */}
          <a
            href={gridItems[5].link}
            aria-label={gridItems[5].title}
            className="group relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(6)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[5].imageUrl}
              alt={gridItems[5].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-3 md:p-5 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 7 - Medium (Bottom Right Bottom) */}
          <a
            href={gridItems[6].link}
            aria-label={gridItems[6].title}
            className="group relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(7)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 group-hover:from-rose-500/10 group-hover:to-red-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[6].imageUrl}
              alt={gridItems[6].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-3 md:p-5 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>

          {/* Item 8 - Wide (Bottom) */}
          <a
            href={gridItems[7].link}
            aria-label={gridItems[7].title}
            className="group relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(8)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 transition-all duration-500 z-10 pointer-events-none" />
            <Image
              src={gridItems[7].imageUrl}
              alt={gridItems[7].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4 md:p-6 lg:p-8 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>
        </section>
      </div>
    </main>
  );
};

export default BentoGrid;