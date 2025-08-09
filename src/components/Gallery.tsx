"use client";

import Image from 'next/image';
import { assets } from '@/config/assets';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';

export default function Gallery(): ReactElement {
  return (
    <section 
      id="gallery" 
      className="min-h-screen bg-brand-offwhite py-16 text-brand-black"
      aria-label="Galerie photos"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-display text-6xl uppercase tracking-wider text-brand-black md:text-8xl">
            Galerie
          </h1>
          <p className="mt-4 text-lg text-brand-black/80">
            Découvrez l'ambiance et nos créations culinaires
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assets.gallery.images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
              className="group relative aspect-square overflow-hidden bg-white shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Image number indicator */}
              <div className="absolute bottom-4 left-4 bg-brand-red px-3 py-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16" />
      </div>
    </section>
  );
}