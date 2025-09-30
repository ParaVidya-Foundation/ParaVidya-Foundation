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
  title: "Stress Management Yoga for Anxiety Relief – Yoga for Stress | Para Vidya",
  description: "Reduce stress naturally with stress management yoga. Learn calming yoga poses, anxiety-relieving breathwork, and mindfulness techniques for emotional balance and inner peace. Perfect for beginners!",
  keywords: "stress management yoga, yoga for stress relief, yoga for anxiety, stress relief techniques, pranayama for stress, meditation for stress, yoga for beginners, relaxation yoga, mindfulness for stress, yoga therapy",
}

export default function StressManagementYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Stress Management Expert",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Yoga Instructor",
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
    <div>
      <HeroSection
        title="Stress Management Yoga"
        subtitle="Unwind with soothing sequences, grounding breathwork, and mindful pauses—practices designed to bring you back to balance and inner peace."
        imageSrc="/Yoga/stressed.png"
        imageAlt="Relaxing yoga for stress relief"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Stress and Its Impact on Well-being" 
            description="Stress is your body's natural response to challenges, pressures, or perceived threats, triggering the release of hormones like cortisol and adrenaline to prepare you for action. While short-term stress can be motivating and protective, chronic stress becomes harmful to both physical and mental health. Prolonged stress can lead to fatigue, irritability, sleep disturbances, anxiety, digestive issues, weakened immunity, and increased risk of serious health conditions like heart disease and depression. Common stress sources include work pressure, financial concerns, relationship conflicts, health issues, major life changes, and daily overwhelm. Effective stress management requires a holistic approach that calms both mind and body. Yoga for stress relief offers powerful tools including gentle movement, conscious breathing, meditation, and mindfulness practices that naturally reduce stress hormones, activate the relaxation response, and build long-term resilience to life's challenges." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Sources of Chronic Stress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Work and Career Pressures"
              subtitle="Demanding deadlines, heavy workloads, job insecurity, workplace conflicts, and lack of work-life balance create sustained mental and physical strain."
              imageSrc="/Yoga/stressed.png"
            />
            <Cause
              title="Financial Concerns and Economic Stress"
              subtitle="Money worries including debt, insufficient income, unexpected expenses, and economic instability create persistent anxiety."
              imageSrc="/Yoga/stressed.png"
            />
            <Cause
              title="Relationship and Social Challenges"
              subtitle="Interpersonal conflicts, social isolation, caregiving responsibilities, and communication difficulties create emotional stress."
              imageSrc="/Yoga/stressed.png"
            />
            <Cause
              title="Health and Life Transition Stressors"
              subtitle="Chronic illness, major life changes, loss and grief, and worry about loved ones' health represent significant sources of psychological stress."
              imageSrc="/Yoga/stressed.png"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Stress Management Yoga"
            subtitle="Transform stress into strength through mindful movement, conscious breathing, and present-moment awareness. Find your calm in the chaos."
            imageSrc="/Yoga/poster.png"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Comprehensive Stress Prevention and Management" 
            points={[
              {
                title: "Master Stress-Relief Breathing Techniques (Pranayama)",
                description: "Develop a daily pranayama practice using techniques like Anulom Vilom (Alternate Nostril Breathing), Bhramari (Humming Bee Breath), and extended exhale breathing (4:8 ratio). These practices immediately activate the parasympathetic nervous system, reduce cortisol levels, and create a physiological state of calm that you can access anytime, anywhere."
              },
              {
                title: "Build Physical and Mental Resilience with Yoga",
                description: "Practice gentle yoga sequences including Surya Namaskar (Sun Salutations), grounding poses like Tadasana (Mountain Pose), and restorative poses like Balasana (Child's Pose). Combined with proper nutrition and adequate sleep, this builds physical strength, mental clarity, and emotional resilience to handle daily stressors more effectively."
              },
              {
                title: "Cultivate Mindful Organization and Time Management",
                description: "Apply yogic principles of mindfulness to daily planning and task management. Practice single-tasking with full presence, set realistic priorities, take regular mindful breaks, and use meditation to clear mental clutter. This approach reduces overwhelm and increases productivity while maintaining inner calm."
              },
              {
                title: "Create Regular Relaxation and Recovery Rituals",
                description: "Establish daily practices like Yoga Nidra (20-30 minutes), Shavasana after physical activity, walking meditation in nature, or guided relaxation. These practices help discharge accumulated stress, restore nervous system balance, and cultivate deep inner peace that becomes your baseline state rather than stress."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Provides Comprehensive Stress Management" 
            description="Life can feel rushed, and stress often seems to follow us everywhere. When there's so much to do, it's hard to slow down. Yoga can help you find peace, balance, and clarity. Through simple poses, mindful breathing, and meditation, yoga lowers stress hormones like cortisol, soothes the nervous system, and eases tension in tired muscles. These benefits support emotional balance and mindfulness, and they can also help you sleep better. With regular practice, yoga makes it easier to handle life's challenges calmly and with resilience, building inner strength and well-being." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on stress relief, wellness, yoga, and more — all in one place."
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