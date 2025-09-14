import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Stress Management Yoga – Para Vidya",
  description: "Release tension with calming breath, gentle flows, and mindfulness to restore inner ease and emotional balance.",
}

export default function StressManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Stress Management Yoga"
        subtitle="Unwind with soothing sequences, grounding breathwork, and mindful pauses—practices designed to bring you back to balance and inner peace."
        imageSrc="/placeholder.jpg"
        imageAlt="Relaxing yoga for stress relief"
      />
      
      <Definition 
        title="What is Stress?" 
        description="Stress is your body's natural response to challenges and demands. While some stress can be motivating, chronic stress can negatively impact your physical and mental well-being. Common sources include:

- Work pressure and deadlines
- Personal relationships and family dynamics
- Financial concerns and life transitions
- Health issues and uncertainty
- Technology overload and information overwhelm

Understanding stress helps you recognize its signs and implement effective management strategies." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Gentle Flow Sessions"
          subtitle="Slow, mindful movements that release tension and promote relaxation."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Breathwork Workshops"
          subtitle="Learn powerful breathing techniques to calm your nervous system instantly."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Meditation Circles"
          subtitle="Group meditation sessions for shared peace and collective healing."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Restorative Yoga"
          subtitle="Deep relaxation practices using props to fully support your body."
          imageSrc="/placeholder.jpg"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Stress Management Yoga"
        subtitle="Transform stress into strength through mindful movement, conscious breathing, and present-moment awareness. Find your calm in the chaos."
        imageSrc="/placeholder.jpg"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Stress Prevention Techniques" 
        points={[
          {
            title: "Daily Mindfulness Practice",
            description: "Start each day with 10 minutes of meditation or mindful breathing to build resilience and maintain emotional balance throughout challenging situations.",
          },
          {
            title: "Healthy Boundaries",
            description: "Learn to say no to excessive commitments and create clear boundaries between work and personal time, protecting your mental and emotional space.",
          },
          {
            title: "Regular Movement",
            description: "Engage in daily gentle exercise, yoga, or walking to release tension, boost endorphins, and maintain physical and mental well-being.",
          },
          {
            title: "Quality Sleep Routine",
            description: "Establish consistent sleep patterns and create a calming bedtime ritual to ensure restorative rest, which is essential for stress recovery.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Helps with Stress Management?" 
        description="Yoga provides a comprehensive approach to stress relief through:

- **Physical Release**: Asanas help release muscle tension and improve circulation
- **Breath Awareness**: Pranayama techniques activate the parasympathetic nervous system
- **Mindful Presence**: Meditation cultivates present-moment awareness and mental clarity
- **Emotional Balance**: Regular practice builds resilience and emotional stability
- **Self-Care Ritual**: Creates dedicated time for self-nurturing and reflection" 
      />
    </div>
  )
}