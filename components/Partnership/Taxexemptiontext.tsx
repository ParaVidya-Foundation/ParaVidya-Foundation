import React from "react";

const TaxExemptiontext = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Tax Exemption on Donations to Paravidya Foundation (Section 80G)
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            Donating to <span className="font-semibold">Paravidya Foundation</span> is not only an
            act of Seva (selfless service) but also a financially rewarding decision. Under Indian
            law, your donations to NGOs registered under{" "}
            <span className="font-semibold">Section 80G of the Income Tax Act</span> qualify for
            deductions, reducing your taxable income.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">What Does This Mean?</h2>
          <p>
            When you contribute to Paravidya Foundation, the donation amount can be deducted from
            your total taxable income while filing your Income Tax Return (ITR). This reduces your
            overall tax liability. For example, if your taxable income is ₹10,00,000 and you donate
            ₹50,000, your taxable income becomes ₹9,50,000 (subject to 50% or 100% deduction
            depending on the category).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Who Can Claim 80G Benefits?
          </h2>
          <ul className="list-disc pl-6">
            <li>Individual taxpayers (salaried or self-employed)</li>
            <li>Hindu Undivided Families (HUFs)</li>
            <li>Companies and firms</li>
            <li>
              NRIs with an Indian passport and taxable income in India (donations must be made to an
              eligible Indian NGO like Paravidya)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">Rules You Must Know</h2>
          <ul className="list-disc pl-6">
            <li>
              Donations above <span className="font-semibold">₹2,000</span> cannot be made in cash –
              use cheque, bank transfer, or digital payments.
            </li>
            <li>Donations in kind (clothes, food, etc.) are not eligible for 80G tax benefits.</li>
            <li>
              Only donations to NGOs registered under{" "}
              <span className="font-semibold">Section 12A & 80G</span> qualify. Paravidya Foundation
              holds valid registration.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">
            Documents Needed to Claim 80G Deduction
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">Donation Receipt</span> – issued by Paravidya
              Foundation with our name, PAN, registration number, donation amount, and donor details.
            </li>
            <li>
              <span className="font-semibold">Form 58</span> – required if the donation qualifies for
              100% deduction.
            </li>
            <li>
              <span className="font-semibold">80G Certificate</span> – proof of Paravidya’s
              registration under Section 80G, validating your tax claim.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">How Much Can You Save?</h2>
          <p>
            Depending on the type of fund and government rules, donations can qualify for{" "}
            <span className="font-semibold">50% or 100% deduction</span> under Section 80G. For most
            NGOs, including Paravidya Foundation, donors generally enjoy a 50% deduction limit (up
            to 10% of their adjusted gross total income).
          </p>

          {/* Highlight Box */}
          <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Paravidya Foundation’s Commitment
            </h3>
            <p className="text-green-900">
              Every rupee you donate to{" "}
              <span className="font-semibold">Paravidya Foundation (NGO, Haryana)</span> is used for
              <em> Annadaan, Gita Wisdom, Yoga, Ayurveda, Astrology, and Community Seva</em>.  
              In return, you receive a valid 80G receipt and certificate, enabling you to claim tax
              deductions under Indian law.
            </p>
            <p className="mt-4 text-green-900 font-medium">
              🌿 Your donation supports Dharma & Seva, while also reducing your tax burden.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/donate"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Donate Now & Claim 80G Benefit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxExemptiontext;
