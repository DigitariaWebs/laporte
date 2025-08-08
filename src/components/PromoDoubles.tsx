"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

type PromoCardProps = {
  title: string;
  subtitle?: string;
  image: string;
  price: string;
};

function PromoCard({ title, subtitle, image, price }: PromoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.5 }}
      className="group relative h-72 overflow-hidden border border-white/10 bg-black shadow-none transition-all hover:-translate-y-1.5 hover:shadow-card md:h-96"
    >
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image src={image} alt="Promo visuel" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      {/* Overlay content */}
      <div className="relative z-10 p-6">
        <h3 className="font-display text-5xl md:text-6xl uppercase leading-none">
          {title}
          {subtitle ? <span className="block text-3xl md:text-4xl">{subtitle}</span> : null}
        </h3>
      </div>
      <div className="absolute bottom-4 right-4 z-10 bg-white px-3 py-1 font-display text-2xl text-black">
        {price}
      </div>
    </motion.article>
  );
}

export default function PromoDoubles(): ReactElement {
  return (
    <section className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-2">
      <PromoCard
        title="Pots Lundi Mason"
        image="/images/mojitos.png"
        price="10.95"
      />
      <PromoCard
        title="Heures Joyeuses"
        subtitle="Lundi au Mercredi"
        image="/images/drinks.png"
        price="7.95"
      />
    </section>
  );
}


