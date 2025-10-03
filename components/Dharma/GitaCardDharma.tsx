import Image from "next/image";
import Link from "next/link";

type Props = { className?: string };

export default function GitaCardDharma({ className = "" }: Props) {
  return (
    <article
      className={`h-full w-full bg-white flex flex-col md:flex-row items-center ${className}`}
      role="article"
      aria-labelledby="gita-dharma-title"
    >
      {/* Image column */}
      <div className="relative w-full md:w-1/3 h-56 md:h-full flex-shrink-0">
        <Image
          src="/Dharma.png"
          alt="Dharma - visual representation"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content column */}
      <div className="p-6 md:p-10 flex-1 flex flex-col justify-center gap-4">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
          <h3 id="gita-dharma-title" className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900">
            धर्मो रक्षति रक्षितः — Dharma protects those who protect it
          </h3>
          <p className="text-amber-800 italic font-semibold mt-2">– Bhagavad Gita (3.x)</p>
        </div>

        <p className="text-gray-700 font-manrope text-lg md:text-xl leading-snug">
          Dharma is the guiding principle of right action. By aligning with dharma we cultivate a life of integrity, responsibility and harmony with the world.
        </p>

        <p className="text-gray-600 font-manrope leading-relaxed">
          Our teaching explores how dharma applies in daily life, leadership, and social responsibility — useful both for personal growth and corporate programs.
        </p>

        <Link
          href="/gita/dharma"
          className="mt-3 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f97f12] text-white font-semibold shadow hover:brightness-95 transition"
          aria-label="Explore Dharma"
        >
          Explore Dharma
        </Link>
      </div>
    </article>
  );
}
