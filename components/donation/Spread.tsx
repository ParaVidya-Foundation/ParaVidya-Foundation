// components/SupportOptions.tsx

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

type Option = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

const options: Option[] = [
  {
    title: "Donate",
    description:
      "Discover the three levels of donations depending on your level of commitment. Help us help you.",
    icon: "/Icons/donateicon.png",
    link: "/donate",
  },
  {
    title: "Spread the word",
    description:
      "Buy the super useful, inexpensive and stunning booklet on Sadhana for personal use and gifting.",
      icon: "/Icons/spreadicon.png",
    link: "/about-us",
  },
  {
    title: "Corporate Sponsorship",
    description:
      "Explore the very unique opportunity of sponsoring our noble cause and see how it can benefit your organization.",
    icon: "/Icons/corporateicon.png",
    link: "/corporate",
  },
];

export default function SupportOptions() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {options.map((opt, index) => (
          <a href={opt.link} key={index}
            
            className="relative w-full max-w-sm mx-auto overflow-hidden transition-transform hover:scale-105"
          >
            {/* Card background image */}
            <Image
              src="/card.png"
              alt="card background"
              width={300}
              height={375}
              className="w-full h-auto"
              priority
            />

            {/* Overlay content on top of image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8">
              <Image
                src={opt.icon}
                alt={opt.title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3
                className={`${playfair.className} text-xl sm:text-2xl font-semibold mb-3 text-white drop-shadow`}
              >
                {opt.title}
              </h3>
              <p
                className={`${inter.className} text-sm sm:text-base leading-relaxed text-gray-100`}
              >
                {opt.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
