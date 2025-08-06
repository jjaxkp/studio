import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Atom, Dna, Cpu } from 'lucide-react';

const teamDisciplines = [
    { name: 'Chemical Engineering', icon: Atom },
    { name: 'Materials Science', icon: Dna },
    { name: 'Computer Science', icon: Cpu },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Our Vision</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            To power the next industrial revolution with sustainable, safe, and high-performance energy storage solutions for everyone, everywhere.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">An Interdisciplinary Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                    The future of battery technology cannot be solved by a single discipline. At Meshesha Solutions, we've built a world-class team that unites the best and brightest minds from chemical engineering, materials science, and computer science. This fusion of expertise allows us to tackle challenges from all angles, creating holistic solutions that are chemically sound, materially advanced, and intelligently designed.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    {teamDisciplines.map((d) => (
                        <div key={d.name} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                            <d.icon className="h-5 w-5 text-primary" />
                            <span className="font-medium text-sm">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden">
                <Image src="https://placehold.co/600x450.png" alt="A diverse team of scientists and engineers collaborating" data-ai-hint="team collaboration" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                         <Image src="https://placehold.co/400x400.png" alt="Founder of Meshesha Solutions" data-ai-hint="professional portrait" fill className="object-cover"/>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl font-bold mb-4">A Note From Our Founder</h2>
                    <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground relative">
                        <p className="mb-4">"My background is in bioengineering, where we model complex biological systems to solve medical problems. I realized the same principles could revolutionize materials science. By applying a systems-level, AI-driven understanding to battery chemistry, we're not just iterating—we're creating entirely new possibilities."</p>
                        <p className="font-semibold text-foreground not-italic">— Founder, Meshesha Solutions</p>
                    </blockquote>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
