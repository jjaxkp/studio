export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meshesha Solutions",
    "description": "Revolutionary battery technology company developing solid-state, zinc-ion, and heat-resistant Li-ion batteries with AI-driven innovation.",
    "url": "https://meshesha.com",
    "logo": "https://meshesha.com/logo.png",
    "foundingDate": "2024",
    "industry": "Battery Technology",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Innovation Park",
        "addressLocality": "Palo Alto",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@meshesha.com"
    },
    "sameAs": [
      "https://linkedin.com/company/meshesha-solutions",
      "https://twitter.com/MesheshaSolutions"
    ],
    "keywords": "battery technology, solid-state batteries, zinc-ion batteries, energy storage, electric vehicle batteries, grid storage, AI material discovery",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Solid-State Battery Technology",
          "description": "Next-generation solid-state batteries with enhanced safety, energy density, and charging speed"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Product",
          "name": "Zinc-Ion Battery Technology",
          "description": "Sustainable and safe zinc-ion batteries for long-duration grid storage applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product", 
          "name": "Heat-Resistant Li-Ion Technology",
          "description": "Advanced Li-ion batteries that operate at elevated temperatures without thermal management systems"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}