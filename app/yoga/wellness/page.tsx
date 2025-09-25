import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Wellness Yoga for Holistic Health – Yoga for Overall Wellness | Para Vidya",
  description: "Achieve holistic wellness with comprehensive yoga practices for mind, body, and spirit. Learn wellness yoga poses, meditation techniques, and healthy lifestyle practices for balanced living at every age.",
  keywords: "wellness yoga, holistic health yoga, yoga for overall wellness, yoga for beginners, healthy lifestyle yoga, mind body spirit yoga, yoga for vitality, preventive yoga, yoga for longevity, balanced living",
}

export default function WellnessYogaPage() {
  return (
    <div>
      <HeroSection
        title="Wellness Yoga"
        subtitle="A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage of life's journey."
        imageSrc="/Yoga/wellness.png"
        imageAlt="Gentle yoga practice symbolizing holistic wellness"
      />
      
      <Definition 
        title="Understanding Holistic Wellness and Integrated Health" 
        description="Holistic wellness is a comprehensive approach to health that recognizes the interconnection between all aspects of your being - physical, mental, emotional, spiritual, social, and environmental. Unlike traditional health models that focus primarily on treating illness, holistic wellness emphasizes prevention, balance, and optimization of your entire life experience. This approach includes: **Physical Wellness** - maintaining a strong, flexible, and energetic body through movement, nutrition, and rest; **Mental Wellness** - cultivating mental clarity, focus, emotional stability, and cognitive resilience; **Spiritual Wellness** - connecting with your deeper purpose, values, and inner wisdom; **Social Wellness** - building meaningful relationships and contributing to community; **Environmental Wellness** - living in harmony with your surroundings and caring for the natural world. Yoga serves as an ideal practice for holistic wellness because it integrates mindful movement, conscious breathing, meditation, and present-moment awareness, creating a unified approach that supports every dimension of your well-being and helps you thrive at every stage of life." 
      />
      
      <br></br><br></br>
      
      <CourseBanner
        title="Wellness Yoga"
        subtitle="Embrace a comprehensive approach to health and happiness through mindful movement, conscious living, and practices that nurture your whole being."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Comprehensive Wellness Strategies" 
        points={[
          {
            title: "1. Meditation and Mindfulness Integration",
            description: "Develop a consistent daily meditation practice using techniques like guided meditation, body scans, breath awareness, or mindful walking. These practices calm the nervous system, reduce stress hormones, improve emotional regulation, and enhance mental clarity. Even 10-15 minutes daily can significantly impact overall wellness and life satisfaction."
          },
          {
            title: "2. Balanced Physical Activity and Movement",
            description: "Combine yoga with other forms of exercise like walking, swimming, strength training, or dancing to create a well-rounded fitness routine. This approach supports cardiovascular health, builds strength and flexibility, improves bone density, boosts mood through endorphin release, and maintains healthy weight and energy levels."
          },
          {
            title: "3. Nutritious Eating and Mindful Consumption",
            description: "Focus on whole foods rich in vitamins, minerals, antioxidants, lean proteins, healthy fats, and complex carbohydrates. Practice mindful eating by paying attention to hunger cues, eating slowly, and choosing foods that nourish your body. Stay adequately hydrated and limit processed foods, excess sugar, and harmful substances."
          },
          {
            title: "4. Quality Sleep and Recovery Practices",
            description: "Prioritize 7-9 hours of quality sleep nightly by maintaining consistent sleep schedules and creating a calming bedtime routine. Incorporate restorative practices like gentle yoga, deep breathing exercises, progressive muscle relaxation, or calming music to support nervous system recovery and hormonal balance."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Creates Comprehensive Holistic Wellness" 
        description="Yoga promotes holistic wellness by integrating the body, mind, and spirit into a balanced and harmonious system. Through physical postures (asanas), it strengthens muscles, improves flexibility, boosts circulation, and supports overall physical health. Breathing exercises (pranayama) and meditation calm the mind, reduce stress, enhance focus, and promote emotional stability. At a deeper level, yoga cultivates self-awareness, mindfulness, and spiritual growth, enabling individuals to connect with themselves and the world around them. Additionally, by encouraging healthy routines, mindful living, and preventive practices, yoga supports long-term well-being, resilience, and a vibrant, balanced lifestyle." 
      />
    </div>
  )
}