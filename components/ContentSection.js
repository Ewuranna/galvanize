"use client"
import { motion } from "framer-motion"
import Image from 'next/image'

export default function ContentSection({ imageUrl, title, index, imageLeft = true, buttonLink, buttonText }) {
  return (
    <section>
      <div>
        <div className={`grid md:grid-cols-2 items-center ${!imageLeft ? "md:grid-flow-dense" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={imageLeft ? "md:order-1" : "md:order-2"}
          >
            <Image
              src={imageUrl}
              alt={title}
              width={800} 
              height={600} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`space-y-12 px-24 py-20 ${imageLeft ? "md:order-2" : "md:order-1"}`}
          >
            <p className="text-lg font-bold md:text-lg  text-gray-900">{title}</p>
            <button onClick={() => window.location.href = buttonLink} className="border border-gray-900 px-20 py-2 uppercase text-sm hover:bg-gray-900 hover:text-white transition-colors mt-4">
              {buttonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
