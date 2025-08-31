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
          Mountains Tours <br /> & Glamping
        </h1>
        <aside>
          <p>
            Our tours immerse you in the beauty of the mountains. Enjoy guided day hikes with nature.
          </p>
          <p>Since 2021</p>
        </aside>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <Image
                  src="https://images.unsplash.com/photo-1598601065215-751bf8798a2c?q=80&w=1883&auto=format&fit=crop"
                  alt="Mountain landscape with awesome views"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="more">
                <ul>
                  {[
                    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=1784&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?q=80&w=2070&auto=format&fit=crop",
                    "https://plus.unsplash.com/premium_photo-1667987781458-c45c1ad5dfe1?q=80&w=2051&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1600298882698-312a4137fd33?q=80&w=1887&auto=format&fit=crop",
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
                  src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1887&auto=format&fit=crop"
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