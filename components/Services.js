"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

const services = [
  {
    title: "Reptiles",
    description: "Adopt a scaly and fascinating reptile.",
    color: "bg-[#E8F87C]",
    icon: "🦎",
    images: Array(5).fill(
      "/african-lady-creator.jpg",
    ),
  },
  {
    title: "Birds",
    description: "Adopt a beautiful and intelligent avian friend.",
    color: "bg-[#FF8B94]",
    icon: "🐦",
    images: Array(5).fill(
      "/african-lady-creator.jpg",
    ),
  },
  {
    title: "Cats",
    description: "Adopt a cuddly and playful feline companion.",
    color: "bg-[#FFC75F]",
    icon: "🐱",
    images: Array(5).fill(
      "/african-lady-creator.jpg",
    ),
  },
  {
    title: "Dogs",
    description: "Adopt a loyal and loving canine friend.",
    color: "bg-[#845EC2]",
    icon: "🐕",
    images: Array(5).fill(
      "/african-lady-creator.jpg",
    ),
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-white">Our Services</h2>

        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 text-black bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden mx-12">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `${-100 * currentIndex}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    className={`flex-shrink-0 w-full md:w-[600px] ${service.color} rounded-3xl p-8 relative`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="absolute top-6 right-6 w-12 h-12 border-2 border-black/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    <div className="flex -space-x-4 mb-8">
                      {service.images.map((img, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${service.title} ${i + 1}`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <h3 className="text-4xl font-bold mb-3">{service.title}</h3>
                    <p className="text-lg text-black/70">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 text-black bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
