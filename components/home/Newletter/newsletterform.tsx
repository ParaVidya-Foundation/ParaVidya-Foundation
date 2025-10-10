"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqaydrly", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-xl rounded-2xl border border-orange-200 p-10 w-full max-w-lg mx-auto text-center"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-orange-500"
          fill="currentColor"
          viewBox="0 0 50 50"
        >
          <path d="M50,6.76l-.41,2.08q-1.37,6.95-2.74,13.88-1,5.3-2.08,10.57c-.58,2.92-1.16,5.85-1.73,8.77,0,.07,0,.14,0,.22-.11.47-.36.62-.82.48l-4-1.22L24.67,37.39a.36.36,0,0,0-.45.14l-5,6c-.45.53-.8.5-1.15-.12q-2.37-4.23-4.75-8.46a8.78,8.78,0,0,1-.44-.79,1.07,1.07,0,0,0-.8-.61L.54,30a.68.68,0,0,1-.31-.13A1,1,0,0,1,0,29.39c0-.25.16-.39.37-.49l3.89-1.81,16-7.45,19.67-9.15L44,8.6l5.16-2.39A.55.55,0,0,1,50,6.76ZM42,41.58Q45.3,25,48.56,8.47l-.07,0L22.16,35.49ZM44.3,9.74l0-.07L2.06,29.31l.33.12,10.27,3.14a.56.56,0,0,0,.44-.1l15.42-11.2c1.38-1,2.74-2,4.12-3l10.28-7.48ZM18.51,42l.15-.4c.51-1.55,1.07-3.09,1.52-4.67a5.91,5.91,0,0,1,1.54-2.54Q32.91,22.93,44,11.46a3.45,3.45,0,0,0,.26-.28l0,0L13.68,33.4Zm1.6-1.33.06,0L23.28,37l-1.78-.54Z"></path>
        </svg>
        <div className="text-left">
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Subscribe to our
          </h2>
          <h1 className="text-2xl md:text-3xl font-mileast text-gray-900">
            Newsletter
          </h1>
        </div>
      </div>


      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full text-left font-inter"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Subscribe Now
        </motion.button>

        {status === "SUCCESS" && (
          <p className="text-green-600 text-sm mt-3 text-center">
            ✅ Thank you for subscribing to Paravidya Foundation!
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 text-sm mt-3 text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.section>
  );
}
