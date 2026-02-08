import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import SmoothScroll from '@/components/animations/SmoothScroll';
import { generateBusinessSchema } from '@/lib/schema';
import '@/app/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ENFES – Döner-Spezialitäten seit 2002',
  description: 'ENFES produziert Döner-Spezialitäten mit ausgesuchten Zutaten und höchsten Qualitätsstandards. EU-zertifiziert, HACCP-System, 100% Halal.',
  keywords: ['Döner', 'ENFES', 'Halal', 'Niedersachsen', 'Döner Produktion'],
  openGraph: {
    title: 'ENFES – Döner-Spezialitäten',
    description: 'Tradition trifft Innovation. Döner von herausragender Qualität seit 2002.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBusinessSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-charcoal-900 text-cream-50 antialiased">
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
