'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/config/assets';
import type { ReactElement, ReactNode } from 'react';
import { Facebook, Instagram, Twitter, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const SIDEBAR_WIDTH = 200; // keep in sync with w-[200px]
const PANEL_WIDTH = 200; // same width as sidebar, adjacent panel

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({
  isMobileOpen = false,
  onMobileClose,
}: SidebarProps): ReactElement {
  const [menuPanelOpen, setMenuPanelOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuPanelOpen(false);
        if (onMobileClose) onMobileClose();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onMobileClose]);

  useEffect(() => {
    if (menuPanelOpen || isMobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [menuPanelOpen, isMobileOpen]);
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="fixed top-0 left-0 hidden h-screen w-[200px] flex-col border-r border-black/10 bg-white text-black md:flex"
        role="navigation"
        aria-label="Navigation principale"
      >
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col"
        >
          <div className="flex h-36 items-center justify-center border-b border-black/10 px-2 pt-12 pb-6">
            {/* Clickable logo that goes to home */}
            <Link
              href="/"
              className="focus:ring-brand-red transition-opacity hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
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
              {/* First item from NAV_ITEMS */}
              <li>
                <Link
                  href={NAV_ITEMS[0].href}
                  className="font-display hover:text-brand-red focus-visible:text-brand-red block text-3xl leading-none tracking-wide uppercase"
                >
                  {NAV_ITEMS[0].label}
                </Link>
              </li>

              {/* Menu trigger opens a full-height panel to the right */}
              <li>
                <button
                  type="button"
                  onClick={() => setMenuPanelOpen((v) => !v)}
                  className="font-display hover:text-brand-red focus-visible:text-brand-red flex w-full items-center justify-between text-3xl leading-none tracking-wide uppercase"
                  aria-expanded={menuPanelOpen}
                  aria-controls="sidebar-menu-overlay"
                >
                  <span>Menus</span>
                  <Plus
                    className={`h-6 w-6 transition-transform ${menuPanelOpen ? 'rotate-45' : ''}`}
                  />
                </button>
              </li>

              {/* The rest big items */}
              {NAV_ITEMS.slice(1, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-display hover:text-brand-red focus-visible:text-brand-red block text-3xl leading-none tracking-wide uppercase"
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
                    className="hover:text-brand-red focus-visible:text-brand-red block text-sm tracking-widest text-black/80 uppercase"
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
                className="bg-brand-red grid h-10 w-10 place-items-center text-white"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="bg-brand-red grid h-10 w-10 place-items-center text-white"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter/X"
                className="bg-brand-red grid h-10 w-10 place-items-center text-white"
              >
                <Twitter size={18} />
              </Link>
            </div>
            <div className="text-[11px] tracking-widest text-black/80 uppercase">FR</div>
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
                    className="bg-brand-red absolute top-0 h-screen text-white"
                    style={{ left: SIDEBAR_WIDTH, width: PANEL_WIDTH }}
                    role="dialog"
                    aria-label="Menu PDFs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setMenuPanelOpen(false)}
                      className="absolute top-4 right-4 grid h-8 w-8 place-items-center text-white/90 hover:text-white"
                      aria-label="Fermer le menu"
                    >
                      <X className="h-6 w-6" />
                    </button>

                    <div className="flex h-full flex-col overflow-y-auto px-6 pt-12 pb-6">
                      <ul className="flex-1 space-y-6">
                        <li>
                          <a
                            href={assets.pdfs.menu}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display block text-xl uppercase"
                          >
                            Menu Livraison — PDF
                          </a>
                        </li>
                        <li>
                          <a
                            href={assets.pdfs.menu2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display block text-xl uppercase"
                          >
                            Menu — PDF
                          </a>
                        </li>
                        <li>
                          <a
                            href={assets.pdfs.kidsMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display block text-xl uppercase"
                          >
                            Menu Enfant — PDF
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

      {/* Mobile Sidebar Overlay */}
      <BodyPortal>
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={onMobileClose}
            >
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute top-0 left-0 h-full w-72 bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
                role="navigation"
                aria-label="Navigation mobile"
              >
                {/* Header */}
                <div className="flex items-center justify-center border-b border-black/10 p-4">
                  <Link href="/" onClick={onMobileClose}>
                    <Image
                      src={assets.logo.src}
                      alt={assets.logo.alt}
                      width={120}
                      height={48}
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  {/* Large primary items */}
                  <ul className="space-y-6">
                    {/* Menu trigger */}
                    <li>
                      <button
                        type="button"
                        onClick={() => setMenuPanelOpen(!menuPanelOpen)}
                        className="font-display hover:text-brand-red focus-visible:text-brand-red flex w-full items-center justify-between py-2 text-3xl leading-none tracking-wide text-black uppercase"
                        aria-expanded={menuPanelOpen}
                      >
                        <span>Menus</span>
                        <Plus
                          className={`h-6 w-6 transition-transform ${menuPanelOpen ? 'rotate-45' : ''}`}
                        />
                      </button>

                      {/* Menu Panel */}
                      <AnimatePresence>
                        {menuPanelOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 ml-6 flex flex-col">
                              <ul className="flex-1 space-y-3 pt-6">
                                <li>
                                  <a
                                    href={assets.pdfs.menu}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-red block py-1 text-xl uppercase hover:underline"
                                    onClick={onMobileClose}
                                  >
                                    Menu Livraison — PDF
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={assets.pdfs.menu2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-red block py-1 text-xl uppercase hover:underline"
                                    onClick={onMobileClose}
                                  >
                                    Menu — PDF
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={assets.pdfs.kidsMenu}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-red/80 hover:text-brand-red block py-1 text-xl uppercase hover:underline"
                                    onClick={onMobileClose}
                                  >
                                    Menu Enfant — PDF
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Other navigation items */}
                    {NAV_ITEMS.slice(0, 4).map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="font-display hover:text-brand-red focus-visible:text-brand-red block py-2 text-3xl leading-none tracking-wide text-black uppercase"
                          onClick={onMobileClose}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Secondary items */}
                  <ul className="mt-8 space-y-3">
                    {NAV_ITEMS.slice(4).map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="hover:text-brand-red focus-visible:text-brand-red block py-1 text-base tracking-widest text-black/80 uppercase"
                          onClick={onMobileClose}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="border-t border-black/10 p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="bg-brand-red hover:bg-brand-red/90 grid h-12 w-12 place-items-center rounded-full text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="bg-brand-red hover:bg-brand-red/90 grid h-12 w-12 place-items-center rounded-full text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Twitter/X"
                      className="bg-brand-red hover:bg-brand-red/90 grid h-12 w-12 place-items-center rounded-full text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </Link>
                  </div>
                  <div className="text-sm tracking-widest text-black/80 uppercase">
                    FR
                  </div>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </BodyPortal>
    </>
  );
}

function BodyPortal({ children }: { children: ReactNode }) {
  if (typeof window === 'undefined') return null;
  const container = document.body;
  return createPortal(children, container);
}
