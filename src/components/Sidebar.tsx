"use client";

import Link from 'next/link';
import { NAV_ITEMS, SOCIALS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/config/assets';
import type { ReactElement, ReactNode } from 'react';
import { Facebook, Instagram, Twitter, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const SIDEBAR_WIDTH = 200; // keep in sync with w-[200px]
const PANEL_WIDTH = 200; // same width as sidebar, adjacent panel

export default function Sidebar(): ReactElement {
  const [menuPanelOpen, setMenuPanelOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuPanelOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (menuPanelOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [menuPanelOpen]);
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
          {/* Clickable logo that goes to home */}
          <Link href="/" className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
            <Image
              src={assets.logo.src}
              alt={assets.logo.alt}
              width={assets.logo.width}
              height={assets.logo.height}
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Large primary items */}
          <ul className="space-y-2">
            {/* Menu trigger opens a full-height panel to the right */}
            <li>
              <button
                type="button"
                onClick={() => setMenuPanelOpen((v) => !v)}
                className="flex w-full items-center justify-between font-display text-3xl uppercase leading-none tracking-wide hover:text-brand-red focus-visible:text-brand-red"
                aria-expanded={menuPanelOpen}
                aria-controls="sidebar-menu-overlay"
              >
                <span>Menus</span>
                <Plus className={`h-6 w-6 transition-transform ${menuPanelOpen ? 'rotate-45' : ''}`} />
              </button>
            </li>

            {/* The rest big items */}
            {NAV_ITEMS.slice(0, 4).map((item) => (
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
            {NAV_ITEMS.slice(4).map((item) => (
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
        {/* Full-screen overlay container portal so the panel sits on top of everything */}
        <BodyPortal>
          <AnimatePresence>
            {menuPanelOpen && (
              <motion.div
                className="fixed inset-0 z-[9999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Click-away + blur area to the right of the static sidebar */}
                <div
                  className="absolute top-0 right-0 bottom-0 bg-transparent backdrop-blur-sm"
                  style={{ left: SIDEBAR_WIDTH }}
                  onClick={() => setMenuPanelOpen(false)}
                />

                <motion.aside
                  id="sidebar-menu-overlay"
                  initial={{ x: PANEL_WIDTH, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: PANEL_WIDTH, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute top-0 h-screen bg-brand-red text-white"
                  style={{ left: SIDEBAR_WIDTH, width: PANEL_WIDTH }}
                  role="dialog"
                  aria-label="Menu PDFs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setMenuPanelOpen(false)}
                    className="absolute right-4 top-4 grid h-8 w-8 place-items-center text-white/90 hover:text-white"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="h-full overflow-y-auto p-6">
                    <ul className="space-y-6">
                      <li>
                        <a href={assets.pdfs.menu} target="_blank" rel="noopener noreferrer" className="block font-display text-xl uppercase">
                          Menu — PDF
                        </a>
                      </li>
                      <li>
                        <a href={assets.pdfs.kidsMenu} target="_blank" rel="noopener noreferrer" className="block font-display text-xl uppercase">
                          Menu Enfants — PDF
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>
        </BodyPortal>

      </motion.div>
    </aside>
  );
}

function BodyPortal({ children }: { children: ReactNode }) {
  if (typeof window === 'undefined') return null;
  const container = document.body;
  return createPortal(children, container);
}


