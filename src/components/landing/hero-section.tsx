import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=1920&h=1080&fit=crop&crop=center&auto=format"
          alt="Abstract background representing energy storage technology"
          data-ai-hint="abstract energy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-tight">
            The Future of Energy Storage:
            <span className="block text-primary">Our Vision for Global Disruption</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conventional batteries are hitting a wall. We're breaking through with three core innovations in solid-state, zinc-ion, and heat-resistant technologies to power a cleaner, more efficient future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/technology">
                Explore Our Technology
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
