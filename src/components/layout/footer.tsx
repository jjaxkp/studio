import Link from 'next/link';
import { Zap } from 'lucide-react';

const navLinks = [
  { href: '/technology', label: 'Technology' },
  { href: '/our-edge', label: 'Our Edge' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Zap className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">Meshesha</span>
            </Link>
            <p className="text-sm text-muted-foreground">The Future of Energy Storage.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-headline font-semibold text-foreground">Innovations</h3>
              <Link href="/technology#solid-state" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Solid-State
              </Link>
              <Link href="/technology#zinc-ion" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Zinc-Ion
              </Link>
              <Link href="/technology#heat-resistant" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Heat-Resistant Li-Ion
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-headline font-semibold text-foreground">Company</h3>
              {navLinks.slice(2).map((link) => (
                 <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                    {link.label}
                 </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-headline font-semibold text-foreground">Legal</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Meshesha Solutions, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
