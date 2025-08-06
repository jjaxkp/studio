import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="jane.doe@example.com" />
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="linkedin">LinkedIn Profile or Portfolio URL</Label>
                                        <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Your Message</Label>
                                        <Textarea id="message" placeholder="Tell us why you're a great fit for Meshesha Solutions and what you're passionate about." className="min-h-[120px]" />
                                    </div>
                                    <Button type="submit" className="w-full">Submit Application</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
