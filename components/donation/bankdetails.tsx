"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type BankDetails = {
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  upiId: string;
};

const details: BankDetails = {
  accountHolder: "John Doe",
  bankName: "State Bank of India",
  accountNumber: "123456789012",
  ifsc: "SBIN0001234",
  branch: "Connaught Place, New Delhi",
  upiId: "johndoe@upi",
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
        <span className="font-semibold">NEFT, RTGS, IMPS, or UPI</span>{" "}
        transfers.
      </p>
    </motion.div>
  );
}
