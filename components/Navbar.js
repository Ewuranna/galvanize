"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from 'next/image';

export default function Navbar() {0
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed w-full z-50 bg-[#199AA1] backdrop-blur-sm">
     <div className=" py-2 px-8 max-w-10xl mx-auto sm:px-6 lg:px-8 ">
       <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 ">
            <Link href="/" className="text-primary text-2xl font-bold">
             <Image src="/Galvanize Logo.jpg" alt="Galvanize Logo" width={100} height={100} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#" className="text-white hover:text-primary">
                About Us
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                Our Services
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                Our Gallery
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md">
          
            <Link href="#" className="bg-none border-2 text-white px-4 py-2 rounded-md hover:bg-primary/90">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

