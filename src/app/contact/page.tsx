'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building, Phone } from "lucide-react";
import { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/contact";

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@meshesha.com', href: 'mailto:contact@meshesha.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Building, label: 'Headquarters', value: 'Innovation Park, Palo Alto, CA', href: '#' },
]

export default function ContactPage() {
    return (
        <>
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Get In Touch</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We welcome inquiries from investors, potential partners, and the press. Let's connect and discuss how we can shape the future of energy together.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{item.label}</h3>
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-3">
                             <Card>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                                    <CardDescription>
                                        Please fill out the form and we will get back to you shortly.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Error",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        
        try {
            await submitContactForm(formData);
            toast({
                title: "Success!",
                description: "Your message has been sent. We'll get back to you shortly.",
            });
            
            // Reset form
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    required 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com" 
                    required 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name" 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..." 
                    className="min-h-[120px]" 
                    required 
                />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Message"}
            </Button>
        </form>
    );
}
