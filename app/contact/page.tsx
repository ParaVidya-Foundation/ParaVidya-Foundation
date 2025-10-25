import { Metadata } from "next"
import { MapPin, Phone, Mail } from "lucide-react"
import { SEOHead } from "@/components/seo/SEOHead"
import { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo-enhanced"
import ContactUs from "@/components/about/Contactus"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | ParaVidya Foundation",
  description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. Reach out for inquiries about our courses, partnerships, and community programs. We're here to guide you on your spiritual journey.",
  keywords: [
    "contact paravidya foundation",
    "yoga classes inquiry",
    "spiritual workshops contact",
    "wellness programs inquiry",
    "meditation classes contact",
    "ayurveda workshops inquiry",
    "sanskrit learning contact",
    "foundation partnerships",
    "yoga teacher training contact",
    "meditation instructor certification",
    "holistic healing consultation",
    "spiritual counseling contact",
    "wellness retreats inquiry",
    "corporate wellness programs",
    "volunteer opportunities",
    "donation support contact"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | ParaVidya Foundation",
    description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. Reach out for inquiries about our courses and programs.",
    type: "website",
    url: "https://paravidyafoundation.com/contact",
    images: [
      {
        url: "https://paravidyafoundation.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ParaVidya Foundation - Spiritual Wellness & Yoga Courses",
      },
    ],
    siteName: "ParaVidya Foundation",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch | ParaVidya Foundation",
    description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs.",
    images: ["https://paravidyafoundation.com/og-contact.jpg"],
    site: "@ParaVidyaNGO",
    creator: "@ParaVidyaNGO",
  },
  alternates: {
    canonical: "https://paravidyafoundation.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// FAQ data for structured data
const faqData = [
  {
    question: "How can I contact ParaVidya Foundation?",
    answer: "You can contact us through our contact form, email us at paravidyafoundation@gmail.com, call us at +91-98711-30487, or visit our office at 6C, Sector-14, Mehrauli Road, Gurugram, Haryana 122001, India."
  },
  {
    question: "What are your office hours?",
    answer: "Our office is open Monday to Friday from 9:00 AM to 6:00 PM, Saturday from 9:00 AM to 5:00 PM, and closed on Sundays. We respond to emails within 24 hours."
  },
  {
    question: "Do you offer online yoga classes?",
    answer: "Yes, we offer both online and offline yoga classes. Our programs include yoga for stress management, anger management, sleep therapy, depression support, and general wellness."
  },
  {
    question: "How can I become a volunteer?",
    answer: "We welcome volunteers! You can contact us through our contact form or email us directly. We have opportunities in teaching, health support, and community outreach programs."
  },
  {
    question: "Do you offer corporate wellness programs?",
    answer: "Yes, we provide comprehensive corporate wellness programs including yoga sessions, meditation workshops, stress management, and team building activities for organizations."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including UPI, bank transfers, credit cards, and cash payments. All donations and course fees can be paid through our secure payment system."
  }
];

export default function ContactPage() {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* SEO Head Component */}
      <SEOHead
        title="Contact Us - Get in Touch | ParaVidya Foundation"
        description="Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. Reach out for inquiries about our courses, partnerships, and community programs."
        canonical="https://paravidyafoundation.com/contact"
        keywords={[
          "contact paravidya foundation",
          "yoga classes inquiry",
          "spiritual workshops contact",
          "wellness programs inquiry",
          "meditation classes contact",
          "ayurveda workshops inquiry",
          "sanskrit learning contact",
          "foundation partnerships"
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, localBusinessSchema, faqSchema]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-yellow-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get in <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Ready to start your spiritual journey? Have questions about our programs? 
              We&apos;re here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  <span>paravidyafoundation@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <span>+91-98711-30487</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  <span>Gurugram, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactUs />

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Find answers to common questions about our programs and services
                </p>
              </div>

              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of people who have transformed their lives through our programs. 
                Contact us today to begin your spiritual and physical wellness journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </a>
                <a 
                  href="/yoga" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Browse Programs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}