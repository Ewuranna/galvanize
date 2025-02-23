"use client"
import { motion } from "framer-motion"
import Image from 'next/image'

const testimonials = [
  {
    name: "Jack O'Holleran",
    role: "Co-Founder / CEO of Skale",
    text: "The team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
  },
  {
    name: "Allison",
    role: "Product Manager",
    text: "We were delighted with the 3D map for our website. Great communication throughout the outcome.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          What people say about us?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src="/african-lady-creator.jpg"
                  alt="Testimonial author"
                  width={48}
                  height={48}
                  className="object-cover rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
