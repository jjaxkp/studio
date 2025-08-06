import { HeroSection } from '@/components/landing/hero-section';
import { InnovationsSection } from '@/components/landing/innovations-section';
import { EdgeTeaserSection } from '@/components/landing/edge-teaser-section';
import { PartnershipsSection } from '@/components/partnerships-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <InnovationsSection />
      <EdgeTeaserSection />
      <PartnershipsSection />
    </div>
  );
}
