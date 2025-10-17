"use client";
import React from "react";
import GlowButton from "../ui/GlowButton";

const TaxExemptiontext = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-black">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-10">
          Tax Exemption on Donations to Paravidya Foundation (Section 80G)
        </h1>

        {/* Content */}
        <div className="space-y-8 leading-relaxed">
          <p className="text-black">
            Donating to{" "}
            <span className="font-semibold text-orange-400">
              Paravidya Foundation
            </span>{" "}
            is not only an act of Seva (selfless service) but also a financially
            rewarding decision. Under Indian law, your donations to NGOs
            registered under{" "}
            <span className="font-semibold text-orange-400">
              Section 80G of the Income Tax Act
            </span>{" "}
            qualify for deductions, reducing your taxable income.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400">
            What Does This Mean?
          </h2>
          <p className="text-black">
            When you contribute to Paravidya Foundation, the donation amount can
            be deducted from your total taxable income while filing your Income
            Tax Return (ITR). For example, if your taxable income is ₹10,00,000
            and you donate ₹50,000, your taxable income becomes ₹9,50,000
            (subject to 50% or 100% deduction depending on the category).
          </p>

          <h2 className="text-2xl font-semibold text-orange-400">
            Who Can Claim 80G Benefits?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>Individual taxpayers (salaried or self-employed)</li>
            <li>Hindu Undivided Families (HUFs)</li>
            <li>Companies and firms</li>
            <li>
              NRIs with taxable income in India (donations must be made to an
              eligible Indian NGO like Paravidya)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400">
            Rules You Must Know
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>
              Donations above{" "}
              <span className="font-semibold text-orange-400">₹2,000</span>{" "}
              cannot be made in cash – use cheque, bank transfer, or digital
              payments.
            </li>
            <li>Donations in kind (clothes, food, etc.) are not eligible for 80G.</li>
            <li>
              Only donations to NGOs registered under{" "}
              <span className="font-semibold text-orange-400">
                Section 12A & 80G
              </span>{" "}
              qualify. Paravidya Foundation holds valid registration.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400">
            Documents Needed to Claim 80G Deduction
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>
              <span className="font-semibold text-orange-400">
                Donation Receipt
              </span>{" "}
              – issued by Paravidya Foundation with name, PAN, registration
              number, donation amount, and donor details.
            </li>
            <li>
              <span className="font-semibold text-orange-400">Form 58</span> –
              required if the donation qualifies for 100% deduction.
            </li>
            <li>
              <span className="font-semibold text-orange-400">
                80G Certificate
              </span>{" "}
              – proof of Paravidya’s registration validating your tax claim.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400">
            How Much Can You Save?
          </h2>
          <p className="text-black">
            Depending on the type of fund, donations can qualify for{" "}
            <span className="font-semibold text-orange-400">
              50% or 100% deduction
            </span>{" "}
            under Section 80G. Most donors enjoy a 50% deduction (up to 10% of
            their adjusted gross total income).
          </p>

          {/* Highlight Box */}
          <div className="bg-gradient-to-br from-orange-200/40 to-orange-600/20 border-l-4 border-orange-500 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">
              Paravidya Foundation’s Commitment
            </h3>
            <p className="text-black">
              Every rupee you donate to{" "}
              <span className="font-semibold text-orange-400">
                Paravidya Foundation (NGO, Haryana)
              </span>{" "}
              is used for{" "}
              <em>
                Annadaan, Gita Wisdom, Yoga, Ayurveda, Astrology, and Community
                Seva
              </em>
              . In return, you receive a valid 80G receipt and certificate,
              enabling you to claim tax deductions under Indian law.
            </p>
            <p className="mt-4 text-black font-medium">
              🕉️ Your donation supports Dharma & Seva while also reducing your
              tax burden.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <GlowButton
              text="Donate Now & Claim 80G Benefit"
              onClick={() => window.location.href = "/donate"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxExemptiontext;
