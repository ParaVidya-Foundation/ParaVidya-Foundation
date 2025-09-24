import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Immunity Boosting Yoga for Beginners – Yoga for Immune System | Para Vidya",
  description: "Boost your immune system naturally with yoga for immunity. Learn effective yoga poses, pranayama breathing techniques, and meditation practices to strengthen your body's natural defenses. Perfect for beginners!",
  keywords: "immunity boosting yoga, yoga for immune system, yoga for beginners, pranayama for immunity, yoga therapy, meditation for health, yoga poses for immunity, natural immunity boost, yoga for wellness, breathing exercises",
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
        title="Understanding Your Immune System" 
        description="Your immune system is your body's natural defense network that protects against illness and infection. In yoga philosophy, immunity is connected to Ojas (vital essence) - the foundation of resilience and vitality. When stress, poor nutrition, lack of sleep, and toxins weaken this vital energy, our immune system becomes compromised. Yoga for immunity strengthens the body's natural defenses through the powerful combination of asanas (postures) that improve circulation, pranayama (breathing exercises) that boost lung capacity and oxygenation, and meditation that reduces stress hormones. This holistic approach fortifies the immune system, nurtures Tejas (inner radiance), and promotes lasting health and vitality." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Causes of Weakened Immunity</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">1. Poor Nutrition and Deficiencies</h4>
              <p className="text-gray-700 text-sm">Lack of essential vitamins (especially C, D, and zinc), minerals, and antioxidants weakens the body's ability to fight infections. Processed foods and sugar can further suppress immune function.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">2. Chronic Stress and Mental Fatigue</h4>
              <p className="text-gray-700 text-sm">Prolonged stress elevates cortisol levels, which suppresses immune cell activity and increases vulnerability to illnesses. Mental exhaustion further compromises the body's defense mechanisms.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">3. Inadequate Sleep and Rest</h4>
              <p className="text-gray-700 text-sm">Insufficient sleep (less than 7-8 hours) impairs the production of infection-fighting cells, antibodies, and cytokines. Poor sleep quality disrupts the body's natural healing processes.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">4. Sedentary Lifestyle and Unhealthy Habits</h4>
              <p className="text-gray-700 text-sm">Lack of regular exercise reduces circulation and lymphatic drainage. Smoking, excessive alcohol consumption, and environmental toxins further burden and weaken the immune system.</p>
            </div>
          </div>
        </div>
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
        title="Natural Immune System Support Strategies" 
        points={[
          {
            title: "1. Practice Gentle and Regular Yoga Asanas",
            description: "Start with beginner-friendly poses like Tadasana (Mountain Pose), Bhujangasana (Cobra Pose), and Balasana (Child's Pose) to build strength gradually. These immunity-boosting yoga poses improve circulation, stimulate lymphatic drainage, and reduce inflammation without overwhelming your system. Consistency is more important than intensity for immune support."
          },
          {
            title: "2. Master Pranayama for Respiratory Health",
            description: "Practice breathing exercises like Anulom Vilom (Alternate Nostril Breathing) and Bhramari (Humming Bee Breath) to enhance lung capacity and oxygenation. These pranayama techniques calm the nervous system, reduce stress hormones, and support respiratory immunity. Begin slowly and gradually increase duration under proper guidance."
          },
          {
            title: "3. Maintain Yogic Hygiene and Mindful Living",
            description: "Embrace the yogic principle of Saucha (cleanliness) by maintaining personal hygiene, keeping your practice space clean, and being mindful of your environment. Regular handwashing, fresh air circulation, and avoiding crowded spaces when possible help protect your immune system from pathogens."
          },
          {
            title: "4. Incorporate Deep Relaxation and Meditation",
            description: "Practice Yoga Nidra (yogic sleep) and meditation for 15-20 minutes daily to activate the parasympathetic nervous system, lower stress hormones, and boost immune function. Create a comfortable, quiet space for these practices to maximize their immune-supporting benefits."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Naturally Strengthens Your Immunity" 
        description="Yoga provides comprehensive immune system support through a multi-dimensional approach that addresses physical, mental, and energetic aspects of health:

**Physical Immune Enhancement:**
- **Improved Circulation**: Asanas like inversions and twists boost blood flow and lymphatic drainage, helping remove toxins and distribute immune cells throughout the body
- **Respiratory Strengthening**: Pranayama techniques increase lung capacity, improve oxygenation, and strengthen respiratory immunity against infections
- **Glandular Stimulation**: Specific poses stimulate the thymus gland, lymph nodes, and other immune-supporting organs

**Stress Reduction and Hormonal Balance:**
- **Cortisol Regulation**: Regular yoga practice significantly reduces cortisol levels, preventing stress-induced immune suppression
- **Nervous System Balance**: Meditation and pranayama activate the parasympathetic nervous system, promoting rest, repair, and immune function
- **Better Sleep Quality**: Improved sleep through yoga practice enhances immune cell production and antibody formation

**Holistic Wellness Support:**
- **Digestive Health**: Twisting poses and breathing exercises improve gut health, where 70% of immune cells are located
- **Mental Clarity**: Reduced anxiety and improved mood support overall health and immune resilience
- **Lifestyle Integration**: Yoga philosophy encourages healthy habits including proper nutrition, adequate rest, and mindful living

By combining gentle movement, conscious breathing, and mindful relaxation, yoga creates an optimal internal environment for immune system function, helping your body naturally resist infections, recover faster from illness, and maintain vibrant long-term health." 
      />
    </div>
  )
}