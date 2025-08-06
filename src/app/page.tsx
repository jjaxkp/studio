import { HeroSection } from '@/components/landing/hero-section';
import { InnovationsSection } from '@/components/landing/innovations-section';
import { EdgeTeaserSection } from '@/components/landing/edge-teaser-section';
import NewsSummarizer from '@/components/landing/news-summarizer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <InnovationsSection />
      <EdgeTeaserSection />
      <section id="news-summarizer" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              AI-Powered Insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Use our custom AI to get instant summaries and relevance scores for the latest battery technology news. See how emerging research aligns with our strategic focus.
            </p>
          </div>
          <NewsSummarizer />
        </div>
      </section>
    </div>
  );
}
