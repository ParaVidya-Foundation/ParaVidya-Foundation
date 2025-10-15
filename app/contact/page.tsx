import { Metadata } from "next"
import { Youtube, Instagram, Facebook } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | ParaVidya Foundation",
  description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. Reach out for inquiries about our courses, partnerships, and community programs.",
  keywords: [
    "contact paravidya foundation",
    "yoga classes inquiry",
    "spiritual workshops contact",
    "wellness programs inquiry",
    "meditation classes contact",
    "ayurveda workshops inquiry",
    "sanskrit learning contact",
    "foundation partnerships"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | ParaVidya Foundation",
    description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. Reach out for inquiries about our courses and programs.",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ParaVidya Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch | ParaVidya Foundation",
    description: "Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Connect with ParaVidya Foundation for yoga classes, spiritual workshops, and wellness programs. 
              We&apos;re here to guide you on your journey to holistic wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-orange-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@paravidyafoundation.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-orange-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-orange-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Programs</h3>
                      <p className="text-gray-600">Yoga, Meditation, Ayurveda, Sanskrit, Spiritual Workshops</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.youtube.com/@ParaVidyaFoundation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/paravidya.foundation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579922933190" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="yoga-classes">Yoga Classes</option>
                    <option value="meditation-sessions">Meditation Sessions</option>
                    <option value="ayurveda-workshops">Ayurveda Workshops</option>
                    <option value="sanskrit-learning">Sanskrit Learning</option>
                    <option value="spiritual-workshops">Spiritual Workshops</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your interest in our programs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}