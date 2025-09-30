"use client";
import NewsletterMagazine from "./newlettermagazine";
import NewsletterForm from "./newsletterform";

export default function NewsletterSection() {
  return (
    <section className="w-full px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center justify-center gap-16 font-manrope">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-10 text-center lg:text-left">
        
        {/* Magazine */}
        <div className="flex-shrink-0">
          <NewsletterMagazine />
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-4 max-w-lg">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg font-manrope">
            <span className="font-semibold text-orange-600">Yoga Sattva</span>{" "}
            is The Yoga Institute's free official newsletter aimed at spreading
            yoga philosophy to mankind. It features scholarly articles by{" "}
            <strong>Dr. Jayadeva</strong> and <strong>Smt. Hansaji</strong>.
          </p>

          <a
            href="/yogasattva"
            className="inline-flex items-center text-orange-600 font-semibold hover:underline text-base md:text-lg"
          >
            Explore More →
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <NewsletterForm />
      </div>
    </section>
  );
}
