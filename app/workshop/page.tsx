import { Metadata } from "next"
import WorkshopBento from "@/components/workshop/workshopBento";
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent";

export const metadata: Metadata = {
  title: "Workshops & Events – Para Vidya",
  description: "Comprehensive workshops and events for spiritual growth and wellness.",
};

export default function WorkshopPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Yoga Instructor",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Meditation Enthusiast",
      videoUrl: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      title: "Wellness Coach",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

  return (
<>
  <WorkshopBento/>
  <TestimonialsComponent
      reels={testimonials}
      title="Our Workshops Testimonials"
    />
    </>
  );
}
