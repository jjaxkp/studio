import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Cpu, Factory } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EdgeTeaserSection() {
  return (
    <section id="our-edge-teaser" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Our Competitive Edge
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We don't just build better batteries; we've reinvented the entire process. Our unique fusion of artificial intelligence and advanced manufacturing sets us apart, accelerating innovation while driving down costs.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold">AI-Accelerated Discovery</h3>
                  <p className="text-muted-foreground mt-1">Our "secret sauce": using supercomputing to shorten R&D cycles from years to months.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Factory className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold">Smart Factory 4.0</h3>
                  <p className="text-muted-foreground mt-1">A vision for sustainable, data-driven manufacturing with digital twins and quality control.</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-8" size="lg">
              <Link href="/our-edge">
                Learn About Our Edge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://placehold.co/600x450.png" 
              alt="AI and manufacturing process visualization" 
              data-ai-hint="abstract ai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
