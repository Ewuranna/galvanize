"use client"
import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, X } from 'lucide-react'

// Gallery data - in a real application, this would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: "Influencer Brand Campaign",
    category: "brand-deals",
    image: "/african.jpg",
    description: "Successful partnership between leading African creator and global fashion brand",
    featured: true
  },
  {
    id: 2,
    title: "Content Creator Workshop",
    category: "content-strategy",
    image: "/brown.jpg",
    description: "Strategic content planning session with rising YouTube stars",
    featured: false
  },
  {
    id: 3,
    title: "PR Launch Event",
    category: "pr-management",
    image: "/podcaster.jpg",
    description: "Exclusive media event for major product launch with celebrity endorsement",
    featured: true
  },
  {
    id: 4,
    title: "Talent Signing Ceremony",
    category: "talent-representation",
    image: "/african lady creator.jpg",
    description: "Welcoming new talent to our representation roster",
    featured: false
  },
  {
    id: 5,
    title: "Crisis Management Success",
    category: "crisis-management",
    image: "/brown.jpg",
    description: "Behind the scenes of reputation recovery strategy",
    featured: false
  },
  {
    id: 6,
    title: "Creative Direction Session",
    category: "creative-development",
    image: "/podcaster.jpg",
    description: "Developing unique visual identity for emerging talent",
    featured: true
  },
  {
    id: 7,
    title: "Social Media Campaign",
    category: "content-strategy",
    image: "/african.jpg",
    description: "Multi-platform content strategy implementation",
    featured: false
  },
  {
    id: 8,
    title: "Brand Partnership Negotiation",
    category: "brand-deals",
    image: "/african lady creator.jpg",
    description: "Securing premium partnership terms for our talent",
    featured: false
  },
  {
    id: 9,
    title: "Media Training Workshop",
    category: "pr-management",
    image: "/brown.jpg",
    description: "Preparing talent for high-profile interviews and appearances",
    featured: true
  },
  {
    id: 10,
    title: "Tour Management",
    category: "creative-development",
    image: "/podcaster.jpg",
    description: "Coordinating successful multi-city appearance tour",
    featured: false
  },
  {
    id: 11,
    title: "Contract Negotiation",
    category: "talent-representation",
    image: "/african.jpg",
    description: "Securing favorable terms for major platform deal",
    featured: false
  },
  {
    id: 12,
    title: "Reputation Monitoring",
    category: "crisis-management",
    image: "/african lady creator.jpg",
    description: "Proactive brand sentiment analysis and management",
    featured: true
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Work" },
  { id: "brand-deals", name: "Brand Deals" },
  { id: "content-strategy", name: "Content Strategy" },
  { id: "pr-management", name: "PR Management" },
  { id: "talent-representation", name: "Talent Representation" },
  { id: "crisis-management", name: "Crisis Management" },
  { id: "creative-development", name: "Creative Development" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filter gallery items based on active category and search query
  useEffect(() => {
    let filtered = galleryItems;
    
    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Apply search filter if there's a query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(filtered);
  }, [activeCategory, searchQuery]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Open item detail modal
  const openItemDetail = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close item detail modal
  const closeItemDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Toggle search bar
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus the search input when opened
      setTimeout(() => {
        document.getElementById("gallery-search")?.focus();
      }, 100);
    } else {
      // Clear search when closed
      setSearchQuery("");
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/brown.jpg"
            alt="Our Gallery"
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
              Our Portfolio
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gallery
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our work with Africa&apos;s most influential creators and brands
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-white sticky top-0 z-30 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Category Filters */}
            <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar w-full md:w-auto">
              <div className="flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-[#199aa1] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search Button and Input */}
            <div className="relative mt-4 md:mt-0">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "250px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-0"
                  >
                    <input
                      id="gallery-search"
                      type="text"
                      placeholder="Search gallery..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#199aa1] focus:border-transparent"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-full ${
                  isSearchOpen ? "bg-[#199aa1] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium text-gray-600">No items found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`group cursor-pointer overflow-hidden rounded-xl shadow-lg ${
                      item.featured ? "md:col-span-2" : ""
                    }`}
                    onClick={() => openItemDetail(item)}
                  >
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                      
                      {/* Category Tag */}
                      <div className="absolute top-4 left-4 bg-[#199aa1]/90 text-white text-xs px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.description}
                        </p>
                        <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                          <span>View Details</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeItemDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[50vh]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeItemDetail}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute top-4 left-4 bg-[#199aa1] text-white text-xs px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === selectedItem.category)?.name}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/services/${selectedItem.category}`}
                    className="inline-flex items-center text-[#199aa1] font-medium hover:underline"
                  >
                    View Related Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={closeItemDetail}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join the ranks of Africa&apos;s most successful creators and influencers. Let&apos;s build your legacy together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-white text-[#199aa1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom CSS for hiding scrollbars while maintaining functionality */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Footer />
    </main>
  )
} 