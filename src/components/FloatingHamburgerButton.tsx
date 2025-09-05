"use client";

import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface FloatingHamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function FloatingHamburgerButton({ isOpen, onToggle }: FloatingHamburgerButtonProps): ReactElement {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
      className="md:hidden fixed top-6 right-6 z-50"
    >
      <motion.button
        onClick={onToggle}
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-red text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.div>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-brand-red rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}
