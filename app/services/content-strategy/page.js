"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function ContentStrategy() {
  // Overview content with new structure
  const overview = {
    title: "Strategic Growth for African Creators",
    intro: "In today's competitive digital landscape, creating great content is just the beginning. At Galvanize, we help African creators develop comprehensive content strategies that drive meaningful growth and engagement.",
    bulletPoints: [
      {
        title: "Data-Driven Content Planning",
        description: "We analyze audience behavior and platform algorithms to develop content strategies that maximize reach, engagement, and conversion."
      },
      {
        title: "Platform-Specific Growth Strategies",
        description: "Whether you're focused on YouTube, Instagram, TikTok, or LinkedIn, we create tailored approaches that leverage each platform's unique opportunities."
      },
      {
        title: "Audience Engagement Tactics",
        description: "We implement proven methods to increase meaningful interactions, build community, and foster loyalty among your followers."
      },
      {
        title: "Content Calendar Development",
        description: "Our team creates structured content schedules that maintain consistency while allowing flexibility for trending topics and spontaneous creativity."
      },
      {
        title: "Performance Analytics",
        description: "We provide detailed reporting on content performance, audience growth, and engagement metrics with actionable insights for continuous improvement."
      },
      {
        title: "Trend Identification",
        description: "We stay ahead of emerging content formats and topics, helping you capitalize on new opportunities before they become mainstream."
      }
    ],
    conclusion: "Our data-driven approach identifies opportunities for expansion, optimizes your content for maximum impact, and helps you build a sustainable digital presence that resonates with your target audience.",
    image: "/african.jpg",
    imageAlt: "Content strategy"
  };

  return (
    <ServicePageTemplate
      title="Content Strategy & Growth"
      description="Expand your reach and build a lasting digital presence with strategies tailored to your platform. Whether you're focused on YouTube, LinkedIn, or others, we create the blueprint for success with creative direction, audience growth, and video production."
      image="/brown.jpg"
      overview={overview}
      ctaText="Ready to Accelerate Your Growth?"
    />
  );
} 