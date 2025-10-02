import Image from "next/image";
import Link from "next/link";

type Props = { className?: string };

export default function GitaCardKarma({ className = "" }: Props) {
  return (
    <article
      className={`h-full w-full bg-white flex flex-col md:flex-row items-center ${className}`}
      role="article"
      aria-labelledby="gita-karma-title"
    >
      <div className="relative w-full md:w-1/3 h-56 md:h-full flex-shrink-0">
        <Image
          src="/Dharma.png"
          alt="Karma - visual representation"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 md:p-10 flex-1 flex flex-col justify-center gap-4">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
          <h3 id="gita-karma-title" className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900">
            कर्मण्येवाधिकारस्ते — You have the right to action alone
          </h3>
          <p className="text-amber-800 italic font-semibold mt-2">– Bhagavad Gita (2.47)</p>
        </div>

        <p className="text-gray-700 font-manrope text-lg md:text-xl leading-snug">
          The Gita teaches skillful action without attachment to fruit — a practical framework for ethical leadership, mindful work, and stress-resilient teams.
        </p>

        <p className="text-gray-600 font-manrope leading-relaxed">
          In corporate workshops we turn this idea into exercises that help employees focus on process, reduce anxiety about outcomes, and foster teamwork.
        </p>

        <Link
          href="/gita/karma"
          className="mt-3 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f97f12] text-white font-semibold shadow hover:brightness-95 transition"
          aria-label="Explore Karma"
        >
          Explore Karma
        </Link>
      </div>
    </article>
  );
}
