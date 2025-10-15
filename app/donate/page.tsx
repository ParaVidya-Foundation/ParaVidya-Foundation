"use client";

import DonationForm from "@/components/donation/DonationForm";
import Bankdetails from "@/components/donation/bankdetails";
import Spread from "@/components/donation/Spread";

export default function DonatePage() {

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Donation Form */}
        <div className="w-full">
          <DonationForm />
        </div>

        {/* Bank Details */}
        <div className="w-full">
          <Bankdetails />
        </div>
      </div>
      <Spread />
    </main>
  );
}
