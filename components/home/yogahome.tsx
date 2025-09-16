"use client";

import Disclosures, { DisclosureItem } from "@/components/yoga/Disclosures";

const yogaItems: DisclosureItem[] = [
  {
    title: "Anger Management Yoga",
    description: "Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity.",
    image: "/Yoga/anger.png",
    href: "/yoga/Anger",
  },
  {
    title: "Depression Support Yoga",
    description: "Gentle movement, conscious breathing, and mindful awareness practices designed to support emotional healing and cultivate inner light during challenging times.",
    image: "/Yoga/depression.png",
    href: "/yoga/Depression",
  },
  {
    title: "Fatigue Relief Yoga",
    description: "Reclaim your natural energy through invigorating flows, energizing breathwork, and revitalizing practices that awaken your body's innate vitality.",
    image: "/Yoga/Fatigue.png",
    href: "/yoga/Fatigue",
  },
  {
    title: "Immunity Boosting Yoga",
    description: "Strengthen your body's natural defenses through targeted poses, cleansing breathwork, and holistic practices that support your immune system's optimal function.",
    image: "/Yoga/immunity.png",
    href: "/yoga/Immunity",
  },
  {
    title: "Kirtan Yoga",
    description: "Experience the transformative power of devotional chanting, sacred sound, and heart-opening practices that connect you to your spiritual essence and inner peace.",
    image: "/Yoga/kirtan.png",
    href: "/yoga/Kirtan",
  },
  {
    title: "Weight Management Yoga",
    description: "Achieve healthy weight goals through mindful movement, balanced nutrition awareness, and sustainable lifestyle practices that honor your body's natural wisdom.",
    image: "/Yoga/weight.png",
    href: "/yoga/OverWeight",
  },
  {
    title: "Sleep Therapy Yoga",
    description: "Soothe the nervous system with restorative shapes, breath that lengthens the exhale, and practices that invite deep rest and peaceful slumber.",
    image: "/Yoga/sleep.png",
    href: "/yoga/Sleep",
  },
  {
    title: "Stress Management Yoga",
    description: "Unwind with soothing sequences, grounding breathwork, and mindful pauses—practices designed to bring you back to balance and inner peace.",
    image: "/Yoga/stressed.png",
    href: "/yoga/Stress",
  },
  {
    title: "Wellness Yoga",
    description: "A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage of life's journey.",
    image: "/Yoga/wellness.png",
    href: "/yoga/wellness",
  },
];

export default function YogaHome() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Yoga & Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover transformative yoga practices designed to heal, energize, and bring balance to your life. 
            From stress relief to spiritual growth, find your perfect practice.
          </p>
        </div>
        <Disclosures items={yogaItems} />
      </div>
    </section>
  );
}
