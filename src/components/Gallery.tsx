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

        {/* Gallery Grid - Photos removed */}
        <div className="text-center py-16">
          <p className="text-lg text-brand-black/60">
            Photos de la galerie à venir bientôt...
          </p>
        </div>

        {/* Bottom spacing */}
        <div className="mt-16" />
      </div>
    </section>
  );
}