"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Role = {
  title: string;
  description: string;
  details: string;
  image: string;
  link: string;
};

const roles: Role[] = [
  {
    title: "Digital Marketing",
    description:
      "Promote our mission through campaigns, SEO, and social media outreach.",
    details:
      "Work with our media team to design campaigns that reach thousands and inspire communities worldwide.",
    image: "/Join/Digital_Marketing.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Karamkaand & Havan",
    description:
      "Assist in organizing traditional rituals, puja, and cultural practices.",
    details:
      "Preserve ancient wisdom by facilitating rituals and supporting spiritual events.",
    image: "/Join/Havan.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Graphic Designing",
    description:
      "Create impactful designs for campaigns, books, and digital platforms.",
    details:
      "Your creativity will shape our books, social posts, and awareness campaigns.",
    image: "/Join/Graphic_Designer.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Content Writing",
    description:
      "Write articles, blogs, and creative pieces to share our mission.",
    details:
      "From blogs to research notes, help us communicate stories that inspire change.",
    image: "/Join/Content_Writing.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Backend Developer",
    description:
      "Build scalable backend services and APIs to power our platforms.",
    details:
      "Collaborate on Node.js/Java/Spring services and optimize database structures.",
    image: "/Join/Backend_dev.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Frontend Developer",
    description:
      "Design responsive UIs and bring our vision to life with React/Next.js.",
    details:
      "Work with modern frameworks to create delightful and accessible interfaces.",
    image: "/Join/Frontend_dev.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Book Writing & Research",
    description:
      "Contribute to mythological and astrological research publications.",
    details:
      "Assist in compiling research, editing, and publishing insightful works.",
    image: "/Join/Book_writing.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Ground Marketing",
    description:
      "Help us connect with communities, spreading awareness offline.",
    details:
      "Be our voice on the ground — organize events and reach local communities.",
    image: "/Join/Ground_marketing.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
  {
    title: "Content Creation",
    description:
      "Create content for our social media platforms and website.",
    details:
      "Create engaging and creative content for our social media platforms and website.",
    image: "/Join/Content_creation.webp",
    link: "https://forms.gle/HoyQ6wUTVzzyyn9JA",
  },
];

export default function VolunteerRoles() {
  return (
    <section className="w-full px-6 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-16 font-poppins text-gray-900"
      >
        Join Our Mission
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] max-h-[220px] md:max-h-[260px]">
              <Image
                src={role.image}
                alt={role.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={idx < 2}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-poppins">
                  {role.title}
                </h3>
                <p className="mt-3 text-gray-700 text-base font-inter">
                  {role.description}
                </p>
                <p className="mt-2 text-gray-500 text-sm font-inter">
                  {role.details}
                </p>
              </div>

              {/* Button */}
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2 rounded-lg border border-orange-500 text-orange-600 font-medium text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
