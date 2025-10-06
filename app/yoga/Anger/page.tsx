
import { Metadata } from "next";
import HeroSection from "@/components/yoga/heroyoga";
import CourseBanner from "@/components/yoga/Coursebanner";
import Definition from "@/components/yoga/definition";
import Prevention from "@/components/yoga/prevention";
import YogaHelp from "@/components/yoga/yogahelp";
import Cause from "@/components/yoga/cause";
import FeaturedVideos from "@/components/ui/FeaturedVideos";
import TestimonialsComponent from "@/components/yoga/TestimonialsComponent";

export const metadata: Metadata = {
  title: "Anger Management Yoga Course – Transform Reactivity into Resilience",
  description:
    "Master anger management through expert yoga practices, breathwork, and mindful awareness. Learn to channel intense energy into centered calm with our comprehensive course.",
  keywords: [
    "anger management yoga",
    "yoga for anger control",
    "breathwork for anger",
    "mindful anger management",
    "emotional regulation yoga",
    "stress relief yoga",
    "anger therapy yoga",
  ],
  openGraph: {
    title: "Anger Management Yoga Course | ParaVidya Foundation",
    description:
      "Transform reactivity into resilience with breath-led practices, grounding postures, and mindful awareness.",
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
    description:
      "Transform reactivity into resilience with breath-led practices and mindful awareness.",
    images: ["/og-anger-yoga.jpg"],
  },
};

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
  ];

  return (
    <div>
    <HeroSection
    title="Anger Management Yoga"
    subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
    imageSrc="/Yoga/anger-main.webp"
    imageAlt="Grounded yoga posture promoting calm and control"
  />
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">


      {/* Definition */}
      <section className="max-w-6xl w-full px-6 py-12">
        <Definition
          title="Understanding Anger and Emotional Regulation"
          description="Anger is a natural human emotion that arises in response to perceived threats, frustration, injustice, or hurt. While anger serves important functions - alerting us to problems and motivating protective action - chronic or poorly managed anger can damage relationships, impair judgment, and negatively impact physical and mental health. Anger manifests through physiological changes including increased heart rate, muscle tension, elevated stress hormones, and heightened energy. The key to healthy anger management lies not in suppressing this emotion, but in developing awareness, emotional regulation skills, and constructive expression. Yoga for anger management offers powerful tools including breathwork, mindful movement, and meditation that help transform reactive anger into conscious, purposeful responses."
        />
      </section>

      {/* Causes Section */}
      <section className="max-w-7xl w-full px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Common Triggers and Causes of Anger
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Cause
            title="Frustration and Blocked Goals"
            subtitle="When our expectations aren't met or goals are blocked, frustration can escalate into anger — especially when we feel powerless."
            imageSrc="/Yoga/causes/A1.webp"
          />
          <Cause
            title="Stress, Overwhelm, and Fatigue"
            subtitle="High stress, chronic overwhelm, or exhaustion lowers tolerance for challenges, making us more reactive to triggers."
            imageSrc="/Yoga/causes/A2.webp"
          />
          <Cause
            title="Perceived Injustice and Disrespect"
            subtitle="Mistreatment, criticism, or boundary violations often trigger anger as a protective response."
            imageSrc="/Yoga/causes/A3.webp"
          />
          <Cause
            title="Unresolved Past Experiences"
            subtitle="Unhealed trauma and unresolved conflicts create sensitivity that amplifies present frustrations."
            imageSrc="/Yoga/causes/A4.webp"
          />
        </div>
      </section>

      {/* Course Banner */}
      <section className="w-full py-16">
        <CourseBanner
          title="Anger Management Yoga"
          subtitle="Channel intense energy into centered calm through breathwork, grounding asanas, and meditative focus. Learn to pause, reset, and respond with clarity."
           imageSrc="/Yoga/Yoga.jpg"
          buttonText="Join Now"
        />
      </section>

      {/* Prevention Section */}
      <section className="max-w-6xl w-full px-6 py-16">
        <Prevention
          title="Anger Prevention and Management Strategies"
          points={[
            {
              title: "Practice Mindful Breathing and Pause Techniques",
              description:
                "When anger begins to rise, immediately engage in deep, slow breathing — try the 4-7-8 technique (inhale for 4, hold for 7, exhale for 8). This activates the parasympathetic nervous system and creates space between trigger and response.",
            },
            {
              title: "Develop Trigger Awareness and Early Recognition",
              description:
                "Identify your personal anger triggers and notice early warning signs like muscle tension, increased heart rate, or irritability. Early recognition allows you to intervene before escalation.",
            },
            {
              title: "Establish Regular Stress-Relief Practices",
              description:
                "Daily practices like yoga, meditation, or nature walks reduce baseline stress and increase resilience, preventing anger buildup.",
            },
            {
              title: "Develop Healthy Communication Skills",
              description:
                "Express feelings assertively but respectfully using 'I' statements, active listening, and empathy. Good communication transforms conflicts into solutions.",
            },
          ]}
        />
      </section>

      {/* Yoga Help */}
      <section className="max-w-6xl w-full px-6 py-10">
        <YogaHelp
          title="How Yoga Transforms Anger into Emotional Balance"
          description="Anger is an emotion, but when unchecked, it can impact your health, bonds, and well-being. Yoga offers a holistic approach through mindful breathing, postures, and meditation to calm the nervous system, release tension, and cultivate patience. Over time, regular yoga practice enhances self-awareness, resilience, and positivity — making it easier to remain calm in difficult situations."
        />
      </section>

      {/* Featured Videos */}
      <section className="w-full py-10">
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
  );
}
