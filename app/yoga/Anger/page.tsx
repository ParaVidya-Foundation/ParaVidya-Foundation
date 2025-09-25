import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

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

  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Yoga Instructor",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Meditation Enthusiast",
      videoUrl: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      title: "Wellness Coach",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
    {
      id: "1",
      name: "Priya Sharma",
      title: "Yoga Instructor",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Meditation Enthusiast",
      videoUrl: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      title: "Wellness Coach",
      videoUrl: "https://www.youtube.com/embed/abc123",
    },
  ];

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
        description="Anger is an emotion, but when left unchecked, it can impact your health, bonds, and overall well-being. Yoga gives you a holistic approach to managing anger by calming the mind, releasing tension from the body, and promoting emotional balance.
Practising mindful breathing in yoga helps calm your nervous system, lower stress hormones, and create a sense of peace that makes it easier to avoid impulsive reactions. Yoga postures help release tension in your muscles and reduce your body’s stress response, which leads to greater relaxation. Meditation and mindfulness can enhance your self-awareness, allowing you to recognize anger triggers more quickly and choose a more effective response. Over time, regular yoga can help you become more patient, resilient, and positive, making it easier to stay calm in tough situations." 
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
<TestimonialsComponent reels={testimonials} title="Our Yoga Testimonials" />
    </div>
  )
}
