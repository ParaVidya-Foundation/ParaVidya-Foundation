import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Stress Management Yoga for Anxiety Relief – Yoga for Stress | Para Vidya",
  description: "Reduce stress naturally with stress management yoga. Learn calming yoga poses, anxiety-relieving breathwork, and mindfulness techniques for emotional balance and inner peace. Perfect for beginners!",
  keywords: "stress management yoga, yoga for stress relief, yoga for anxiety, stress relief techniques, pranayama for stress, meditation for stress, yoga for beginners, relaxation yoga, mindfulness for stress, yoga therapy",
}

export default function StressManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Stress Management Yoga"
        subtitle="Unwind with soothing sequences, grounding breathwork, and mindful pauses—practices designed to bring you back to balance and inner peace."
        imageSrc="/Yoga/stressed.png"
        imageAlt="Relaxing yoga for stress relief"
      />
      
      <Definition 
        title="Understanding Stress and Its Impact on Well-being" 
        description="Stress is your body's natural response to challenges, pressures, or perceived threats, triggering the release of hormones like cortisol and adrenaline to prepare you for action. While short-term stress can be motivating and protective, chronic stress becomes harmful to both physical and mental health. Prolonged stress can lead to fatigue, irritability, sleep disturbances, anxiety, digestive issues, weakened immunity, and increased risk of serious health conditions like heart disease and depression. Common stress sources include work pressure, financial concerns, relationship conflicts, health issues, major life changes, and daily overwhelm. Effective stress management requires a holistic approach that calms both mind and body. Yoga for stress relief offers powerful tools including gentle movement, conscious breathing, meditation, and mindfulness practices that naturally reduce stress hormones, activate the relaxation response, and build long-term resilience to life's challenges." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Sources of Chronic Stress</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">1. Work and Career Pressures</h4>
              <p className="text-gray-700 text-sm">Demanding deadlines, heavy workloads, job insecurity, workplace conflicts, long hours, lack of work-life balance, and career uncertainty create sustained mental and physical strain that can lead to burnout and chronic stress-related health issues.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">2. Financial Concerns and Economic Stress</h4>
              <p className="text-gray-700 text-sm">Money worries including debt, insufficient income, unexpected expenses, job loss, retirement planning, and economic instability create persistent anxiety and can significantly impact sleep, relationships, and overall quality of life.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">3. Relationship and Social Challenges</h4>
              <p className="text-gray-700 text-sm">Interpersonal conflicts with family, friends, or romantic partners; social isolation; caregiving responsibilities; divorce or separation; and communication difficulties create emotional stress that affects mental health and physical well-being.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">4. Health and Life Transition Stressors</h4>
              <p className="text-gray-700 text-sm">Chronic illness, injury, aging concerns, major life changes (moving, marriage, parenthood), loss and grief, and worry about loved ones' health represent significant sources of psychological stress that require adaptive coping strategies.</p>
            </div>
          </div>
        </div>
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Stress Management Yoga"
        subtitle="Transform stress into strength through mindful movement, conscious breathing, and present-moment awareness. Find your calm in the chaos."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Comprehensive Stress Prevention and Management" 
        points={[
          {
            title: "Master Stress-Relief Breathing Techniques (Pranayama)",
            description: "Develop a daily pranayama practice using techniques like Anulom Vilom (Alternate Nostril Breathing), Bhramari (Humming Bee Breath), and extended exhale breathing (4:8 ratio). These practices immediately activate the parasympathetic nervous system, reduce cortisol levels, and create a physiological state of calm that you can access anytime, anywhere."
          },
          {
            title: "Build Physical and Mental Resilience with Yoga",
            description: "Practice gentle yoga sequences including Surya Namaskar (Sun Salutations), grounding poses like Tadasana (Mountain Pose), and restorative poses like Balasana (Child's Pose). Combined with proper nutrition and adequate sleep, this builds physical strength, mental clarity, and emotional resilience to handle daily stressors more effectively."
          },
          {
            title: "Cultivate Mindful Organization and Time Management",
            description: "Apply yogic principles of mindfulness to daily planning and task management. Practice single-tasking with full presence, set realistic priorities, take regular mindful breaks, and use meditation to clear mental clutter. This approach reduces overwhelm and increases productivity while maintaining inner calm."
          },
          {
            title: "Create Regular Relaxation and Recovery Rituals",
            description: "Establish daily practices like Yoga Nidra (20-30 minutes), Shavasana after physical activity, walking meditation in nature, or guided relaxation. These practices help discharge accumulated stress, restore nervous system balance, and cultivate deep inner peace that becomes your baseline state rather than stress."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Provides Comprehensive Stress Management" 
        description="Life can feel rushed, and stress often seems to follow us everywhere. When there’s so much to do, it’s hard to slow down. Yoga can help you find peace, balance, and clarity. Through simple poses, mindful breathing, and meditation, yoga lowers stress hormones like cortisol, soothes the nervous system, and eases tension in tired muscles. These benefits support emotional balance and mindfulness, and they can also help you sleep better. With regular practice, yoga makes it easier to handle life’s challenges calmly and with resilience, building inner strength and well-being." 
      />
    </div>
  )
}