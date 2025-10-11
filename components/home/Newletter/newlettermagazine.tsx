"use client";
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
    src: "/Jyotish-book-Front.png",
    alt: "September 2022",
    date: "September 2022",
  },
  {
    src: "/Pitra-Book-Front.png",
    alt: "september 2025",
    date: "september 2025",
  },

];

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

export default function NewsletterMagazine() {
  return (
    <div className="w-full flex flex-col items-center">
      <Slider {...settings} className="w-full max-w-[260px] md:max-w-[300px]">
        {magazines.map((mag, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-2"
          >
            <img
              src={mag.src}
              alt={mag.alt}
              className="w-64 md:w-72 rounded-xl shadow-lg mb-3 object-cover"
            />
            <p className="text-base md:text-lg font-semibold text-gray-900">
              {mag.date}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
