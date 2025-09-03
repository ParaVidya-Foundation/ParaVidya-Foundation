// components/Marquee.tsx
"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Roboto } from "next/font/google";

// ✅ Clean, modern font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "900"],
});

// ✅ Keyframes for smooth infinite scrolling
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* loop when half scrolled */
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(90deg, #fff9c4, #fff176, #fff9c4); /* modern yellow gradient */
  padding: 1rem 0;
  position: relative;
`;

const MarqueeTrack = styled.div`
  display: inline-flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
`;

const MarqueeText = styled.span`
  display: inline-block;
  padding: 0 3rem;
  font-size: 2rem; /* big text */
  font-weight: 800;
  color: #111;
  letter-spacing: 1px;
`;

const Marquee: React.FC = () => {
  // ✅ Full list of services
  const services =
    "🌟 Food Donation • Education • Yoga • Sadhna • Workshops • Astrology • Meditation • Spiritual Guidance • Community Service • Self Growth • Wellness • Cultural Programs 🌟";

  return (
    <MarqueeWrapper className={roboto.className}>
      {/* Repeat twice so it loops without gaps */}
      <MarqueeTrack>
        <MarqueeText>{services}</MarqueeText>
        <MarqueeText>{services}</MarqueeText>
      </MarqueeTrack>
    </MarqueeWrapper>
  );
};

export default Marquee;
