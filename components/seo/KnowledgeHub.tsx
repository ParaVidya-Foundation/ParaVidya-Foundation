"use client";

import { FAQSchema, HowToSchema } from "./StructuredDataEnhanced";
// Note: generateFAQSchema and generateHowToSchema are imported for future use

// AI Search optimized Knowledge Hub component
// Provides structured Q&A content for better AI understanding

interface KnowledgeHubProps {
  title?: string;
  description?: string;
  faqs?: Array<{question: string; answer: string}>;
  howTos?: Array<{
    name: string;
    description: string;
    steps: Array<{name: string; text: string; image?: string}>;
  }>;
}

export function KnowledgeHub({ 
  title = "ParaVidya Knowledge Hub", 
  description = "Comprehensive resources for spiritual wellness, yoga, and meditation practices",
  faqs = [],
  howTos = []
}: KnowledgeHubProps) {
  // Default FAQs for ParaVidya Foundation
  const defaultFAQs = [
    {
      question: "What is ParaVidya Foundation?",
      answer: "ParaVidya Foundation is a spiritual wellness organization dedicated to transforming lives through ancient wisdom and modern wellness practices. We offer expert yoga courses, meditation guidance, and holistic healing programs for spiritual seekers worldwide."
    },
    {
      question: "What yoga programs do you offer?",
      answer: "We offer comprehensive yoga programs including stress management yoga, anger management, sleep therapy, depression support, fatigue relief, immunity boosting, weight management, and kirtan practices. Our programs are suitable for all levels from beginners to advanced practitioners."
    },
    {
      question: "Are your meditation sessions suitable for beginners?",
      answer: "Yes, our meditation sessions are designed for all levels. We provide guided meditation, mindfulness practices, breathing exercises, and various meditation techniques including transcendental meditation, vipassana, and loving-kindness meditation."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline classes. Our online programs provide the same quality instruction and personal attention as our in-person sessions, making spiritual wellness accessible to people worldwide."
    },
    {
      question: "What makes ParaVidya Foundation different?",
      answer: "We combine ancient spiritual wisdom with modern wellness practices. Our holistic approach addresses mental, physical, and spiritual well-being through evidence-based techniques rooted in traditional knowledge."
    },
    {
      question: "How can I get started with your programs?",
      answer: "You can get started by contacting us through our website, calling +91-98711-30487, or emailing contact@paravidya.org. We'll help you choose the right program based on your needs and goals."
    }
  ];

  const finalFAQs = faqs.length > 0 ? faqs : defaultFAQs;

  // Default How-To guides
  const defaultHowTos = [
    {
      name: "How to Start Your Yoga Journey",
      description: "A beginner's guide to starting yoga practice with ParaVidya Foundation",
      steps: [
        {
          name: "Assess Your Current Level",
          text: "Evaluate your current fitness level and any physical limitations. Be honest about your flexibility, strength, and any injuries."
        },
        {
          name: "Choose the Right Program",
          text: "Select from our various programs based on your goals - stress relief, weight management, flexibility, or spiritual growth."
        },
        {
          name: "Start with Basics",
          text: "Begin with fundamental poses and breathing techniques. Don't rush into advanced practices."
        },
        {
          name: "Practice Consistently",
          text: "Establish a regular practice schedule. Even 15-20 minutes daily is better than long sessions occasionally."
        },
        {
          name: "Listen to Your Body",
          text: "Pay attention to your body's signals. Modify poses as needed and never force yourself into uncomfortable positions."
        }
      ]
    },
    {
      name: "How to Practice Mindfulness Meditation",
      description: "Step-by-step guide to mindfulness meditation for beginners",
      steps: [
        {
          name: "Find a Quiet Space",
          text: "Choose a quiet, comfortable place where you won't be disturbed. You can sit on a chair, cushion, or floor."
        },
        {
          name: "Set a Timer",
          text: "Start with 5-10 minutes and gradually increase. Use a gentle timer that won't startle you."
        },
        {
          name: "Focus on Your Breath",
          text: "Close your eyes and focus on your natural breathing. Notice the sensation of air entering and leaving your nostrils."
        },
        {
          name: "Observe Without Judgment",
          text: "When thoughts arise, observe them without judgment and gently return your focus to your breath."
        },
        {
          name: "End Mindfully",
          text: "When the timer goes off, take a moment to notice how you feel before slowly opening your eyes."
        }
      ]
    }
  ];

  const finalHowTos = howTos.length > 0 ? howTos : defaultHowTos;

  return (
    <section className="py-16 bg-gray-50" id="knowledge-hub">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Structured Data for AI Search */}
        <FAQSchema faqs={finalFAQs} />
        {finalHowTos.map((howTo, index) => (
          <HowToSchema key={index} howTo={howTo} />
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {finalFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How-To Guides Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">How-To Guides</h3>
            <div className="space-y-6">
              {finalHowTos.map((howTo, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{howTo.name}</h4>
                  <p className="text-gray-600 mb-4">{howTo.description}</p>
                  <ol className="space-y-2">
                    {howTo.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                          {stepIndex + 1}
                        </span>
                        <div>
                          <h5 className="font-medium text-gray-900">{step.name}</h5>
                          <p className="text-gray-600 text-sm">{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Specialized components for different content types
export function YogaFAQ() {
  const yogaFAQs = [
    {
      question: "What type of yoga is best for beginners?",
      answer: "Hatha yoga is ideal for beginners as it focuses on basic poses and breathing techniques. Our beginner programs start with fundamental poses and gradually build strength and flexibility."
    },
    {
      question: "How often should I practice yoga?",
      answer: "For beginners, we recommend starting with 2-3 sessions per week. As you build strength and flexibility, you can increase to daily practice. Even 15-20 minutes daily is beneficial."
    },
    {
      question: "Can yoga help with stress and anxiety?",
      answer: "Yes, yoga is highly effective for stress and anxiety management. Our stress management programs combine physical poses, breathing exercises, and meditation techniques specifically designed for mental wellness."
    }
  ];

  return <KnowledgeHub faqs={yogaFAQs} />;
}

export function MeditationFAQ() {
  const meditationFAQs = [
    {
      question: "How long should I meditate as a beginner?",
      answer: "Start with 5-10 minutes daily and gradually increase. Quality is more important than quantity - a focused 10-minute session is better than a distracted 30-minute session."
    },
    {
      question: "What if I can't stop my thoughts during meditation?",
      answer: "Having thoughts is completely normal. The goal isn't to stop thoughts but to observe them without judgment and gently return focus to your breath or chosen anchor."
    },
    {
      question: "What's the best time to meditate?",
      answer: "Morning meditation can set a positive tone for the day, while evening meditation can help you unwind. Choose a time when you can be consistent and won't be interrupted."
    }
  ];

  return <KnowledgeHub faqs={meditationFAQs} />;
}
