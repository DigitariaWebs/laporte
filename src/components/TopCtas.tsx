import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { assets } from '@/config/assets';

export default function TopCtas(): JSX.Element {
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
            <div key={it.label}>
              {isPdf(it.href) ? (
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


