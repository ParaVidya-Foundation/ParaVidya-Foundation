import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/yoga/heroyoga';

export const metadata: Metadata = {
  title: 'Wellness Yoga – Para Vidya',
  description: 'Holistic wellness through gentle yoga practices for overall health and vitality.',
};

export default function WellnessYogaPage() {
  return (
    <div>
      <HeroSection
        title="Wellness Yoga"
        subtitle="A holistic blend of movement, breath, and stillness to nurture vitality, balance, and inner connection—at every age and stage."
        imageSrc="https://images.pexels.com/photos/3822190/pexels-photo-3822190.jpeg"
        imageAlt="Gentle yoga practice symbolizing holistic wellness"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Explore Our Yoga Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover tailored programs for stress relief, better sleep, improved immunity, and overall wellness. Each session integrates mindful movement, functional breathwork, and guided relaxation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}