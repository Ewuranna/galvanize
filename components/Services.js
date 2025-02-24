"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "End-to-End Talent Representation",
    description: "Adopt a scaly and fascinating reptile.",
    color: "bg-[#E8F87C]",
    icon: "🦎",
    images: [
      "/brown.jpg",
      "/podcaster.jpg",
      "/african.jpg",
      "/Galvanize logo.jpg",
      "/african.jpg"
    ].map(img => img || "/podcaster.jpg"),
    link: "/services/talent-representation"
  },
  {
    title: "PR & Brand Management",
    description: "Adopt a beautiful and intelligent avian friend.",
    color: "bg-[#FF8B94]",
    icon: "🐦",
    images: Array(5).fill("/african lady creator.jpg"),
    link: "/services/pr-brand-management"
  },
  {
    title: "Reputation & Crisis Management",
    description: "Adopt a cuddly and playful feline companion.",
    color: "bg-[#FFC75F]",
    icon: "🐱",
    images: Array(5).fill("/african lady creator.jpg"),
    link: "/services/crisis-management"
  },
  {
    title: "Brand Deal Pitching",
    description: "Adopt a loyal and loving canine friend.",
    color: "bg-[#845EC2]",
    icon: "🐕",
    images: Array(5).fill("/african lady creator.jpg"),
    link: "/services/brand-deals"
  },
  {
    title: "Content Strategy & Growth",
    description: "Adopt a loyal and loving canine friend.",
    color: "bg-[#845EC2]",
    icon: "🐕",
    images: Array(5).fill("/brown.jpg"),
    link: "/services/content-strategy"
  },
  {
    title: "Creative Development & Road Management",
    description: "Adopt a loyal and loving canine friend.",
    color: "bg-[#845EC2]",
    icon: "🐕",
    images: Array(5).fill("/podcaster.jpg"),
    link: "/services/creative-development"
  },
]

export default function Services() {
  const containerRef = useRef(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-xl text-gray-400">Discover how we can help you grow</p>
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef}
        className="overflow-x-scroll scrollbar-hide"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="flex space-x-6 pb-8 pl-8" style={{ width: 'max-content' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex-none w-[400px] p-8 rounded-3xl ${service.color} transform transition-transform duration-300 hover:scale-105 relative min-h-[300px]`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={service.link}
                className="absolute bottom-8 right-8 group"
              >
                <ArrowRight 
                  className="w-6 h-6 transform transition-transform group-hover:translate-x-1" 
                  strokeWidth={2}
              />
              </Link>

              <div className="absolute bottom-8 left-8 space-y-4">
                <div className="flex -space-x-4 object-cover">
                  {service.images.map((img, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative">
                      <Image
                        src={img || "/african.jpg"}
                        alt={`${service.title} ${i + 1}`}
      
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl mb-2">{service.title}</h3>
                  <p className="text-sm text-black/70">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-8 flex justify-center items-center space-x-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ scaleX: scrollXProgress }}
          />
        </div>
      </div>
    </section>
  )
}
