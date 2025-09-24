import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Fatigue Relief Yoga for Energy – Yoga for Tiredness | Para Vidya",
  description: "Combat fatigue naturally with energizing yoga practices. Learn yoga poses for energy, revitalizing breathwork, and meditation techniques to boost vitality and restore your natural energy levels. Perfect for beginners!",
  keywords: "yoga for fatigue, yoga for energy, yoga for tiredness, energizing yoga poses, yoga for beginners, pranayama for energy, yoga therapy, meditation for fatigue, natural energy boost, yoga for vitality",
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
        title="Understanding Fatigue and Energy Depletion" 
        description="Fatigue is a persistent state of physical and mental exhaustion that goes beyond normal tiredness. It's characterized by feeling drained, unmotivated, and low on energy, even after adequate rest or sleep. Unlike simple tiredness that resolves with rest, fatigue affects both body and mind, making it difficult to concentrate, complete daily tasks, or maintain motivation. Chronic fatigue can significantly impact quality of life, productivity, and overall well-being. Yoga for fatigue offers a natural, holistic approach to restore energy by addressing the root causes through gentle movement, energizing breathwork, and stress-reducing practices." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Causes of Chronic Fatigue</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800 mb-2">1. Sleep Disorders and Poor Sleep Quality</h4>
              <p className="text-gray-700 text-sm">Insufficient sleep (less than 7-8 hours), poor sleep quality, sleep apnea, or irregular sleep patterns disrupt the body's natural recovery and energy restoration processes, leading to persistent tiredness.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800 mb-2">2. Nutritional Deficiencies and Poor Diet</h4>
              <p className="text-gray-700 text-sm">Skipping meals, dehydration, excessive sugar intake, or lacking essential nutrients (iron, B vitamins, magnesium) can severely impact energy production at the cellular level, causing ongoing fatigue.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800 mb-2">3. Chronic Stress and Mental Overload</h4>
              <p className="text-gray-700 text-sm">Prolonged worry, anxiety, emotional stress, or mental overwork depletes both physical and mental energy reserves. Chronic stress elevates cortisol levels, which can lead to adrenal fatigue and exhaustion.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800 mb-2">4. Underlying Medical Conditions</h4>
              <p className="text-gray-700 text-sm">Health issues such as anemia, thyroid disorders, diabetes, chronic fatigue syndrome, autoimmune conditions, or chronic infections can cause persistent fatigue that doesn't improve with rest alone.</p>
            </div>
          </div>
        </div>
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
        title="Natural Energy Restoration Strategies" 
        points={[
          {
            title: "1. Energizing Yoga Asanas for Vitality",
            description: "Practice dynamic sequences like Surya Namaskar (Sun Salutations) to boost circulation and energy. Include poses like Ustrasana (Camel Pose), Bhujangasana (Cobra Pose), and gentle backbends to counteract fatigue. Balancing poses like Vrikshasana (Tree Pose) improve focus and mental clarity while building physical stamina."
          },
          {
            title: "2. Pranayama Techniques for Energy Boost",
            description: "Master energizing breathing exercises like Kapalabhati (Skull Shining Breath) and Bhastrika (Bellows Breath) to increase oxygen flow and awaken the nervous system. Anulom Vilom (Alternate Nostril Breathing) balances energy while Ujjayi breath during asanas maintains steady vitality throughout practice."
          },
          {
            title: "3. Restorative Practices for Deep Recovery",
            description: "Incorporate Yoga Nidra (yogic sleep) and meditation for 15-20 minutes daily to allow deep nervous system restoration. These practices improve sleep quality, reduce stress hormones, and help maintain stable energy levels throughout the day without caffeine dependence."
          },
          {
            title: "4. Gentle Movement for Sustained Energy",
            description: "Engage in light yoga flows, gentle stretching, and mindful movement throughout the day to maintain circulation and prevent energy stagnation. Even 5-10 minutes of desk yoga or walking meditation can significantly boost energy levels for those with sedentary lifestyles."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Naturally Combats Fatigue and Restores Energy" 
        description="Yoga offers a comprehensive, natural approach to overcoming fatigue by addressing its root causes and systematically restoring energy on multiple levels:

**Physical Energy Restoration:**
- **Enhanced Circulation**: Dynamic poses like Surya Namaskar and gentle backbends improve blood flow, delivering oxygen and nutrients to tired muscles and organs
- **Nervous System Activation**: Energizing sequences stimulate the sympathetic nervous system when needed while balancing it with parasympathetic recovery
- **Muscle Tension Release**: Gentle stretching and restorative poses release chronic tension that drains energy, allowing for better energy flow throughout the body
- **Improved Sleep Quality**: Regular yoga practice regulates circadian rhythms and promotes deeper, more restorative sleep

**Mental and Emotional Energy Boost:**
- **Stress Hormone Regulation**: Pranayama and meditation reduce cortisol levels, preventing stress-induced fatigue and adrenal exhaustion
- **Mental Clarity Enhancement**: Breathing exercises increase oxygen to the brain, combating mental fog and improving focus and concentration
- **Mood Elevation**: Yoga stimulates the release of endorphins and serotonin, naturally lifting mood and motivation levels

**Energetic and Spiritual Vitality:**
- **Prana (Life Force) Cultivation**: Pranayama practices directly work with life energy, increasing vitality and reducing feelings of depletion
- **Chakra Balancing**: Specific poses help balance energy centers, ensuring smooth energy flow throughout the body
- **Mindful Awareness**: Present-moment awareness prevents energy drain from worry about the future or regret about the past

**Sustainable Energy Management:**
- **Gradual Building**: Unlike stimulants that create energy spikes and crashes, yoga builds sustainable energy reserves over time
- **Personalized Practice**: Yoga can be adapted to your energy levels - gentle when tired, more dynamic when energized
- **Holistic Lifestyle**: Yoga philosophy encourages energy-supporting habits including proper nutrition, adequate rest, and stress management

By combining physical movement, conscious breathing, meditation, and mindful living, yoga creates a natural, sustainable solution to fatigue that addresses both symptoms and underlying causes." 
      />
    </div>
  )
}