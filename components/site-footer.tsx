"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Youtube, Twitter, MessageCircle } from "lucide-react"

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/paravidya.foundation/", icon: Instagram, color: "hover:text-pink-500" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579922933190", icon: Facebook, color: "hover:text-blue-600" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/paravidya-foundation/about/?viewAsMember=true", icon: Linkedin, color: "hover:text-blue-700" },
  { name: "YouTube", url: "https://www.youtube.com/@ParaVidyaFoundation", icon: Youtube, color: "hover:text-red-600" },
  { name: "Twitter/X", url: "https://x.com/ParaVidyaNGO", icon: Twitter, color: "hover:text-blue-400" },
  { name: "Reddit", url: "https://www.reddit.com/user/Spare_Inspection36/", icon: MessageCircle, color: "hover:text-orange-600" },
]

const navigationLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Yoga Programs", "/yoga"],
  ["Workshops", "/workshop"],
  ["Partnership", "/Partnership"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
  ["Donate", "/donate"],
]

const programLinks = [
  ["Stress Management", "/yoga/Stress"],
  ["Anger Management", "/yoga/Anger"],
  ["Sleep Therapy", "/yoga/Sleep"],
  ["Depression Support", "/yoga/Depression"],
  ["Immunity Boost", "/yoga/Immunity"],
  ["Weight Management", "/yoga/OverWeight"],
  ["Wellness", "/yoga/wellness"],
  ["Kirtan", "/yoga/Kirtan"],
]

const workshopLinks = [
  ["Spiritual Workshops", "/workshop/spiritual-workshops"],
  ["Meditation Sessions", "/workshop/meditation-sessions"],
  ["Yoga Workshops", "/workshop/yoga-workshops"],
  ["Ayurveda Workshops", "/workshop/ayurveda-workshops"],
  ["Mantra Workshops", "/workshop/mantra-workshops"],
  ["Sanskrit Learning", "/workshop/Sanskrit"],
  ["Sadhna Practice", "/workshop/sadhna"],
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
<div className="w-full">
  {/* Top Banner Image */}
  <div className="relative w-full -mb-1">
    <Image
      src="/Footer.png"
      alt="Footer Top Banner"
      width={1920} // use your image's natural width
      height={890} // use your image's natural height
      priority
      className="w-full h-auto object-contain object-center"
      sizes="100vw"
    />
  </div>



      {/* Footer */}
      <footer role="contentinfo" className="bg-[#f97f12] text-white relative z-10" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-6">
            <Image
              src="/Logo.png"
              alt="Para Vidya Foundation Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-classic text-3xl sm:text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                Para Vidya Foundation
              </h3>
              <p className="font-manrope text-sm sm:text-base text-white/90 mt-1">
                Transforming lives through ancient wisdom and modern wellness practices
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">
            {/* Navigation */}
            <div>
              <h4 className="font-calgary text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigationLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-manrope text-sm text-white/80 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yoga Programs */}
            <div>
              <h4 className="font-calgary text-lg mb-4">Yoga Programs</h4>
              <ul className="space-y-2">
                {programLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-manrope text-sm text-white/80 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops */}
            <div>
              <h4 className="font-calgary text-lg mb-4">Workshops</h4>
              <ul className="space-y-2">
                {workshopLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-manrope text-sm text-white/80 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h4 className="font-calgary text-lg mb-4">Contact Information</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Mail className="w-4 h-4 text-white/80" />
                  <a
                    href="mailto:paravidyafoundation@gmail.com"
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    paravidyafoundation@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Phone className="w-4 h-4 text-white/80" />
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">Delhi, India</span>
                </div>
              </div>

              {/* Social */}
              <h5 className="font-manrope text-base font-medium mb-3">Follow Us</h5>
              <div className="flex justify-center sm:justify-start flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-8 h-8 bg-white/20 hover:bg-white text-white ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/10" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-white/80" aria-label="Copyright notice">
              © {currentYear} Para Vidya Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-white/70 hover:text-white transition">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="text-xs text-white/70 hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter
