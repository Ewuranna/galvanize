"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function CrisisManagement() {
  // Overview content with new structure
  const overview = {
    title: "Protecting What Matters Most",
    intro: "In the digital age, your reputation can be your greatest asset or your most significant vulnerability. At Galvanize, we specialize in protecting and enhancing the reputations of African creators and influencers.",
    bulletPoints: [
      {
        title: "Rapid Response Protocol",
        description: "Our team is available 24/7 to address emerging crises, implementing swift action plans that minimize damage and control the narrative."
      },
      {
        title: "Strategic Communication Planning",
        description: "We develop tailored communication strategies that address concerns while reinforcing your core values and maintaining audience trust."
      },
      {
        title: "Media Training",
        description: "We prepare you for difficult interviews and public statements, ensuring you communicate effectively under pressure."
      },
      {
        title: "Reputation Monitoring",
        description: "Using advanced tools, we continuously track mentions of your name and brand across all platforms to identify potential issues early."
      },
      {
        title: "Proactive Risk Assessment",
        description: "We identify potential vulnerabilities in your public presence and develop preventative measures before problems arise."
      },
      {
        title: "Reputation Rebuilding",
        description: "After navigating a crisis, we implement long-term strategies to restore and strengthen your public image and audience relationships."
      }
    ],
    conclusion: "Our crisis management services provide both proactive strategies to prevent issues and reactive solutions when challenges arise. We understand the unique pressures faced by public figures and provide the support needed to navigate complex situations.",
    image: "/african.jpg",
    imageAlt: "Reputation protection"
  };

  return (
    <ServicePageTemplate
      title="Reputation & Crisis Management"
      description="Your reputation is invaluable, and we're here to safeguard it. Whether dealing with a crisis or enhancing your long-term image, we've got you covered with crisis communication, ongoing reputation management, and damage control."
      image="/podcaster.jpg"
      overview={overview}
      ctaText="Protect Your Most Valuable Asset"
    />
  );
} 