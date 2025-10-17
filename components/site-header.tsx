"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./header.css";
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

  // ✅ Close menu when clicking outside
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
              alt="ParaVidya Foundation Logo"
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

      {/* Desktop Navbar */}
      <div className="head">
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={closeMenu} className={pathname === "/" ? "active" : ""}>
            Home
          </Link>

          {/* Yogas Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown("yogas")}
            >
              Yogas
              <Image
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                alt="Expand Yogas"
                width={16}
                height={16}
                className={`dropdown-arrow ${dropdownOpen.yogas ? "rotate" : ""}`}
              />
            </button>
            <div className={`dropdown-menu ${dropdownOpen.yogas ? "show" : ""}`}>
              <Link href="/yoga" onClick={closeMenu}>All Yoga</Link>
              <Link href="/yoga/wellness" onClick={closeMenu}>Wellness</Link>
              <Link href="/yoga/Stress" onClick={closeMenu}>Stress</Link>
              <Link href="/yoga/Anger" onClick={closeMenu}>Anger</Link>
              <Link href="/yoga/Depression" onClick={closeMenu}>Depression</Link>
              <Link href="/yoga/Sleep" onClick={closeMenu}>Sleep</Link>
              <Link href="/yoga/Fatigue" onClick={closeMenu}>Fatigue</Link>
              <Link href="/yoga/Immunity" onClick={closeMenu}>Immunity</Link>
              <Link href="/yoga/OverWeight" onClick={closeMenu}>Weight</Link>
              <Link href="/yoga/Kirtan" onClick={closeMenu}>Kirtan</Link>
            </div>
          </div>

          {/* Workshop Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown("workshop")}
            >
              Workshop
              <Image
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                alt="Expand Workshop"
                width={16}
                height={16}
                className={`dropdown-arrow ${dropdownOpen.workshop ? "rotate" : ""}`}
              />
            </button>
            <div className={`dropdown-menu ${dropdownOpen.workshop ? "show" : ""}`}>
              <Link href="/workshop" onClick={closeMenu}>All Workshops</Link>
              <Link href="/workshop/Tantra" onClick={closeMenu}>Tantra</Link>
              <Link href="/workshop/Gita" onClick={closeMenu}>Gita Gyaan</Link>
              <Link href="/workshop/Sanskrit-workshops" onClick={closeMenu}>Sanskrit</Link>
              <Link href="/workshop/meditation-sessions" onClick={closeMenu}>Meditation</Link>
              <Link href="/workshop/yoga-workshops" onClick={closeMenu}>Yoga</Link>
              <Link href="/workshop/ayurveda-workshops" onClick={closeMenu}>Ayurveda</Link>
              <Link href="/workshop/astrology" onClick={closeMenu}>Astrology</Link>
              <Link href="/workshop/sadhna" onClick={closeMenu}>Sadhna</Link>
            </div>
          </div>

          <Link href="/dharma" onClick={closeMenu}>Dharma</Link>

          {/* Center Logo */}
          <div className="logo-container">
            <Link href="/" onClick={closeMenu}>
              <Image
                src={Logo}
                alt="ParaVidya Foundation Logo"
                className="logo-img"
                priority
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 30vw, 20vw"
              />
            </Link>
          </div>

          {/* Partnership Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown("partnership")}
            >
              Partnership
              <Image
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                alt="Expand Partnership"
                width={16}
                height={16}
                className={`dropdown-arrow ${dropdownOpen.partnership ? "rotate" : ""}`}
              />
            </button>
            <div className={`dropdown-menu ${dropdownOpen.partnership ? "show" : ""}`}>
              <Link href="/Partnership/AwarenessProgram" onClick={closeMenu}>Awareness Program</Link>
              <Link href="/Partnership/corporate" onClick={closeMenu}>Corporate</Link>
              <Link href="/Partnership/Donate" onClick={closeMenu}>Donation</Link>
              <Link href="/Partnership/JoinourNGO" onClick={closeMenu}>Join our NGO</Link>
              <Link href="/Partnership/JoinourNGO/Internship" onClick={closeMenu}>Youth Internship</Link>
              <Link href="/Partnership/Katha" onClick={closeMenu}>Katha</Link>
              <Link href="/Partnership/TaxExemption" onClick={closeMenu}>Tax Exemption</Link>
            </div>
          </div>

          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/about-us" onClick={closeMenu}>About Us</Link>
          <Link href="/donate" onClick={closeMenu}>Donation</Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
