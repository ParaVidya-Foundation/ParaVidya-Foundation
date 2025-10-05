"use client";

import DharmaHero from "@/components/Dharma/DharmaHero";
import GitaQuoteSection from "@/components/Dharma/GitaQuoteSection";
import StackedCards from "@/components/Dharma/StackedCards/StackedCards";
import { YogaCarousel } from "@/components/yoga/YogaCarousel";

export default function Dharma() {
  return (
    <main>
     <DharmaHero />
     <GitaQuoteSection />
<StackedCards/>
<YogaCarousel/>

    </main>
  );
}