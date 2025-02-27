"use client"
import ServicePageTemplate from "@/components/ServicePageTemplate"

export default function CreativeDevelopment() {
  // Overview content with new structure
  const overview = {
    title: "Unlocking Your Creative Potential",
    intro: "At Galvanize, we believe that every creator has unique talents and perspectives that deserve to be nurtured and amplified. Our Creative Development service is designed to help you refine your craft, expand your capabilities, and maximize your impact.",
    bulletPoints: [
      {
        title: "Personalized Creative Coaching",
        description: "Our experienced mentors provide tailored guidance to help you develop your unique voice, refine your storytelling, and enhance your production quality."
      },
      {
        title: "Tour & Appearance Management",
        description: "We handle the logistics of live events, speaking engagements, and public appearances, allowing you to focus on delivering exceptional experiences."
      },
      {
        title: "Content Production Support",
        description: "From concept development to final editing, our team provides hands-on assistance with creating high-quality content that stands out."
      },
      {
        title: "Audience Engagement Strategies",
        description: "We develop customized approaches to deepen your connection with your audience, fostering loyalty and building a sustainable community."
      },
      {
        title: "Performance Preparation",
        description: "For live appearances and recorded content, we provide coaching on presentation skills, public speaking, and on-camera techniques."
      },
      {
        title: "Brand Identity Development",
        description: "We help you craft a distinctive personal brand that authentically represents your creative vision and resonates with your target audience."
      }
    ],
    conclusion: "From personalized coaching to hands-on production support, we provide the guidance and resources you need to take your creative work to the next level and build a sustainable career in the digital landscape.",
    image: "/african.jpg",
    imageAlt: "Creative development"
  };

  return (
    <ServicePageTemplate
      title="Creative Development & Road Management"
      description="For our rising stars, we offer personalized development and on-the-ground support to maximize your potential, including creative coaching and tour & public appearance management."
      image="/podcaster.jpg"
      overview={overview}
      ctaText="Ready to Elevate Your Creative Work?"
    />
  );
} 