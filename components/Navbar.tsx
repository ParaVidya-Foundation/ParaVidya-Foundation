"use client";

import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const NavbarContainer = styled.header`
  background-color: #0b0c25;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #ffb400;
  font-family: "Poppins", sans-serif;
  min-height: 60px;

  @media (max-width: 480px) {
    padding: 8px 10px;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px 15px;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 12px 18px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  padding: 4px 8px;
  min-width: 0;

  &:hover {
    color: #ffb400;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.3rem;
    padding: 2px 6px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.3rem;
    padding: 3px 7px;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #ffb400;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    padding: 4px;

    &:hover {
      color: #ffb400;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      padding: 2px;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 1.3rem;
      padding: 3px;
    }
  }
`;

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  const handleCall = useCallback(() => {
    window.location.href = "tel:+919871130487";
  }, []);

  const handleEmail = useCallback(() => {
    window.location.href = "mailto:paravidyafoundation@gmail.com";
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        const width = window.innerWidth;
        navbarRef.current.style.setProperty(
          "--nav-gap",
          width <= 480 ? "0.8rem" : width <= 768 ? "1rem" : "2rem"
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavbarContainer ref={navbarRef} role="navigation" aria-label="Main navigation">
      <LeftSection>
        <ContactButton onClick={handleCall} aria-label="Call us">
          <Icon>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </Icon>
          +91 9871130487
        </ContactButton>

        <ContactButton onClick={handleEmail} aria-label="Email us">
          <Icon>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </Icon>
          paravidyafoundation@gmail.com
        </ContactButton>
      </LeftSection>

      <RightSection>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          tabIndex={0}
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          tabIndex={0}
        >
          <FaYoutube />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          tabIndex={0}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          tabIndex={0}
        >
          <FaTwitter />
        </a>
      </RightSection>
    </NavbarContainer>
  );
};

export default React.memo(Navbar);
