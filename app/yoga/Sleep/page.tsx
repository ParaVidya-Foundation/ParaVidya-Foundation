import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Sleep Therapy Yoga – Para Vidya",
  description: "Unwind your system with restorative postures, relaxing breath, and guided stillness for deeper, more restful sleep.",
}

export default function SleepTherapyYogaPage() {
  return (
    <div>
      <HeroSection
        title="Sleep Therapy Yoga"
        subtitle="Soothe the nervous system with restorative shapes, breath that lengthens the exhale, and practices that invite deep rest and peaceful slumber."
        imageSrc="/Yoga/sleep.png"
        imageAlt="Calming evening yoga promoting sleep"
      />
      
      <Definition 
        title="What is Sleep?" 
        description="Sleep is a vital biological process that allows your body and mind to rest, recover, and rejuvenate. Quality sleep is essential for:

- Physical health and immune function
- Mental clarity and cognitive performance
- Emotional regulation and mood stability
- Memory consolidation and learning
- Cellular repair and hormone production

When sleep is disrupted or insufficient, it can lead to fatigue, irritability, weakened immunity, and difficulty concentrating. Sleep disorders can stem from stress, anxiety, poor sleep hygiene, or underlying health conditions." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Restorative Yoga"
          subtitle="Gentle, supported poses that promote deep relaxation and prepare your body for sleep."
          imageSrc="/Yoga/sleep.png"
        />
        <Cause
          title="Sleep Meditation"
          subtitle="Guided meditations designed to quiet the mind and induce peaceful slumber."
          imageSrc="/Yoga/sleep.png"
        />
        <Cause
          title="Evening Pranayama"
          subtitle="Calming breathing techniques that activate your body's relaxation response."
          imageSrc="/Yoga/sleep.png"
        />
        <Cause
          title="Yoga Nidra"
          subtitle="Conscious sleep practice for deep rest and stress release while remaining aware."
          imageSrc="/Yoga/sleep.png"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Sleep Therapy Yoga"
        subtitle="Create the perfect conditions for restorative sleep through gentle movement, conscious breathing, and mindful relaxation practices."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Healthy Sleep Habits" 
        points={[
          {
            title: "Consistent Sleep Schedule",
            description: "Go to bed and wake up at the same time every day, even on weekends, to regulate your body's internal clock and improve sleep quality.",
          },
          {
            title: "Digital Sunset",
            description: "Turn off screens and electronic devices at least one hour before bedtime to reduce blue light exposure and allow your mind to unwind naturally.",
          },
          {
            title: "Relaxing Bedtime Routine",
            description: "Create a calming pre-sleep ritual with gentle yoga, meditation, or reading to signal to your body that it's time to rest and prepare for sleep.",
          },
          {
            title: "Optimal Sleep Environment",
            description: "Keep your bedroom cool, dark, and quiet, with comfortable bedding and minimal distractions to create an ideal space for deep, uninterrupted sleep.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Improves Sleep Quality?" 
        description="Yoga offers powerful tools for better sleep through:

- **Physical Relaxation**: Gentle stretches and restorative poses release muscle tension and physical stress
- **Nervous System Calming**: Breathing exercises activate the parasympathetic nervous system for relaxation
- **Mental Clarity**: Meditation practices quiet racing thoughts and mental chatter
- **Stress Reduction**: Regular practice reduces cortisol levels and promotes emotional balance
- **Circadian Rhythm Support**: Evening yoga routines signal to your body that it's time to wind down" 
      />
    </div>
  )
}