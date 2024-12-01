import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center font-consolas">
            <Code className="h-8 w-8 text-spotify-green mr-3" />
            <span className="text-xl font-bold text-white">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 font-consolas">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 overflow-hidden rounded-lg"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <AnimatePresence>
                  {hoveredItem === index && (
                    <motion.span
                      className="absolute inset-0 bg-spotify-green z-0 rounded-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                    />
                  )}
                </AnimatePresence>

                <span 
                  className={`relative z-10 transition-colors duration-300 ${
                    hoveredItem === index 
                      ? 'text-black' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </motion.button>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-spotify-green hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
