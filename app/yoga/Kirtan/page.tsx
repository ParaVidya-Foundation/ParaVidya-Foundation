import { Metadata } from "next"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

export const metadata: Metadata = {
  title: "Kirtan Yoga – Para Vidya",
  description: "Experience the transformative power of devotional chanting, sacred sound, and heart-opening practices that connect you to your spiritual essence.",
}

export default function KirtanYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Kirtan Leader",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Bhakti Yoga Instructor",
      videoUrl: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      title: "Sacred Sound Healer",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Kirtan Yoga"
        subtitle="Experience the transformative power of devotional chanting, sacred sound, and heart-opening practices that connect you to your spiritual essence and inner peace."
        imageSrc="/Yoga/kirtan-main.webp"
        imageAlt="Devotional practice with serene ambiance"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="What is Kirtan?" 
            description="Kirtan is a devotional practice in which sacred mantras, names of deities, or spiritual verses are sung or chanted, often in a call-and-response style. Rooted in the Bhakti tradition of India, kirtan combines music, rhythm, and repetition to create a meditative and uplifting experience. It is not just singing but a form of spiritual expression that opens the heart, calms the mind, and connects individuals with the divine. Kirtan is usually performed with instruments like the harmonium, tabla, or kartal, and its collective nature makes it a powerful practice for unity, joy, and inner peace." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Elements of Kirtan Practice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Mantra Chanting"
              subtitle="Learn traditional Sanskrit mantras and their meanings for spiritual practice and inner peace."
              imageSrc="/Yoga/kirtan.png"
            />
            <Cause
              title="Sacred Sound Circles"
              subtitle="Group chanting sessions that create powerful vibrational healing and spiritual connection."
              imageSrc="/Yoga/kirtan.png"
            />
            <Cause
              title="Bhakti Yoga Flow"
              subtitle="Heart-opening yoga sequences combined with devotional chanting and meditation."
              imageSrc="/Yoga/kirtan.png"
            />
            <Cause
              title="Mantra Meditation"
              subtitle="Silent and vocal mantra repetition for deep spiritual practice and inner transformation."
              imageSrc="/Yoga/kirtan.png"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Kirtan Yoga"
            subtitle="Open your heart to divine love through sacred chanting, devotional movement, and spiritual practices that connect you to your highest self."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Spiritual Well-being Practices" 
            points={[
              {
                title: "Daily Mantra Practice",
                description: "Begin each day with simple mantra repetition or chanting to center your mind, open your heart, and connect with your spiritual essence.",
              },
              {
                title: "Sacred Sound Healing",
                description: "Use chanting, singing bowls, or other sacred sounds to create vibrational healing and promote inner peace and emotional balance.",
              },
              {
                title: "Community Connection",
                description: "Participate in group chanting sessions or spiritual gatherings to experience the power of collective consciousness and shared devotion.",
              },
              {
                title: "Heart-Centered Living",
                description: "Cultivate love, compassion, and gratitude in daily life through devotional practices and acts of service to others.",
              },
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Kirtan Transforms Your Practice?" 
            description="Kirtan offers profound benefits for spiritual and emotional well-being through:

- **Heart Opening**: Chanting and devotional practices open the heart chakra, increasing love and compassion
- **Stress Relief**: Sacred sound vibrations calm the nervous system and reduce anxiety and tension
- **Emotional Healing**: Mantra repetition helps process emotions and cultivate inner peace and joy
- **Spiritual Connection**: Devotional practices deepen your connection to your spiritual essence and higher purpose
- **Community Bonding**: Group chanting creates powerful bonds and shared spiritual experiences
- **Mental Clarity**: Regular mantra practice quiets the mind and enhances focus and concentration
- **Vibrational Healing**: Sacred sounds create beneficial vibrations that promote physical and emotional healing" 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on kirtan, devotional practices, yoga, and more — all in one place."
            exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
            videos={[
              {
                id: "VIDEO_ID_1",
                title: "ParaVidya: Daily Sadhna Practices",
                thumbnail: "/Carousel/About-us.jpg",
              },
              {
                id: "VIDEO_ID_2",
                title: "ParaVidya: Mantra and Meditation Sadhna",
                thumbnail: "/Carousel/Navgrah-Shanti.jpg",
              },
              {
                id: "VIDEO_ID_3",
                title: "ParaVidya Foundation: Seva and Spiritual Service",
                thumbnail: "/Carousel/Online-Hawan.jpg",
              },
            ]}
          />
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl w-full px-6 py-10">
          <TestimonialsComponent
            reels={testimonials}
            title="Our Yoga Testimonials"
          />
        </section>
      </main>
    </div>
  )
}