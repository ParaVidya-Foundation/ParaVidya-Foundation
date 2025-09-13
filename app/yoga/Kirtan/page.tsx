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
        imageSrc="/placeholder.jpg"
        imageAlt="Devotional practice with serene ambiance"
      />
      
      <Definition 
        title="What is Kirtan?" 
        description="Kirtan is a form of devotional chanting and singing that originated in ancient India. It's a heart-centered practice that combines music, meditation, and spiritual connection to create a profound inner experience.

Key aspects of Kirtan:
- **Call and Response**: Simple mantras or sacred phrases repeated in a group setting
- **Sacred Sound**: The vibrational quality of Sanskrit mantras and devotional music
- **Community Connection**: Shared spiritual experience that creates unity and harmony
- **Heart Opening**: Practices that cultivate love, compassion, and spiritual awareness
- **Meditation in Motion**: Active meditation through chanting, movement, and breath

Kirtan is not about performance or perfection, but about opening the heart, quieting the mind, and connecting with the divine essence within and around us." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Mantra Chanting"
          subtitle="Learn traditional Sanskrit mantras and their meanings for spiritual practice and inner peace."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Sacred Sound Circles"
          subtitle="Group chanting sessions that create powerful vibrational healing and spiritual connection."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Bhakti Yoga Flow"
          subtitle="Heart-opening yoga sequences combined with devotional chanting and meditation."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Mantra Meditation"
          subtitle="Silent and vocal mantra repetition for deep spiritual practice and inner transformation."
          imageSrc="/placeholder.jpg"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Kirtan Yoga"
        subtitle="Open your heart to divine love through sacred chanting, devotional movement, and spiritual practices that connect you to your highest self."
        imageSrc="/placeholder.jpg"
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