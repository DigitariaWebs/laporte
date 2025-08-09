"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/config/assets';
import type { ReactElement } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
  imagesLoaded?: boolean;
  minDelayComplete?: boolean;
  loadingProgress?: number;
}

export default function LoadingScreen({ 
  onLoadingComplete, 
  duration = 4000,
  imagesLoaded = false,
  minDelayComplete = false,
  loadingProgress = 0
}: LoadingScreenProps): ReactElement {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-offwhite"
        >
          <div className="relative">
            {/* Logo Progress Bar */}
            <div className="relative">
              {/* Grey base logo */}
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={assets.logo.width * 2}
                height={assets.logo.height * 2}
                className="object-contain grayscale"
                priority
              />
              
              {/* Colored logo that reveals based on progress */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - loadingProgress}% 0 0)`
                }}
              >
                <Image
                  src={assets.logo.src}
                  alt={assets.logo.alt}
                  width={assets.logo.width * 2}
                  height={assets.logo.height * 2}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Loading text with status */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center font-display text-xl uppercase tracking-wider text-brand-black"
            >
              {!imagesLoaded ? `Chargement... ${Math.round(loadingProgress)}%` : 
               !minDelayComplete ? 'Finalisation...' : 
               'Chargement...'}
            </motion.p>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-4 flex justify-center space-x-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  }}
                  className="h-2 w-2 rounded-full bg-brand-red"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}