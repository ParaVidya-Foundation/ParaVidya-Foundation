'use client';

import Image from 'next/image';
import React from 'react';

interface GridItem {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
}

const gridItems: GridItem[] = [
  { id: 1, title: 'Tantra', link: '/page1', imageUrl: '/workshop-bento/tantra.webp' },
  { id: 2, title: 'Meditation', link: '/page2', imageUrl: '/workshop-bento/meditation.webp' },
  { id: 3, title: 'Bhagavad Gita', link: '/page3', imageUrl: '/workshop-bento/gita.webp' },
  { id: 4, title: 'Yoga', link: '/page4', imageUrl: '/workshop-bento/yoga.webp' },
  { id: 5, title: 'Ayurveda', link: '/page5', imageUrl: '/workshop-bento/ayurveda.webp' },
  { id: 6, title: 'Astrology', link: '/page6', imageUrl: '/workshop-bento/astrology.webp' },
  { id: 7, title: 'Sadhna', link: '/page7', imageUrl: '/workshop-bento/sadhna.webp' },
  { id: 8, title: 'Sanskrit', link: '/page8', imageUrl: '/workshop-bento/sanskrit.webp' },
];

const BentoGrid: React.FC = () => {
  return (
    <main className="min-h-screen py-4 px-3 sm:py-8 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <section className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-6 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          
          {/* 1 */}
          <a
            href={gridItems[0].link}
            aria-label={gridItems[0].title}
            className="relative col-span-2 md:col-span-4 lg:col-span-6 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[0].imageUrl}
              alt={gridItems[0].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              className="object-contain p-6"
            />
          </a>

          {/* 2 */}
          <a
            href={gridItems[1].link}
            aria-label={gridItems[1].title}
            className="relative col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[1].imageUrl}
              alt={gridItems[1].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-6"
            />
          </a>

          {/* 3 */}
          <a
            href={gridItems[2].link}
            aria-label={gridItems[2].title}
            className="relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[2].imageUrl}
              alt={gridItems[2].title}
              fill
              className="object-contain p-5"
            />
          </a>

          {/* 4 */}
          <a
            href={gridItems[3].link}
            aria-label={gridItems[3].title}
            className="relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[3].imageUrl}
              alt={gridItems[3].title}
              fill
              className="object-contain p-5"
            />
          </a>

          {/* 5 */}
          <a
            href={gridItems[4].link}
            aria-label={gridItems[4].title}
            className="relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 lg:row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[4].imageUrl}
              alt={gridItems[4].title}
              fill
              className="object-contain p-8"
            />
          </a>

          {/* 6 */}
          <a
            href={gridItems[5].link}
            aria-label={gridItems[5].title}
            className="relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[5].imageUrl}
              alt={gridItems[5].title}
              fill
              className="object-contain p-5"
            />
          </a>

          {/* 7 */}
          <a
            href={gridItems[6].link}
            aria-label={gridItems[6].title}
            className="relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[6].imageUrl}
              alt={gridItems[6].title}
              fill
              className="object-contain p-5"
            />
          </a>

          {/* 8 */}
          <a
            href={gridItems[7].link}
            aria-label={gridItems[7].title}
            className="relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden bg-white shadow-md"
          >
            <Image
              src={gridItems[7].imageUrl}
              alt={gridItems[7].title}
              fill
              className="object-contain p-6"
            />
          </a>
        </section>
      </div>
    </main>
  );
};

export default BentoGrid;
