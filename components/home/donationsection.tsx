"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import "./donation.css";

const DonationSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPosterActive, setPosterActive] = useState(false);

  const handleVideoPlay = useCallback(() => {
    if (iframeRef.current && !isPosterActive) {
      const src = iframeRef.current.src;
      if (!src.includes("autoplay=1")) {
        iframeRef.current.src = `${src}&autoplay=1`;
      }
      setPosterActive(true);
    }
  }, [isPosterActive]);

  return (
    <section className="donation-section">
      <div className="heading">
        <h1>
          Donating <br /> & Supporting
        </h1>
        <aside>
          <p>
            Our donations help us provide free education and meals to children in need.
          </p>
          <p>Since 2025</p>
        </aside>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <Image
                  src="/Carousel/Online-Hawan.jpg"
                  alt="Sacred rituals and ceremonies"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="more">
                <ul>
                  {[
                    "/Carousel/About-us.jpg",
                    "/Carousel/Navgrah-Shanti.jpg",
                    "/Carousel/Your-One-Stop-for-Sacred-Rituals.jpg",
                    "/Logo.png",
                  ].map((url, idx) => (
                    <li key={idx}>
                      <Image
                        src={url}
                        alt={`Thumbnail ${idx + 1}`}
                        width={35}
                        height={35}
                        sizes="35px"
                      />
                      {idx === 3 && <span>50+</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tag">
                <a href="#">#AwesomeViews</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`card video ${isPosterActive ? "poster-active" : "poster"}`}
          onClick={handleVideoPlay}
        >
         
          <div className="card-inner">
            
            <div className="box">
            
              <div className="videoBox">
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5D8TBicNIb8?controls=0"
                  title="Travel promo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              
            </div>
          </div>
           <div className="tag">
                <a href="#">#PetFriendly</a>
              </div>
        </div>

        <div className="card">
          <p>
            <a href="#">More about tours</a>
          </p>
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <Image
                  src="/Carousel/About-us.jpg"
                  alt="Hiking adventure"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="more">
                <a href="#" className="arrow" aria-label="Learn more about hiking">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="tag">
                <a href="#">#Hiking</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;