"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function PRBrandManagement() {
  // Overview content with new structure
  const overview = {
    title: "Elevate Your Brand Presence",
    intro: "In today's digital landscape, your personal brand is your most valuable asset. At Galvanize, we specialize in crafting and managing compelling brand narratives for African creators and influencers.",
    bulletPoints: [
      {
        title: "Strategic Media Placement",
        description: "We secure coverage in relevant publications, podcasts, and platforms that enhance your visibility and credibility with your target audience."
      },
      {
        title: "Brand Identity Development",
        description: "Our team helps you create a cohesive visual and messaging identity that authentically represents your unique voice and resonates with your audience."
      },
      {
        title: "Social Media Strategy",
        description: "We develop comprehensive social media plans that increase engagement, grow your following, and strengthen your connection with your community."
      },
      {
        title: "Crisis Communication Planning",
        description: "We prepare proactive strategies to protect your reputation and respond effectively to any challenges that may arise in your public career."
      },
      {
        title: "Audience Engagement Optimization",
        description: "Through data analysis and trend monitoring, we help you maximize meaningful interactions with your audience across all platforms."
      }
    ],
    conclusion: "Our PR and brand management services are designed to elevate your public image, secure strategic media placements, and create a cohesive brand identity that opens doors to new opportunities.",
    image: "/podcaster.jpg",
    imageAlt: "Media presence"
  };

  return (
    <ServicePageTemplate
      title="PR & Brand Management"
      description="Your personal brand is your biggest asset, and we make sure it stands out. We handle everything from media outreach to long-term positioning, including media relations, crisis management, and social strategy."
      image="/african.jpg"
      overview={overview}
      ctaText="Ready to Elevate Your Brand?"
    />
  );
} 