"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Magazine {
  src: string;
  alt: string;
  date: string;
}

const magazines: Magazine[] = [
  {
    src: "https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/Yogsattva-COVER/yogasattva-september-20257d766124-cb23-4236-b94f-921b930ab43b.jpg",
    alt: "September 2025",
    date: "September 2025",
  },
  {
    src: "https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/image/webp/yogasattva-aug-202523154f10-6104-492d-b9f7-655bf39b1dd8-%281%29bba64b60-7676-436d-b13b-cbf1f8facf7916175758-6e7a-4a1d-bef3-8776c25a8621_11zon18caa791-4a94-4340-861e-83d047e72252.webp",
    alt: "August 2025",
    date: "August 2025",
  },
  {
    src: "https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/image/webp/final-yogasattva-july-2025_page-0001d01aa45c-9ce6-4dc4-99e3-9c44230014b4-%281%291a3982c7-661f-4f92-9bee-a65f2fe39166-%281%2995b385d5-f0cc-482a-af86-2983fd6c7dad_11zon9c71d429-caed-4410-a5df-ff5279347a2f.webp",
    alt: "July 2025",
    date: "July 2025",
  },
  {
    src: "https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/image/webp/yogasattva-june-2025-_page-0001f2295ac8-4591-4cff-9913-326ff51b585f01df63ec-d1d9-4688-884e-cfe299e4f214.webp",
    alt: "June 2025",
    date: "June 2025",
  },
];

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }
    alert(`Subscribed successfully!\nName: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full  py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-16">
      {/* Left Side - Magazine Carousel */}
      <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
        <Slider {...settings}>
          {magazines.map((mag, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <img
                src={mag.src}
                alt={mag.alt}
                className="w-64 md:w-72 rounded-xl shadow-xl mb-4"
              />
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                {mag.date}
              </p>
            </div>
          ))}
        </Slider>
        <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
          <span className="font-semibold text-orange-600">Paravidhya </span> is The Yoga Institute’s free
          official newsletter aimed at spreading yoga philosophy to mankind.
          It features scholarly articles by <strong>Dr. Jayadeva</strong> and{" "}
          <strong>Smt. Hansaji</strong>.
        </p>
        <a
          href="/yogasattva"
          className="mt-6 inline-flex items-center text-orange-600 font-medium hover:underline text-base md:text-lg"
        >
          Explore More →
        </a>
      </div>

      {/* Right Side - Subscription Form */}
      <div className="bg-white shadow-lg rounded-2xl border border-orange-200 p-8 w-full max-w-md">
        <div className="flex items-center gap-3 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-orange-500"
            fill="currentColor"
            viewBox="0 0 50 50"
          >
            <path d="M50,6.76l-.41,2.08q-1.37,6.95-2.74,13.88-1,5.3-2.08,10.57c-.58,2.92-1.16,5.85-1.73,8.77,0,.07,0,.14,0,.22-.11.47-.36.62-.82.48l-4-1.22L24.67,37.39a.36.36,0,0,0-.45.14l-5,6c-.45.53-.8.5-1.15-.12q-2.37-4.23-4.75-8.46a8.78,8.78,0,0,1-.44-.79,1.07,1.07,0,0,0-.8-.61L.54,30a.68.68,0,0,1-.31-.13A1,1,0,0,1,0,29.39c0-.25.16-.39.37-.49l3.89-1.81,16-7.45,19.67-9.15L44,8.6l5.16-2.39A.55.55,0,0,1,50,6.76ZM42,41.58Q45.3,25,48.56,8.47l-.07,0L22.16,35.49ZM44.3,9.74l0-.07L2.06,29.31l.33.12,10.27,3.14a.56.56,0,0,0,.44-.1l15.42-11.2c1.38-1,2.74-2,4.12-3l10.28-7.48ZM18.51,42l.15-.4c.51-1.55,1.07-3.09,1.52-4.67a5.91,5.91,0,0,1,1.54-2.54Q32.91,22.93,44,11.46a3.45,3.45,0,0,0,.26-.28l0,0L13.68,33.4Zm1.6-1.33.06,0L23.28,37l-1.78-.54Z"></path>
          </svg>
          <div>
            <h2 className="text-sm md:text-base font-medium text-gray-500">
              Subscribe to our
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Newsletter
            </h1>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <button
            onClick={handleSubscribe}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
