import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Weight Management Yoga – Para Vidya",
  description: "Holistic approach to healthy weight management through mindful movement, balanced nutrition awareness, and sustainable lifestyle practices.",
}

export default function WeightManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Weight Management Yoga"
        subtitle="Achieve healthy weight goals through mindful movement, balanced nutrition awareness, and sustainable lifestyle practices that honor your body's natural wisdom."
        imageSrc="/placeholder.jpg"
        imageAlt="Yoga flow supporting healthy weight"
      />
      
      <Definition 
        title="Understanding Healthy Weight" 
        description="Healthy weight management is about finding balance between your body's natural set point and your lifestyle choices. It's not just about numbers on a scale, but about overall health and well-being.

Factors affecting weight:
- Metabolism and genetic predisposition
- Physical activity levels and muscle mass
- Eating patterns and nutritional choices
- Stress levels and sleep quality
- Hormonal balance and gut health
- Emotional relationship with food

Healthy weight management focuses on:
- Sustainable lifestyle changes
- Building strength and flexibility
- Improving body composition
- Enhancing energy and vitality
- Developing positive body image
- Creating lasting habits for wellness" 
      />

      <div className="flex flex-row gap-4 justify-center">
        <Cause
          title="Dynamic Flow Classes"
          subtitle="Energetic yoga sequences that build strength, burn calories, and improve metabolism."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Strength Building"
          subtitle="Poses that build lean muscle mass and increase metabolic rate for healthy weight management."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Mindful Eating"
          subtitle="Workshops combining yoga philosophy with conscious eating practices for sustainable nutrition habits."
          imageSrc="/placeholder.jpg"
        />
        <Cause
          title="Stress & Weight"
          subtitle="Practices that address emotional eating and stress-related weight challenges through mindfulness."
          imageSrc="/placeholder.jpg"
        />
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Weight Management Yoga"
        subtitle="Transform your relationship with your body through compassionate movement, mindful awareness, and sustainable practices that support your health goals."
        imageSrc="/placeholder.jpg"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Sustainable Weight Management" 
        points={[
          {
            title: "Mindful Movement",
            description: "Engage in regular, enjoyable physical activity like yoga that builds strength, flexibility, and metabolic health without causing stress or injury.",
          },
          {
            title: "Conscious Nutrition",
            description: "Develop awareness of hunger cues, eating patterns, and food choices while focusing on nourishing your body with whole, nutrient-dense foods.",
          },
          {
            title: "Stress Management",
            description: "Practice relaxation techniques and stress-reducing activities to prevent emotional eating and support healthy cortisol levels.",
          },
          {
            title: "Quality Sleep",
            description: "Prioritize consistent, restorative sleep as it regulates hunger hormones and supports metabolic function for healthy weight maintenance.",
          },
        ]} 
      />

      <YogaHelp 
        title="How Yoga Supports Healthy Weight?" 
        description="Yoga offers holistic support for weight management through:

- **Metabolic Boost**: Dynamic poses and flows increase heart rate and calorie burn while building lean muscle mass
- **Stress Reduction**: Regular practice reduces cortisol levels that can contribute to weight gain and emotional eating
- **Mindful Awareness**: Meditation and mindfulness practices help develop conscious eating habits and body awareness
- **Improved Digestion**: Twisting poses and breathing exercises support digestive health and gut function
- **Better Sleep**: Yoga improves sleep quality, which regulates hunger hormones and supports metabolic health
- **Body Positivity**: Yoga philosophy promotes self-acceptance and healthy body image
- **Sustainable Habits**: Gentle, consistent practice creates lasting lifestyle changes rather than quick fixes" 
      />
    </div>
  )
}