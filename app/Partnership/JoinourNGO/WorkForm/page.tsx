import VolunteerPrograms from "@/components/Partnership/volunteer/VolunteerPrograms";
import WhyVolunteer from "@/components/Partnership/volunteer/WhyVolunteer";

const programs = [
  { title: "Day-to-Day Activities", image: "/programs/day.jpg", link: "/programs/day" },
  { title: "Teacher", image: "/programs/teacher.jpg", link: "/programs/teacher" },
  { title: "Annam Brahma", image: "/programs/annam.jpg", link: "/programs/annam" },
  { title: "Course Coordinator", image: "/programs/course.jpg", link: "/programs/course" },
  { title: "Kitchen Work", image: "/programs/kitchen.jpg", link: "/programs/kitchen" },
  { title: "Expertise Based", image: "/programs/expertise.jpg", link: "/programs/expertise" },
];

export default function WorkForm() {
  return (
    <>
      <WhyVolunteer />
      <VolunteerPrograms programs={programs} />
    </>
  );
}