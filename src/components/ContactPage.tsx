"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import type { ReactElement } from 'react';

export default function ContactPage(): ReactElement {
  const [status, setStatus] = useState<string | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Merci! Nous vous répondrons bientôt.');
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-brand-offwhite py-16 text-brand-black"
      aria-label="Nous joindre"
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
            Contact
          </h1>
          <h2 className="mt-4 font-display text-2xl uppercase tracking-wide text-brand-red md:text-3xl">
            Nous joindre
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative isolate overflow-hidden">
              {/* Giant pizza behind the form */}
              <div className="pointer-events-none absolute right-0 bottom-0 -z-10">
                <Image
                  src="/images/pizza.png"
                  alt="Pizza"
                  width={600}
                  height={400}
                  className="w-[480px] translate-y-8 object-contain opacity-20"
                  aria-hidden
                />
              </div>

              <div className="bg-white p-8 shadow-lg">
                {/* Contact Info */}
                <div className="mb-8 grid grid-cols-1 gap-4">
                  <div className="text-center">
                    <h3 className="mb-4 font-display text-xl uppercase text-brand-red">Coordonnées</h3>
                    <div className="space-y-3">
                      <p className="flex items-start justify-center">
                        <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-brand-red" />
                        <span className="text-sm">
                          802 Rue Saint-Isidore<br />
                          Saint-Lin - Laurentides, QC J5M 2V4<br />
                          Canada
                        </span>
                      </p>
                      <p className="flex items-center justify-center">
                        <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-brand-red" />
                        <a 
                          href="tel:+14504391711" 
                          className="text-sm hover:text-brand-red transition-colors"
                        >
                          +1 450-439-1711
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={submit} className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:border-brand-red focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      Courriel
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:border-brand-red focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:border-brand-red focus:outline-none"
                      placeholder="Écrivez votre message..."
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-black/70">
                      Nous répondons généralement sous 24 heures ouvrables.
                    </p>
                    <button
                      type="submit"
                      className="rounded-none bg-brand-red px-6 py-3 text-white font-semibold uppercase tracking-wider hover:bg-brand-red/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                    >
                      Envoyer
                    </button>
                  </div>
                  {status && <p className="text-sm text-brand-red">{status}</p>}
                </form>
              </div>
            </div>
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