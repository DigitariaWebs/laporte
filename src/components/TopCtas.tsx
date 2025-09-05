"use client";

import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { assets } from '@/config/assets';
import { ReactElement } from 'react';

export default function TopCtas(): ReactElement {
  const items = [
    { label: 'Menu', href: assets.pdfs.menu },
    { label: 'Menu enfants', href: assets.pdfs.kidsMenu },
  ];

  const isPdf = (href: string) => href.toLowerCase().endsWith('.pdf');

  return (
    <div className="w-full bg-transparent">
      <div className="container mx-auto flex justify-end px-4">
        <div className="flex divide-x-4 divide-black">
          {items.map((it) => (
            <div key={it.label} className="relative">
              {isPdf(it.href) ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline-2 focus-visible:outline-brand-yellow"
                >
                  {it.label}
                  <ChevronRight className="h-5 w-5 opacity-90" />
                </a>
              ) : (
                <Link
                  href={it.href}
                  prefetch={false}
                  className="group relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline-2 focus-visible:outline-brand-yellow"
                >
                  {it.label}
                  <ChevronRight className="h-5 w-5 opacity-90" />
                </Link>
              )}
            </div>
          ))}
          {/* Numéro de téléphone avec logo cabine rouge */}
          <div className="relative">
            <a
              href="tel:+14504391711"
              className="group relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline-2 focus-visible:outline-brand-yellow"
            >
              <Phone className="h-5 w-5 opacity-90" />
              +1 450-439-1711
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



