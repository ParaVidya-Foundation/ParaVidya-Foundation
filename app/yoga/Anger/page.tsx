import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"
import FeaturedVideos from "@/components/ui/FeaturedVideos"

export const metadata: Metadata = {
  title: "Anger Management Yoga Course – Transform Reactivity into Resilience",
  description: "Master anger management through expert yoga practices, breathwork, and mindful awareness. Learn to channel intense energy into centered calm with our comprehensive course.",
  keywords: [
    "anger management yoga",
    "yoga for anger control",
    "breathwork for anger",
    "mindful anger management",
    "emotional regulation yoga",
    "stress relief yoga",
    "anger therapy yoga"
  ],
  openGraph: {
    title: "Anger Management Yoga Course | ParaVidya Foundation",
    description: "Transform reactivity into resilience with breath-led practices, grounding postures, and mindful awareness.",
    type: "article",
    images: [
      {
        url: "/og-anger-yoga.jpg",
        width: 1200,
        height: 630,
        alt: "Anger Management Yoga Course - Transform Reactivity into Resilience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anger Management Yoga Course | ParaVidya Foundation",
    description: "Transform reactivity into resilience with breath-led practices and mindful awareness.",
    images: ["/og-anger-yoga.jpg"],
  },
}



export default function AngerManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Anger Management Yoga"
        subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
        imageSrc="/Yoga/anger.png"
        imageAlt="Grounded yoga posture promoting calm and control"
      />
      <Definition 
        title="Understanding Anger and Emotional Regulation" 
        description="Anger is a natural human emotion that arises in response to perceived threats, frustration, injustice, or hurt. While anger serves important functions - alerting us to problems and motivating protective action - chronic or poorly managed anger can damage relationships, impair judgment, and negatively impact physical and mental health. Anger manifests through physiological changes including increased heart rate, muscle tension, elevated stress hormones, and heightened energy. The key to healthy anger management lies not in suppressing this emotion, but in developing awareness, emotional regulation skills, and constructive expression. Yoga for anger management offers powerful tools including breathwork, mindful movement, and meditation that help transform reactive anger into conscious, purposeful responses." 
      />

<div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Triggers and Causes of Anger</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">1. Frustration and Blocked Goals</h4>
              <p className="text-gray-700 text-sm">When our expectations aren't met, plans are disrupted, or we encounter obstacles to our goals, frustration can quickly escalate into anger. This is especially common when we feel powerless to change the situation.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">2. Stress, Overwhelm, and Fatigue</h4>
              <p className="text-gray-700 text-sm">High stress levels, chronic overwhelm, sleep deprivation, and physical or emotional exhaustion lower our tolerance for challenges and make us more reactive to triggers. When our resources are depleted, anger becomes a more likely response.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">3. Perceived Injustice and Disrespect</h4>
              <p className="text-gray-700 text-sm">Feeling mistreated, disrespected, misunderstood, or unfairly judged often triggers anger as a protective response. This includes experiences of discrimination, criticism, or feeling that our boundaries have been violated.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">4. Unresolved Past Experiences</h4>
              <p className="text-gray-700 text-sm">Unhealed trauma, unresolved conflicts, suppressed emotions, or negative past experiences can create emotional sensitivity that makes current situations trigger disproportionate anger responses. Past hurts can amplify present frustrations.</p>
            </div>
          </div>
        </div>
</div>
<br></br><br></br>
      <CourseBanner
        title="Anger Management Yoga"
        subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      <br></br><br></br>
          <Prevention 
        title="Anger Prevention and Management Strategies" 
        points={[
          {
            title: "1. Practice Mindful Breathing and Pause Techniques",
            description: "When anger begins to rise, immediately engage in deep, slow breathing - try the 4-7-8 technique (inhale for 4, hold for 7, exhale for 8). This activates the parasympathetic nervous system, reduces stress hormones, and creates space between trigger and response, allowing for more thoughtful reactions rather than impulsive outbursts."
          },
          {
            title: "2. Develop Trigger Awareness and Early Recognition",
            description: "Build self-awareness by identifying your personal anger triggers - specific people, situations, words, or circumstances that tend to upset you. Notice early warning signs like muscle tension, increased heart rate, or irritability. Early recognition allows you to implement coping strategies before anger escalates beyond control."
          },
          {
            title: "3. Establish Regular Stress-Relief and Relaxation Practices",
            description: "Incorporate daily stress-management activities like yoga, meditation, progressive muscle relaxation, or nature walks. These practices reduce baseline stress levels, increase emotional resilience, and provide healthy outlets for releasing accumulated tension before it transforms into anger."
          },
          {
            title: "4. Develop Healthy Communication and Conflict Resolution Skills",
            description: "Learn to express feelings assertively but respectfully using 'I' statements, active listening, and empathetic communication. Practice staying calm during discussions, taking breaks when needed, and focusing on solutions rather than blame. Good communication can transform potential conflicts into productive conversations."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Transforms Anger into Emotional Balance" 
        description="Yoga offers a comprehensive, scientifically-backed approach to anger management that addresses the physical, mental, and emotional aspects of this powerful emotion:

**Physiological Anger Management:**
- **Nervous System Regulation**: Yoga activates the parasympathetic nervous system, countering the fight-or-flight response that fuels anger. Regular practice trains your body to return to calm more quickly after activation
- **Stress Hormone Balance**: Pranayama and asanas reduce cortisol and adrenaline levels, preventing the hormonal cascade that intensifies angry reactions
- **Physical Tension Release**: Anger creates physical tension in jaw, shoulders, and core. Yoga poses systematically release this stored tension, reducing the physical component of anger
- **Heart Rate Variability**: Breathing practices improve heart rate variability, enhancing emotional regulation and resilience to stress

**Mental and Emotional Transformation:**
- **Mindful Awareness**: Yoga develops the ability to observe anger as it arises without immediately reacting, creating space for conscious choice rather than impulsive response
- **Trigger Recognition**: Regular practice enhances self-awareness, helping you identify anger triggers earlier when they're easier to manage
- **Emotional Regulation**: Meditation and mindfulness practices strengthen the prefrontal cortex, improving your ability to regulate emotions and make thoughtful decisions
- **Perspective Shifting**: Yoga philosophy teaches non-attachment and acceptance, helping you respond to challenging situations with greater equanimity

**Practical Anger Management Tools:**
- **Immediate Response Techniques**: Breath-based practices provide instant tools for managing anger in the moment - techniques you can use anywhere, anytime
- **Daily Stress Prevention**: Regular practice reduces baseline stress levels, making you less likely to reach anger thresholds
- **Energy Transformation**: Dynamic yoga sequences provide healthy outlets for intense energy, channeling anger's power into constructive movement
- **Compassion Cultivation**: Heart-opening poses and loving-kindness meditation develop empathy and compassion, naturally reducing anger and resentment

**Long-term Benefits:**
- **Increased Patience**: Regular practice develops greater tolerance for frustration and delays in gratification
- **Improved Relationships**: Better emotional regulation leads to healthier communication and stronger relationships
- **Enhanced Resilience**: Yoga builds mental and emotional resilience, helping you bounce back from challenges without carrying anger
- **Inner Peace**: Over time, practice cultivates a deep sense of inner calm that becomes your default state rather than reactivity

**Specific Yoga Practices for Anger:**
- **Cooling Pranayama**: Techniques like Sheetali and Sheetkari literally cool the body and calm fiery emotions
- **Grounding Poses**: Standing poses and forward folds help channel intense energy downward and create stability
- **Hip Openers**: These poses release stored emotions and trauma that may fuel anger patterns
- **Meditation**: Regular meditation practice strengthens emotional regulation and develops equanimity

By addressing anger through body, breath, and mind, yoga provides a complete toolkit for transforming this challenging emotion into emotional wisdom and balanced responses." 
      />
   

<FeaturedVideos
headline="Featured Videos"
description="Explore timeless wisdom on health, wellness, yoga, and more — all in one place."
exploreLink="https://www.youtube.com/@ParaVidyaFoundation"
videos={[
  {
    id: "VIDEO_ID_1",
    title: "ParaVidya: Daily Sadhna Practices",

    thumbnail: "/Carousel/About-us.jpg",
  },
  {
    id: "VIDEO_ID_2",
    title: "ParaVidya: Mantra and Meditation Sadhna",

    thumbnail: "/Carousel/Navgrah-Shanti.jpg",
  },
  {
    id: "VIDEO_ID_3",
    title: "ParaVidya Foundation: Seva and Spiritual Service",

    thumbnail: "/Carousel/Online-Hawan.jpg",
  },
]}
/>
    </div>
  )
}
