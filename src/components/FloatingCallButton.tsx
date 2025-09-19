"use client";

import { Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import Image from 'next/image';
export default function FloatingCallButton(): ReactElement {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="tel:+14504391711"
        className="group relative flex items-center justify-center w-20 h-20 bg-brand-red text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Appeler le restaurant"
      >
        <Image src="/images/redCabin1.png" alt="Appeler le restaurant" width={55} height={55} />
        
        {/* Pulse animation */}
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
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Appeler maintenant
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
        </div>
      </motion.a>
    </motion.div>
  );
}
