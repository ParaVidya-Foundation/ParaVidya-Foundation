// components/Marquee.tsx
"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 0, 0.5); /* light yellow with 75% opacity */
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const MarqueeText = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  color: #000; /* black font */
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${scroll} 12s linear infinite; /* medium speed */
`;

const Marquee: React.FC = () => {
  return (
    <MarqueeWrapper>
      <MarqueeText>Services • Services • Services • Services • Services</MarqueeText>
    </MarqueeWrapper>
  );
};

export default Marquee;
