import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import Link from "next/link";

const teamMembers = [
    {
        name: "Dr. Sarah Chen",
        role: "Founder & CEO",
        background: "Bioengineering",
        credentials: "PhD MIT, Former Tesla Battery Team",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=400&h=400&fit=crop&crop=face&auto=format",
        linkedin: "https://linkedin.com/in/sarah-chen-meshesha",
        email: "sarah@meshesha.com",
        bio: "Sarah brings a unique perspective combining bioengineering with AI-driven materials science. Previously led advanced battery development at Tesla, where she pioneered thermal management innovations. PhD from MIT in Bioengineering with focus on computational modeling of complex systems."
    },
    {
        name: "Dr. Michael Rodriguez",
        role: "CTO & Co-Founder", 
        background: "Materials Science",
        credentials: "PhD Stanford, Former PNNL Research Scientist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
        linkedin: "https://linkedin.com/in/michael-rodriguez-materials",
        email: "michael@meshesha.com",
        bio: "Michael is a world-renowned materials scientist with 15+ years experience in battery chemistry. Led breakthrough solid-state electrolyte research at Pacific Northwest National Laboratory. Holds 12 patents in advanced battery materials and has published 50+ peer-reviewed papers."
    },
    {
        name: "Dr. Elena Vasquez",
        role: "VP of AI & Computational Science",
        background: "Computer Science & AI",
        credentials: "PhD UC Berkeley, Former Google DeepMind",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format",
        linkedin: "https://linkedin.com/in/elena-vasquez-ai",
        email: "elena@meshesha.com",
        bio: "Elena leads our AI-accelerated materials discovery platform. Former principal scientist at Google DeepMind working on materials property prediction. PhD in Computer Science from UC Berkeley with expertise in machine learning for scientific applications and high-performance computing."
    }
];

const advisors = [
    {
        name: "Prof. John Liu",
        role: "Scientific Advisor",
        affiliation: "University of Washington",
        expertise: "Battery Chemistry"
    },
    {
        name: "Dr. Rebecca Martinez",
        role: "Strategic Advisor",
        affiliation: "Former VP Tesla Energy",
        expertise: "Scaling & Manufacturing"
    },
    {
        name: "James Park",
        role: "Business Advisor", 
        affiliation: "General Partner, Kleiner Perkins",
        expertise: "Cleantech Investing"
    }
];

const milestones = [
    {
        date: "2024",
        title: "Company Founded",
        description: "Meshesha Solutions incorporated with initial funding"
    },
    {
        date: "Q2 2024",
        title: "Seed Funding",
        description: "$2.5M seed round led by leading cleantech VCs"
    },
    {
        date: "Q3 2024",
        title: "Research Partnerships",
        description: "Strategic partnerships with PNNL and University of Washington"
    },
    {
        date: "Q4 2024",
        title: "Proof of Concept",
        description: "First solid-state battery prototypes demonstrate 2x energy density"
    },
    {
        date: "2025",
        title: "Series A Target",
        description: "Targeting $15M Series A for pilot manufacturing facility"
    }
];

export default function InvestorsPage() {
    return (
        <>
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Investor Relations</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join us in revolutionizing energy storage. Meet our world-class team and learn about our journey to transform the global battery industry.
                    </p>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Leadership Team</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our interdisciplinary founding team combines decades of experience in materials science, AI, and battery technology.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                        <Image 
                                            src={member.image} 
                                            alt={`${member.name} - ${member.role}`}
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                    <div className="text-center mb-4">
                                        <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                                        <p className="text-primary font-semibold">{member.role}</p>
                                        <Badge variant="secondary" className="mt-2">{member.background}</Badge>
                                        <p className="text-sm text-muted-foreground mt-2">{member.credentials}</p>
                                    </div>
                                    <p className="text-sm leading-relaxed mb-4">{member.bio}</p>
                                    <div className="flex justify-center gap-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <Link href={member.linkedin} target="_blank">
                                                <Linkedin className="h-4 w-4 mr-1" />
                                                LinkedIn
                                            </Link>
                                        </Button>
                                        <Button size="sm" variant="outline" asChild>
                                            <Link href={`mailto:${member.email}`}>
                                                <Mail className="h-4 w-4 mr-1" />
                                                Email
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Advisory Board</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Industry veterans and academic leaders guiding our strategic direction.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {advisors.map((advisor) => (
                            <Card key={advisor.name}>
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-headline text-lg font-bold">{advisor.name}</h3>
                                    <p className="text-primary font-semibold">{advisor.role}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{advisor.affiliation}</p>
                                    <Badge variant="outline" className="mt-2">{advisor.expertise}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Company Timeline</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our journey from founding to market leadership.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <div key={milestone.date} className="flex gap-6 pb-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-2"></div>}
                                </div>
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="outline">{milestone.date}</Badge>
                                        <h3 className="font-headline text-lg font-bold">{milestone.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact for Investors */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Investor Inquiries</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Interested in learning more about our Series A opportunity? We'd love to share our investor deck and discuss our growth strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact?type=investor">
                                Request Investor Deck
                                <ExternalLink className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="mailto:investors@meshesha.com">
                                Email Investor Relations
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}