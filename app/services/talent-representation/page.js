"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function TalentRepresentation() {
  // Overview content with new structure
  const overview = {
    title: "Your Success Is Our Priority",
    intro: "At Galvanize, we believe that exceptional talent deserves exceptional representation. Our end-to-end talent representation service is designed to handle the business side of your career, allowing you to focus on your creative pursuits.",
    bulletPoints: [
      {
        title: "Contract Negotiation & Review",
        description: "We ensure you get fair deals with favorable terms, protecting your interests and maximizing your earning potential across all opportunities."
      },
      {
        title: "Strategic Brand Partnerships",
        description: "We connect you with brands that align with your values and audience, creating authentic partnerships that enhance your credibility and revenue."
      },
      {
        title: "Legal Support & Guidance",
        description: "Our team provides comprehensive legal protection, from intellectual property rights to contract disputes, keeping you safe in a complex industry."
      },
      {
        title: "Career Planning & Development",
        description: "We work with you to create a long-term vision for your career, identifying opportunities for growth and diversification in your creative journey."
      },
      {
        title: "Revenue Stream Diversification",
        description: "Beyond traditional income sources, we help you explore merchandising, licensing, speaking engagements, and other revenue channels."
      }
    ],
    conclusion: "We work exclusively with African creators and influencers who are making an impact in their respective fields, providing them with the support, guidance, and opportunities they need to thrive in a competitive landscape.",
    image: "/african.jpg",
    imageAlt: "African talent"
  };

  return (
    <ServicePageTemplate
      title="End-to-End Talent Representation"
      description="We handle all the essentials so you can focus on what you do best—creating. Our full-service approach includes brand and legal support, contract negotiation, and partnerships that align with your values and audience."
      image="/brown.jpg"
      overview={overview}
      ctaText="Ready to Take Your Career to the Next Level?"
    />
  );
} 