
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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
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
    category: "Yoga Basics",
    title: "Master the Sun Salutation",
    src: "https://images.unsplash.com/photo-1603796848146-316cfbadbdc0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "2",
    category: "Meditation",
    title: "Deepen Your Mindfulness",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "3",
    category: "Yoga Flow",
    title: "Flow into Vinyasa Yoga",
    src: "https://images.unsplash.com/photo-1575052814086-54b5736f9add?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "4",
    category: "Pranayama",
    title: "Breathe with Anulom Vilom",
    src: "https://images.unsplash.com/photo-1603796848146-316cfbadbdc0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "5",
    category: "Yoga Therapy",
    title: "Heal with Restorative Yoga",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "6",
    category: "Advanced Yoga",
    title: "Unlock Headstand Mastery",
    src: "https://images.unsplash.com/photo-1575052814086-54b5736f9add?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "4",
    category: "Pranayama",
    title: "Breathe with Anulom Vilom",
    src: "https://images.unsplash.com/photo-1603796848146-316cfbadbdc0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "5",
    category: "Yoga Therapy",
    title: "Heal with Restorative Yoga",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    id: "6",
    category: "Advanced Yoga",
    title: "Unlock Headstand Mastery",
    src: "https://images.unsplash.com/photo-1575052814086-54b5736f9add?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];