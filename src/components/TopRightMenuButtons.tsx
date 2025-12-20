'use client';

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
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      className="fixed top-15 right-6 z-40 hidden flex-col gap-3 md:flex"
    >
      {/* Menu Livraisons Button */}
      <motion.a
        href={assets.pdfs.menu}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-brand-red focus:ring-brand-red/30 relative flex items-center justify-center rounded-lg px-6 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-4 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Menu livraisons"
      >
        <span className="font-display text-lg tracking-wide uppercase">
          Menu Livraisons
        </span>

        {/* Tooltip */}
        <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-lg bg-black px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Voir le menu de livraison
          <div className="absolute top-full left-1/2 -translate-x-1/2 transform border-4 border-transparent border-t-black"></div>
        </div>
      </motion.a>

      {/* Menu Salle à Manger Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="group text-brand-red border-brand-red focus:ring-brand-red/30 relative flex items-center justify-center rounded-lg border-2 bg-white px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-4 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu salle à manger"
          aria-expanded={isDropdownOpen}
        >
          <span className="font-display text-lg tracking-wide uppercase">
            Menu Salle à Manger
          </span>
          <ChevronDown
            className={`ml-2 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 z-50 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
            >
              <a
                href={assets.pdfs.menu2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:bg-brand-red font-display block px-6 py-3 text-lg tracking-wide uppercase transition-colors hover:text-white"
                onClick={() => setIsDropdownOpen(false)}
              >
                Menu
              </a>
              <a
                href={assets.pdfs.kidsMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:bg-brand-red font-display block border-t border-gray-200 px-6 py-3 text-lg tracking-wide uppercase transition-colors hover:text-white"
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
