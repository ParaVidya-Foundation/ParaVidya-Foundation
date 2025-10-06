import Image from "next/image";
import VolunteerPrograms from "@/components/Partnership/volunteer/VolunteerPrograms";
import WhyVolunteer from "@/components/Partnership/volunteer/WhyVolunteer";
import YouthInternshipHero from "@/components/Partnership/volunteer/YouthInternshipHero";
import VolunteerRoles from "@/components/Partnership/volunteer/VolunteerRoles";

const programs = [
  { title: "Day-to-Day Activities", image: "/Join/day.webp", link: "/programs/day" },
  { title: "Teacher", image: "/Join/teacher.webp", link: "/programs/teacher" },
  { title: "Annam Brahma", image: "/Join/annam.webp", link: "/programs/annam" },
  { title: "Course Coordinator", image: "/Join/course.webp", link: "/programs/course" },
  { title: "Kitchen Work", image: "/Join/kitchen.webp", link: "/programs/kitchen" },
  { title: "Expertise Based", image: "/Join/expertise.webp", link: "/programs/expertise" },
];

export default function JoinourNGO() {
  return (
    <>
      <div className="top-img-about">
        <img
          src={"/Carousel/Join.jpg"}
          alt="Mantra Workshops at Para Vidya"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <WhyVolunteer />
      <VolunteerPrograms programs={programs} />

      <Image
        src="/poor-people-border.png"
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
