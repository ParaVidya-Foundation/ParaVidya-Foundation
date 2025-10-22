"use client";

import React from "react";
import ContactForm from "./contactform";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your spiritual journey? Have questions about our programs? 
              We&apos;re here to guide you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you&apos;re interested in yoga classes, meditation sessions, or want to 
                  support our mission, we&apos;d love to hear from you. Our team is ready to help 
                  you on your wellness journey.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                    <Mail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600">paravidyafoundation@gmail.com</p>
                     
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91-98711-30487</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 10 AM - 6 PM IST</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest programs, wellness tips, and community stories.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.youtube.com/@ParaVidyaFoundation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                  <a 
                    href="https://www.instagram.com/paravidya.foundation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579922933190" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;   