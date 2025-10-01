import { Metadata } from "next";
import Image from "next/image";

import Mission from "@/components/workshop/ayurveda/missionayur";
import FeaturedVideos from "@/components/ui/FeaturedVideos";
import WorkshopMeditation from "@/components/workshop/meditation/workshopmeditation";
import CourseBanner from "@/components/yoga/Coursebanner";
import BookingForm from "@/components/workshop/meditation/BookingForm";
import InfoWithImage from "@/components/workshop/meditation/InfoWithImage";
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Meditation Sessions – Para Vidya",
  description: "Guided meditation sessions for inner peace and mindfulness.",
};

export default function MeditationSessionsPage(): JSX.Element {
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
      <div className="w-full">
        {/* Hero banner */}
        <div className="w-full">
          <Image
            src="/Carousel/Online-Hawan.jpg"
            alt="Meditation Sessions at Para Vidya"
            width={1600}
            height={520}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Mission Section */}
        <Mission
          leftImg="/Workshop/left.png"
          rightImg="/Workshop/right.png"
          headline="Our Mission"
          text="Guided meditation sessions for inner peace and mindfulness. Experience various meditation techniques for spiritual growth and mental clarity."
        />

        {/* Booking + Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:h-[70vh] gap-8">
            {/* Booking Form */}
            <div className="w-full lg:w-1/2">
              <BookingForm />
            </div>

            {/* Info + Image */}
            <div className="w-full lg:w-1/2">
              <InfoWithImage />
            </div>
          </div>
        </section>

        {/* Meditation Workshop */}
        <WorkshopMeditation />

        {/* Featured Videos */}
        <FeaturedVideos
          headline="Featured Videos"
          description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
          exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
          videos={[
            {
              id: "VIDEO_ID_1",
              title: "ParaVidya: Morning Meditation Session",
              thumbnail: "/Carousel/About-us.jpg",
            },
            {
              id: "VIDEO_ID_2",
              title: "ParaVidya: Guided Visualization Techniques",
              thumbnail: "/Carousel/Navgrah-Shanti.jpg",
            },
            {
              id: "VIDEO_ID_3",
              title: "ParaVidya Foundation: Chakra Meditation Workshop",
              thumbnail: "/Carousel/Online-Hawan.jpg",
            },
          ]}
        />

        {/* Course Banner */}
        <div className="py-12">
          <CourseBanner
            title="Meditation Sessions"
            subtitle="Guided meditation sessions for inner peace and mindfulness."
            imageSrc="/Workshop/ayurveda.png"
            buttonText="Join Now"
          />
        </div>
      </div>

      {/* Testimonials Section (centered, industry standard spacing) */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Meditation Sessions Testimonials
        </h2>
        <TestimonialsComponent reels={testimonials} />
      </section>
    </>
  );
}
