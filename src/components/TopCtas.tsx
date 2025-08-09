"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { assets } from '@/config/assets';
import { ReactElement, useState } from 'react';

export default function TopCtas(): ReactElement {
  const items = [
    { label: 'Menu', href: assets.pdfs.menu },
    { label: 'Menu enfants', href: assets.pdfs.kidsMenu },
    { label: 'Commande maintenant', href: '#' },
  ];

  const isPdf = (href: string) => href.toLowerCase().endsWith('.pdf');

  return (
    <div className="w-full bg-transparent">
      <div className="container mx-auto flex justify-end px-4">
        <div className="flex divide-x-4 divide-black">
          {items.map((it) => (
            <div key={it.label} className="relative">
              {it.label === 'Commande maintenant' ? (
                <DropdownOrder label={it.label} />
              ) : isPdf(it.href) ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
                >
                  {it.label}
                  <ChevronRight className="h-5 w-5 opacity-90" />
                </a>
              ) : (
                <Link
                  href={it.href}
                  prefetch={false}
                  className="group relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
                >
                  {it.label}
                  <ChevronRight className="h-5 w-5 opacity-90" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownOrder({ label }: { label: string }): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        onFocus={() => setIsOpen(true)}
        className="relative flex items-center gap-3 bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronRight className="h-5 w-5 opacity-90" />
      </button>
      <div
        className={[
          "absolute right-0 top-full z-50 w-full transition-opacity duration-150 ease-out",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        role="menu"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
          role="menuitem"
        >
          <span className="flex items-center gap-3">
            <img
              src="https://cdn.brandfetch.io/idrVhdDocf/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="DoorDash"
              className="h-5 w-5 brightness-0 invert drop-shadow"
              loading="lazy"
            />
            DoorDash
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-brand-red px-6 py-3 font-display text-white uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
          role="menuitem"
        >
          <span className="flex items-center gap-3">
            <img
              src="https://cdn.brandfetch.io/idIjpcD2zP/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="Uber Eats"
              className="h-5 w-5 brightness-0 invert drop-shadow"
              loading="lazy"
            />
            Uber Eats
          </span>
        </a>
      </div>
    </div>
  );
}


