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
  title: "Fatigue Relief Yoga for Energy – Yoga for Tiredness | Para Vidya",
  description: "Combat fatigue naturally with energizing yoga practices. Learn yoga poses for energy, revitalizing breathwork, and meditation techniques to boost vitality and restore your natural energy levels. Perfect for beginners!",
  keywords: "yoga for fatigue, yoga for energy, yoga for tiredness, energizing yoga poses, yoga for beginners, pranayama for energy, yoga therapy, meditation for fatigue, natural energy boost, yoga for vitality",
}

export default function FatigueReliefYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Energy Coach",
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
      title: "Wellness Practitioner",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Fatigue Relief Yoga"
        subtitle="Reclaim your natural energy through invigorating flows, energizing breathwork, and revitalizing practices that awaken your body's innate vitality."
        imageSrc="/Yoga/fatigue-main.webp"
        imageAlt="Invigorating morning yoga session"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Fatigue and Energy Depletion" 
            description="Fatigue is a persistent state of physical and mental exhaustion that goes beyond normal tiredness. It's characterized by feeling drained, unmotivated, and low on energy, even after adequate rest or sleep. Unlike simple tiredness that resolves with rest, fatigue affects both body and mind, making it difficult to concentrate, complete daily tasks, or maintain motivation. Chronic fatigue can significantly impact quality of life, productivity, and overall well-being. Yoga for fatigue offers a natural, holistic approach to restore energy by addressing the root causes through gentle movement, energizing breathwork, and stress-reducing practices." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Causes of Chronic Fatigue
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Sleep Disorders and Poor Sleep Quality"
              subtitle="Insufficient sleep, poor sleep quality, sleep apnea, or irregular sleep patterns disrupt the body's natural recovery and energy restoration processes."
              imageSrc="/Yoga/causes/F1.webp"
            />
            <Cause
              title="Nutritional Deficiencies and Poor Diet"
              subtitle="Skipping meals, dehydration, excessive sugar intake, or lacking essential nutrients can severely impact energy production at the cellular level."
              imageSrc="/Yoga/causes/F2.webp"
            />
            <Cause
              title="Chronic Stress and Mental Overload"
              subtitle="Prolonged worry, anxiety, emotional stress, or mental overwork depletes both physical and mental energy reserves."
              imageSrc="/Yoga/causes/F3.webp"
            />
            <Cause
              title="Underlying Medical Conditions"
              subtitle="Health issues such as anemia, thyroid disorders, diabetes, or chronic fatigue syndrome can cause persistent fatigue that doesn't improve with rest alone."
              imageSrc="/Yoga/causes/F4.webp"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Fatigue Relief Yoga"
            subtitle="Transform exhaustion into vitality through mindful movement, conscious breathing, and energy-restoring practices that honor your body's natural rhythms."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Natural Energy Restoration Strategies" 
            points={[
              {
                title: "Energizing Yoga Asanas for Vitality",
                description: "Practice dynamic sequences like Surya Namaskar (Sun Salutations) to boost circulation and energy. Include poses like Ustrasana (Camel Pose), Bhujangasana (Cobra Pose), and gentle backbends to counteract fatigue. Balancing poses like Vrikshasana (Tree Pose) improve focus and mental clarity while building physical stamina."
              },
              {
                title: "Pranayama Techniques for Energy Boost",
                description: "Master energizing breathing exercises like Kapalabhati (Skull Shining Breath) and Bhastrika (Bellows Breath) to increase oxygen flow and awaken the nervous system. Anulom Vilom (Alternate Nostril Breathing) balances energy while Ujjayi breath during asanas maintains steady vitality throughout practice."
              },
              {
                title: "Restorative Practices for Deep Recovery",
                description: "Incorporate Yoga Nidra (yogic sleep) and meditation for 15-20 minutes daily to allow deep nervous system restoration. These practices improve sleep quality, reduce stress hormones, and help maintain stable energy levels throughout the day without caffeine dependence."
              },
              {
                title: "Gentle Movement for Sustained Energy",
                description: "Engage in light yoga flows, gentle stretching, and mindful movement throughout the day to maintain circulation and prevent energy stagnation. Even 5-10 minutes of desk yoga or walking meditation can significantly boost energy levels for those with sedentary lifestyles."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Naturally Combats Fatigue and Restores Energy" 
            description="Yoga is highly effective in managing and preventing fatigue because it works on both the body and mind to restore energy and vitality. Gentle yoga asanas, such as Surya Namaskar, Balasana, Viparita Karani, and Tadasana, improve blood circulation, release muscle tension, and strengthen the body, thereby helping to reduce physical exhaustion. Breathing exercises such as Anulom Vilom, Kapalabhati, and Bhramari enhance oxygen flow, calm the nervous system, and refresh mental energy, combating the mental sluggishness that often accompanies fatigue. Practices like Yoga Nidra and meditation promote deep relaxation, rejuvenate the mind, and restore balance, making it easier to recover from tiredness. Even light stretching and mindful movement throughout the day improve flexibility, circulation, and overall stamina. By combining asanas, pranayama, meditation, and gentle movement, yoga helps replenish energy, reduce stress, and maintain sustained physical and mental vitality." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on energy, vitality, yoga, and more — all in one place."
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