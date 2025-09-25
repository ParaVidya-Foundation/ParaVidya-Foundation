import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Sleep Therapy Yoga for Better Sleep – Yoga for Insomnia | Para Vidya",
  description: "Improve sleep quality naturally with sleep therapy yoga. Learn bedtime yoga poses, relaxing pranayama techniques, and yoga nidra for deeper, more restful sleep. Perfect for insomnia relief!",
  keywords: "yoga for sleep, sleep therapy yoga, yoga for insomnia, bedtime yoga, yoga nidra, pranayama for sleep, restorative yoga, yoga for better sleep, meditation for sleep, relaxation techniques",
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
        title="Understanding Sleep and Its Importance" 
        description="In yogic philosophy, sleep is called Nidra - one of the five states of consciousness and far more than mere unconscious rest. Quality sleep is a profound state of renewal where the body repairs itself, the mind processes experiences, and vital energy is restored. During sleep, the nervous system balances, stress hormones regulate, and immune function strengthens. Yoga recognizes that restorative sleep is not a luxury but an essential pillar of health, necessary for harmony between Sharira (physical body), Manas (mind), and Atma (spirit). When sleep is disrupted, it affects every aspect of our well-being, making sleep therapy yoga an invaluable practice for modern life." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Causes of Sleep Disruption</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">1. Stress, Anxiety, and Racing Mind</h4>
              <p className="text-gray-700 text-sm">Overthinking, worry, and mental tension keep the nervous system in an activated state, making it difficult to transition into the relaxed state necessary for sleep. Chronic stress elevates cortisol levels, disrupting natural sleep-wake cycles.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">2. Poor Sleep Hygiene and Lifestyle Habits</h4>
              <p className="text-gray-700 text-sm">Screen time before bed, irregular sleep schedules, caffeine consumption late in the day, heavy meals close to bedtime, and lack of a calming bedtime routine all interfere with the body's natural preparation for sleep.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">3. Physical Health Issues and Pain</h4>
              <p className="text-gray-700 text-sm">Chronic pain, breathing difficulties, thyroid disorders, hormonal imbalances, sleep apnea, restless leg syndrome, and other medical conditions can significantly disrupt sleep quality and duration.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">4. Mental Health and Emotional Challenges</h4>
              <p className="text-gray-700 text-sm">Depression, anxiety disorders, PTSD, and other mental health conditions often include sleep disturbances as symptoms. Emotional stress and unprocessed feelings can manifest as insomnia or restless sleep.</p>
            </div>
          </div>
        </div>
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
        title="Natural Sleep Enhancement Strategies" 
        points={[
          {
            title: "1. Establish a Bedtime Routine with Yoga Nidra",
            description: "Practice Yoga Nidra (yogic sleep) for 15-20 minutes before bed to naturally transition your nervous system into rest mode. This powerful relaxation technique guides you through systematic body awareness, helping release physical tension and mental chatter while preparing your mind for deep, restorative sleep."
          },
          {
            title: "2. Replace Stimulants with Calming Pranayama",
            description: "Avoid caffeine, alcohol, and heavy meals 3-4 hours before bedtime. Instead, practice cooling pranayama techniques like Sheetali (Cooling Breath), Anulom Vilom (Alternate Nostril Breathing), or extended exhale breathing (4:8 ratio) to naturally calm your nervous system and prepare for rest."
          },
          {
            title: "3. Create a Digital Detox and Meditation Ritual",
            description: "Turn off screens 1-2 hours before bed and replace screen time with 10-15 minutes of meditation, gentle chanting of 'Om', or gratitude practice. This helps reduce blue light exposure, calm mental activity, and support natural melatonin production for better sleep quality."
          },
          {
            title: "4. Practice Sleep-Inducing Yoga Poses",
            description: "Incorporate gentle, restorative poses like Balasana (Child's Pose), Viparita Karani (Legs-Up-the-Wall), Supta Baddha Konasana (Reclined Bound Angle), and gentle spinal twists. These poses activate the parasympathetic nervous system, release physical tension, and signal to your body that it's time to rest."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Naturally Improves Sleep Quality" 
        description="Modern research supports yoga as a natural aid for alleviating insomnia and promoting restful nights. Gentle stretches and pranayama calm the nervous system, lower anxiety, and align the body’s natural sleep rhythm. With regular practice, yoga helps reduce overthinking, ease tension, and foster inner calm. Over time, sleep becomes deeper, more restorative, and more refreshing, helping you wake with renewed clarity and energy." 
      />
    </div>
  )
}