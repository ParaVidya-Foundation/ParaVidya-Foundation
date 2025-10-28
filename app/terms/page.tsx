import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Paravidya Foundation",
  description: "Read the official Terms & Conditions of Paravidya Foundation – governing your use of our website, courses, donations, and services.",
  keywords: [
    "Paravidya Foundation",
    "Terms and Conditions",
    "Spiritual NGO",
    "Dharma",
    "Seva",
    "Courses",
    "Donations",
    "Yoga",
    "Ayurveda"
  ],
  openGraph: {
    title: "Terms & Conditions | Paravidya Foundation",
    description: "Legal Terms and Conditions for using the Paravidya Foundation website, services, and spiritual learning platform.",
    type: "website",
    siteName: "Paravidya Foundation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <main className="min-h-screen text-gray-800 px-6 sm:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before using our website and services.
            </p>
          </header>

          {/* Content */}
          <section className="space-y-10 text-justify leading-relaxed">
            <p>
              <strong>Effective Date:</strong> 28th October 2025 <br />
              <strong>Last Updated:</strong> 28th October 2025
            </p>

            <p>
              Welcome to <strong>Paravidya Foundation</strong> (“we,” “our,”
              “us”). These Terms & Conditions (“Terms”) govern your use of our
              website, online courses, donation services, and any other
              activities organized by Paravidya Foundation. By accessing or
              using our services, you agree to comply with and be legally bound
              by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">1. About Paravidya Foundation</h2>
            <p>
              Paravidya Foundation is a registered spiritual NGO devoted to
              spreading Vedic knowledge, Sanatan Dharma, and holistic living.
              Our offerings include spiritual discourses, workshops, online
              courses, community service programs, and pay-as-you-wish learning
              modules designed to promote Dharma, Seva, and inner growth.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">2. Acceptance of Terms</h2>
            <p>
              By using our website or participating in our services, you confirm
              that you have read, understood, and agreed to these Terms. If you
              do not agree, please refrain from using our platform.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">3. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use our website or
              register for any course or program. If you are under 18, parental
              or guardian consent is required.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">4. Use of Website and Content</h2>
            <p>
              The website and its content—including text, images, videos,
              course material, and spiritual resources—are owned by Paravidya
              Foundation and protected by intellectual property laws.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                You may access and use the content for personal, non-commercial, and educational purposes only.
              </li>
              <li>
                You may not reproduce, distribute, modify, or create derivative
                works from our content without written permission.
              </li>
              <li>
                Any misuse, plagiarism, or unauthorized use of our materials may
                result in legal action.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-orange-700">5. Courses, Donations & Payments</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Paravidya Foundation offers both free and pay-as-you-wish
                courses. Any payment made voluntarily supports our charitable
                initiatives.
              </li>
              <li>
                All payments and donations are processed through secure
                third-party gateways. We do not store your card or banking
                information.
              </li>
              <li>
                Donations and payments are generally non-refundable. However, in
                case of accidental transactions, you may contact us within 7
                days for review.
              </li>
              <li>
                Certificates of completion for courses (if applicable) will only
                be issued upon fulfilling the course requirements.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-orange-700">6. Account Registration</h2>
            <p>
              Some areas of our website may require you to create an account.
              You agree to:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials confidential</li>
              <li>
                Be responsible for all activities under your account, including
                course access and submissions
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-orange-700">7. Limitation of Liability</h2>
            <p>
              Paravidya Foundation and its members, trustees, or volunteers
              shall not be held liable for any direct, indirect, incidental, or
              consequential damages resulting from your use of our website or
              services. All spiritual guidance and content are intended for
              educational and spiritual enrichment purposes, not as a substitute
              for professional advice.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">8. External Links</h2>
            <p>
              Our website may contain links to third-party websites for your
              convenience. We are not responsible for their content, privacy
              policies, or practices.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">9. Intellectual Property Rights</h2>
            <p>
              All content, trademarks, logos, and materials displayed on this
              site belong to Paravidya Foundation unless otherwise noted. Use of
              our materials without authorization is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to our
              services at any time, without prior notice, if we believe a user
              has violated these Terms or acted unlawfully.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">11. Refunds & Cancellations</h2>
            <p>
              As a charitable organization, most contributions are considered
              donations and are non-refundable. However, exceptions may be made
              for duplicate payments or genuine errors, reviewed on a
              case-by-case basis.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">12. Privacy</h2>
            <p>
              Your use of our website is also governed by our{" "}
              <a
                href="/privacy"
                className="text-orange-600 underline"
              >
                Privacy Policy
              </a>
              , which explains how we collect, use, and protect your data.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">13. Disclaimer</h2>
            <p>
              All spiritual teachings, courses, and resources shared by
              Paravidya Foundation are meant to promote self-awareness and
              holistic growth. Results may vary for each individual, and no
              specific outcomes are guaranteed.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">14. Amendments</h2>
            <p>
              We may modify or update these Terms at any time without prior
              notice. The latest version will always be available on this page.
              Continued use of our site after changes implies acceptance.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">15. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising shall be subject to the
              exclusive jurisdiction of the courts located in Gurugram, Haryana.
                
            </p>

            <h2 className="text-2xl font-semibold text-orange-700">16. Contact Us</h2>
            <p>
              For any queries regarding these Terms & Conditions, please
              contact:  
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
