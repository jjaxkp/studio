import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const partnerships = [
    {
        name: "Pacific Northwest National Laboratory",
        type: "Research Partnership",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=120&fit=crop&crop=center&auto=format",
        description: "Collaborative research on solid-state electrolyte materials"
    },
    {
        name: "University of Washington",
        type: "Academic Collaboration", 
        logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=120&fit=crop&crop=center&auto=format",
        description: "Joint materials science research and talent pipeline"
    },
    {
        name: "Tesla Energy",
        type: "Technology Validation",
        logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=120&fit=crop&crop=center&auto=format",
        description: "Pilot testing of heat-resistant Li-ion technology"
    },
    {
        name: "DOE Advanced Manufacturing",
        type: "Grant Partnership",
        logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=120&fit=crop&crop=center&auto=format",
        description: "$500K SBIR grant for smart manufacturing research"
    }
];

const achievements = [
    {
        title: "12 Patents Filed",
        description: "Intellectual property portfolio in solid-state and zinc-ion technologies"
    },
    {
        title: "2x Energy Density",
        description: "Demonstrated in solid-state battery prototypes vs. conventional Li-ion"
    },
    {
        title: "50+ Publications",
        description: "Peer-reviewed research papers by our team members"
    },
    {
        title: "$3M+ Funding",
        description: "Raised from leading cleantech VCs and government grants"
    }
];

export function PartnershipsSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Strategic Partnerships</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Collaborating with world-class institutions to accelerate battery innovation.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {partnerships.map((partner) => (
                        <Card key={partner.name} className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="relative w-full h-16 mb-4 rounded overflow-hidden bg-gray-100">
                                    <Image 
                                        src={partner.logo} 
                                        alt={`${partner.name} logo`}
                                        fill 
                                        className="object-cover grayscale hover:grayscale-0 transition-all"
                                    />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
                                <p className="text-xs text-primary font-medium mb-2">{partner.type}</p>
                                <p className="text-xs text-muted-foreground">{partner.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mb-8">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">Key Achievements</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement) => (
                        <div key={achievement.title} className="text-center">
                            <h4 className="font-headline text-xl font-bold text-primary mb-2">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}