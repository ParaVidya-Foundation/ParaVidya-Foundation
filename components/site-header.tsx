"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import CSS
import "./header.css";

// ✅ Logo from /public
import Logo from "@/public/Logo.png";

interface DropdownState {
  yogas: boolean;
  workshop: boolean;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    yogas: false,
    workshop: false,
  });

  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen({ yogas: false, workshop: false });
  }, []);

  const toggleDropdown = (menu: keyof DropdownState) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // ✅ Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".navbar") &&
        !target.closest(".menu-toggle") &&
        !target.closest(".dropdown")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [closeMenu]);

  return (
    <header className="page-header">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src={Logo}
              alt="AstroPathshala Mobile Logo"
              className="mobile-logo-img"
              priority
            />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Desktop / Full Navbar */}
      <div className="head">
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          {/* Left Links */}
          <Link
            href="/"
            onClick={closeMenu}
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          {/* yogas Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("yogas")}
            onMouseLeave={() => toggleDropdown("yogas")}
          >
            <Link href="/yoga" onClick={closeMenu}>
              Yoga <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow justify-center align-middle flex-row z-10"
                  loading="lazy" // Performance optimization
                />
            </Link>

            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown("yogas")}
            >
              Yogas <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow justify-center align-middle flex-row z-10"
                  loading="lazy" // Performance optimization
                />
            </button>

            {dropdownOpen.yogas && (
              <div className="dropdown-menu">
                <Link href="/yoga" onClick={closeMenu}>
                  All yogas
                </Link>
                <Link href="/yoga/Deep-Meditation" onClick={closeMenu}>
                  Deep Meditation
                </Link>
                <Link href="/yoga/Kirtan" onClick={closeMenu}>
                  Kirtan
                </Link>
                <Link href="/yoga/Anger" onClick={closeMenu}>
                  Anger
                </Link>
              </div>
            )}
          </div>

          {/* Workshop Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("workshop")}
            onMouseLeave={() => toggleDropdown("workshop")}
          >
            <Link href="/workshop" onClick={closeMenu}>
              Workshop <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow justify-center align-middle flex-row z-10"
                  loading="lazy" // Performance optimization
                />
            </Link>

            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown("workshop")}
            >
              Workshop <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow justify-center align-middle flex-row z-10"
                  loading="lazy" // Performance optimization
                />
            </button>

            {dropdownOpen.workshop && (
              <div className="dropdown-menu">
                <Link href="/workshop/gita-gyaan" onClick={closeMenu}>
                  Gita Gyaan
                </Link>
                <Link href="/workshop/yoga" onClick={closeMenu}>
                  Yoga
                </Link>
                <Link href="/workshop/ayurveda" onClick={closeMenu}>
                  Ayurveda
                </Link>
                <Link href="/workshop/sadhna" onClick={closeMenu}>
                  Sadhna
                </Link>
                <Link href="/workshop/mantra-sidhi" onClick={closeMenu}>
                  Mantra Sidhi
                </Link>
              </div>
            )}
          </div>

          <Link href="/karamkand" onClick={closeMenu}>
            Karamkand
          </Link>

          {/* Center Logo */}
          <div className="logo-container">
            <Link href="/" onClick={closeMenu}>
              <Image
                src={Logo}
                alt="AstroPathshala Logo"
                className="logo-img"
                priority
              />
            </Link>
          </div>

          {/* Right Links */}
          <Link href="https://blogs.astropathshala.com/" onClick={closeMenu}>
            Yoga
          </Link>
          <Link href="/gemstones" onClick={closeMenu}>
            Gallery
          </Link>
          <Link href="/about-us" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/books" onClick={closeMenu}>
            Donation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
