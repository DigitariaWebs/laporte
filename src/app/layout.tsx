import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import '@/app/globals.css';
import Sidebar from '@/components/Sidebar';

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'La Belle et La Bœuf — Clone Démo',
  description:
    "Recréation de la mise en page: barre latérale gauche, sections promotionnelles et infolettre.",
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} font-body text-white`}>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-brand-yellow focus:px-3 focus:py-2 focus:text-black"
        >
          Aller au contenu principal
        </a>
        <div className="md:pl-[200px]">
          <Sidebar />
          <main id="contenu" className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
