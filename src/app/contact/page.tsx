'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building, Phone, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/contact";
import { validateEmail, validateCompanyDomain, sanitizeInput, validateMessageLength } from "@/lib/validation";
import { ErrorBoundary } from "@/components/error-boundary";

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@meshesha.com', href: 'mailto:contact@meshesha.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Building, label: 'Headquarters', value: 'Innovation Park, Palo Alto, CA', href: '#' },
]

export default function ContactPage() {
    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    )
}

function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [validationWarnings, setValidationWarnings] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
        
        // Clear previous validation errors for this field
        if (validationErrors[name]) {
            setValidationErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (validationWarnings[name]) {
            setValidationWarnings(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};
        const warnings: Record<string, string> = {};

        // Name validation
        if (!formData.name || formData.name.length < 2) {
            errors.name = 'Please enter your full name (at least 2 characters)';
        }

        // Email validation
        if (!formData.email) {
            errors.email = 'Email address is required';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
        } else {
            const domainValidation = validateCompanyDomain(formData.email);
            if (domainValidation.suggestion) {
                warnings.email = domainValidation.suggestion;
            }
        }

        // Message validation
        const messageValidation = validateMessageLength(formData.message);
        if (!messageValidation.isValid) {
            errors.message = messageValidation.error!;
        }

        setValidationErrors(errors);
        setValidationWarnings(warnings);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast({
                title: "Please correct the errors",
                description: "Check the form for validation errors and try again.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        
        try {
            await submitContactForm(formData);
            toast({
                title: "Message sent successfully!",
                description: "Thank you for reaching out. We'll get back to you within 24 hours.",
            });
            
            // Reset form
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Unable to send message",
                description: "Please check your connection and try again, or contact us directly.",
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
                    placeholder="Your Full Name" 
                    required 
                    className={validationErrors.name ? 'border-destructive' : ''}
                />
                {validationErrors.name && (
                    <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        {validationErrors.name}
                    </div>
                )}
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
                    className={validationErrors.email ? 'border-destructive' : ''}
                />
                {validationErrors.email && (
                    <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        {validationErrors.email}
                    </div>
                )}
                {validationWarnings.email && !validationErrors.email && (
                    <div className="flex items-center gap-1 text-sm text-amber-600">
                        <AlertCircle className="h-4 w-4" />
                        {validationWarnings.email}
                    </div>
                )}
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
                <Label htmlFor="message">Message * ({formData.message.length}/1000)</Label>
                <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please tell us about your inquiry, investment interest, partnership opportunity, or media request..." 
                    className={`min-h-[120px] ${validationErrors.message ? 'border-destructive' : ''}`}
                    required 
                />
                {validationErrors.message && (
                    <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        {validationErrors.message}
                    </div>
                )}
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" />
                        Sending Message...
                    </>
                ) : (
                    <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Message
                    </>
                )}
            </Button>
        </form>
    );
}
