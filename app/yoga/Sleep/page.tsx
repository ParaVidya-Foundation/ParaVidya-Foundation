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
  title: "Sleep Therapy Yoga for Better Sleep – Yoga for Insomnia | Para Vidya",
  description: "Improve sleep quality naturally with sleep therapy yoga. Learn bedtime yoga poses, relaxing pranayama techniques, and yoga nidra for deeper, more restful sleep. Perfect for insomnia relief!",
  keywords: "yoga for sleep, sleep therapy yoga, yoga for insomnia, bedtime yoga, yoga nidra, pranayama for sleep, restorative yoga, yoga for better sleep, meditation for sleep, relaxation techniques",
}

export default function SleepTherapyYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Sleep Specialist",
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
        title="Sleep Therapy Yoga"
        subtitle="Soothe the nervous system with restorative shapes, breath that lengthens the exhale, and practices that invite deep rest and peaceful slumber."
        imageSrc="/Yoga/sleep-main.webp"
        imageAlt="Calming evening yoga promoting sleep"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Sleep and Its Importance" 
            description="In yogic philosophy, sleep is called Nidra - one of the five states of consciousness and far more than mere unconscious rest. Quality sleep is a profound state of renewal where the body repairs itself, the mind processes experiences, and vital energy is restored. During sleep, the nervous system balances, stress hormones regulate, and immune function strengthens. Yoga recognizes that restorative sleep is not a luxury but an essential pillar of health, necessary for harmony between Sharira (physical body), Manas (mind), and Atma (spirit). When sleep is disrupted, it affects every aspect of our well-being, making sleep therapy yoga an invaluable practice for modern life." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Causes of Sleep Disruption
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Stress, Anxiety, and Racing Mind"
              subtitle="Overthinking, worry, and mental tension keep the nervous system activated, making it difficult to transition into the relaxed state necessary for sleep."
              imageSrc="/Yoga/sleep.png"
            />
            <Cause
              title="Poor Sleep Hygiene and Lifestyle Habits"
              subtitle="Screen time before bed, irregular sleep schedules, caffeine consumption late in the day, and lack of a calming bedtime routine interfere with natural sleep preparation."
              imageSrc="/Yoga/sleep.png"
            />
            <Cause
              title="Physical Health Issues and Pain"
              subtitle="Chronic pain, breathing difficulties, thyroid disorders, hormonal imbalances, and sleep apnea can significantly disrupt sleep quality and duration."
              imageSrc="/Yoga/sleep.png"
            />
            <Cause
              title="Mental Health and Emotional Challenges"
              subtitle="Depression, anxiety disorders, PTSD, and other mental health conditions often include sleep disturbances as symptoms."
              imageSrc="/Yoga/sleep.png"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Sleep Therapy Yoga"
            subtitle="Create the perfect conditions for restorative sleep through gentle movement, conscious breathing, and mindful relaxation practices."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Natural Sleep Enhancement Strategies" 
            points={[
              {
                title: "Establish a Bedtime Routine with Yoga Nidra",
                description: "Practice Yoga Nidra (yogic sleep) for 15-20 minutes before bed to naturally transition your nervous system into rest mode. This powerful relaxation technique guides you through systematic body awareness, helping release physical tension and mental chatter while preparing your mind for deep, restorative sleep."
              },
              {
                title: "Replace Stimulants with Calming Pranayama",
                description: "Avoid caffeine, alcohol, and heavy meals 3-4 hours before bedtime. Instead, practice cooling pranayama techniques like Sheetali (Cooling Breath), Anulom Vilom (Alternate Nostril Breathing), or extended exhale breathing (4:8 ratio) to naturally calm your nervous system and prepare for rest."
              },
              {
                title: "Create a Digital Detox and Meditation Ritual",
                description: "Turn off screens 1-2 hours before bed and replace screen time with 10-15 minutes of meditation, gentle chanting of 'Om', or gratitude practice. This helps reduce blue light exposure, calm mental activity, and support natural melatonin production for better sleep quality."
              },
              {
                title: "Practice Sleep-Inducing Yoga Poses",
                description: "Incorporate gentle, restorative poses like Balasana (Child's Pose), Viparita Karani (Legs-Up-the-Wall), Supta Baddha Konasana (Reclined Bound Angle), and gentle spinal twists. These poses activate the parasympathetic nervous system, release physical tension, and signal to your body that it's time to rest."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Naturally Improves Sleep Quality" 
            description="Modern research supports yoga as a natural aid for alleviating insomnia and promoting restful nights. Gentle stretches and pranayama calm the nervous system, lower anxiety, and align the body's natural sleep rhythm. With regular practice, yoga helps reduce overthinking, ease tension, and foster inner calm. Over time, sleep becomes deeper, more restorative, and more refreshing, helping you wake with renewed clarity and energy." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on sleep, wellness, yoga, and more — all in one place."
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