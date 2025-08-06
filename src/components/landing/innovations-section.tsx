import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BatteryCharging, ShieldCheck, Thermometer } from 'lucide-react';

const innovations = [
  {
    icon: BatteryCharging,
    title: 'Solid-State Batteries',
    description: 'The ultimate game-changer. We are pioneering SSBs for unparalleled safety, energy density, and ultra-fast charging, setting a new standard for EVs and beyond.',
    link: '/technology#solid-state',
  },
  {
    icon: ShieldCheck,
    title: 'Sustainable Zinc-Ion',
    description: 'Our non-flammable, cost-effective Zinc-Ion batteries are the safe and sustainable choice for long-duration grid storage, ensuring a stable and reliable power supply.',
    link: '/technology#zinc-ion',
  },
  {
    icon: Thermometer,
    title: 'Heat-Resistant Li-Ion',
    description: 'By engineering Li-Ion batteries that thrive at high temperatures, we eliminate the need for complex, costly thermal management systems in demanding applications.',
    link: '/technology#heat-resistant',
  },
];

export function InnovationsSection() {
  return (
    <section id="innovations" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Three Pillars of Innovation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our multi-pronged approach to battery technology solves critical industry challenges,
            from safety and sustainability to performance and cost.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item) => (
            <Card key={item.title} className="flex flex-col items-center text-center p-6 border-2 border-transparent hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                   <item.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
