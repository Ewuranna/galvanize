"use client"
import { useState } from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/african.jpg"
            alt="Contact Us"
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
              Get in Touch
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to elevate your influence? We&apos;re here to help you build your legacy in the digital landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
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
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Contact Form */}
              <motion.div 
                className="lg:w-3/5"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#199aa1] focus:border-[#199aa1] outline-none transition"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#199aa1] focus:border-[#199aa1] outline-none transition"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#199aa1] focus:border-[#199aa1] outline-none transition"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#199aa1] focus:border-[#199aa1] outline-none transition"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center bg-[#199aa1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0d8087] transition-colors shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} 
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                    </button>
                  </div>
                  
                  {submitSuccess && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                className="lg:w-2/5"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#199aa1]/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-[#199aa1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">info@galvanize.com</p>
                      <p className="text-gray-600">support@galvanize.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#199aa1]/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-[#199aa1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">+234 123 456 7890</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#199aa1]/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-[#199aa1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600 mt-1">
                        123 Creator Avenue<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-[#199aa1]/10 p-3 rounded-full hover:bg-[#199aa1]/20 transition-colors">
                        <Instagram className="w-6 h-6 text-[#199aa1]" />
                      </a>
                      <a href="#" className="bg-[#199aa1]/10 p-3 rounded-full hover:bg-[#199aa1]/20 transition-colors">
                        <Twitter className="w-6 h-6 text-[#199aa1]" />
                      </a>
                      <a href="#" className="bg-[#199aa1]/10 p-3 rounded-full hover:bg-[#199aa1]/20 transition-colors">
                        <Linkedin className="w-6 h-6 text-[#199aa1]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gray-200">
          {/* This would be replaced with an actual map component in production */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#199aa1] mx-auto mb-4" />
              <p className="text-gray-600">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0d8087] to-[#199aa1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Elevate Your Influence?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let&apos;s work together to amplify your reach and build a lasting legacy in the digital landscape.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center bg-white text-[#199aa1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 