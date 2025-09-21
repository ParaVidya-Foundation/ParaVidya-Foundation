"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Errors = {
  [key: string]: string;
};

export default function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
    pan: "",
    declaration: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  // ✅ Validation rules
  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Only alphabets are allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      newErrors.pan = "Invalid PAN format (e.g., ABCDE1234F)";
    }

    if (!formData.declaration) {
      newErrors.declaration = "You must accept the declaration";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully! Redirecting to payment...");
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-full p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <p className="text-sm text-gray-600 text-center">
            Special characters not allowed in full name field
          </p>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* DOB */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium">
                Mobile Number *
              </label>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={2}
                placeholder="Enter your complete address"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium">
                Pincode *
              </label>
              <input
                id="pincode"
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit pincode"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.pincode && (
                <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <input
                id="state"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium">
                Country
              </label>
              <input
                id="country"
                type="text"
                name="country"
                value={formData.country}
                readOnly
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100"
              />
            </div>

            {/* PAN */}
            <div className="md:col-span-2">
              <label htmlFor="pan" className="block text-sm font-medium">
                PAN Number
              </label>
              <input
                id="pan"
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                placeholder="ABCDE1234F"
                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
                  errors.pan ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.pan && (
                <p className="text-red-500 text-xs mt-1">{errors.pan}</p>
              )}
            </div>
          </div>

          {/* PAN Warning */}
          <p className="text-sm text-red-600 font-medium text-center">
            Without PAN, you cannot claim 50% tax exemption u/s 80G in India.
          </p>

          {/* Declaration */}
          <div className="flex items-start space-x-2">
            <input
              id="declaration"
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              className={`mt-1 ${errors.declaration ? "ring-2 ring-red-500" : ""}`}
            />
            <label htmlFor="declaration" className="text-sm text-gray-700">
              I hereby declare that I am a citizen of India, making this
              donation out of my own funds.{" "}
              <a href="#" className="text-orange-600 underline">
                Read More
              </a>
            </label>
          </div>
          {errors.declaration && (
            <p className="text-red-500 text-xs">{errors.declaration}</p>
          )}

          {/* Payment Logos */}
          <div className="flex flex-col items-center space-y-2 pt-6 border-t">
            <p className="text-sm text-gray-600">
              We accept all major payment methods
            </p>
            <div className="flex space-x-4 text-2xl text-gray-600">
              <span>💳</span>
              <span>📱</span>
              <span>💰</span>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-md transition"
          >
            Continue To Payment
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
