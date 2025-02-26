"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#199aa1] min-h-[70vh] flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/african.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 ">
              Shaping Digital 
              <span className="block mt-2">Influence</span>
            </h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl md:text-2xl text-white/80">
              Empowering African creators to lead and inspire on the global stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <h2 className="text-4xl font-bold mb-2">Who We Are</h2>
                <div className="w-full h-1 bg-[#199aa1]" />
              </div>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Galavanize is an end-to-end talent management agency based in Accra, Ghana. Just
                  as influencers galvanize their audiences to take action, we guide our influencers as they
                  discover their unique voice, build impactful personal brands, and create content that
                  tells compelling stories.
                </p>
                <p>
                  Through tailored strategies, hands-on coaching, and a deep understanding of digital trends,
                  we empower our creators not just to influence—but to lead.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/african.jpg"
                alt="About Galvanize"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Partnership Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl md:order-2"
            >
              <Image
                src="/brown.jpg"
                alt="Brand Partnerships"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:order-1"
            >
              <div className="inline-block">
                <h2 className="text-4xl font-bold mb-2">For Brands</h2>
                <div className="w-full h-1 bg-[#199aa1]" />
              </div>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  For brands, we offer access to a diverse roster of African influencers capable of driving
                  genuine engagement and delivering measurable results. From crafting custom
                  campaigns to securing strategic brand partnerships, we connect brands with the right
                  talent for maximum visibility and ROI.
                </p>
                <p>
                  As we embark on this exciting journey, we invite brands and creators to join us in
                  redefining the future of African influence. Let&apos;s take on the world - together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#199aa1] mb-2">100+</h3>
              <p className="text-gray-600">Creators</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#199aa1] mb-2">50M+</h3>
              <p className="text-gray-600">Audience Reach</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#199aa1] mb-2">200+</h3>
              <p className="text-gray-600">Brand Deals</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#199aa1] mb-2">5+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#199aa1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/podcaster.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/80 mb-12">Join us in shaping the future of African digital influence.</p>
            <button className="bg-white text-[#199aa1] px-12 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 