"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from 'next/image';

const slides = [
  {
    title: "Empowering creators, influencers and visionaries",
    subtitle: "to turn passion into thriving careers.",
    image:"/african lady creator.jpg",    
    index: "01",
  },
  {
    title: "Celebrating Africa’s creative pulse and ",
    subtitle: "ushering it onto the global stage.",
    image:"/african.jpg",
    index: "02",
  },
  {
    title: "Cutting-edge strategies, seamless brand collaborations,",
    subtitle: "and unwavering dedication to your dreamy",
    image:"/podcaster.jpg",    
    index: "03",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

useEffect(() => {
  let interval
  if (isAutoPlaying) {
    interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // 
  }
  return () => clearInterval(interval)
}, [isAutoPlaying])
  const handleDotClick = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
   <div className="bg-[#199aa1] min-h-screen flex items-center relative overflow-hidden pt-16 pb-0 pl-8">
     <div className="w-full max-w-none mx-auto relative">
       <div className="grid grid-cols-7 gap-8 items-center">
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 col-span-3 flex flex-col h-full">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={{ duration: 1 }}
               className="space-y-6 col-span-2 text-left pt-12"
             >
               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                 {slides[currentSlide].title} <span className="block text-gray-300">{slides[currentSlide].subtitle}</span>
               </h1>
             </motion.div>
           </AnimatePresence>
         </motion.div>

         {/* Image Slider */}
         <div className="relative w-full max-w-md mx-auto col-span-4 md:max-w-lg lg:max-w-xl">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, x: 300 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -300, transition: { duration: 0.5 } }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="w-[400px] h-[400px] relative overflow-hidden"
               style={{
                 borderTopLeftRadius: "200px",
               }}
             >
               <Image
                 src={slides[currentSlide].image || "/placeholder.svg"}
                 alt={`Slide ${currentSlide + 1}`}
                 className="absolute inset-0 w-full h-full object-cover shadow-xl"
                 width={400}
                 height={400}
               />
             </motion.div>
           </AnimatePresence>
         </div>

         {/* Preview of next slide */}
         <div className="absolute right-0 w-[400px] h-[400px] overflow-hidden" style={{ right: "-350px" }}>
           <Image
             src={slides[(currentSlide + 1) % slides.length].image}
             alt="Next slide preview"
             className="absolute inset-0 w-full h-full object-cover blur-sm opacity-70 rounded-xl"
             width={400}
             height={400}
             style={{
               borderRadius: "50px"
             }}
           />
         </div>
       </div>

       {/* Navigation at bottom */}
       <div className="relative -mb-8">
         {/* Slide Navigation */}
         <div className="flex space-x-4">
           {slides.map((_, index) => (
             <button
               key={index}
               onClick={() => handleDotClick(index)}
               className={`text-white transition-opacity duration-300 ${
                 currentSlide === index ? "opacity-100" : "opacity-60"
               }`}
             >
               {String(index + 1).padStart(2, "0")}
             </button>
           ))}
         </div>

         {/* Navigation Arrows */}
         <div className="flex space-x-4 mt-4">
           <button onClick={handlePrev} className="text-white hover:text-gray-300 transition-colors">
             ←
           </button>
           <button onClick={handleNext} className="text-white hover:text-gray-300 transition-colors">
             →
           </button>
         </div>
       </div>
     </div>
   </div>
  )
}
