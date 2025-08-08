"use client";

import Link from 'next/link';
import { NAV_ITEMS, SOCIALS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/config/assets';
import type { ReactElement } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Sidebar(): ReactElement {
  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-screen w-[200px] flex-col border-r border-black/10 bg-white text-black"
      role="navigation"
      aria-label="Navigation principale"
    >
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-full"
      >
        <div className="flex items-center justify-center h-36 border-b border-black/10 px-2 pt-12 pb-6">
          {/* Accepts /public/logo.(svg|png|jpg) */}
          <Image
            src={assets.logo.src}
            alt={assets.logo.alt}
            width={assets.logo.width}
            height={assets.logo.height}
            className="object-contain"
          />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Large primary items */}
          <ul className="space-y-2">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block font-display text-3xl uppercase leading-none tracking-wide hover:text-brand-red focus-visible:text-brand-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Secondary items */}
          <ul className="mt-6 space-y-2">
            {NAV_ITEMS.slice(3).map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-sm uppercase tracking-widest text-black/80 hover:text-brand-red focus-visible:text-brand-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 pb-6">
          <div className="flex items-center gap-3 pb-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center bg-brand-red text-white"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center bg-brand-red text-white"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter/X"
              className="grid h-10 w-10 place-items-center bg-brand-red text-white"
            >
              <Twitter size={18} />
            </Link>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-black/80">FR</div>
        </div>
      </motion.div>
    </aside>
  );
}


