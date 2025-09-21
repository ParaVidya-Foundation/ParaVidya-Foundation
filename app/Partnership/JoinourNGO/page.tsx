import Image from "next/image";
import VolunteerPrograms from "@/components/Partnership/volunteer/VolunteerPrograms";
import WhyVolunteer from "@/components/Partnership/volunteer/WhyVolunteer";
import YouthInternshipHero from "@/components/Partnership/volunteer/YouthInternshipHero";
import VolunteerRoles from "@/components/Partnership/volunteer/VolunteerRoles";

const programs = [
  { title: "Day-to-Day Activities", image: "/programs/day.jpg", link: "/programs/day" },
  { title: "Teacher", image: "/programs/teacher.jpg", link: "/programs/teacher" },
  { title: "Annam Brahma", image: "/programs/annam.jpg", link: "/programs/annam" },
  { title: "Course Coordinator", image: "/programs/course.jpg", link: "/programs/course" },
  { title: "Kitchen Work", image: "/programs/kitchen.jpg", link: "/programs/kitchen" },
  { title: "Expertise Based", image: "/programs/expertise.jpg", link: "/programs/expertise" },
];

export default function JoinourNGO() {
  return (
    <>
      <div className="top-img-about">
        <img
          src={"/Carousel/Online-Hawan.jpg"}
          alt="Mantra Workshops at Para Vidya"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <WhyVolunteer />
      <VolunteerPrograms programs={programs} />

      <Image
        src="/border-banner.png"
        alt="Join our NGO"
        width={1920} // ✅ fixed fullWidth issue
        height={400}
        className="w-full h-auto object-cover"
      />

      <YouthInternshipHero />
      <VolunteerRoles />
    </>
  );
}
