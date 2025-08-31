"use client"

import Link from "next/link"
import { NewsletterForm } from "@/components/site-newsletter"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gold bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="heading-serif text-xl mb-3">Para Vidya Foundation</h3>
          <p className="text-white/90 text-sm">
            A spiritual NGO promoting Sadhna, Yoga, and Seva through workshops, rituals, and community service.
          </p>
        </div>

        <div>
          <h4 className="heading-serif text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Programs", "/programs"],
              ["Consultation", "/consultation"],
              ["Volunteer", "/volunteer"],
              ["Donate", "/donate"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href as string} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="heading-serif text-lg mb-3">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Email: info@paravidya.org</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => window.open("https://facebook.com", "_blank", "noopener,noreferrer")}
              aria-label="Facebook"
              className="hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
            >
              <Icons.facebook className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open("https://twitter.com", "_blank", "noopener,noreferrer")}
              aria-label="Twitter/X"
              className="hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
            >
              <Icons.twitter className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open("https://instagram.com", "_blank", "noopener,noreferrer")}
              aria-label="Instagram"
              className="hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
            >
              <Icons.instagram className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open("https://youtube.com", "_blank", "noopener,noreferrer")}
              aria-label="YouTube"
              className="hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
            >
              <Icons.youtube className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="heading-serif text-lg mb-3">Newsletter</h4>
          <NewsletterForm />
          <p className="text-xs text-white/80 mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-gold/60 py-4 text-center text-sm text-white/90">
        © {new Date().getFullYear()} Para Vidya Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default SiteFooter
