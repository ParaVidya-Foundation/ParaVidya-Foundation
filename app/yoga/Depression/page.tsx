import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"

export const metadata: Metadata = {
  title: "Depression Support Yoga – Yoga for Mental Health | Para Vidya",
  description: "Support mental health naturally with depression support yoga. Learn gentle yoga poses, healing breathwork, and mindfulness practices for emotional well-being. Complementary support for depression recovery.",
  keywords: "yoga for depression, yoga for mental health, yoga therapy, meditation for depression, gentle yoga, yoga for anxiety, mindfulness for depression, yoga for emotional healing, mental wellness yoga, therapeutic yoga",
}

export default function DepressionSupportYogaPage() {
  return (
    <div>
      <HeroSection
        title="Depression Support Yoga"
        subtitle="Gentle movement, conscious breathing, and mindful awareness practices designed to support emotional healing and cultivate inner light during challenging times."
        imageSrc="/Yoga/depression.png"
        imageAlt="Restorative yoga pose with calm ambiance"
      />
      
      <Definition 
        title="Understanding Depression and Mental Wellness" 
        description="Depression is a complex mood disorder that significantly impacts emotional regulation, cognitive function, and daily life activities. Unlike temporary sadness or stress, depression is a persistent condition affecting multiple dimensions of well-being over weeks or months. Common symptoms include sustained feelings of sadness, emptiness, or hopelessness; diminished interest in previously enjoyed activities; chronic fatigue and low energy; difficulty concentrating or making decisions; changes in sleep patterns or appetite; and overwhelming feelings of worthlessness or guilt. Depression results from a complex interplay of biological, psychological, environmental, and social factors. While professional medical treatment is essential, yoga can serve as a valuable complementary practice that supports mental health recovery by addressing stress, improving mood, and promoting overall emotional wellness." 
      />

      <div className="flex flex-row gap-4 justify-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Understanding Contributing Factors to Depression</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800 mb-2">1. Biological and Genetic Predisposition</h4>
              <p className="text-gray-700 text-sm">Family history of depression, genetic variations affecting neurotransmitter function (serotonin, dopamine, norepinephrine), and brain chemistry imbalances can increase susceptibility to depression. Hormonal changes during puberty, pregnancy, or menopause may also trigger depressive episodes.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800 mb-2">2. Psychological and Cognitive Factors</h4>
              <p className="text-gray-700 text-sm">Negative thought patterns, low self-esteem, perfectionism, history of trauma or abuse, and chronic stress can contribute to depression. Learned helplessness, rumination, and difficulty processing emotions may perpetuate depressive symptoms.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800 mb-2">3. Environmental and Social Influences</h4>
              <p className="text-gray-700 text-sm">Social isolation, lack of supportive relationships, financial stress, work pressures, discrimination, and major life changes (loss, divorce, job loss) can trigger or worsen depression. Chronic stress from environmental factors depletes emotional resilience.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800 mb-2">4. Physical Health and Lifestyle Factors</h4>
              <p className="text-gray-700 text-sm">Chronic medical conditions (diabetes, heart disease, thyroid disorders), certain medications, substance use, poor sleep patterns, nutritional deficiencies, and sedentary lifestyle can contribute to or exacerbate depressive symptoms.</p>
            </div>
          </div>
        </div>
      </div>
      
      <br></br><br></br>
      
      <CourseBanner
        title="Depression Support Yoga"
        subtitle="Find your inner light through gentle movement, conscious breathing, and compassionate self-care practices designed to support your healing journey."
        imageSrc="/Yoga/poster.png"
        buttonText="Join Now"
      />
      
      <br></br><br></br>
      
      <Prevention 
        title="Holistic Mental Wellness Support Strategies" 
        points={[
          {
            title: "1. Gentle Physical Movement and Yoga Practice",
            description: "Engage in regular, gentle yoga practices including Surya Namaskar (Sun Salutations), Tadasana (Mountain Pose), and Balasana (Child's Pose). These movements improve circulation, release physical tension, stimulate endorphin production, and naturally lift mood while building physical and mental resilience. Start slowly and listen to your body's needs."
          },
          {
            title: "2. Mindfulness and Meditation Practices",
            description: "Develop a daily mindfulness routine with techniques like Yoga Nidra, Anulom Vilom (Alternate Nostril Breathing), and breath awareness meditation. These practices help you observe thoughts without judgment, reduce rumination, calm anxiety, and cultivate inner peace and emotional stability."
          },
          {
            title: "3. Community Connection and Social Support",
            description: "Participate in group yoga classes, meditation groups, or supportive community activities. Social connection in a non-judgmental, healing environment provides emotional support, reduces isolation, and fosters a sense of belonging and purpose, which are crucial for mental health recovery."
          },
          {
            title: "4. Professional Support and Integrated Care",
            description: "Work with qualified mental health professionals, and consider yoga therapy as a complementary approach. A personalized practice created with professional guidance can enhance traditional therapy, support emotional regulation, and provide additional tools for managing depression symptoms safely and effectively."
          }
        ]} 
      />

      <YogaHelp 
        title="How Yoga Supports Mental Health and Depression Recovery" 
        description="*Important Note: Yoga is a complementary practice that supports mental wellness but should not replace professional mental health treatment. Always consult with healthcare providers for depression management.*

Yoga offers valuable support for mental health through a comprehensive, evidence-based approach that addresses depression on multiple levels:

**Neurochemical and Physiological Benefits:**
- **Neurotransmitter Balance**: Regular yoga practice increases levels of GABA, serotonin, and dopamine - key neurotransmitters for mood regulation and emotional well-being
- **Stress Hormone Reduction**: Yoga significantly lowers cortisol levels, reducing chronic stress that contributes to depression
- **Inflammation Reduction**: Practice decreases inflammatory markers linked to depression, supporting overall brain health
- **HPA Axis Regulation**: Yoga helps regulate the hypothalamic-pituitary-adrenal axis, improving stress response and emotional resilience

**Physical and Energetic Support:**
- **Gentle Movement**: Asanas like Surya Namaskar, heart-opening poses, and gentle flows combat lethargy and physical stagnation common in depression
- **Nervous System Balance**: Restorative poses activate the parasympathetic nervous system, promoting calm and reducing anxiety
- **Energy Circulation**: Yoga improves prana (life energy) flow, addressing the energetic depletion often experienced in depression
- **Body Awareness**: Mindful movement reconnects you with your body, countering the disconnection common in depression

**Mental and Emotional Benefits:**
- **Mindfulness Training**: Yoga teaches present-moment awareness, reducing rumination and negative thought loops characteristic of depression
- **Self-Compassion**: Practice cultivates kindness toward yourself, countering self-criticism and shame
- **Emotional Regulation**: Breathing techniques and meditation provide tools for managing difficult emotions and mood swings
- **Cognitive Flexibility**: Regular practice improves mental clarity and ability to shift perspectives

**Social and Spiritual Support:**
- **Community Connection**: Group classes provide social support and reduce isolation, crucial factors in depression recovery
- **Sense of Purpose**: Yoga philosophy and practice can help reconnect with meaning and purpose in life
- **Hope and Empowerment**: Learning self-care tools through yoga builds confidence and hope for recovery

**Specific Therapeutic Applications:**
- **Trauma-Informed Yoga**: Specialized approaches help process trauma that may underlie depression
- **Restorative Practices**: Gentle, supported poses provide deep nervous system healing
- **Breathwork**: Pranayama techniques offer immediate tools for managing anxiety and mood symptoms
- **Meditation**: Mindfulness practices develop emotional resilience and mental stability

**Integration with Professional Care:**
Yoga works best as part of a comprehensive treatment approach that may include therapy, medication, and other interventions. Many mental health professionals now recognize yoga's value as an adjunctive treatment that enhances traditional therapies and provides practical tools for daily mood management.

By addressing depression through body, mind, breath, and spirit, yoga offers a holistic pathway toward healing that empowers individuals with practical tools for managing their mental health and building long-term emotional resilience." 
      />
    </div>
  )
}