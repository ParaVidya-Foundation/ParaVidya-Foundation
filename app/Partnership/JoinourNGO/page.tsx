import Image from "next/image";
import VolunteerPrograms from "@/components/Partnership/volunteer/VolunteerPrograms";
import WhyVolunteer from "@/components/Partnership/volunteer/WhyVolunteer";
import YouthInternshipHero from "@/components/Partnership/volunteer/YouthInternshipHero";
import VolunteerRoles from "@/components/Partnership/volunteer/VolunteerRoles";

const programs = [
  { title: "Day-to-Day Activities", image: "/Join/day.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
  { title: "Teacher", image: "/Join/teacher.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
  { title: "Annam Brahma", image: "/Join/annam.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
  { title: "Course Coordinator", image: "/Join/course.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
  { title: "Kitchen Work", image: "/Join/kitchen.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
  { title: "Expertise Based", image: "/Join/expertise.webp", link: "https://forms.gle/cXE6uSbSHBMyXB9z5" },
];

export default function JoinourNGO() {
  return (
    <>
<div className="top-img-about relative w-full overflow-hidden rounded-2xl">
  <Image
    src="/Carousel/Join.jpg"
    alt="Join our NGO at ParaVidya Foundation"
    width={1920}
    height={1080}
    className="w-full h-auto object-contain"
    priority
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
