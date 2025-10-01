import Image from "next/image";
import { JSX } from "react";

export default function InfoWithImage(): JSX.Element {
  const quote = `Our mission is to create a sacred space where individuals can embark on a transformative journey of self-discovery and holistic well-being. Through meditation, we empower our community, fostering inner peace, balance, and a profound connection with oneself.`;

  return (
    <div className="h-full w-full">
      {/* Desktop: image as background with overlay text
          Mobile: stacked image then text block (no overlay) */}
      <div className="hidden lg:block relative h-full w-full overflow-hidden">
        <Image src="/card.png" alt="Meditation" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-lg mx-auto px-8">
            <p className="text-white italic text-lg leading-relaxed mb-6 font-manrope">{quote}</p>
            <div>
              <h4 className="text-white font-playfair text-xl font-semibold">Paityn Carder</h4>
              <p className="text-white/80 text-sm font-manrope">Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / small screens: image first (not cropped too small), then text below */}
      <div className="block lg:hidden">
        <div className="relative w-full h-56 overflow-hidden">
          <Image src="/card.png" alt="Meditation" fill className="object-cover" priority />
        </div>
        <div className="bg-black text-white px-6 py-8">
          <p className="italic text-base leading-relaxed mb-4 font-manrope">{quote}</p>
          <div>
            <h4 className="text-white font-playfair text-lg font-semibold">Paityn Carder</h4>
            <p className="text-white/80 text-sm font-manrope">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
