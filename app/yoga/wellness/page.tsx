import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Wellness Yoga for Holistic Health – Yoga for Overall Wellness | Para Vidya",
  description: "Achieve holistic wellness with comprehensive yoga practices for mind, body, and spirit. Learn wellness yoga poses, meditation techniques, and healthy lifestyle practices for balanced living at every age.",
  keywords: "wellness yoga, holistic health yoga, yoga for overall wellness, yoga for beginners, healthy lifestyle yoga, mind body spirit yoga, yoga for vitality, preventive yoga, yoga for longevity, balanced living",
}

export default function WellnessYogaPage() {
  return (
    <div>
      <HeroSection
        title="Wellness Yoga"
        subtitle="A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage of life's journey."
        imageSrc="/Yoga/wellness.png"
        imageAlt="Gentle yoga practice symbolizing holistic wellness"
      />
      
      <Definition 
        title="Understanding Holistic Wellness and Integrated Health" 
        description="Holistic wellness is a comprehensive approach to health that recognizes the interconnection between all aspects of your being - physical, mental, emotional, spiritual, social, and environmental. Unlike traditional health models that focus primarily on treating illness, holistic wellness emphasizes prevention, balance, and optimization of your entire life experience. This approach includes: **Physical Wellness** - maintaining a strong, flexible, and energetic body through movement, nutrition, and rest; **Mental Wellness** - cultivating mental clarity, focus, emotional stability, and cognitive resilience; **Spiritual Wellness** - connecting with your deeper purpose, values, and inner wisdom; **Social Wellness** - building meaningful relationships and contributing to community; **Environmental Wellness** - living in harmony with your surroundings and caring for the natural world. Yoga serves as an ideal practice for holistic wellness because it integrates mindful movement, conscious breathing, meditation, and present-moment awareness, creating a unified approach that supports every dimension of your well-being and helps you thrive at every stage of life." 
      />
      
      <br></br><br></br>
      
      <CourseBanner
        title="Wellness Yoga"
        subtitle="Embrace a comprehensive approach to health and happiness through mindful movement, conscious living, and practices that nurture your whole being."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Comprehensive Wellness Strategies" 
        points={[
          {
            title: "1. Meditation and Mindfulness Integration",
            description: "Develop a consistent daily meditation practice using techniques like guided meditation, body scans, breath awareness, or mindful walking. These practices calm the nervous system, reduce stress hormones, improve emotional regulation, and enhance mental clarity. Even 10-15 minutes daily can significantly impact overall wellness and life satisfaction."
          },
          {
            title: "2. Balanced Physical Activity and Movement",
            description: "Combine yoga with other forms of exercise like walking, swimming, strength training, or dancing to create a well-rounded fitness routine. This approach supports cardiovascular health, builds strength and flexibility, improves bone density, boosts mood through endorphin release, and maintains healthy weight and energy levels."
          },
          {
            title: "3. Nutritious Eating and Mindful Consumption",
            description: "Focus on whole foods rich in vitamins, minerals, antioxidants, lean proteins, healthy fats, and complex carbohydrates. Practice mindful eating by paying attention to hunger cues, eating slowly, and choosing foods that nourish your body. Stay adequately hydrated and limit processed foods, excess sugar, and harmful substances."
          },
          {
            title: "4. Quality Sleep and Recovery Practices",
            description: "Prioritize 7-9 hours of quality sleep nightly by maintaining consistent sleep schedules and creating a calming bedtime routine. Incorporate restorative practices like gentle yoga, deep breathing exercises, progressive muscle relaxation, or calming music to support nervous system recovery and hormonal balance."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Creates Comprehensive Holistic Wellness" 
        description="Yoga serves as a complete wellness system that uniquely addresses every dimension of health through integrated practices that work synergistically to optimize your entire being:

**Physical Wellness Foundation:**
- **Strength and Flexibility**: Asanas build functional strength, improve flexibility, and enhance posture, creating a resilient physical foundation
- **Cardiovascular Health**: Dynamic sequences and breathing practices improve heart health, circulation, and endurance
- **Immune System Support**: Regular practice boosts immune function through stress reduction, improved circulation, and lymphatic drainage
- **Pain Prevention**: Yoga addresses common issues like back pain, joint stiffness, and muscle tension before they become chronic problems

**Mental and Emotional Balance:**
- **Stress Management**: Pranayama and meditation activate the relaxation response, reducing cortisol and promoting mental calm
- **Cognitive Enhancement**: Practice improves focus, memory, decision-making, and mental clarity through increased brain blood flow and neuroplasticity
- **Emotional Regulation**: Mindfulness techniques develop emotional intelligence and resilience, helping you respond rather than react to life's challenges
- **Anxiety and Depression Support**: Regular practice naturally elevates mood through neurotransmitter balance and stress reduction

**Spiritual and Purposeful Living:**
- **Self-Awareness**: Yoga cultivates deep self-knowledge, helping you understand your values, motivations, and life purpose
- **Inner Peace**: Meditation and philosophical study develop equanimity and contentment that isn't dependent on external circumstances
- **Connection and Unity**: Practice fosters a sense of interconnectedness with others and the natural world
- **Meaning and Purpose**: Yoga philosophy provides frameworks for living with intention and contributing meaningfully to the world

**Social and Community Wellness:**
- **Compassion Development**: Heart-opening practices and ethical teachings naturally increase empathy and kindness
- **Healthy Relationships**: Improved emotional regulation and self-awareness enhance all relationships
- **Community Connection**: Group classes and yoga communities provide social support and shared values
- **Service Orientation**: Yoga philosophy encourages selfless service (seva) and contribution to others' well-being

**Environmental and Lifestyle Integration:**
- **Mindful Living**: Yoga promotes conscious choices about consumption, environment, and lifestyle that support both personal and planetary health
- **Natural Rhythms**: Practice helps align with natural cycles of rest and activity, seasonal changes, and circadian rhythms
- **Sustainable Practices**: Yoga philosophy emphasizes non-harm (ahimsa) and sustainable living practices
- **Preventive Approach**: Regular practice prevents many lifestyle-related diseases and promotes longevity

**Integrated Wellness Benefits:**
- **Energy Optimization**: Yoga balances and increases vital energy (prana), leading to sustained vitality throughout the day
- **Resilience Building**: Practice develops physical, mental, and emotional resilience to handle life's inevitable challenges
- **Quality of Life**: Improved sleep, reduced pain, better mood, and increased vitality significantly enhance daily life experience
- **Aging Gracefully**: Yoga supports healthy aging through maintained flexibility, cognitive function, and emotional well-being

**Personalized and Adaptive:**
- **Scalable Practice**: Yoga can be adapted for any age, fitness level, or health condition, making it accessible to everyone
- **Lifelong Journey**: Practice evolves with your changing needs, providing continuous growth and development opportunities
- **Holistic Integration**: Unlike isolated health interventions, yoga creates lasting lifestyle changes that support all aspects of wellness

By addressing wellness through this comprehensive, integrated approach, yoga doesn't just treat symptoms or focus on single aspects of health - it creates a foundation for thriving in all areas of life, supporting you in becoming the healthiest, most balanced version of yourself." 
      />
    </div>
  )
}