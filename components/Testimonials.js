import { motion } from "framer-motion";
import Image from 'next/image';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Jack O'Holleran",
    role: "Co-Founder / CEO of Skale",
    text: "The team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
    image: "/brown.jpg"
  },
  {
    name: "Allison",
    role: "Marketing Manager",
    text: "We were delighted with the 3D map for our website. Great communication throughout the outcome.",
    image: "/podcaster.jpg"
  },
  {
    name: "Jack O'Holleran",
    role: "Co-Founder / CEO of Skale",
    text: "The team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
    image: "/brown.jpg"
  },
  {
    name: "Allison",
    role: "Marketing Manager",
    text: "We were delighted with the 3D map for our website. Great communication throughout the outcome.",
    image: "/podcaster.jpg"
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const containerRef = useRef(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="full-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-top col-span-1">
            <p className="text-sm font-bold uppercase">clients</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12"
            >
              What people say about us?
            </motion.h2>
            
          </div>

          {/* Right Column - Carousel of Testimonials */}
          <div className="col-span-2">
          <div 
            ref={containerRef}
            className="overflow-x-scroll scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex space-x-6 pb-12 pl-8" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[400px] p-8 rounded-xl bg-white shadow-md"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <div className="flex">
                <div className="relative w-12 h-12 mr-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt="Testimonial author"
                    layout="fill"
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                  
                 </div>
                 </div>
                 <p className="text-black text-sm font-medium mb-12">{testimonial.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}