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
            title: "1. Master Stress-Relief Breathing Techniques (Pranayama)",
            description: "Develop a daily pranayama practice using techniques like Anulom Vilom (Alternate Nostril Breathing), Bhramari (Humming Bee Breath), and extended exhale breathing (4:8 ratio). These practices immediately activate the parasympathetic nervous system, reduce cortisol levels, and create a physiological state of calm that you can access anytime, anywhere."
          },
          {
            title: "2. Build Physical and Mental Resilience with Yoga",
            description: "Practice gentle yoga sequences including Surya Namaskar (Sun Salutations), grounding poses like Tadasana (Mountain Pose), and restorative poses like Balasana (Child's Pose). Combined with proper nutrition and adequate sleep, this builds physical strength, mental clarity, and emotional resilience to handle daily stressors more effectively."
          },
          {
            title: "3. Cultivate Mindful Organization and Time Management",
            description: "Apply yogic principles of mindfulness to daily planning and task management. Practice single-tasking with full presence, set realistic priorities, take regular mindful breaks, and use meditation to clear mental clutter. This approach reduces overwhelm and increases productivity while maintaining inner calm."
          },
          {
            title: "4. Create Regular Relaxation and Recovery Rituals",
            description: "Establish daily practices like Yoga Nidra (20-30 minutes), Shavasana after physical activity, walking meditation in nature, or guided relaxation. These practices help discharge accumulated stress, restore nervous system balance, and cultivate deep inner peace that becomes your baseline state rather than stress."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Provides Comprehensive Stress Management" 
        description="In our fast-paced world, chronic stress has become a widespread health epidemic affecting millions. Yoga offers a scientifically-proven, holistic approach to stress management that addresses both the symptoms and root causes of stress:

**Immediate Stress Relief:**
- **Nervous System Reset**: Yoga immediately activates the parasympathetic nervous system, shifting you from 'fight-or-flight' to 'rest-and-digest' mode within minutes of practice
- **Cortisol Reduction**: Even a single yoga session significantly reduces cortisol (stress hormone) levels, providing immediate relief from stress symptoms
- **Physical Tension Release**: Gentle movements and stretches release muscle tension that accumulates from chronic stress, particularly in shoulders, neck, and back
- **Breathing Reset**: Pranayama techniques provide instant tools for managing acute stress and anxiety that you can use anywhere

**Long-term Stress Resilience:**
- **Stress Response Retraining**: Regular practice literally rewires your nervous system, making you less reactive to stressors and quicker to return to baseline calm
- **Improved Stress Tolerance**: Yoga builds mental and emotional resilience, increasing your capacity to handle challenges without becoming overwhelmed
- **Enhanced Recovery**: Better sleep quality, improved digestion, and stronger immune function help your body recover from stress more effectively
- **Emotional Regulation**: Mindfulness practices develop emotional intelligence and the ability to respond thoughtfully rather than react impulsively

**Physical Stress Management:**
- **Muscle Tension Relief**: Targeted poses release chronic tension patterns that develop from stress, preventing pain and dysfunction
- **Improved Circulation**: Movement and breathing practices enhance blood flow, helping remove stress-related toxins and deliver nutrients to stressed tissues
- **Better Sleep**: Yoga significantly improves sleep quality, allowing for proper stress recovery and hormone regulation
- **Digestive Health**: Stress often disrupts digestion; yoga poses and breathing exercises support healthy gut function

**Mental and Emotional Balance:**
- **Mind Quieting**: Meditation and mindfulness practices reduce mental chatter, worry, and rumination that perpetuate stress
- **Present-Moment Awareness**: Yoga teaches you to stay grounded in the present rather than anxiously anticipating future problems
- **Perspective Shifting**: Regular practice develops equanimity and the ability to see challenges as temporary and manageable
- **Self-Compassion**: Yoga cultivates kindness toward yourself, reducing self-criticism that adds to stress burden

**Lifestyle Stress Management:**
- **Healthy Boundaries**: Yoga philosophy teaches the importance of balance and saying no to excessive demands
- **Mindful Living**: Practice extends beyond the mat, encouraging conscious choices about work, relationships, and lifestyle
- **Community Support**: Yoga communities provide social connection and support, reducing isolation that compounds stress
- **Sustainable Practices**: Unlike quick fixes, yoga provides lasting tools for managing stress throughout your life

**Specific Stress-Relief Techniques:**
- **Restorative Yoga**: Deeply relaxing poses that allow complete nervous system restoration
- **Pranayama**: Breathing techniques that immediately calm anxiety and reduce stress hormones
- **Meditation**: Mental training that builds resilience and emotional stability
- **Gentle Movement**: Physical practices that release tension without adding stress to the body

**Preventive Stress Management:**
- **Daily Stress Discharge**: Regular practice prevents stress accumulation by providing daily release and reset
- **Increased Self-Awareness**: Early recognition of stress signals allows for proactive management before overwhelm occurs
- **Healthy Coping Strategies**: Yoga provides constructive alternatives to stress-induced habits like overeating, substance use, or social withdrawal
- **Life Balance**: Practice helps you prioritize what truly matters and let go of unnecessary stressors

By addressing stress through body, mind, and spirit, yoga offers a complete stress management system that not only relieves current stress but builds lasting resilience for handling future challenges with greater ease and grace." 
      />
    </div>
  )
}