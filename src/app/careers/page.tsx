'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CareerFormData {
    firstName: string;
    lastName: string;
    email: string;
    linkedin: string;
    message: string;
}

export default function CareersPage() {
    return (
        <>
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">Join the Revolution</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are looking for the best and brightest engineers, scientists, and operators to help us build the future of energy. If you are passionate, driven, and want to make a global impact, we want to hear from you.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Express Your Interest</CardTitle>
                                <CardDescription>
                                    We may not have a specific role open right now, but we're always looking for exceptional talent. Fill out the form below to be considered for future opportunities.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CareerForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

function CareerForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<CareerFormData>({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            toast({
                title: "Error",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        
        try {
            // For now, just simulate success - in a real app this would submit to a careers collection
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            toast({
                title: "Application Submitted!",
                description: "Thank you for your interest. We'll review your application and get back to you soon.",
            });
            
            // Reset form
            setFormData({ firstName: '', lastName: '', email: '', linkedin: '', message: '' });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit application. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Jane" 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required 
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane.doe@example.com" 
                    required 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile or Portfolio URL</Label>
                <Input 
                    id="linkedin" 
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/..." 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're a great fit for Meshesha Solutions and what you're passionate about." 
                    className="min-h-[120px]" 
                    required 
                />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
        </form>
    );
}
