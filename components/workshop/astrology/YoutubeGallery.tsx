"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

interface VideoItem {
  src: string;
  name: string;
  videoSrc: string;
}

const videoData: VideoItem[] = [
  {
    src: "/Videos/timingjudge.webp",
    name: "Marriage Astrology | शादी कब होगी | Timing of Marriage in Vedic Astrology",
    videoSrc: "https://www.youtube.com/embed/QkaN-S2oybI",
  },
  {
    src: "/Videos/lalkitab.webp",
    name: "ग्रहो को मन चाहे घर मे कैसे स्थापित करें | Lal Kitab Remedies",
    videoSrc: "https://www.youtube.com/embed/c50S-cpM6IQ",
  },
  {
    src: "/Videos/jeevansathi.webp",
    name: "जीवन साथी कहाँ मिलेगा कब मिलेगा कैसे मिलेगा | Future Spouse Prediction",
    videoSrc: "https://www.youtube.com/embed/Dv924UhgbGE",
  },
  {
    src: "/Videos/marriagethumb.webp",
    name: "विवाह बाधा निवारण | Marriage Remedies | शादि के उपाय",
    videoSrc: "https://www.youtube.com/embed/49B9ufNShtw",
  },
  {
    src: "/Videos/rahu.webp",
    name: "Best Remedies for Rahu | राहु के अशुभ प्रभाव और उपाय",
    videoSrc: "https://www.youtube.com/embed/GRps8cGoLAA",
  },
  {
    src: "/Videos/budh.webp",
    name: "कमजोर बुध को मजबूत करने के उपाय | Budh Remedies | Lal Kitab",
    videoSrc: "https://www.youtube.com/embed/OLiV80-zBSA",
  },
];

const YoutubeGallery: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState<string>(videoData[0].videoSrc);

  const handleThumbnailClick = useCallback((videoSrc: string) => {
    setIframeSrc(videoSrc);
  }, []);

  return (
    <div className="yt-container">
      {/* 🎥 Main Video */}
      <div className="video-frame">
        <iframe
          src={iframeSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="ParaVidya Foundation YouTube Video"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔹 Thumbnails Flex Grid */}
      <div className="thumbnail-flex">
        {videoData.map((item) => (
          <div
            key={item.videoSrc}
            className={`thumb-card ${iframeSrc === item.videoSrc ? "active" : ""}`}
            onClick={() => handleThumbnailClick(item.videoSrc)}
          >
            <div className="thumb-img-wrapper">
              <Image
                src={item.src}
                alt={item.name}
                width={300}
                height={170}
                className="thumb-img"
                loading="lazy"
              />
            </div>
            <p className="thumb-title">{item.name}</p>
          </div>
        ))}
      </div>

      {/* 🎨 Styles */}
      <style jsx>{`
        .yt-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
        }

        .video-frame {
          position: relative;
          width: 100%;
          max-width: 950px;
          aspect-ratio: 16 / 9;
          margin: 0 auto 40px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .video-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* 🔹 Flexbox Layout */
        .thumbnail-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }

        .thumb-card {
          cursor: pointer;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          width: calc(33.33% - 20px);
          text-align: left;
        }

        .thumb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }

        .thumb-img-wrapper {
          overflow: hidden;
          border-bottom: 1px solid #f0f0f0;
        }

        .thumb-img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .thumb-card:hover .thumb-img {
          transform: scale(1.05);
        }

        .thumb-title {
          font-weight: 600;
          font-size: 15px;
          color: #222;
          padding: 14px 16px;
          line-height: 1.4;
        }

        .active {
          border: 2px solid #c45a00;
          box-shadow: 0 0 12px rgba(196, 90, 0, 0.3);
        }

        /* 📱 Responsive Layout */
        @media (max-width: 1024px) {
          .thumb-card {
            width: calc(45% - 15px);
          }
        }

        @media (max-width: 768px) {
          .video-frame {
            max-width: 100%;
          }
          .thumb-card {
            width: calc(48% - 10px);
          }
        }

        @media (max-width: 480px) {
          .yt-container {
            padding: 20px 10px;
          }
          .thumb-card {
            width: 100%;
          }
          .thumb-title {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(YoutubeGallery);
