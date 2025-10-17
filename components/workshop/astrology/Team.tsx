import Image from "next/image";
import Head from "next/head";

interface TeamMember {
  src: any;
  name: string;
  specialty: string;
}

const galleryData: TeamMember[] = [
  { src: "/Team/Sunil-Vashist.webp", name: "Sunil Vashist", specialty: "Astrologer" },
  { src: "/Team/Manoj-Kumar-Bhandari.webp", name: "Manoj Kumar Bhandari", specialty: "Astrologer" },
  { src: "/Team/Pratap-Sheel.webp", name: "Pratap Sheel", specialty: "Astrologer" },
  { src: "/Team/Urmi-Gupta.webp", name: "Urmi Gupta", specialty: "Astrologer" },
  { src: "/Team/Kamal-Chandra.webp", name: "Kamal Chandra", specialty: "Vastu & Numerology Expert" },
  { src: "/Team/Manzett-Koushal.webp", name: "Manzett Koushal", specialty: "Tarot Card Reader" },
  { src: "/Team/Rachana-Jain.webp", name: "Rachna Jain", specialty: "Astrologer" },
  { src: "/Team/Pradeep-Dalela.webp", name: "Pradeep Dalela", specialty: "KP Astrologer" },
  { src: "/Team/Neha-Verma.webp", name: "Neha Verma", specialty: "Nadi Astrologer" },
];

export default function TeamPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paravidya Foundation",
    url: "https://paravidyafoundation.org",
    logo: "https://paravidyafoundation.org/logo.png",
    sameAs: [
      "https://www.facebook.com/paravidyafoundation",
      "https://www.instagram.com/paravidyafoundation",
    ],
    member: galleryData.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.specialty,
      worksFor: "Paravidya Foundation",
    })),
  };

  return (
    <>
      <Head>
        <title>Meet Our Expert Team | Paravidya Foundation</title>
        <meta
          name="description"
          content="Meet the Paravidya Foundation team — expert astrologers, Vastu, Numerology, and Tarot professionals guiding seekers on the path of wisdom and self-realization."
        />
        <meta
          name="keywords"
          content="Paravidya Foundation, astrologers, Vastu experts, Numerology, Tarot, KP astrology, Nadi astrology, Jyotish, spiritual guidance"
        />
        <link rel="canonical" href="https://paravidyafoundation.org/team" />

        {/* Open Graph */}
        <meta property="og:title" content="Meet Our Expert Team | Paravidya Foundation" />
        <meta
          property="og:description"
          content="Explore the wisdom and guidance of Paravidya Foundation’s expert astrologers and spiritual mentors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paravidyafoundation.org/team" />
        <meta property="og:image" content="https://paravidyafoundation.org/og-image.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section className="bg-[#FEFFF0]/60 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 font-maginia">
            Our Team
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/underline.png"
              alt="Decorative underline for section heading"
              width={180}
              height={20}
              priority
            />
          </div>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto font-BKANT px-4">
            Our experts are dedicated to guiding you on your spiritual journey through
            astrology, Vastu, and ancient Indian wisdom.
          </p>
        </div>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
          {galleryData.map((member) => (
            <figure
              key={member.name}
              className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={member.src}
                  alt={`${member.name} — ${member.specialty} at Paravidya Foundation`}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <figcaption className="text-center">
                <h3 className="text-lg font-semibold font-ANTQUAB">{member.name}</h3>
                <p className="text-sm text-gray-500 font-BKANT">{member.specialty}</p>
              </figcaption>
            </figure>
          ))}
        </main>
      </section>
    </>
  );
}
