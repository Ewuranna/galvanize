"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function ServicePageTemplate({ 
  title, 
  description, 
  image,
  overview,
  ctaText = "Ready to Elevate Your Influence?"
}) {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section - Full screen with centered content */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image || "/podcaster.jpg"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div 
              className="inline-block bg-[#199aa1] text-white px-4 py-1 rounded-full mb-6 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Galvanize Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="#details" 
                className="inline-flex items-center text-white border-b-2 border-[#199aa1] pb-1 hover:text-[#199aa1] transition-colors"
                scroll={false}
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1 h-2 bg-white/80 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Details Section - With modern layout and bullet points */}
      {overview && (
        <section id="details" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="max-w-6xl mx-auto"
            >
              {/* Section header */}
              <motion.div 
                className="text-center mb-20"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{overview.title}</h2>
                <div className="h-1 w-24 bg-[#199aa1] mx-auto"></div>
              </motion.div>
              
              {/* Content with image and bullet points */}
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <motion.div 
                  className="lg:w-1/2 order-2 lg:order-1"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                  }}
                >
                  {/* Introduction paragraph */}
                  {overview.intro && (
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {overview.intro}
                    </p>
                  )}
                  
                  {/* Bullet points with bold main points */}
                  <div className="space-y-6 mb-8">
                    {overview.bulletPoints && overview.bulletPoints.map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-4"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.5, delay: index * 0.1 } 
                          }
                        }}
                      >
                        <div className="mt-1 flex-shrink-0">
                          <div className="bg-[#199aa1] rounded-full p-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-1">{point.title}</h3>
                          <p className="text-gray-700">{point.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Conclusion paragraph if available */}
                  {overview.conclusion && (
                    <p className="text-lg text-gray-700 leading-relaxed mt-8">
                      {overview.conclusion}
                    </p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="lg:w-1/2 order-1 lg:order-2 relative h-80 md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl"
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                  }}
                >
                  <Image
                    src={overview.image || "/african.jpg"}
                    alt={overview.imageAlt || "Service overview"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section - With gradient background */}
      <section className="py-24 bg-gradient-to-r from-[#0d8087] to-[#199aa1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{ctaText}</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let&apos;s work together to amplify your reach and build a lasting legacy in the digital landscape.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-white text-[#199aa1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 