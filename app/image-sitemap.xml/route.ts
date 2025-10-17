// Dynamic Image Sitemap Generator for Next.js App Router
// This generates image sitemap on-demand for better SEO

import { NextResponse } from 'next/server';
import { seoConfig } from '@/lib/seo-enhanced';

// Define page images mapping
const PAGE_IMAGES: Record<string, string[]> = {
  '/': [
    '/Carousel/About-us.jpg',
    '/Carousel/Ayurveda.jpg',
    '/Carousel/Join.jpg',
    '/Carousel/Katha.jpg',
    '/Carousel/Online-Hawan.jpg',
    '/Carousel/Workplace-Challanges.jpg'
  ],
  '/about': [
    '/Team/centre1.jpg',
    '/Team/sunil_vashist.png',
    '/Team/shubham.jpeg'
  ],
  '/yoga': [
    '/Yoga/yoga-1.webp',
    '/Yoga/yoga-2.webp',
    '/Yoga/yoga-3.webp'
  ],
  '/workshop': [
    '/Workshop/workshop-1.png',
    '/Workshop/workshop-2.png',
    '/Workshop/workshop-3.png',
    '/Workshop/workshop-4.png'
  ],
  '/gallery': [
    '/Gallery/gallery-1.webp',
    '/Gallery/gallery-2.webp',
    '/Gallery/gallery-3.webp'
  ]
};

function generateImageSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
  xml += 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  // Add images for each page
  Object.entries(PAGE_IMAGES).forEach(([pageUrl, images]) => {
    if (images && images.length > 0) {
      xml += '  <url>\n';
      xml += `    <loc>${seoConfig.siteUrl}${pageUrl}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';

      images.forEach(imagePath => {
        xml += '    <image:image>\n';
        xml += `      <image:loc>${seoConfig.siteUrl}${imagePath}</image:loc>\n`;
        
        // Generate caption from filename
        const imageName = imagePath.split('/').pop()?.split('.')[0] || '';
        const caption = imageName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        xml += `      <image:caption>${caption}</image:caption>\n`;
        xml += `      <image:title>${caption}</image:title>\n`;
        
        xml += '    </image:image>\n';
      });

      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';
  return xml;
}

export async function GET() {
  try {
    const sitemap = generateImageSitemap();
    
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating image sitemap:', error);
    
    return new NextResponse('Error generating sitemap', {
      status: 500,
    });
  }
}
