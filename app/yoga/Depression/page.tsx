import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Depression Support Yoga – Para Vidya",
  description: "Gentle movement, breathwork, and mindful awareness practices to support emotional healing and mental well-being.",
}

export default function DepressionSupportYogaPage() {
  return (
    <div>
      <HeroSection
        title="Depression Support Yoga"
        subtitle="Gentle movement, conscious breathing, and mindful awareness practices designed to support emotional healing and cultivate inner light during challenging times."
        imageSrc="/placeholder.jpg"
        imageAlt="Restorative yoga pose with calm ambiance"
      />
      
      <Definition 
        title="Understanding Depression" 
        description="Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It's more than just feeling sad or going through a rough patch—it's a persistent condition that can impact every aspect of life.

Common symptoms include:
- Persistent sadness, anxiety, or emptiness
- Loss of interest in activities once enjoyed
- Fatigue and decreased energy
- Difficulty concentrating or making decisions
- Changes in sleep patterns or appetite
- Feelings of worthlessness or guilt

Depression can be caused by biological, psychological, and social factors. It's important to seek professional help, and yoga can be a valuable complementary practice for emotional healing." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Gentle Movement Therapy"
          subtitle="Soft, nurturing yoga practices that gently energize and uplift your spirit."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Breath of Life Sessions"
          subtitle="Pranayama techniques that help regulate mood and increase energy naturally."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Mindfulness Circles"
          subtitle="Group meditation and mindfulness practices for shared healing and support."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Restorative Healing"
          subtitle="Deeply supportive poses that nurture your nervous system and promote emotional balance."
          imageSrc="/placeholder.jpg"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Depression Support Yoga"
        subtitle="Find your inner light through gentle movement, conscious breathing, and compassionate self-care practices designed to support your healing journey."
        imageSrc="/placeholder.jpg"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Supporting Mental Well-being" 
        points={[
          {
            title: "Daily Movement Practice",
            description: "Engage in gentle, regular physical activity like yoga or walking to boost endorphins, improve mood, and increase energy levels naturally.",
          },
          {
            title: "Mindful Awareness",
            description: "Practice meditation or mindfulness techniques to observe thoughts without judgment and cultivate present-moment awareness and inner peace.",
          },
          {
            title: "Social Connection",
            description: "Maintain meaningful relationships and seek support from friends, family, or support groups to combat isolation and build emotional resilience.",
          },
          {
            title: "Professional Support",
            description: "Work with healthcare providers, therapists, or counselors to develop comprehensive treatment plans that may include therapy, medication, and lifestyle changes.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Supports Depression Recovery?" 
        description="Yoga provides gentle yet powerful support for emotional healing through:

- **Gentle Energy Boost**: Soft movements and breathing exercises increase circulation and energy without overwhelming the system
- **Nervous System Regulation**: Specific poses and breathing techniques help balance the autonomic nervous system
- **Mind-Body Connection**: Yoga practices enhance awareness of physical sensations and emotional states
- **Stress Reduction**: Regular practice reduces cortisol levels and promotes relaxation
- **Community Support**: Group classes provide social connection and shared healing experiences
- **Self-Compassion**: Yoga philosophy encourages kindness toward oneself during difficult times" 
      />
    </div>
  )
}