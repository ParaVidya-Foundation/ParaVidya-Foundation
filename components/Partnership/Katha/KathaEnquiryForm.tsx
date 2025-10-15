"use client";

import { useState } from "react";

export default function KathaEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    state: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!phoneRegex.test(formData.contact.trim())) {
      setError("Please enter a valid contact number");
      return;
    }
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address");
      return;
    }
    if (!formData.state.trim()) {
      setError("Please enter your state");
      return;
    }
    if (!formData.city.trim()) {
      setError("Please enter your city");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    // Prepare FormData for Formspree
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("contact", formData.contact);
    fd.append("email", formData.email);
    fd.append("state", formData.state);
    fd.append("city", formData.city);
    fd.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mzzjanvo", {
        method: "POST",
        body: fd,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          contact: "",
          email: "",
          state: "",
          city: "",
          message: "",
        });
      } else {
        setError("Failed to submit the form. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <section>
        <div className="max-w-2xl mx-auto shadow-lg rounded-xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-readable sm:text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-green-600 text-base">
              Your Katha enquiry has been submitted successfully. We will get back to you soon.
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              You can also contact us directly at{" "}
              <span className="font-semibold text-[#f97f12]">+91 9871130487</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-readable sm:text-3xl font-bold text-gray-900">
            Organize a Katha
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            If you would like to organize a <span className="font-semibold">Katha </span> 
            in your state or city, please fill out the form below.  
            You can also contact us directly at{" "}
            <span className="font-semibold text-[#f97f12]">+91 9871130487</span>.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 font-readable">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f97f12] focus:ring-2 focus:ring-[#f97f12]/40 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#f97f12] text-white font-medium text-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Enquiry</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}