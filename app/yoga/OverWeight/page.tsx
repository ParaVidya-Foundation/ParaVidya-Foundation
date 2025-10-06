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
  title: "Weight Management Yoga for Beginners – Yoga for Weight Loss | Para Vidya",
  description: "Discover effective yoga for weight loss with our beginner-friendly weight management program. Learn yoga poses for healthy weight loss, mindful eating, and sustainable lifestyle practices. Start your yoga journey today!",
  keywords: "yoga for weight loss, weight management yoga, yoga for beginners, yoga poses for weight loss, healthy weight loss, yoga for overweight, yoga therapy, daily yoga practice, mindful eating, yoga for metabolism",
}

export default function WeightManagementYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Weight Management Coach",
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
        title="Weight Management Yoga"
        subtitle="Achieve healthy weight goals through mindful movement, balanced nutrition awareness, and sustainable lifestyle practices that honor your body's natural wisdom."
        imageSrc="/Yoga/weight-main.webp"
        imageAlt="Yoga flow supporting healthy weight"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Healthy Weight Management" 
            description="Healthy weight management is about achieving and maintaining a weight that supports your overall well-being. Weight gain occurs when there's an imbalance between calories consumed and calories burned, leading to fat accumulation. While some weight fluctuation is natural, excessive weight gain can increase the risk of health conditions like diabetes, heart disease, and joint problems. Yoga for weight loss offers a holistic approach that combines physical movement, mindful eating awareness, and stress reduction to support sustainable weight management and improved quality of life." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Causes of Weight Gain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Unhealthy Diet Patterns"
              subtitle="Consuming calorie-dense foods high in sugar, unhealthy fats, and refined carbohydrates leads to excess fat storage. Poor portion control also contributes to weight gain."
              imageSrc="/Yoga/causes/D4.webp"
            />
            <Cause
              title="Sedentary Lifestyle"
              subtitle="Lack of regular physical activity slows down metabolism and reduces the body's ability to burn calories effectively."
              imageSrc="/Yoga/causes/R1.webp"
            />
            <Cause
              title="Stress and Emotional Eating"
              subtitle="High stress levels trigger cortisol release, which can lead to increased appetite and cravings for comfort foods."
              imageSrc="/Yoga/causes/R3.webp"
            />
            <Cause
              title="Hormonal and Medical Factors"
              subtitle="Conditions like thyroid disorders, PCOS, insulin resistance, or certain medications can disrupt metabolism and hormone balance."
              imageSrc="/Yoga/causes/F2.webp"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Weight Management Yoga"
            subtitle="Transform your relationship with your body through compassionate movement, mindful awareness, and sustainable practices that support your health goals."
             imageSrc="/Yoga/Yoga.jpg"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Sustainable Weight Management Strategies" 
            points={[
              {
                title: "Balanced Nutrition with Mindful Eating",
                description: "Focus on whole grains, fresh fruits, vegetables, lean proteins, and healthy fats. Practice mindful eating by paying attention to hunger cues, eating slowly, and avoiding processed foods and sugary drinks. Portion control and regular meal timing support healthy metabolism."
              },
              {
                title: "Regular Physical Activity and Yoga Practice",
                description: "Engage in daily yoga practice combined with other activities like walking, swimming, or strength training. Yoga poses for weight loss, such as Sun Salutations and dynamic flows, boost metabolism while building lean muscle mass."
              },
              {
                title: "Stress Management and Emotional Wellness",
                description: "Practice stress-reduction techniques including meditation, pranayama (breathing exercises), and mindfulness to prevent emotional eating. Regular yoga practice helps regulate cortisol levels and promotes emotional balance."
              },
              {
                title: "Healthy Lifestyle Habits and Sleep Hygiene",
                description: "Maintain consistent sleep schedules (7-9 hours nightly), stay properly hydrated, and establish regular meal times. Quality sleep regulates hunger hormones and supports metabolic health, making weight management easier."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Supports Healthy Weight Management" 
            description="Yoga is a powerful and holistic approach to sustainable weight management, offering benefits that go far beyond physical exercise. Through dynamic practices like Surya Namaskar (Sun Salutations) and Vinyasa flows, yoga enhances metabolism, burns calories, tones muscles, and builds lean strength for overall fitness. It also improves flexibility, posture, and balance, helping the body move efficiently and gracefully. Twisting poses, forward folds, and deep breathing techniques stimulate internal organs, improving digestion and detoxification. On a mental and emotional level, yoga reduces stress by lowering cortisol levels, which helps prevent emotional eating and weight gain. Through mindfulness and meditation, practitioners develop awareness of their hunger cues and build a healthier relationship with food. Regular yoga practice also improves sleep quality, balancing essential hormones like leptin and ghrelin that control appetite. Beyond physical and mental benefits, yoga encourages body positivity and self-acceptance, shifting focus from appearance to well-being. Its gentle, consistent practice promotes sustainable lifestyle habits rather than quick fixes, while group classes create motivation, accountability, and community support. By integrating movement, mindfulness, and self-compassion, yoga provides a complete, balanced path to achieving and maintaining a healthy weight naturally." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on weight management, wellness, yoga, and more — all in one place."
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