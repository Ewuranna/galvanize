"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  // Service data with images and descriptions
  const services = [
    {
      id: "talent-representation",
      title: "End-to-End Talent Representation",
      image: "/brown.jpg",
      description: "We handle all the essentials so you can focus on what you do best—creating. Our full-service approach includes brand and legal support, contract negotiation, and partnerships that align with your values and audience.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/talent-representation"
    },
    {
      id: "pr-brand-management",
      title: "PR & Brand Management",
      image: "/african.jpg",
      description: "Your personal brand is your biggest asset, and we make sure it stands out. We handle everything from media outreach to long-term positioning, including media relations, crisis management, and social strategy.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/pr-brand-management"
    },
    {
      id: "crisis-management",
      title: "Reputation & Crisis Management",
      image: "/podcaster.jpg",
      description: "Your reputation is invaluable, and we&apos;re here to safeguard it. Whether dealing with a crisis or enhancing your long-term image, we&apos;ve got you covered with crisis communication, ongoing reputation management, and damage control.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/crisis-management"
    },
    {
      id: "brand-deals",
      title: "Brand Deal Pitching",
      image: "/african lady creator.jpg",
      description: "We connect you with brands that understand your influence and align with your values. Our team is adept at identifying and negotiating high-value partnerships, ensuring brand alignment, and managing relationships.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/brand-deals"
    },
    {
      id: "content-strategy",
      title: "Content Strategy & Growth",
      image: "/brown.jpg",
      description: "Expand your reach and build a lasting digital presence with strategies tailored to your platform. Whether you&apos;re focused on YouTube, LinkedIn, or others, we create the blueprint for success with creative direction, audience growth, and video production.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/content-strategy"
    },
    {
      id: "creative-development",
      title: "Creative Development & Road Management",
      image: "/podcaster.jpg",
      description: "For our rising stars, we offer personalized development and on-the-ground support to maximize your potential, including creative coaching and tour & public appearance management.",
      color: "from-[#000000]/70 to-[#000000]/30",
      path: "/services/creative-development"
    }
  ];

  // State to track which service is expanded
  const [expandedService, setExpandedService] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Toggle service expansion
  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add refs to sections
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, services.length + 2); // +2 for hero and intro sections
  }, [services.length]);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section - With Green Overlay */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="h-screen flex items-end relative overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/podcaster.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
          {/* Green overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#199aa1]/70 to-[#199aa1]/30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.div 
              className="h-1 w-24 bg-white mb-8"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Galvanize, we provide a comprehensive suite of services designed to accelerate the
              careers of African talent and influencers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section - Redesigned */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-20 md:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Elevate Your Influence</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Whether you&apos;re an emerging creator or an established influencer, our tailored services
                  ensure you stay ahead of the curve, amplify your reach, and build a lasting legacy.
                </p>
                <div className="h-1 w-20 bg-[#199aa1]"></div>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src="/african.jpg"
                  alt="African talent"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List - Updated Design with M&C Saatchi-inspired transitions */}
      <section className="bg-black">
        <div className="w-full">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              ref={el => sectionRefs.current[index + 2] = el}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`relative w-full h-[90vh] flex items-end overflow-hidden group cursor-pointer transition-all duration-700 ${activeSection === index + 2 ? 'scale-100' : 'scale-95 opacity-80'}`}
              onClick={() => toggleService(service.id)}
            >
              {/* Background Image with Parallax Effect */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{
                  y: activeSection === index + 2 ? 0 : 20,
                  scale: activeSection === index + 2 ? 1 : 1.05,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`}></div>
              </motion.div>
              
              {/* Content Container - Positioned at bottom with slide-up animation */}
              <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-between items-center w-full pb-16 md:pb-24"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
                </div>
                
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    rotate: expandedService === service.id ? 90 : 0,
                    x: expandedService === service.id ? -20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.div>
              
              {/* Expandable Content with Smooth Slide */}
              <motion.div 
                className="absolute inset-0 bg-black/95 flex items-center justify-center z-20"
                initial={{ x: "100%" }}
                animate={{ 
                  x: expandedService === service.id ? "0%" : "100%"
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="max-w-3xl mx-auto text-white">
                    <motion.h3 
                      className="text-3xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: expandedService === service.id ? 1 : 0,
                        y: expandedService === service.id ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-xl leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: expandedService === service.id ? 1 : 0,
                        y: expandedService === service.id ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: expandedService === service.id ? 1 : 0,
                        y: expandedService === service.id ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link 
                        href={service.path} 
                        className="inline-flex items-center text-white border-b-2 border-white pb-1 hover:text-[#199aa1] hover:border-[#199aa1] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#199aa1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Influence?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let&apos;s work together to amplify your reach and build a lasting legacy.
            </p>
            <Link href="#" className="inline-block bg-white text-[#199aa1] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 