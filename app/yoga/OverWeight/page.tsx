import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Weight Management Yoga for Beginners – Yoga for Weight Loss | Para Vidya",
  description: "Discover effective yoga for weight loss with our beginner-friendly weight management program. Learn yoga poses for healthy weight loss, mindful eating, and sustainable lifestyle practices. Start your yoga journey today!",
  keywords: "yoga for weight loss, weight management yoga, yoga for beginners, yoga poses for weight loss, healthy weight loss, yoga for overweight, yoga therapy, daily yoga practice, mindful eating, yoga for metabolism",
}

export default function WeightManagementYogaPage() {
  return (
    <div>
      <HeroSection
        title="Weight Management Yoga"
        subtitle="Achieve healthy weight goals through mindful movement, balanced nutrition awareness, and sustainable lifestyle practices that honor your body's natural wisdom."
        imageSrc="/Yoga/weight.png"
        imageAlt="Yoga flow supporting healthy weight"
      />
      
      <Definition 
        title="Understanding Healthy Weight Management" 
        description="Healthy weight management is about achieving and maintaining a weight that supports your overall well-being. Weight gain occurs when there's an imbalance between calories consumed and calories burned, leading to fat accumulation. While some weight fluctuation is natural, excessive weight gain can increase the risk of health conditions like diabetes, heart disease, and joint problems. Yoga for weight loss offers a holistic approach that combines physical movement, mindful eating awareness, and stress reduction to support sustainable weight management and improved quality of life." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Common Causes of Weight Gain</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-2">1. Unhealthy Diet Patterns</h4>
              <p className="text-gray-700 text-sm">Consuming calorie-dense foods high in sugar, unhealthy fats, and refined carbohydrates leads to excess fat storage. Poor portion control and irregular eating habits also contribute to weight gain.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-2">2. Sedentary Lifestyle</h4>
              <p className="text-gray-700 text-sm">Lack of regular physical activity slows down metabolism and reduces the body's ability to burn calories effectively. Extended periods of sitting and minimal movement compound this issue.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-2">3. Stress and Emotional Eating</h4>
              <p className="text-gray-700 text-sm">High stress levels trigger the release of cortisol, which can lead to increased appetite and cravings for comfort foods. Emotional eating patterns often result in consuming excess calories.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-2">4. Hormonal and Medical Factors</h4>
              <p className="text-gray-700 text-sm">Conditions like thyroid disorders, PCOS, insulin resistance, or certain medications can disrupt metabolism and hormone balance, making weight management more challenging.</p>
            </div>
          </div>
        </div>
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Weight Management Yoga"
        subtitle="Transform your relationship with your body through compassionate movement, mindful awareness, and sustainable practices that support your health goals."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Sustainable Weight Management Strategies" 
        points={[
          {
            title: "1. Balanced Nutrition with Mindful Eating",
            description: "Focus on whole grains, fresh fruits, vegetables, lean proteins, and healthy fats. Practice mindful eating by paying attention to hunger cues, eating slowly, and avoiding processed foods and sugary drinks. Portion control and regular meal timing support healthy metabolism."
          },
          {
            title: "2. Regular Physical Activity and Yoga Practice",
            description: "Engage in daily yoga practice combined with other activities like walking, swimming, or strength training. Yoga poses for weight loss, such as Sun Salutations and dynamic flows, boost metabolism while building lean muscle mass."
          },
          {
            title: "3. Stress Management and Emotional Wellness",
            description: "Practice stress-reduction techniques including meditation, pranayama (breathing exercises), and mindfulness to prevent emotional eating. Regular yoga practice helps regulate cortisol levels and promotes emotional balance."
          },
          {
            title: "4. Healthy Lifestyle Habits and Sleep Hygiene",
            description: "Maintain consistent sleep schedules (7-9 hours nightly), stay properly hydrated, and establish regular meal times. Quality sleep regulates hunger hormones and supports metabolic health, making weight management easier."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Supports Healthy Weight Management" 
        description="Yoga provides comprehensive support for sustainable weight management through multiple interconnected benefits:

**Physical Benefits:**
- **Metabolic Enhancement**: Dynamic yoga sequences like Surya Namaskar (Sun Salutations) and Vinyasa flows increase heart rate, burn calories, and build lean muscle mass
- **Improved Flexibility and Strength**: Regular asana practice tones muscles, improves posture, and increases overall physical fitness
- **Better Digestion**: Twisting poses, forward folds, and breathing exercises massage internal organs, supporting healthy digestion and elimination

**Mental and Emotional Benefits:**
- **Stress Reduction**: Pranayama and meditation lower cortisol levels, reducing stress-induced weight gain and emotional eating patterns
- **Mindful Awareness**: Yoga cultivates present-moment awareness, helping develop conscious eating habits and better relationship with food
- **Improved Sleep Quality**: Regular practice regulates sleep patterns, which balances hunger hormones like leptin and ghrelin

**Holistic Lifestyle Support:**
- **Body Positivity**: Yoga philosophy promotes self-acceptance and appreciation for your body's capabilities rather than focusing solely on appearance
- **Sustainable Habits**: Gentle, consistent practice creates lasting lifestyle changes that support long-term weight management without extreme measures
- **Community Support**: Group yoga classes provide motivation, accountability, and social connection on your wellness journey" 
      />
    </div>
  )
}