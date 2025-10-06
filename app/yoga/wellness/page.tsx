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
  title: "Wellness Yoga for Holistic Health – Yoga for Overall Wellness | Para Vidya",
  description: "Achieve holistic wellness with comprehensive yoga practices for mind, body, and spirit. Learn wellness yoga poses, meditation techniques, and healthy lifestyle practices for balanced living at every age.",
  keywords: "wellness yoga, holistic health yoga, yoga for overall wellness, yoga for beginners, healthy lifestyle yoga, mind body spirit yoga, yoga for vitality, preventive yoga, yoga for longevity, balanced living",
}

export default function WellnessYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Wellness Expert",
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
      title: "Holistic Health Coach",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Wellness Yoga"
        subtitle="A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage of life's journey."
        imageSrc="/Yoga/wellness-main.webp"
        imageAlt="Gentle yoga practice symbolizing holistic wellness"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Holistic Wellness and Integrated Health" 
            description="Holistic wellness is a comprehensive approach to health that recognizes the deep interconnection between the physical, mental, emotional, spiritual, social, and environmental aspects of your life. Unlike conventional healthcare, which focuses mainly on treating disease, holistic wellness emphasizes prevention, balance, and the optimization of your overall well-being. It promotes physical wellness through movement, nutrition, and rest to maintain strength, flexibility, and vitality. Mental wellness focuses on cultivating clarity, focus, emotional balance, and resilience, while spiritual wellness encourages connection with your higher purpose, inner wisdom, and core values. Social wellness strengthens your sense of belonging through meaningful relationships and community involvement, and environmental wellness inspires living in harmony with nature and caring for the planet. Yoga perfectly embodies holistic wellness, combining mindful movement, conscious breathing, meditation, and awareness to create balance across every dimension of life. This integrated approach helps you achieve harmony, vitality, and inner peace at every stage of your personal and spiritual journey." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Key Dimensions of Holistic Wellness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Physical Wellness"
              subtitle="Maintaining a strong, flexible, and energetic body through movement, nutrition, and rest for optimal physical health."
              imageSrc="/Yoga/causes/R1.webp"
            />
            <Cause
              title="Mental Wellness"
              subtitle="Cultivating mental clarity, focus, emotional stability, and cognitive resilience for psychological well-being."
              imageSrc="/Yoga/causes/D1.webp"
            />
            <Cause
              title="Spiritual Wellness"
              subtitle="Connecting with your deeper purpose, values, and inner wisdom for meaningful life direction."
              imageSrc="/Yoga/causes/R2.webp"
            />
            <Cause
              title="Social & Environmental Wellness"
              subtitle="Building meaningful relationships and living in harmony with your surroundings and community."
              imageSrc="/Yoga/causes/R4.webp"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Wellness Yoga"
            subtitle="Embrace a comprehensive approach to health and happiness through mindful movement, conscious living, and practices that nurture your whole being."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Comprehensive Wellness Strategies" 
            points={[
              {
                title: "Meditation and Mindfulness Integration",
                description: "Develop a consistent daily meditation practice using techniques like guided meditation, body scans, breath awareness, or mindful walking. These practices calm the nervous system, reduce stress hormones, improve emotional regulation, and enhance mental clarity. Even 10-15 minutes daily can significantly impact overall wellness and life satisfaction."
              },
              {
                title: "Balanced Physical Activity and Movement",
                description: "Combine yoga with other forms of exercise like walking, swimming, strength training, or dancing to create a well-rounded fitness routine. This approach supports cardiovascular health, builds strength and flexibility, improves bone density, boosts mood through endorphin release, and maintains healthy weight and energy levels."
              },
              {
                title: "Nutritious Eating and Mindful Consumption",
                description: "Focus on whole foods rich in vitamins, minerals, antioxidants, lean proteins, healthy fats, and complex carbohydrates. Practice mindful eating by paying attention to hunger cues, eating slowly, and choosing foods that nourish your body. Stay adequately hydrated and limit processed foods, excess sugar, and harmful substances."
              },
              {
                title: "Quality Sleep and Recovery Practices",
                description: "Prioritize 7-9 hours of quality sleep nightly by maintaining consistent sleep schedules and creating a calming bedtime routine. Incorporate restorative practices like gentle yoga, deep breathing exercises, progressive muscle relaxation, or calming music to support nervous system recovery and hormonal balance."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Creates Comprehensive Holistic Wellness" 
            description="Yoga promotes holistic wellness by integrating the body, mind, and spirit into a balanced and harmonious system. Through physical postures (asanas), it strengthens muscles, improves flexibility, boosts circulation, and supports overall physical health. Breathing exercises (pranayama) and meditation calm the mind, reduce stress, enhance focus, and promote emotional stability. At a deeper level, yoga cultivates self-awareness, mindfulness, and spiritual growth, enabling individuals to connect with themselves and the world around them. Additionally, by encouraging healthy routines, mindful living, and preventive practices, yoga supports long-term well-being, resilience, and a vibrant, balanced lifestyle." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on wellness, health, yoga, and more — all in one place."
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