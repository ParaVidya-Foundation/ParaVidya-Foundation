"use client";

import KathaEnquiryForm from "@/components/Partnership/Katha/KathaEnquiryForm";
import { useState } from "react";

export default function KathaRequest() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    state: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    const phoneRegex = /^[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) return alert("Please enter your name");
    if (!phoneRegex.test(formData.contact))
      return alert("Please enter a valid contact number");
    if (!emailRegex.test(formData.email))
      return alert("Please enter a valid email address");
    if (!formData.state.trim()) return alert("Please enter your state");
    if (!formData.city.trim()) return alert("Please enter your city");
    if (!formData.message.trim()) return alert("Please enter your message");

    // 🚀 Replace with API integration
    console.log("Katha Request Submitted:", formData);
    alert("Your Katha request has been submitted successfully!");
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 font-[Manrope]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - SEO Content */}
        <div>
          <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Request a Sacred Katha with <span className="text-[#f97f12]">Paravidya Foundation</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Paravidya Foundation, a spiritual and cultural non-profit, is devoted 
            to preserving and sharing India’s timeless wisdom. Along with its 
            efforts in community service and holistic wellness, the foundation 
            organizes <strong>divine Kathas and spiritual discourses</strong> that 
            spread values of compassion, devotion, and dharma.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Through <em>Shrimad Bhagwat Katha</em>, <em>Shri Ram Katha</em>,{" "}
            <em>Puranic Kathas</em>, and other sacred expositions, we bring the 
            eternal stories of devotion, truth, and service closer to communities 
            across India and abroad. You can also organize these divine Kathas in 
            your <strong>city, town, or village</strong> with our support.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            📞 For more information, please call us at{" "}
            <span className="font-semibold text-[#f97f12]">+91 9871130487</span>.
          </p>
        </div>

<KathaEnquiryForm />    
      </div>
    </section>
  );
}
