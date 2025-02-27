"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function BrandDeals() {
  // Overview content with new structure
  const overview = {
    title: "Partnerships That Matter",
    intro: "At Galvanize, we believe that the right brand partnerships can transform your career and create significant revenue streams. We specialize in connecting African creators and influencers with brands that truly understand and value their influence.",
    bulletPoints: [
      {
        title: "Brand Alignment",
        description: "Ensuring every deal complements your personal brand and audience."
      },
      {
        title: "Negotiation & Contracts",
        description: " We secure lucrative deals with favorable terms and manage the complexities of contract execution"
      },
      {
        title: "Relationship Management",
        description: " Ongoing support to ensure the partnership is mutually beneficial and enduring."
      },
    ],
    image: "/brown.jpg",
    imageAlt: "Brand partnerships"
  };

  return (
    <ServicePageTemplate
      title="Brand Deal Pitching"
      description="We connect you with brands that understand your influence and align with your values. Our team is adept at identifying and negotiating high-value partnerships, ensuring brand alignment, and managing relationships."
      image="/african lady creator.jpg"
      overview={overview}
      ctaText="Ready to Secure Better Brand Deals?"
    />
  );
} 