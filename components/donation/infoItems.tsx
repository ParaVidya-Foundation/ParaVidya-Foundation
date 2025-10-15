"use client";
import React from "react";
import { motion } from "framer-motion";

type InfoItem = {
  icon: React.ReactNode; // ✅ Changed from JSX.Element to React.ReactNode
  title: string;
  description: string;
};

const infoItems: InfoItem[] = [
  {
    icon: <div className="text-yellow-500 text-3xl">❤️</div>,
    title: "Your Support Matters",
    description: "All our efforts are possible only because of your support.",
  },
  {
    icon: <div className="text-yellow-500 text-3xl">📄</div>,
    title: "Tax Exemption",
    description:
      "Your donations are exempted under 80G of the Indian Income Tax Act.",
  },
  {
    icon: <div className="text-yellow-500 text-3xl">🔒</div>,
    title: "Secure Transactions",
    description: "Your donation transactions are completely safe and secure.",
  },
];

export default function DonationHighlights() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {infoItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-start space-x-4"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
