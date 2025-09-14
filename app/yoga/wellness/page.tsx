import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Wellness Yoga – Para Vidya",
  description: "Holistic wellness through gentle yoga practices for overall health, vitality, and balanced living at every stage of life.",
}

export default function WellnessYogaPage() {
  return (
    <div>
      <HeroSection
        title="Wellness Yoga"
        subtitle="A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage of life's journey."
        imageSrc="/placeholder.jpg"
        imageAlt="Gentle yoga practice symbolizing holistic wellness"
      />
      
      <Definition 
        title="What is Holistic Wellness?" 
        description="Holistic wellness is an integrated approach to health that considers the whole person—body, mind, and spirit. It's about creating balance and harmony in all aspects of your life for optimal well-being.

Dimensions of wellness:
- **Physical Wellness**: Strength, flexibility, energy, and bodily health
- **Mental Wellness**: Clarity, focus, emotional balance, and cognitive health
- **Spiritual Wellness**: Connection to purpose, values, and inner peace
- **Social Wellness**: Healthy relationships and community connections
- **Environmental Wellness**: Harmony with your surroundings and nature

Yoga serves as a comprehensive wellness practice that addresses all these dimensions through mindful movement, conscious breathing, and present-moment awareness." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Gentle Flow Classes"
          subtitle="Accessible yoga sequences designed for all levels, promoting strength, flexibility, and relaxation."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Mindfulness Integration"
          subtitle="Meditation and breathing practices that enhance mental clarity and emotional well-being."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Lifestyle Wellness"
          subtitle="Holistic workshops covering nutrition, sleep, stress management, and sustainable living practices."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Community Connection"
          subtitle="Group practices that foster social wellness and shared healing experiences."
          imageSrc="/placeholder.jpg"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Wellness Yoga"
        subtitle="Embrace a comprehensive approach to health and happiness through mindful movement, conscious living, and practices that nurture your whole being."
        imageSrc="/placeholder.jpg"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Holistic Wellness Practices" 
        points={[
          {
            title: "Daily Movement",
            description: "Engage in regular, gentle physical activity like yoga that builds strength, flexibility, and energy while respecting your body's needs and limitations.",
          },
          {
            title: "Mindful Living",
            description: "Practice present-moment awareness, meditation, and conscious decision-making to create balance and harmony in all aspects of life.",
          },
          {
            title: "Nourishing Choices",
            description: "Make conscious choices about nutrition, sleep, relationships, and lifestyle that support your overall well-being and long-term health.",
          },
          {
            title: "Self-Compassion",
            description: "Cultivate kindness toward yourself, accept your limitations, and honor your body's wisdom in creating sustainable wellness practices.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Promotes Holistic Wellness?" 
        description="Yoga offers comprehensive support for all dimensions of wellness through:

- **Physical Health**: Asanas improve strength, flexibility, balance, and circulation for optimal bodily function
- **Mental Clarity**: Meditation and breathing practices enhance focus, reduce stress, and promote emotional balance
- **Spiritual Connection**: Yoga philosophy and practices deepen self-awareness and connection to purpose
- **Stress Management**: Regular practice reduces cortisol, promotes relaxation, and builds resilience
- **Better Sleep**: Yoga improves sleep quality, essential for physical and mental recovery
- **Community Building**: Group classes create supportive relationships and shared wellness experiences
- **Lifestyle Integration**: Yoga principles guide conscious living choices for sustainable health and happiness" 
      />
    </div>
  )
}