import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Immunity Boosting Yoga – Para Vidya",
  description: "Strengthen your body's natural defenses through targeted yoga practices, breathing techniques, and wellness protocols.",
}

export default function ImmunityBoostingYogaPage() {
  return (
    <div>
      <HeroSection
        title="Immunity Boosting Yoga"
        subtitle="Strengthen your body's natural defenses through targeted poses, cleansing breathwork, and holistic practices that support your immune system's optimal function."
        imageSrc="/Yoga/immunity.png"
        imageAlt="Detoxifying yoga twist aiding immunity"
      />
      
      <Definition 
        title="Understanding Immunity" 
        description="Immunity is your body's complex defense system that protects against harmful pathogens, toxins, and diseases. A strong immune system is essential for overall health and vitality.

Key components of immunity:
- Physical barriers (skin, mucous membranes)
- White blood cells that fight infections
- Antibodies that recognize and neutralize threats
- Lymphatic system that removes toxins and waste
- Gut health and microbiome balance

Factors that can weaken immunity:
- Chronic stress and poor sleep
- Sedentary lifestyle and lack of exercise
- Poor nutrition and dehydration
- Environmental toxins and pollution
- Smoking, excessive alcohol, and unhealthy habits

Yoga practices can significantly support and strengthen your immune system naturally." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Lymphatic Flow Yoga"
          subtitle="Specialized poses that stimulate lymph circulation and support detoxification processes."
          imageSrc="/Yoga/immunity.png"
        />
        <Cause
          title="Breath of Fire"
          subtitle="Energizing pranayama techniques that boost circulation and immune function."
          imageSrc="/Yoga/immunity.png"
        />
        <Cause
          title="Twist & Detox Sessions"
          subtitle="Cleansing poses that massage internal organs and support natural detoxification."
          imageSrc="/Yoga/immunity.png"
        />
        <Cause
          title="Stress Relief Yoga"
          subtitle="Relaxation practices that reduce cortisol and support immune system balance."
          imageSrc="/Yoga/immunity.png"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Immunity Boosting Yoga"
        subtitle="Build your body's natural fortress through mindful movement, conscious breathing, and holistic practices that strengthen your immune system from within."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Immune System Support" 
        points={[
          {
            title: "Regular Movement",
            description: "Engage in consistent, moderate exercise like yoga to improve circulation, reduce inflammation, and support lymphatic drainage for optimal immune function.",
          },
          {
            title: "Stress Management",
            description: "Practice relaxation techniques, meditation, and stress-reducing activities to lower cortisol levels and prevent immune system suppression.",
          },
          {
            title: "Quality Sleep",
            description: "Prioritize 7-9 hours of restorative sleep nightly, as this is when your body repairs itself and strengthens immune defenses.",
          },
          {
            title: "Nutritious Diet",
            description: "Consume a variety of whole foods rich in vitamins, minerals, and antioxidants that support immune function and reduce inflammation.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Strengthens Immunity?" 
        description="Yoga provides comprehensive immune system support through:

- **Improved Circulation**: Asanas enhance blood and lymph flow, ensuring immune cells reach all parts of the body
- **Stress Reduction**: Regular practice reduces cortisol and inflammation that can weaken immune function
- **Lymphatic Stimulation**: Specific poses and movements help drain toxins and support lymphatic system health
- **Better Sleep Quality**: Yoga improves sleep patterns, crucial for immune system repair and regeneration
- **Inflammation Reduction**: Anti-inflammatory effects of yoga help prevent chronic inflammation that can compromise immunity
- **Gut Health Support**: Twisting poses and breathing exercises support digestive health and microbiome balance
- **Mental Resilience**: Meditation and mindfulness practices enhance overall well-being and stress resilience" 
      />
    </div>
  )
}