import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Fatigue Relief Yoga – Para Vidya",
  description: "Energizing yoga practices and breathwork to combat fatigue, boost vitality, and restore your natural energy levels.",
}

export default function FatigueReliefYogaPage() {
  return (
    <div>
      <HeroSection
        title="Fatigue Relief Yoga"
        subtitle="Reclaim your natural energy through invigorating flows, energizing breathwork, and revitalizing practices that awaken your body's innate vitality."
        imageSrc="/Yoga/Fatigue.png"
        imageAlt="Invigorating morning yoga session"
      />
      
      <Definition 
        title="Understanding Fatigue" 
        description="Fatigue is a state of physical or mental exhaustion that goes beyond normal tiredness. It can affect your ability to function effectively in daily life and may be caused by various factors:

Physical causes:
- Poor sleep quality or insufficient rest
- Nutritional deficiencies or dehydration
- Sedentary lifestyle or lack of exercise
- Chronic health conditions
- Overexertion or physical stress

Mental/Emotional causes:
- Chronic stress or anxiety
- Mental overwork or information overload
- Emotional burnout
- Depression or mood disorders

Understanding the root causes of fatigue helps in developing targeted strategies for energy restoration and vitality." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Energizing Flow Classes"
          subtitle="Dynamic yoga sequences that build strength, increase circulation, and boost natural energy."
          imageSrc="/Yoga/Fatigue.png"
        />
        <Cause
          title="Pranayama Power"
          subtitle="Breathing techniques specifically designed to increase vitality and combat fatigue."
          imageSrc="/Yoga/Fatigue.png"
        />
        <Cause
          title="Morning Energizers"
          subtitle="Gentle awakening practices to start your day with renewed energy and clarity."
          imageSrc="/Yoga/Fatigue.png"
        />
        <Cause
          title="Restorative Recharge"
          subtitle="Deep relaxation techniques that help your body recover and restore its natural energy reserves."
          imageSrc="/Yoga/Fatigue.png"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Fatigue Relief Yoga"
        subtitle="Transform exhaustion into vitality through mindful movement, conscious breathing, and energy-restoring practices that honor your body's natural rhythms."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Energy Management Strategies" 
        points={[
          {
            title: "Balanced Movement",
            description: "Engage in regular, moderate exercise like yoga or walking to improve circulation, boost endorphins, and maintain steady energy levels throughout the day.",
          },
          {
            title: "Quality Rest",
            description: "Prioritize consistent, restorative sleep and take short breaks during the day to prevent energy depletion and maintain optimal performance.",
          },
          {
            title: "Nourishing Nutrition",
            description: "Eat balanced meals with whole foods, stay hydrated, and avoid energy crashes from processed foods and excessive caffeine consumption.",
          },
          {
            title: "Stress Management",
            description: "Practice relaxation techniques, set healthy boundaries, and manage workload to prevent chronic stress that drains your energy reserves.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Combats Fatigue?" 
        description="Yoga offers comprehensive support for energy restoration through:

- **Improved Circulation**: Asanas increase blood flow, delivering oxygen and nutrients to all body systems
- **Enhanced Breathing**: Pranayama techniques optimize oxygen intake and energy production
- **Stress Reduction**: Regular practice reduces cortisol levels and promotes relaxation
- **Better Sleep**: Yoga improves sleep quality, leading to more restorative rest
- **Increased Flexibility**: Reduces muscle tension and physical stress that contribute to fatigue
- **Mental Clarity**: Meditation practices improve focus and cognitive function
- **Energy Conservation**: Teaches efficient movement patterns that reduce unnecessary energy expenditure" 
      />
    </div>
  )
}