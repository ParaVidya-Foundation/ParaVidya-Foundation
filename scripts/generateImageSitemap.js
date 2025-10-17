// Image Sitemap Generator for ParaVidya Foundation
// Generates comprehensive image sitemap for better image SEO

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://paravidyafoundation.com';
const OUTPUT_DIR = './public';
const SITEMAP_FILE = 'image-sitemap.xml';

// Define image directories to include
const IMAGE_DIRECTORIES = [
  '/Carousel',
  '/Gallery',
  '/Team',
  '/Videos',
  '/VideoSeries',
  '/Workshop',
  '/Yoga',
  '/SmallCarousel',
  '/stackedcards',
  '/makingchange',
  '/programs',
  '/awareness',
  '/Join',
  '/Icons'
];

// Define image extensions to include
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Define pages and their associated images
const PAGE_IMAGES = {
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

// Function to get all images from a directory
function getImagesFromDirectory(dirPath) {
  const images = [];
  const fullPath = path.join(OUTPUT_DIR, dirPath);
  
  if (!fs.existsSync(fullPath)) {
    return images;
  }
  
  const files = fs.readdirSync(fullPath);
  
  files.forEach(file => {
    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively get images from subdirectories
      images.push(...getImagesFromDirectory(path.join(dirPath, file)));
    } else if (IMAGE_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext))) {
      images.push(path.join(dirPath, file).replace(/\\/g, '/'));
    }
  });
  
  return images;
}

// Function to generate image sitemap XML
function generateImageSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
  xml += 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  // Add images for each page
  Object.entries(PAGE_IMAGES).forEach(([pageUrl, images]) => {
    if (images && images.length > 0) {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}${pageUrl}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      
      images.forEach(imagePath => {
        if (fs.existsSync(path.join(OUTPUT_DIR, imagePath))) {
          xml += '    <image:image>\n';
          xml += `      <image:loc>${SITE_URL}${imagePath}</image:loc>\n`;
          
          // Add image caption if available
          const imageName = path.basename(imagePath, path.extname(imagePath));
          const caption = imageName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          xml += `      <image:caption>${caption}</image:caption>\n`;
          
          // Add image title
          xml += `      <image:title>${caption}</image:title>\n`;
          
          xml += '    </image:image>\n';
        }
      });
      
      xml += '  </url>\n';
    }
  });
  
  // Add images from directories
  IMAGE_DIRECTORIES.forEach(dir => {
    const images = getImagesFromDirectory(dir);
    if (images.length > 0) {
      // Create a virtual page for each directory
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}/gallery</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.6</priority>\n';
      
      images.slice(0, 50).forEach(imagePath => { // Limit to 50 images per directory
        xml += '    <image:image>\n';
        xml += `      <image:loc>${SITE_URL}${imagePath}</image:loc>\n`;
        
        const imageName = path.basename(imagePath, path.extname(imagePath));
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

// Generate and write the sitemap
function createImageSitemap() {
  try {
    const sitemap = generateImageSitemap();
    const outputPath = path.join(OUTPUT_DIR, SITEMAP_FILE);
    
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log(`✅ Image sitemap generated successfully: ${SITEMAP_FILE}`);
    console.log(`📁 Location: ${outputPath}`);
    
    // Log statistics
    const imageCount = (sitemap.match(/<image:loc>/g) || []).length;
    console.log(`📊 Total images included: ${imageCount}`);
    
  } catch (error) {
    console.error('❌ Error generating image sitemap:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  console.log('🚀 Starting image sitemap generation...');
  createImageSitemap();
}

module.exports = { createImageSitemap, generateImageSitemap };
