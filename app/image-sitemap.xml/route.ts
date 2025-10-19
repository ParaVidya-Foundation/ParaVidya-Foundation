import { NextResponse } from 'next/server'
import { seoConfig } from '@/lib/seo-enhanced'

export async function GET() {
  const baseUrl = seoConfig.siteUrl
  
  // Define all images with their metadata
  const images = [
    // Homepage images
    {
      loc: `${baseUrl}/Logo.png`,
      caption: 'ParaVidya Foundation Logo - Spiritual Wellness & Yoga',
      title: 'ParaVidya Foundation Logo',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/og-default.jpg`,
      caption: 'ParaVidya Foundation - Transform your life through ancient wisdom and modern wellness practices',
      title: 'ParaVidya Foundation - Spiritual Wellness & Yoga',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/og-home.jpg`,
      caption: 'Spiritual Wellness & Yoga Courses at ParaVidya Foundation',
      title: 'Spiritual Wellness & Yoga Courses',
      license: `${baseUrl}/terms`
    },
    
    // Carousel images
    {
      loc: `${baseUrl}/Carousel/Join.jpg`,
      caption: 'Join ParaVidya Foundation - Spiritual Community',
      title: 'Join Our Spiritual Community',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Carousel/Katha.jpg`,
      caption: 'Katha Sessions - Ancient Wisdom Stories',
      title: 'Katha Sessions',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Carousel/Ayurveda.jpg`,
      caption: 'Ayurveda Workshops - Natural Healing',
      title: 'Ayurveda Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Carousel/Workplace-Challanges.jpg`,
      caption: 'Workplace Wellness - Corporate Programs',
      title: 'Corporate Wellness Programs',
      license: `${baseUrl}/terms`
    },
    
    // Workshop images
    {
      loc: `${baseUrl}/SmallCarousel/gita.webp`,
      caption: 'Bhagavad Gita Classes - Ancient Wisdom',
      title: 'Bhagavad Gita Classes',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/yoga.webp`,
      caption: 'Yoga Workshops - Physical and Mental Wellness',
      title: 'Yoga Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/meditation.webp`,
      caption: 'Meditation Sessions - Inner Peace',
      title: 'Meditation Sessions',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/mantra.webp`,
      caption: 'Mantra Workshops - Sacred Sound Healing',
      title: 'Mantra Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/ayurveda.webp`,
      caption: 'Ayurveda Workshops - Natural Healing',
      title: 'Ayurveda Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/Tantra.webp`,
      caption: 'Tantra Workshops - Spiritual Practices',
      title: 'Tantra Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/astrology.webp`,
      caption: 'Astrology Workshops - Vedic Wisdom',
      title: 'Astrology Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/Karamkaand.webp`,
      caption: 'Karamkand Workshops - Vedic Ceremonies',
      title: 'Karamkand Workshops',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/SmallCarousel/sanskrit.webp`,
      caption: 'Sanskrit Learning - Ancient Language',
      title: 'Sanskrit Learning',
      license: `${baseUrl}/terms`
    },
    
    // Team images
    {
      loc: `${baseUrl}/Team/centre1.jpg`,
      caption: 'ParaVidya Foundation Center - Spiritual Learning Space',
      title: 'ParaVidya Foundation Center',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Sunil-Vashist.webp`,
      caption: 'Sunil Vashist - Expert Astrologer at ParaVidya Foundation',
      title: 'Sunil Vashist - Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Manoj-Kumar-Bhandari.webp`,
      caption: 'Manoj Kumar Bhandari - Expert Astrologer at ParaVidya Foundation',
      title: 'Manoj Kumar Bhandari - Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Pratap-Sheel.webp`,
      caption: 'Pratap Sheel - Expert Astrologer at ParaVidya Foundation',
      title: 'Pratap Sheel - Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Urmi-Gupta.webp`,
      caption: 'Urmi Gupta - Expert Astrologer at ParaVidya Foundation',
      title: 'Urmi Gupta - Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Kamal-Chandra.webp`,
      caption: 'Kamal Chandra - Vastu & Numerology Expert at ParaVidya Foundation',
      title: 'Kamal Chandra - Vastu Expert',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Manzett-Koushal.webp`,
      caption: 'Manzett Koushal - Tarot Card Reader at ParaVidya Foundation',
      title: 'Manzett Koushal - Tarot Reader',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Rachana-Jain.webp`,
      caption: 'Rachna Jain - Expert Astrologer at ParaVidya Foundation',
      title: 'Rachna Jain - Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Pradeep-Dalela.webp`,
      caption: 'Pradeep Dalela - KP Astrologer at ParaVidya Foundation',
      title: 'Pradeep Dalela - KP Astrologer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/Team/Neha-Verma.webp`,
      caption: 'Neha Verma - Nadi Astrologer at ParaVidya Foundation',
      title: 'Neha Verma - Nadi Astrologer',
      license: `${baseUrl}/terms`
    },
    
    // Footer and decorative images
    {
      loc: `${baseUrl}/Footer.png`,
      caption: 'ParaVidya Foundation Footer Banner',
      title: 'ParaVidya Foundation Footer',
      license: `${baseUrl}/terms`
    },
    {
      loc: `${baseUrl}/underline.png`,
      caption: 'Decorative underline for section headings',
      title: 'Decorative Underline',
      license: `${baseUrl}/terms`
    }
  ]

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption>${img.caption}</image:caption>
      <image:title>${img.title}</image:title>
      <image:license>${img.license}</image:license>
    </image:image>`).join('')}
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}