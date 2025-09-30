"use client"

import { ClipboardCheck, FileText, PlaySquare, BarChart3 } from "lucide-react"

export default function CSRExecutionSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Need Assessment",
      description:
        "We analyze your CSR vision and objectives, recommending programs that align with your business values.",
    },
    {
      icon: FileText,
      title: "Detailed Proposal & Budget",
      description:
        "Our team prepares a transparent CSR proposal with precise budgeting, deliverables, and timelines.",
    },
    {
      icon: PlaySquare,
      title: "Execution & Monitoring",
      description:
        "Field teams implement programs while our central team monitors impact, quality, and adherence to timelines.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Compliance",
      description:
        "Receive quarterly and final CSR impact reports with fund utilization, beneficiary data, stories, and compliance assurance.",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            How We Help Corporates <span className="text-[#f97f12]">Execute CSR Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At <span className="font-semibold">Jan Sanjeevni Trust</span>, we simplify the CSR process
            for you. Our social sector professionals, auditors, and project managers guide you every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#f97f12]/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-[#f97f12]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
