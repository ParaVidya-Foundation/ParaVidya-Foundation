"use client";

import React from "react";

function WhatsappButton() {
  const whatsappLink = "https://wa.me/919871130487"; // WhatsApp link
  const callLink = "tel:+919871130487"; // Call link

  const handleCall = () => {
    window.location.href = callLink;
  };

  const handleWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-[9999]">
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 scale-105 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Call Us"
      >
                 <svg className="text-white text-3xl w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
           <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
         </svg>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 scale-105 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
                 <svg className="text-white text-3xl w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
           <path d="M20.5 3.5A11 11 0 0 0 3.1 17.6L2 22l4.5-1.2A11 11 0 1 0 20.5 3.5Zm-5.2 14.3c-1.9 0-3.6-.6-5-1.6l-.4-.3-3 .8.8-2.9-.3-.4a7.7 7.7 0 1 1 13.3-5.2 7.7 7.7 0 0 1-7.7 7.6Zm4-5.9c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1c-.1.2-.6.7-.7.8-.1.1-.2.1-.5 0s-1-.4-1.9-1.1-1.5-1.6-1.7-1.8-.02-.4.08-.5c.08-.08.2-.2.2-.3.06-.06.08-.1.12-.18.05-.07.03-.14 0-.2s-.5-1.2-.7-1.6c-.18-.42-.36-.36-.5-.36h-.42c-.14 0-.36.05-.55.26s-.72.7-.72 1.7.74 2 0 3.5 2.7 3.1 3.1 3.3c.4.26 1.8.7 2.5.9.26.08.5.1.68.06.2-.04.98-.4 1.1-.8.14-.4.14-.7.1-.8-.04-.1-.2-.14-.4-.2Z"/>
         </svg>
      </button>
    </div>
  );
}

export default WhatsappButton;
