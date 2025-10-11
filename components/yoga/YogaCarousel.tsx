"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const inter = Inter({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export function YogaCarousel() {
  return (
    <section className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-2xl md:text-5xl font-bold text-gray-900 mb-12 ${inter.className}`}
        >
          Explore Your Yoga Journey
        </h2>

        <Carousel
          items={data.map((card, index) => (
            <Card
              key={card.id}
              index={index}
              card={{
                src: card.src,
                title: card.title,
                category: card.category,
                content: card.content,
                slug: card.href, 
              }}
            />
          ))}
        />
      </div>
    </section>
  );
}

const DummyContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl text-center">
    <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      <span className="font-semibold text-neutral-800 dark:text-neutral-100">
        Embrace inner peace with yoga.
      </span>{" "}
      Align your body, mind, and spirit with guided sessions designed for
      balance and wellness.
    </p>
    <Image
      src="https://images.unsplash.com/photo-1603796848146-316cfbadbdc0?q=80&w=1200&auto=format&fit=crop"
      alt="Yoga pose"
      width={600}
      height={400}
      className="mx-auto mt-8 rounded-2xl object-cover"
    />
  </div>
);

const data = [
  { id: "1", category: "Wellness", title: "Wellness Yoga", src: "/Yoga/wellness.webp", href: "/yoga/wellness", content: <DummyContent /> },
  { id: "2", category: "Immunity", title: "Immunity Boost Yoga", src: "/Yoga/immunity.webp", href: "/yoga/Immunity", content: <DummyContent /> },
  { id: "3", category: "Depression", title: "Depression Relief Yoga", src: "/Yoga/depression.webp", href: "/yoga/Depression", content: <DummyContent /> },
  { id: "4", category: "Sleep", title: "Sleep Improvement Yoga", src: "/Yoga/sleep.webp", href: "/yoga/Sleep", content: <DummyContent /> },
  { id: "5", category: "Fatigue", title: "Fatigue Recovery Yoga", src: "/Yoga/fatigue.webp", href: "/yoga/Fatigue", content: <DummyContent /> },
  { id: "6", category: "Stress", title: "Stress Relief Yoga", src: "/Yoga/stress.webp", href: "/yoga/Stress", content: <DummyContent /> },
  { id: "7", category: "Anger", title: "Anger Management Yoga", src: "/Yoga/anger.webp", href: "/yoga/Anger", content: <DummyContent /> },
  { id: "8", category: "Weight", title: "Weight Management Yoga", src: "/Yoga/weight.webp", href: "/yoga/OverWeight", content: <DummyContent /> },
  { id: "9", category: "Kirtan", title: "Kirtan Yoga", src: "/Yoga/kirtan.webp", href: "/yoga/Kirtan", content: <DummyContent /> },
];
