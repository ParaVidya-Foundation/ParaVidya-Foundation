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
<Definition title="What is Anger ?" description="Anger is a natural emotion that we all experience. It is a response to a situation that we perceive as unfair, unjust, or threatening. Anger can be triggered by a variety of factors, including:

- Personal experiences
- External stimuli
- Social and cultural factors
- Biological factors" />

<div className="flex flex-row gap-4 justify-center">
  <Cause
    title="Anger Management Workshop"
    subtitle="Learn techniques to control and understand your emotions effectively."
          imageSrc="/Yoga/anger.png"
  />
  <Cause
    title="Anger Management Workshop"
    subtitle="Learn techniques to control and understand your emotions effectively."
          imageSrc="/Yoga/anger.png"
  />
  <Cause
    title="Anger Management Workshop"
    subtitle="Learn techniques to control and understand your emotions effectively."
          imageSrc="/Yoga/anger.png"
  />
  <Cause
    title="Anger Management Workshop"
    subtitle="Learn techniques to control and understand your emotions effectively."
          imageSrc="/Yoga/anger.png"
  />
</div>
<br></br><br></br>
      <CourseBanner
        title="Anger Management Yoga"
        subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      <br></br><br></br>
      <Prevention title="Prevention" points={[
    {
      title: "Self-Awareness",
      description: "Recognize early signs of anger, such as increased heart rate or tension, and take a moment to breathe deeply to regain control, helping you respond rather than react.",
    },
    {
      title: "Effective Communication",
      description: "Express your feelings calmly and assertively instead of bottling them up, reducing misunderstandings that can escalate into anger.",
    },
    {
      title: "Stress Management",
      description: "Engage in regular activities like meditation or exercise to relieve stress, preventing it from building up and triggering anger outbursts.",
    },
    {
      title: "Perspective Shift",
      description: "Practice reframing situations by considering others' viewpoints or the bigger picture, which can diffuse irritation and promote patience.",
    },
  ]} 
  />

<YogaHelp title="How Yoga is Helpful for Anger Management ?" description="Yoga helps manage anger by:

- Building inner strength through regular practice
- Enhancing emotional resilience
- Promoting mindfulness and awareness" />
   

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
<br></br><br></br>


 </div>
  )
}
