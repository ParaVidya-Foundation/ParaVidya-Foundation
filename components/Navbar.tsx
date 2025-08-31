"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";



const NavbarContainer = styled.header`
  background-color: #0b0c25;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #ffb400;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  font-family: "Noto Serif Devanagari", serif;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ffb400;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`;

const Icon = styled.div`
  font-size: 1.75rem;
  color: #ffb400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RightSection = styled.div`
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  img {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

const Navbar: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+919871130487";
  };

  const handleEmail = () => {
    window.location.href = "mailto:astropathshala@gmail.com";
  };

  return (
    <NavbarContainer>
      {/* Left Section: Contact Info */}
      <LeftSection>
                 <ContactButton onClick={handleCall} aria-label="Call us">
           <Icon>
             <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
               <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
             </svg>
           </Icon>
           +91 9871130487
         </ContactButton>

         <ContactButton onClick={handleEmail} aria-label="Email us">
           <Icon>
             <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
             </svg>
           </Icon>
           astropathshala@gmail.com
         </ContactButton>
      </LeftSection>

    </NavbarContainer>
  );
};

export default Navbar;
