"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#199AA1]/95 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="py-2 px-4 sm:px-6 lg:px-8 max-w-10xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-primary text-2xl font-bold">
              <Image src="/Galvanize Logo.jpg" alt="Galvanize Logo" width={100} height={100} />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/about" className="text-white hover:text-primary">
                About Us
              </Link>
              <Link href="/" className="text-white hover:text-primary">
                Our Services
              </Link>
              <Link href="/" className="text-white hover:text-primary">
                Our Gallery
              </Link>
              <Link href="/" className="text-white hover:text-primary">
                Contact Us
              </Link>
              <Link href="/" className="bg-none border-2 text-white px-4 py-2 rounded-md hover:bg-primary/90">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#199AA1]/95 backdrop-blur-sm ${isOpen ? 'block' : 'hidden'}`}>
          <Link 
            href="/about" 
            className="text-white hover:bg-[#199AA1]/80 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className="text-white hover:bg-[#199AA1]/80 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </Link>
          <Link 
            href="/gallery" 
            className="text-white hover:bg-[#199AA1]/80 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Our Gallery
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:bg-[#199AA1]/80 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-[#199AA1] hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}

