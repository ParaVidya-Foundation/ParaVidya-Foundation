import { Metadata } from "next"
import HeroSection from "@/components/yoga/heroyoga"
import CourseBanner from "@/components/yoga/Coursebanner"
import Definition from "@/components/yoga/definition"
import Prevention from "@/components/yoga/prevention"
import YogaHelp from "@/components/yoga/yogahelp"
import Cause from "@/components/yoga/cause"
import FeaturedVideos from "@/components/ui/FeaturedVideos"
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent"

export const metadata: Metadata = {
  title: "Depression Support Yoga – Yoga for Mental Health | Para Vidya",
  description: "Support mental health naturally with depression support yoga. Learn gentle yoga poses, healing breathwork, and mindfulness practices for emotional well-being. Complementary support for depression recovery.",
  keywords: "yoga for depression, yoga for mental health, yoga therapy, meditation for depression, gentle yoga, yoga for anxiety, mindfulness for depression, yoga for emotional healing, mental wellness yoga, therapeutic yoga",
}

export default function DepressionSupportYogaPage() {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Mental Health Advocate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Amit Patel",
      title: "Yoga Practitioner",
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
        title="Depression Support Yoga"
        subtitle="Gentle movement, conscious breathing, and mindful awareness practices designed to support emotional healing and cultivate inner light during challenging times."
        imageSrc="/Yoga/depression.png"
        imageAlt="Restorative yoga pose with calm ambiance"
      />
      
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        {/* Definition */}
        <section className="max-w-6xl w-full px-6 py-12">
          <Definition 
            title="Understanding Depression and Mental Wellness" 
            description="Depression is a complex mood disorder that significantly impacts emotional regulation, cognitive function, and daily life activities. Unlike temporary sadness or stress, depression is a persistent condition affecting multiple dimensions of well-being over weeks or months. Common symptoms include sustained feelings of sadness, emptiness, or hopelessness; diminished interest in previously enjoyed activities; chronic fatigue and low energy; difficulty concentrating or making decisions; changes in sleep patterns or appetite; and overwhelming feelings of worthlessness or guilt. Depression results from a complex interplay of biological, psychological, environmental, and social factors. While professional medical treatment is essential, yoga can serve as a valuable complementary practice that supports mental health recovery by addressing stress, improving mood, and promoting overall emotional wellness." 
          />
        </section>

        {/* Causes Section */}
        <section className="max-w-7xl w-full px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Understanding Contributing Factors to Depression
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cause
              title="Biological and Genetic Predisposition"
              subtitle="Family history of depression, genetic variations affecting neurotransmitter function, and brain chemistry imbalances can increase susceptibility to depression."
              imageSrc="/Yoga/depression.png"
            />
            <Cause
              title="Psychological and Cognitive Factors"
              subtitle="Negative thought patterns, low self-esteem, perfectionism, history of trauma or abuse, and chronic stress can contribute to depression."
              imageSrc="/Yoga/depression.png"
            />
            <Cause
              title="Environmental and Social Influences"
              subtitle="Social isolation, financial stress, work pressures, discrimination, and major life changes can trigger or worsen depression."
              imageSrc="/Yoga/depression.png"
            />
            <Cause
              title="Physical Health and Lifestyle Factors"
              subtitle="Chronic medical conditions, certain medications, substance use, poor sleep patterns, and nutritional deficiencies can contribute to depressive symptoms."
              imageSrc="/Yoga/depression.png"
            />
          </div>
        </section>

        {/* Course Banner */}
        <section className="w-full py-16">
          <CourseBanner
            title="Depression Support Yoga"
            subtitle="Find your inner light through gentle movement, conscious breathing, and compassionate self-care practices designed to support your healing journey."
            imageSrc="/Yoga/poster.png"
            buttonText="Join Now"
          />
        </section>

        {/* Prevention Section */}
        <section className="max-w-6xl w-full px-6 py-16">
          <Prevention 
            title="Holistic Mental Wellness Support Strategies" 
            points={[
              {
                title: "Gentle Physical Movement and Yoga Practice",
                description: "Engage in regular, gentle yoga practices including Surya Namaskar (Sun Salutations), Tadasana (Mountain Pose), and Balasana (Child's Pose). These movements improve circulation, release physical tension, stimulate endorphin production, and naturally lift mood while building physical and mental resilience. Start slowly and listen to your body's needs."
              },
              {
                title: "Mindfulness and Meditation Practices",
                description: "Develop a daily mindfulness routine with techniques like Yoga Nidra, Anulom Vilom (Alternate Nostril Breathing), and breath awareness meditation. These practices help you observe thoughts without judgment, reduce rumination, calm anxiety, and cultivate inner peace and emotional stability."
              },
              {
                title: "Community Connection and Social Support",
                description: "Participate in group yoga classes, meditation groups, or supportive community activities. Social connection in a non-judgmental, healing environment provides emotional support, reduces isolation, and fosters a sense of belonging and purpose, which are crucial for mental health recovery."
              },
              {
                title: "Professional Support and Integrated Care",
                description: "Work with qualified mental health professionals, and consider yoga therapy as a complementary approach. A personalized practice created with professional guidance can enhance traditional therapy, support emotional regulation, and provide additional tools for managing depression symptoms safely and effectively."
              }
            ]} 
          />
        </section>

        {/* Yoga Help */}
        <section className="max-w-6xl w-full px-6 py-10">
          <YogaHelp 
            title="How Yoga Supports Mental Health and Depression Recovery" 
            description="Yoga is highly beneficial in managing depression because it addresses the body, mind, and breath simultaneously, creating a holistic approach to mental health. Gentle yoga asanas, such as Surya Namaskar, Tadasana, and Balasana, improve blood circulation, release muscle tension, and stimulate the nervous system, which can help lift one's mood and reduce the lethargy often associated with depression. Breathing exercises such as Anulom Vilom, Bhramari, and Sheetali Pranayama calm the mind, regulate stress hormones, and reduce anxiety. Mindfulness practices, such as Yoga Nidra, guided meditation, or breath awareness, cultivate self-awareness, reduce negative thought patterns, and promote emotional balance. Additionally, participating in group yoga classes or partner yoga sessions offers social support, which can be particularly beneficial in combating feelings of isolation. By integrating physical movement, breath control, meditation, and social connection, regular yoga practice can improve mood, enhance resilience, and support overall mental well-being for those experiencing depression." 
          />
        </section>

        {/* Featured Videos */}
        <section className="w-full py-10">
          <FeaturedVideos
            headline="Featured Videos"
            description="Explore timeless wisdom on mental health, wellness, yoga, and more — all in one place."
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
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl w-full px-6 py-10">
          <TestimonialsComponent
            reels={testimonials}
            title="Our Yoga Testimonials"
          />
        </section>
      </main>
    </div>
  )
}