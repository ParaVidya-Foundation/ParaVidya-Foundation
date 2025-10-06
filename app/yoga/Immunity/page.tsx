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
  title: "Immunity Boosting Yoga for Beginners – Yoga for Immune System | Para Vidya",
  description: "Boost your immune system naturally with yoga for immunity. Learn effective yoga poses, pranayama breathing techniques, and meditation practices to strengthen your body's natural defenses. Perfect for beginners!",
  keywords: "immunity boosting yoga, yoga for immune system, yoga for beginners, pranayama for immunity, yoga therapy, meditation for health, yoga poses for immunity, natural immunity boost, yoga for wellness, breathing exercises",
}

export default function ImmunityBoostingYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Immunity Specialist",
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
        title="Immunity Boosting Yoga"
        subtitle="Strengthen your body's natural defenses through targeted poses, cleansing breathwork, and holistic practices that support your immune system's optimal function."
        imageSrc="/Yoga/immunity-main.webp"
        imageAlt="Detoxifying yoga twist aiding immunity"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Your Immune System" 
            description="Your immune system is your body's natural defense network that protects against illness and infection. In yoga philosophy, immunity is connected to Ojas (vital essence) - the foundation of resilience and vitality. When stress, poor nutrition, lack of sleep, and toxins weaken this vital energy, our immune system becomes compromised. Yoga for immunity strengthens the body's natural defenses through the powerful combination of asanas (postures) that improve circulation, pranayama (breathing exercises) that boost lung capacity and oxygenation, and meditation that reduces stress hormones. This holistic approach fortifies the immune system, nurtures Tejas (inner radiance), and promotes lasting health and vitality." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Causes of Weakened Immunity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Poor Nutrition and Deficiencies"
              subtitle="Lack of essential vitamins, minerals, and antioxidants weakens the body's ability to fight infections. Processed foods and sugar can further suppress immune function."
              imageSrc="/Yoga/causes/F2.webp"
            />
            <Cause
              title="Chronic Stress and Mental Fatigue"
              subtitle="Prolonged stress elevates cortisol levels, which suppresses immune cell activity and increases vulnerability to illnesses."
              imageSrc="/Yoga/causes/A2.webp"
            />
            <Cause
              title="Inadequate Sleep and Rest"
              subtitle="Insufficient sleep impairs the production of infection-fighting cells, antibodies, and cytokines. Poor sleep quality disrupts natural healing processes."
              imageSrc="/Yoga/causes/F1.webp"
            />
            <Cause
              title="Sedentary Lifestyle and Unhealthy Habits"
              subtitle="Lack of regular exercise reduces circulation and lymphatic drainage. Smoking, excessive alcohol, and environmental toxins burden the immune system."
              imageSrc="/Yoga/causes/R3.webp"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Immunity Boosting Yoga"
            subtitle="Build your body's natural fortress through mindful movement, conscious breathing, and holistic practices that strengthen your immune system from within."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Natural Immune System Support Strategies" 
            points={[
              {
                title: "Practice Gentle and Regular Yoga Asanas",
                description: "Start with beginner-friendly poses like Tadasana (Mountain Pose), Bhujangasana (Cobra Pose), and Balasana (Child's Pose) to build strength gradually. These immunity-boosting yoga poses improve circulation, stimulate lymphatic drainage, and reduce inflammation without overwhelming your system. Consistency is more important than intensity for immune support."
              },
              {
                title: "Master Pranayama for Respiratory Health",
                description: "Practice breathing exercises like Anulom Vilom (Alternate Nostril Breathing) and Bhramari (Humming Bee Breath) to enhance lung capacity and oxygenation. These pranayama techniques calm the nervous system, reduce stress hormones, and support respiratory immunity. Begin slowly and gradually increase duration under proper guidance."
              },
              {
                title: "Maintain Yogic Hygiene and Mindful Living",
                description: "Embrace the yogic principle of Saucha (cleanliness) by maintaining personal hygiene, keeping your practice space clean, and being mindful of your environment. Regular handwashing, fresh air circulation, and avoiding crowded spaces when possible help protect your immune system from pathogens."
              },
              {
                title: "Incorporate Deep Relaxation and Meditation",
                description: "Practice Yoga Nidra (yogic sleep) and meditation for 15-20 minutes daily to activate the parasympathetic nervous system, lower stress hormones, and boost immune function. Create a comfortable, quiet space for these practices to maximize their immune-supporting benefits."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Naturally Strengthens Your Immunity" 
            description="Yoga plays a significant role in boosting immunity by strengthening the body, calming the mind, and enhancing overall resilience. Regular practice of asanas like Tadasana, Bhujangasana (Cobra Pose), and Balasana (Child's Pose) improves blood circulation, stimulates the lymphatic system, and supports the human body's natural defense mechanisms. Pranayama exercises, such as Anulom Vilom (Alternate Nostril Breathing) and Bhramari (Humming Bee Breath), increase oxygen intake, reduce stress, and regulate the nervous system—all of which are important for optimal immune function. Additionally, practices like Yoga Nidra and meditation lower stress hormones, enhance mental clarity, and promote hormonal balance, all of which contribute to a stronger immune system. By combining gentle movement, controlled breathing, and mindful relaxation, yoga helps the body resist infections, recover faster, and maintain long-term health and vitality." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on immunity, health, yoga, and more — all in one place."
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