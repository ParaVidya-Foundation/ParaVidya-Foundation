"use client";
import { FaChild, FaLeaf, FaUsers } from "react-icons/fa";

export default function WhyVolunteer() {
  const goals = [
    {
      icon: <FaChild className="text-orange-500 text-3xl" />,
      title: "Empower Children",
      description:
        "Provide education, skills, and support to children in need, helping them build a brighter future.",
    },
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      title: "Protect Our Planet",
      description:
        "Promote environmental awareness and conservation through drives, campaigns, and community initiatives.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      title: "Lead the Change",
      description:
        "Nurture leadership and social responsibility to create innovative, long-lasting solutions.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 font-poppins">
          Why Volunteer With{" "}
          <span className="text-orange-500">ParaVidya Foundation</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-inter">
          Make every moment count by creating a lasting impact. At ParaVidya,
          you’re not just volunteering — you’re transforming lives and building
          a better tomorrow, one step at a time.
        </p>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                {goal.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {goal.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
