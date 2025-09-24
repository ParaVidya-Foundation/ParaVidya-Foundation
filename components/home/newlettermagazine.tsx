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
