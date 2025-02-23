"use client"
import { motion } from "framer-motion"
import Image from 'next/image'

export default function ContentSection({ imageUrl, title, index, imageLeft = true, buttonLink, buttonText }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? "md:grid-flow-dense" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={imageLeft ? "md:order-1" : "md:order-2"}
          >
            <Image
              src="/african-lady-creator.jpg"
              alt={title}
              width={800} 
              height={600} 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${imageLeft ? "md:order-2" : "md:order-1"}`}
          >
            <p className="text-1.5xl md:text-2xl text-gray-900">{title}</p>
            <button onClick={() => window.location.href = buttonLink} className="border border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors mt-4">
              {buttonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
