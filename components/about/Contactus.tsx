"use client";

import React from "react";
import ContactForm from "./contactform";
import { Phone, Mail, MessageCircle, Instagram, Youtube, Facebook } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your spiritual journey? Have questions about our programs? 
            We&apos;re here to guide you every step of the way.
          </p>
        </div>

        {/* Flex Layout for Contact Info + Form - Responsive side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {/* Left Section - Contact Information */}
          <div className="w-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-orange-600 flex-shrink-0" />
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Whether you&apos;re interested in yoga classes, meditation sessions, or want to 
                  support our mission, we&apos;d love to hear from you. Our team is ready to help 
                  you on your wellness journey.
                </p>

                {/* Contact Details */}
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <Mail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <a 
                        href="mailto:paravidyafoundation@gmail.com"
                        className="text-gray-600 hover:text-orange-600 break-all transition-colors"
                      >
                        paravidyafoundation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <a 
                        href="tel:+919871130487"
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        +91-98711-30487
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri: 10 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Follow Our Journey</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Stay updated with our latest programs, wellness tips, and community stories.
                </p>

                {/* Social Buttons - Better responsive layout */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@ParaVidyaFoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg text-sm md:text-base font-medium"
                  >
                    <Youtube className="w-5 h-5 flex-shrink-0" />
                    <span>YouTube</span>
                  </a>

                  {/* Instagram - Using Lucide icon with proper styling */}
                  <a
                    href="https://www.instagram.com/paravidya.foundation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 text-white px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg text-sm md:text-base font-medium"
                  >
                    <Instagram className="w-5 h-5 flex-shrink-0 text-white" fill="currentColor" />
                    <span>Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61579922933190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg text-sm md:text-base font-medium"
                  >
                    <Facebook className="w-5 h-5 flex-shrink-0" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 lg:p-10 h-full flex flex-col">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  Send us a Message
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <div className="flex-1">
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