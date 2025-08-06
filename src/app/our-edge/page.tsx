import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Factory, Orbit, Dna, Bot, ShieldCheck } from "lucide-react";
import Image from "next/image";

const advantages = [
    {
        icon: BrainCircuit,
        title: "AI-Accelerated Material Discovery",
        subtitle: "Our 'Secret Sauce'",
        description: "We use a proprietary AI platform and leverage supercomputing resources to dramatically shorten R&D cycles. By simulating and predicting material properties, we can discover and validate novel battery materials in a fraction of the time it takes with traditional methods. This allows us to innovate faster and stay ahead of the curve.",
        image: { src: "https://placehold.co/600x450.png", alt: "AI discovering new materials", hint: "abstract science" }
    },
    {
        icon: Factory,
        title: "Smart Factory 4.0 Vision",
        subtitle: "The Future of Manufacturing",
        description: "Our approach to manufacturing integrates cutting-edge Industry 4.0 principles. We are designing 'digital twins' of our production lines to optimize processes before they're even built. Our commitment to sustainable, dry-coating manufacturing reduces energy consumption and environmental impact, while data-driven quality control ensures every battery meets our exacting standards.",
        image: { src: "https://placehold.co/600x450.png", alt: "A smart factory with robots and data", hint: "modern factory" }
    }
];


export default function OurEdgePage() {
    return (
        <>
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Our Competitive Edge</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Innovation at Meshesha isn't just about chemistry. It's about a fundamental reimagining of how batteries are discovered, developed, and manufactured.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-20">
                        {advantages.map((adv, index) => (
                           <div key={adv.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                <div className={`relative h-80 md:h-[450px] rounded-lg overflow-hidden ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                    <Image src={adv.image.src} alt={adv.image.alt} data-ai-hint={adv.image.hint} fill className="object-cover" />
                                </div>
                                <div className="space-y-4">
                                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-headline text-sm font-medium">
                                        {adv.subtitle}
                                    </div>
                                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{adv.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {adv.description}
                                    </p>
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
