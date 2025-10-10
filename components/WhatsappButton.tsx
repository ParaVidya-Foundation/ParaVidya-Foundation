"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react"; // Modern, minimal icons

function WhatsappButton() {
  const whatsappLink = "https://wa.me/919871130487";
  const callLink = "tel:+919871130487";

  const handleCall = () => {
    window.location.href = callLink;
  };

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-[9999]">
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" strokeWidth={2.2} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1EBE5B] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
      </button>
    </div>
  );
}

export default WhatsappButton;
