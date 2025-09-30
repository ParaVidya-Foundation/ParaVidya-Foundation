"use client"

import { Building2, Users, ReceiptCent } from "lucide-react"

const benefits = [
  {
    title: "CSR Compliance & ESG Impact",
    description:
      "Align with government-mandated CSR initiatives while showcasing your ESG contributions to stakeholders.",
    icon: <Building2 className="w-8 h-8 text-[#f97f12]" />,
  },
  {
    title: "Employee Engagement",
    description:
      "Boost workplace culture by enabling employees to participate in volunteering and social impact programs.",
    icon: <Users className="w-8 h-8 text-[#f97f12]" />,
  },
  {
    title: "Tax Benefits",
    description:
      "Gain financial benefits through tax-deductible donations and CSR-eligible partnerships.",
    icon: <ReceiptCent className="w-8 h-8 text-[#f97f12]" />,
  },
]

export default function PartnershipBenefits() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Benefits of <span className="text-[#f97f12]">Corporate Partnership</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Partnering with us creates a win-win: lasting social impact while driving corporate value.  
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-left flex flex-col items-start"
            >
              <div className="p-3 rounded-xl bg-orange-50 mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
