
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
  partnership: boolean;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    yogas: false,
    workshop: false,
    partnership: false,
  });

  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen({ yogas: false, workshop: false, partnership: false });
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
              sizes="(max-width: 480px) 50vw, (max-width: 768px) 30vw, 20vw"
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
            <Link href="/yoga" onClick={closeMenu} className="desktop-link">
              Yoga <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </Link>

            <button
              className="dropdown-trigger mobile-trigger"
              onClick={() => toggleDropdown("yogas")}
            >
              Yogas <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </button>

            {dropdownOpen.yogas && (
              <div className="dropdown-menu">
                <Link href="/yoga" onClick={closeMenu}>
                  All Yoga
                </Link>
                <Link href="/yoga/wellness" onClick={closeMenu}>
                  Wellness
                </Link>
                <Link href="/yoga/Stress" onClick={closeMenu}>
                  Stress
                </Link>
                <Link href="/yoga/Anger" onClick={closeMenu}>
                  Anger
                </Link>
                <Link href="/yoga/Depression" onClick={closeMenu}>
                  Depression
                </Link>
                <Link href="/yoga/Sleep" onClick={closeMenu}>
                  Sleep
                </Link>
                <Link href="/yoga/Fatigue" onClick={closeMenu}>
                  Fatigue
                </Link>
                <Link href="/yoga/Immunity" onClick={closeMenu}>
                  Immunity Boost
                </Link>
                <Link href="/yoga/OverWeight" onClick={closeMenu}>
                  Weight
                </Link>
                <Link href="/yoga/Kirtan" onClick={closeMenu}>
                  Kirtan
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
            <Link href="/workshop" onClick={closeMenu} className="desktop-link">
              Workshop <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </Link>

            <button
              className="dropdown-trigger mobile-trigger"
              onClick={() => toggleDropdown("workshop")}
            >
              Workshop <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </button>

            {dropdownOpen.workshop && (
              <div className="dropdown-menu">
                <Link href="/workshop" onClick={closeMenu}>
                  All Workshops
                </Link>
                <Link href="/workshop/spiritual-workshops" onClick={closeMenu}>
                  Spiritual
                </Link>
                <Link href="/workshop/Sanskrit-workshops" onClick={closeMenu}>
                  Sanskrit
                </Link>
                <Link href="/workshop/meditation-sessions" onClick={closeMenu}>
                  Meditation
                </Link>
                <Link href="/workshop/yoga-workshops" onClick={closeMenu}>
                  Yoga
                </Link>
                <Link href="/workshop/ayurveda-workshops" onClick={closeMenu}>
                  Ayurveda
                </Link>
                <Link href="/workshop/mantra-workshops" onClick={closeMenu}>
                  Mantra
                </Link>
                <Link href="/workshop/sadhna" onClick={closeMenu}>
                  Sadhna
                </Link>
              </div>
            )}
          </div>

          <Link href="/dharma" onClick={closeMenu}>
            Dharma
          </Link>

          {/* Center Logo */}
          <div className="logo-container">
            <Link href="/" onClick={closeMenu}>
              <Image
                src={Logo}
                alt="AstroPathshala Logo"
                className="logo-img"
                priority
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 30vw, 20vw"
              />
            </Link>
          </div>

          {/* Partnership Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("partnership")}
            onMouseLeave={() => toggleDropdown("partnership")}
          >
            <Link href="/Partnership" onClick={closeMenu} className="desktop-link">
              Partnership <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </Link>

            <button
              className="dropdown-trigger mobile-trigger"
              onClick={() => toggleDropdown("partnership")}
            >
              Partnership <img
                  src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                  alt="Expand Services Dropdown"
                  className="dropdown-arrow"
                  loading="lazy"
                  sizes="20px"
                />
            </button>

            {dropdownOpen.partnership && (
              <div className="dropdown-menu">
                <Link href="/Partnership/AwarenessProgram" onClick={closeMenu}>
                  Awareness Program
                </Link>
                {/* <Link href="/Partnership/Camps" onClick={closeMenu}>
                  Camps
                </Link> */}
                <Link href="/Partnership/corporate" onClick={closeMenu}>
                  Corporate
                </Link>
                <Link href="/Partnership/Donate" onClick={closeMenu}>
                  Donation
                </Link>
                {/* <Link href="/Partnership/Events" onClick={closeMenu}>
                  Events
                </Link> */}
                <Link href="/Partnership/JoinourNGO" onClick={closeMenu}>
                  Join our NGO
                </Link>
                <Link href="/Partnership/JoinourNGO/Internship" onClick={closeMenu}>
                  Youth Internship Programme
                </Link>
                <Link href="/Partnership/Katha" onClick={closeMenu}>
                  Katha
                </Link>
                <Link href="/Partnership/TaxExemption" onClick={closeMenu}>
                  Tax Exemption
                </Link>
              </div>
            )}
          </div>
          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link href="/about-us" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/donate" onClick={closeMenu}>
            Donation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
