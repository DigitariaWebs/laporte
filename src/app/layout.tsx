import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import '@/app/globals.css';
import ClientLayout from '@/components/ClientLayout';

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'La porte',
  description:
    "Restaurant La porte — burgers et cuisine. Barre latérale, promos, infolettre et contact.",
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
