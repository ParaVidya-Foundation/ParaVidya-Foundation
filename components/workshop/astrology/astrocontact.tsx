"use client";

import React, { useCallback, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface ContactDetailProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  link?: string;
  ariaLabel?: string;
}

interface SocialMediaProps {
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  label?: string;
}

interface InputFieldProps {
  type: "text" | "email" | "tel" | "textarea";
  name: keyof FormData;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

/**
 * Contact page component for Paravidya Foundation
 * - Next.js + TypeScript (client component)
 * - Uses next/image properly with container heights so fill works
 * - Accessible and responsive layout
 */
const ContactInfo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      // replace with your production Formspree endpoint
      const formspreeEndpoint = "https://formspree.io/f/mgvanbyv";

      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(text || "Submission failed");
        }

        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        // hide success after a short while
        setTimeout(() => setIsSubmitted(false), 6000);
      } catch (err) {
        console.error("Contact form error:", err);
        setError("Failed to send your message. Please try again or email us directly.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <>
      <Head>
        <title>Contact | Paravidya Foundation</title>
        <meta name="description" content="Contact Paravidya Foundation — reach us for seva, workshops, donations and community programs." />
        <meta name="keywords" content="Paravidya contact, donate, yoga contact, NGO contact, Paravidya Foundation" />
        <link rel="canonical" href="https://paravidya.org/contact" />
      </Head>

      <main className="w-full">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left: image + contact blocks */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[420px] md:h-[520px]">
                {/* ensure parent has height for Image fill */}
                <Image
                  src="/Team/centre1.jpg"
                  alt="Paravidya Foundation centre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={true}
                />

                {/* overlay panel */}
                <div className="absolute inset-0 bg-black/25" aria-hidden />

                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow">Contact Paravidya Foundation</h1>

                  <div
                    className="mt-6 w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow"
                    role="region"
                    aria-label="Contact information"
                  >
                    <ContactDetail icon={Phone} text="+91 98711 30487" link="tel:+919871130487" ariaLabel="Call Paravidya" />
                    <ContactDetail icon={Mail} text="contact@paravidya.org" link="mailto:contact@paravidya.org" ariaLabel="Email Paravidya" />
                    <ContactDetail icon={MapPin} text="6C, Sector-14, Mehrauli Road, Gurugram, Haryana" ariaLabel="Paravidya address" />

                    <h3 className="mt-4 text-sm font-medium text-gray-800">Follow Us</h3>
                    <div className="mt-2 flex items-center space-x-3">
                      <SocialMedia icon={Instagram} link="https://www.instagram.com/paravidya_foundation/" label="Paravidya Instagram" />
                      <SocialMedia icon={Facebook} link="https://www.facebook.com/paravidya.foundation" label="Paravidya Facebook" />
                      <SocialMedia icon={Send} link="https://t.me/paravidya_foundation" label="Paravidya Telegram" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Send us a message</h2>

                {isSubmitted ? (
                  <div className="rounded-md bg-green-50 border border-green-200 p-4 text-green-800">
                    Thank you — your message was sent successfully. We'll respond soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {error && (
                      <div className="rounded-md bg-red-50 border border-red-200 p-3 text-red-700">
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <InputField
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <InputField
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <InputField
                        type="tel"
                        name="phone"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <InputField
                        type="textarea"
                        name="message"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full inline-flex items-center justify-center h-12 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition ${
                          isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                        aria-disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                    <p className="text-sm text-gray-500">
                      Or email us at{" "}
                      <a href="mailto:contact@paravidya.org" className="text-orange-600 hover:underline">
                        contact@paravidya.org
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Location</h3>
            <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2236159947297!2d77.05042757528288!3d28.47281157575236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198fa3f1b1e7%3A0x6c50eccf3e518447!2sAstro%20Pathshala!5e0!3m2!1sen!2sin!4v1736150464288!5m2!1sen!2sin"
                title="Paravidya Foundation location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden={false}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Scoped tiny animations — move to global CSS / Tailwind config in production */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.9s ease-out both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

/* --------------------------
   Small reusable presentational components
   Memoized for performance
   -------------------------- */

const ContactDetail = React.memo(({ icon: Icon, text, link, ariaLabel }: ContactDetailProps) => {
  // decide internal vs external
  const isExternal = !!link && /^(https?:)?\/\//.test(link);
  if (!link) {
    return (
      <div className="flex items-center space-x-3 my-1">
        <Icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
        <span className="text-sm text-gray-700">{text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 my-1">
      <Icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-orange-600" aria-label={ariaLabel}>
          {text}
        </a>
      ) : (
        <Link href={link} className="text-sm text-gray-700 hover:text-orange-600" onClick={() => {}}>
          {text}
        </Link>
      )}
    </div>
  );
});

const SocialMedia = React.memo(({ icon: Icon, link, label }: SocialMediaProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-2 rounded-md hover:bg-orange-50 transition">
    <Icon className="w-5 h-5 text-gray-700" />
  </a>
));

const InputField = React.memo(({ type, name, placeholder, value, onChange, required = true }: InputFieldProps) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full min-h-[112px] px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    );
  }
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full h-12 px-4 bg-white border border-gray-300 rounded-full shadow-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  );
});

ContactDetail.displayName = "ContactDetail";
SocialMedia.displayName = "SocialMedia";
InputField.displayName = "InputField";

export default React.memo(ContactInfo);
