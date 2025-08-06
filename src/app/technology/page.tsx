import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BatteryCharging, ShieldCheck, Thermometer, Zap, Award, Activity } from 'lucide-react';
import Image from 'next/image';

const techData = {
  ssb: {
    id: 'solid-state',
    title: 'Solid-State Batteries (SSBs)',
    icon: BatteryCharging,
    description: 'The next frontier in energy storage, positioned as our primary focus.',
    details: 'Solid-state batteries represent a paradigm shift from traditional lithium-ion batteries. By replacing the liquid electrolyte with a solid material, they offer a "game-changer" trifecta of benefits: enhanced safety by eliminating flammable components, significantly higher energy density for longer range and smaller packs, and faster charging capabilities. Our R&D is laser-focused on overcoming current manufacturing hurdles to bring this superior technology to the mass market for electric vehicles and consumer electronics.',
    advantages: [
      { icon: ShieldCheck, text: 'Unmatched Safety Profile' },
      { icon: Zap, text: 'Higher Energy Density' },
      { icon: Activity, text: 'Faster Charging Speeds' },
      { icon: Award, text: 'Longer Cycle Lifespan' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&crop=center&auto=format',
      alt: 'Advanced solid-state battery technology visualization',
      hint: 'battery technology'
    },
  },
  zinc: {
    id: 'zinc-ion',
    title: 'Zinc-Ion Batteries',
    icon: ShieldCheck,
    description: 'The sustainable and safe choice for long-duration grid storage.',
    details: 'For grid-scale energy storage, safety, cost, and sustainability are paramount. Our Zinc-Ion batteries are engineered to meet these demands. Utilizing abundant, non-toxic materials like zinc and a water-based electrolyte, they are inherently non-flammable and environmentally benign. This technology is the ideal solution for storing renewable energy (like solar and wind) for long durations, ensuring a stable and cost-effective power grid for communities and industries.',
    advantages: [
      { icon: ShieldCheck, text: 'Inherently Non-Flammable' },
      { icon: Zap, text: 'Cost-Effective Materials' },
      { icon: Activity, text: 'Sustainable & Recyclable' },
      { icon: Award, text: 'Ideal for Grid Storage' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center&auto=format',
      alt: 'Grid-scale energy storage system with renewable integration',
      hint: 'grid storage'
    },
  },
  heat: {
    id: 'heat-resistant',
    title: 'Heat-Resistant Li-Ion',
    icon: Thermometer,
    description: 'Eliminating costly thermal management systems for specialized applications.',
    details: 'A major cost and complexity driver in current EV and industrial battery packs is the Battery Thermal Management System (BTMS). Our innovation focuses on developing advanced Li-Ion cells that can operate safely and efficiently at elevated temperatures. This breakthrough eliminates the need for bulky, expensive, and failure-prone cooling systems, enabling more compact, reliable, and cost-effective battery packs for high-performance vehicles and demanding industrial equipment.',
    advantages: [
      { icon: ShieldCheck, text: 'Operates at High Temps' },
      { icon: Zap, text: 'Eliminates BTMS Costs' },
      { icon: Activity, text: 'Increases System Reliability' },
      { icon: Award, text: 'Enables Compact Designs' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&crop=center&auto=format',
      alt: 'Industrial battery systems operating in high-temperature environments',
      hint: 'industrial battery'
    },
  },
};

export default function TechnologyPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Our Core Technologies</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are commercializing three distinct battery technologies, each tailored to solve specific challenges and disrupt key markets.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ssb" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12">
              <TabsTrigger value="ssb" className="py-2.5">Solid-State</TabsTrigger>
              <TabsTrigger value="zinc" className="py-2.5">Zinc-Ion</TabsTrigger>
              <TabsTrigger value="heat" className="py-2.5">Heat-Resistant Li-Ion</TabsTrigger>
            </TabsList>
            {Object.values(techData).map((tech) => (
              <TabsContent key={tech.id} value={tech.id} id={tech.id} className="pt-10">
                <Card className="border-none shadow-none">
                  <CardContent className="grid md:grid-cols-2 gap-8 lg:gap-12 p-0">
                    <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
                       <Image src={tech.image.src} alt={tech.image.alt} data-ai-hint={tech.image.hint} fill className="object-cover"/>
                    </div>
                    <div>
                      <tech.icon className="h-10 w-10 text-primary mb-4" />
                      <h2 className="font-headline text-3xl md:text-4xl font-bold">{tech.title}</h2>
                      <p className="mt-2 text-lg text-muted-foreground">{tech.description}</p>
                      <p className="mt-6 text-base leading-relaxed">{tech.details}</p>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {tech.advantages.map((adv) => (
                          <div key={adv.text} className="flex items-center gap-3">
                            <adv.icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{adv.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
