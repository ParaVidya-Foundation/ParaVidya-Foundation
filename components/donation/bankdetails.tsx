"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type BankDetails = {
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  upiId: string;
};

const details: BankDetails = {
  accountHolder: "ParaVidya Foundation",
  bankName: "ICICI Bank",
  accountNumber: "588701000150",
  ifsc: "ICIC0005887",
  branch: "Sector-52 Gurugram Branch - 122003",
  upiId: "paravidyafoundation@icici",
};

export default function BankDetailCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg w-full mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-yellow-500 text-3xl">🏦</div>
        <h2 className="text-2xl font-bold text-gray-900">
          Bank Account Details
        </h2>
      </div>

      {/* Details */}
      <div className="space-y-4">
        {Object.entries(details).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            <div>
              <p className="text-sm text-gray-500 capitalize">{key}</p>
              <p className="text-gray-900 font-medium">{value}</p>
            </div>
            <button
              onClick={() => handleCopy(value, key)}
              className="text-gray-500 hover:text-yellow-600 transition"
            >
              {copiedField === key ? "✅" : "📋"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-600 text-center">
        Use these details for{" "}
        <span className="font-semibold">NEFT, RTGS, IMPS, or UPI</span> transfers.
      </p>

      {/* QR Code Section */}
      <div className="mt-8 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Scan & Pay Instantly
        </h3>
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <Image
            src="/QR/PaymentQR.png" // 🧩 update this path to your QR code image
            alt="ParaVidya Foundation UPI QR Code for donations"
            fill
            className="object-contain p-2 bg-gray-50"
            sizes="(max-width: 768px) 50vw, 200px"
          />
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Scan this QR code to pay using any UPI app.
        </p>
      </div>
    </motion.div>
  );
}
