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
  { id: 1, title: 'Tantra', link: '/workshop/Tantra', imageUrl: '/workshop-bento/Tantra.jpg' },
  { id: 2, title: 'Meditation', link: '/workshop/meditation-sessions', imageUrl: '/workshop-bento/Meditation.jpg' },
  { id: 3, title: 'Bhagavad Gita', link: '/workshop/bhagavad-gita', imageUrl: '/workshop-bento/Gita.jpg' },
  { id: 4, title: 'Yoga', link: '/workshop/yoga-workshops', imageUrl: '/workshop-bento/Yoga.jpg' },
  { id: 5, title: 'Ayurveda', link: '/workshop/ayurveda-workshops', imageUrl: '/workshop-bento/Ayurveda.jpg' },
  { id: 6, title: 'Astrology', link: '/workshop/Astrology-workshops', imageUrl: '/workshop-bento/Astrology.jpg' },
  { id: 7, title: 'Sadhna', link: '/workshop/sadhna', imageUrl: '/workshop-bento/Sadhna.jpg' },
  { id: 8, title: 'Sanskrit', link: '/workshop/Sanskrit-workshops', imageUrl: '/workshop-bento/Sanskrit.jpg' },
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
            className="relative col-span-2 md:col-span-4 lg:col-span-6 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[0].imageUrl}
              alt={gridItems[0].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 2 */}
          <a
            href={gridItems[1].link}
            aria-label={gridItems[1].title}
            className="relative col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[1].imageUrl}
              alt={gridItems[1].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 3 */}
          <a
            href={gridItems[2].link}
            aria-label={gridItems[2].title}
            className="relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[2].imageUrl}
              alt={gridItems[2].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 4 */}
          <a
            href={gridItems[3].link}
            aria-label={gridItems[3].title}
            className="relative col-span-2 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[3].imageUrl}
              alt={gridItems[3].title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 5 */}
          <a
            href={gridItems[4].link}
            aria-label={gridItems[4].title}
            className="relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 lg:row-span-2 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[4].imageUrl}
              alt={gridItems[4].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 6 */}
          <a
            href={gridItems[5].link}
            aria-label={gridItems[5].title}
            className="relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[5].imageUrl}
              alt={gridItems[5].title}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 7 */}
          <a
            href={gridItems[6].link}
            aria-label={gridItems[6].title}
            className="relative col-span-1 md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[6].imageUrl}
              alt={gridItems[6].title}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-full"
            />
          </a>

          {/* 8 */}
          <a
            href={gridItems[7].link}
            aria-label={gridItems[7].title}
            className="relative col-span-2 md:col-span-6 lg:col-span-6 row-span-1 rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-md"
          >
            <Image
              src={gridItems[7].imageUrl}
              alt={gridItems[7].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
            />
          </a>
        </section>
      </div>
    </main>
  );
};

export default BentoGrid;