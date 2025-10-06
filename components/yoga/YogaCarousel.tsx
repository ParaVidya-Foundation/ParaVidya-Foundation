
"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export function YogaCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={{...card, slug: card.id}} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black dark:text-black font-sans">
        Explore Your Yoga Journey
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Embrace inner peace with yoga.
              </span>{" "}
              Practice asanas to align your mind and body, guided by ancient wisdom. Namaste seekers can deepen their meditation with our free sessions, transforming stress into serenity.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1603796848146-316cfbadbdc0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga meditation pose"
              width={500}
              height={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-6"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    id: "1",
    category: "wellness",
    title: "Wellness Yoga",
    src: "/Yoga/wellness.webp",
    content: <DummyContent />,
  },
  {
    id: "2",
    category: "Immunity",
    title: "Immunity Yoga",
    src: "/Yoga/immunity.webp",
    content: <DummyContent />,
  },
  {
    id: "3",
    category: "Depression",
    title: "Depression Yoga",
    src: "/Yoga/depression.webp",
    content: <DummyContent />,
  },
  {
    id: "4",
    category: "Sleep",
    title: "Sleep Yoga",
    src: "/Yoga/sleep.webp",
    content: <DummyContent />,
  },
  {
    id: "5",
    category: "Fatigue",
    title: "Fatigue Yoga",
    src: "/Yoga/fatigue.webp",
    content: <DummyContent />,
  },
  {
    id: "6",
    category: "Stress",
    title: "Stress Yoga",
    src: "/Yoga/stress.webp",
    content: <DummyContent />,
  },
  {
    id: "7",
    category: "Anger",
    title: "Anger Yoga",
    src: "/Yoga/anger.webp",
    content: <DummyContent />,
  },
  {
    id: "8",
    category: "Weight",
    title: "Weight Yoga",
    src: "/Yoga/weight.webp",
    content: <DummyContent />,
  },
  {
    id: "9",
    category: "Kirtan",
    title: "Kirtan Yoga",
    src: "/Yoga/kirtan.webp",
    content: <DummyContent />,
  },
];