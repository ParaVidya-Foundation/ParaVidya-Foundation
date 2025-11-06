import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Paravidya Foundation",
  description: "Read the official Privacy Policy of Paravidya Foundation – a spiritual NGO devoted to Dharma, Seva, and the spreading of Vedic wisdom.",
  keywords: [
    "Paravidya Foundation",
    "Privacy Policy",
    "Spiritual NGO",
    "Dharma",
    "Seva",
    "Bhagavad Gita",
    "Yoga",
    "Ayurveda"
  ],
  openGraph: {
    title: "Privacy Policy | Paravidya Foundation",
    description: "Learn how Paravidya Foundation collects, protects, and uses your information while serving humanity through Dharma and Seva.",
    type: "website",
    siteName: "Paravidya Foundation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen text-gray-800 px-6 sm:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy matters to us at Paravidya Foundation.
            </p>
          </header>

          {/* Content */}
          <section className="space-y-10 text-justify leading-relaxed">
            <p>
              <strong>Effective Date:</strong> 28th October 2025 <br />
              <strong>Last Updated:</strong> 28th October 2025
            </p>

            <p>
              At <strong>Paravidya Foundation</strong> (“we,” “our,” “us”), your
              privacy is of utmost importance. This Privacy Policy outlines how
              we collect, use, protect, and disclose your information when you
              visit our website or engage with our spiritual and charitable
              initiatives.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">1. Introduction</h2>
            <p>
              ✨ <strong>Introducing Paravidya Foundation – A Journey Towards Dharma & Seva</strong> ✨
              In today’s fast-paced world, material progress often overshadows
              spiritual growth. Paravidya Foundation is on a humble yet powerful
              mission to restore balance between <em>Seva</em> (selfless
              service) and <em>Wisdom</em>, bringing the essence of Sanatan
              Dharma into everyday life.
            </p>

            <ul className="list-disc ml-6 space-y-1">
              <li>Annadaan (Food Donation)</li>
              <li>Bhagavad Gita & Sadhna Wisdom</li>
              <li>Karamkaand & Yoga</li>
              <li>Mahavidya Gyaan</li>
              <li>Ayurveda & Astrology Workshops</li>
              <li>Community Building & Awareness</li>
            </ul>

            <p>
              This Privacy Policy applies to all online and offline interactions
              with Paravidya Foundation, including donations, event
              participation, and website use.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">2. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, donation details, and registration data.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, IP
                address, pages visited, and usage data.
              </li>
              <li>
                <strong>Cookies:</strong> Used to enhance user experience and
                analyze site traffic. You may disable them in browser settings.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-orange-700">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Process donations and issue receipts</li>
              <li>Register participants for programs and events</li>
              <li>Share newsletters and spiritual updates</li>
              <li>Improve website performance and community experience</li>
              <li>Comply with legal and tax obligations</li>
            </ul>

            <p>
              We do <strong>not</strong> sell, rent, or trade your personal
              information with any third party.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">
              4. Donation and Payment Information
            </h2>
            <p>
              All donations are processed through secure, trusted payment
              gateways. Paravidya Foundation does not store card details. Data
              is retained only for compliance and issuing donation receipts.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">5. Data Protection & Security</h2>
            <p>
              We implement strict administrative, technical, and physical
              measures to protect your data from unauthorized access or misuse.
              While we strive for maximum security, no online platform is
              entirely immune from risks.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">6. Third-Party Links</h2>
            <p>
              Our website may contain external links. We are not responsible for
              their privacy practices or content. Please review their respective
              privacy policies before engaging with them.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">7. Your Rights</h2>
            <p>
              You may request to access, correct, or delete your personal
              information. You can also withdraw consent to receive
              communications anytime by contacting us at{" "}
              <a
                href="mailto:paravidyafoundation@gmail.com"
                className="text-orange-600 underline"
              >
                paravidyafoundation@gmail.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">8. Children’s Privacy</h2>
            <p>
              Our programs are for general audiences. We do not knowingly
              collect data from children under 13 without parental consent.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">9. Policy Updates</h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page with the updated date.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">10. Contact Us</h2>
            <p>
              For privacy concerns or questions, reach out to:  
              📧{" "}
              <a
                href="mailto:paravidyafoundation@gmail.com"
                className="text-orange-600 underline"
              >
                paravidyafoundation@gmail.com
              </a>{" "}
              <br />
              🏢 6C, Sector-14, Mehrauli Road, Gurugram, Haryana 122001, India <br />
              🌐 https://paravidyafoundation.com
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-16 border-t border-orange-100 pt-8 text-center text-gray-500 text-sm">
            <p>
              © 2025 Paravidya Foundation. All rights
              reserved.
            </p>
            <p className="mt-2 italic text-orange-600">
              “Serving Humanity through Dharma, Wisdom & Compassion.”
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
