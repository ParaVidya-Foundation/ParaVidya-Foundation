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
        <p className="text-black leading-relaxed text-base md:text-lg font-manrope">
  <span className="font-semibold text-orange-500">Paravidya Foundation</span>{" "}
  is a <strong>Non-Profit Organisation</strong> blending the timeless wisdom of{" "}
  <strong>Sanatan Dharma</strong> with the spirit of{" "}
  <span className="text-orange-500">Seva (selfless service)</span>. We serve
  through <strong>Annadaan</strong>, <strong>youth guidance</strong>, and{" "}
  <strong>spiritual education</strong> to uplift society with knowledge and compassion.{" "}
  <br />
  🕉️ Subscribe to our{" "}
  <span className="text-orange-500">weekly magazine</span> featuring{" "}
  <strong>Yoga</strong>, <strong>Ayurveda</strong>, <strong>Astrology</strong>,{" "}
  and <strong>Vedic wisdom</strong> — join our journey of{" "}
  <span className="text-orange-500">service and awakening</span>.
</p>



          <a
            href="/newsletter"
            className="inline-flex items-center text-orange-500 font-semibold hover:underline text-base md:text-lg"
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
