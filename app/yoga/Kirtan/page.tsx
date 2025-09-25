import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Kirtan Yoga – Para Vidya",
  description: "Experience the transformative power of devotional chanting, sacred sound, and heart-opening practices that connect you to your spiritual essence.",
}

export default function KirtanYogaPage() {
  return (
    <div>
      <HeroSection
        title="Kirtan Yoga"
        subtitle="Experience the transformative power of devotional chanting, sacred sound, and heart-opening practices that connect you to your spiritual essence and inner peace."
        imageSrc="/Yoga/kirtan.png"
        imageAlt="Devotional practice with serene ambiance"
      />
      
      <Definition 
        title="What is Kirtan?" 
        description="Kirtan is a devotional practice in which sacred mantras, names of deities, or spiritual verses are sung or chanted, often in a call-and-response style. Rooted in the Bhakti tradition of India, kirtan combines music, rhythm, and repetition to create a meditative and uplifting experience. It is not just singing but a form of spiritual expression that opens the heart, calms the mind, and connects individuals with the divine. Kirtan is usually performed with instruments like the harmonium, tabla, or kartal, and its collective nature makes it a powerful practice for unity, joy, and inner peace." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Mantra Chanting"
          subtitle="Learn traditional Sanskrit mantras and their meanings for spiritual practice and inner peace."
          imageSrc="/Yoga/kirtan.png"
        />
        <Cause
          title="Sacred Sound Circles"
          subtitle="Group chanting sessions that create powerful vibrational healing and spiritual connection."
          imageSrc="/Yoga/kirtan.png"
        />
        <Cause
          title="Bhakti Yoga Flow"
          subtitle="Heart-opening yoga sequences combined with devotional chanting and meditation."
          imageSrc="/Yoga/kirtan.png"
        />
        <Cause
          title="Mantra Meditation"
          subtitle="Silent and vocal mantra repetition for deep spiritual practice and inner transformation."
          imageSrc="/Yoga/kirtan.png"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Kirtan Yoga"
        subtitle="Open your heart to divine love through sacred chanting, devotional movement, and spiritual practices that connect you to your highest self."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Spiritual Well-being Practices" 
        points={[
          {
            title: "Daily Mantra Practice",
            description: "Begin each day with simple mantra repetition or chanting to center your mind, open your heart, and connect with your spiritual essence.",
          },
          {
            title: "Sacred Sound Healing",
            description: "Use chanting, singing bowls, or other sacred sounds to create vibrational healing and promote inner peace and emotional balance.",
          },
          {
            title: "Community Connection",
            description: "Participate in group chanting sessions or spiritual gatherings to experience the power of collective consciousness and shared devotion.",
          },
          {
            title: "Heart-Centered Living",
            description: "Cultivate love, compassion, and gratitude in daily life through devotional practices and acts of service to others.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Kirtan Transforms Your Practice?" 
        description="Kirtan offers profound benefits for spiritual and emotional well-being through:

- **Heart Opening**: Chanting and devotional practices open the heart chakra, increasing love and compassion
- **Stress Relief**: Sacred sound vibrations calm the nervous system and reduce anxiety and tension
- **Emotional Healing**: Mantra repetition helps process emotions and cultivate inner peace and joy
- **Spiritual Connection**: Devotional practices deepen your connection to your spiritual essence and higher purpose
- **Community Bonding**: Group chanting creates powerful bonds and shared spiritual experiences
- **Mental Clarity**: Regular mantra practice quiets the mind and enhances focus and concentration
- **Vibrational Healing**: Sacred sounds create beneficial vibrations that promote physical and emotional healing" 
      />
    </div>
  )
}