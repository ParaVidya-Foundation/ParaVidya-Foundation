"use client";

import { JSX, useState } from "react";

type FormState = {
  name: string;
  number: string;
  email: string;
};

export default function BookingForm(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: "", number: "", email: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErr: Partial<FormState> = {};
    if (!form.name.trim()) newErr.name = "Please enter your name";
    if (!/^[0-9]{10,15}$/.test(form.number)) newErr.number = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErr.email = "Enter a valid email";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    if (!validate()) return;
    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 800)); // fake API call
      setSuccess("Booking request submitted — we'll contact you soon.");
      setForm({ name: "", number: "", email: "" });
    } catch {
      setSuccess("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full bg-[#fffaf7b4] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8">
        <h3 className="font-manrope text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Book your session
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Quick booking — enter your details and we&apos;ll get back to schedule your meditation session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Full name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#f97f12]/40 transition ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Contact number */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Contact number
            </label>
            <input
              id="number"
              name="number"
              value={form.number}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#f97f12]/40 transition ${
                errors.number ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="e.g. 9876543210"
              aria-invalid={!!errors.number}
              aria-describedby={errors.number ? "number-error" : undefined}
            />
            {errors.number && <p id="number-error" className="mt-1 text-xs text-red-600">{errors.number}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (optional)
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#f97f12]/40 transition ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Submit */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f97f12] text-white font-semibold shadow hover:brightness-95 transition disabled:opacity-60"
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
            {success && <p className="mt-3 text-sm text-green-700">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
