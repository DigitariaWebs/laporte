"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import type { ReactElement } from 'react';

export default function AboutUs(): ReactElement {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-brand-offwhite py-16 text-brand-black"
      aria-label="À propos de nous"
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
            À propos
          </h1>
          <h2 className="mt-4 font-display text-2xl uppercase tracking-wide text-brand-red md:text-3xl">
            Restaurant la Porte des Laurentides
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-brand-black/90">
                Le Restaurant la Porte des Laurentides propose un menu diversifié rempli d'options délicieuses pour satisfaire toutes les envies. Des pizzas savoureuses aux brochettes magnifiquement présentées, en passant par tout ce qui se trouve entre les deux, il y en a pour tous les goûts.
              </p>
              
              <p className="mt-6 text-lg leading-relaxed text-brand-black/90">
                Le restaurant est fier de sa présentation culinaire, s'assurant que chaque plat soit non seulement savoureux mais aussi un régal pour les yeux. Les clients peuvent également se faire plaisir avec leurs poutines préférées, plats gratinés et sous-marins, tous préparés avec des ingrédients de haute qualité et des techniques culinaires expertes.
              </p>
              
              <p className="mt-6 text-lg leading-relaxed text-brand-black/90">
                Le restaurant offre également un service de livraison, permettant aux clients de savourer leurs plats préférés dans le confort de leur foyer. En plus des options alimentaires délectables, le restaurant propose également une variété de boissons pour accompagner le repas, en faisant l'endroit parfait pour profiter d'une expérience culinaire satisfaisante.
              </p>
              
              <p className="mt-6 text-lg leading-relaxed text-brand-black/90">
                Avec un accent mis sur la fourniture de nourriture et de boissons de premier ordre, le Restaurant la Porte des Laurentides est un incontournable pour tous ceux qui recherchent une expérience culinaire mémorable.
              </p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-red p-8 text-white shadow-lg"
            >
              <h3 className="mb-4 font-display text-2xl uppercase">Coordonnées</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    802 Rue Saint-Isidore<br />
                    Saint-Lin - Laurentides, QC J5M 2V4<br />
                    Canada
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                  <a 
                    href="tel:+14504391711" 
                    className="hover:underline focus:underline"
                  >
                    +1 450-439-1711
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[600px] bg-white shadow-lg"
          >
            <div className="h-full w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.234567890123!2d-73.95123456789!3d45.85167123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a543bbf1111%3A0x1234567890abcdef!2s802%20Rue%20Saint-Isidore%2C%20Saint-Lin-Laurentides%2C%20QC%20J5M%202V4%2C%20Canada!5e0!3m2!1sen!2sca!4v1673456789012!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant la Porte des Laurentides - Localisation"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom spacing */}
        <div className="mt-16" />
      </div>
    </section>
  );
}