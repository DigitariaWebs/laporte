"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactElement, useState, useEffect, useRef } from 'react';
import { assets } from '@/config/assets';
import { ChevronDown } from 'lucide-react';

export default function TopRightMenuButtons(): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
      className="fixed top-6 right-6 z-40 flex-col gap-3 hidden md:flex"
    >
      {/* Menu Livraisons Button */}
      <motion.a
        href={assets.pdfs.menu}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center px-6 py-3 bg-brand-red text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Menu livraisons"
      >
        <span className="font-display text-lg uppercase tracking-wide">
          Menu Livraisons
        </span>
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Voir le menu de livraison
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      </motion.a>

      {/* Menu Salle à Manger Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="group relative flex items-center justify-center px-6 py-3 bg-white text-brand-red border-2 border-brand-red rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu salle à manger"
          aria-expanded={isDropdownOpen}
        >
          <span className="font-display text-lg uppercase tracking-wide">
            Menu Salle à Manger
          </span>
          <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50"
            >
              <a
                href={assets.pdfs.menu}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-brand-red hover:bg-brand-red hover:text-white transition-colors font-display text-lg uppercase tracking-wide"
                onClick={() => setIsDropdownOpen(false)}
              >
                Menu
              </a>
              <a
                href={assets.pdfs.kidsMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-brand-red hover:bg-brand-red hover:text-white transition-colors font-display text-lg uppercase tracking-wide border-t border-gray-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Menu Enfant
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
