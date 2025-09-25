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
        description="Yoga is highly beneficial in managing depression because it addresses the body, mind, and breath simultaneously, creating a holistic approach to mental health. Gentle yoga asanas, such as Surya Namaskar, Tadasana, and Balasana, improve blood circulation, release muscle tension, and stimulate the nervous system, which can help lift one's mood and reduce the lethargy often associated with depression. Breathing exercises such as Anulom Vilom, Bhramari, and Sheetali Pranayama calm the mind, regulate stress hormones, and reduce anxiety. Mindfulness practices, such as Yoga Nidra, guided meditation, or breath awareness, cultivate self-awareness, reduce negative thought patterns, and promote emotional balance. Additionally, participating in group yoga classes or partner yoga sessions offers social support, which can be particularly beneficial in combating feelings of isolation. By integrating physical movement, breath control, meditation, and social connection, regular yoga practice can improve mood, enhance resilience, and support overall mental well-being for those experiencing depression." 
      />
    </div>
  )
}