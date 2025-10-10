"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function YogaForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", contact: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name.";
    if (!/^[0-9]{10,15}$/.test(formData.contact))
      return "Please enter a valid contact number.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return alert(error);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqayydqd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
      setFormData({ name: "", contact: "" });
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
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-mileast text-gray-900">
          Yoga & Wellness Registration
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Join <span className="text-orange-600 font-semibold">Paravidya Foundation</span> to learn authentic Yoga practices rooted in Dharma, Tantra, and Mantra traditions.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 text-left font-inter">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        {/* Contact */}
        <div>
          <label
            htmlFor="contact"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            type="tel"
            placeholder="e.g. +91 9876543210"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Register Now
        </motion.button>

        {/* Status messages */}
        {status === "SUCCESS" && (
          <p className="text-green-600 text-sm mt-3 text-center">
            ✅ Thank you! We’ll contact you soon for Yoga sessions.
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 text-sm mt-3 text-center">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </motion.section>
  );
}
