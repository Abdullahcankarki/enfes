import { SITE_CONFIG } from './constants';

export function generateBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: SITE_CONFIG.name,
    description: 'ENFES – Spezialisierter Produktionsbetrieb für Döner-Spezialitäten in Niedersachsen seit 2002.',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    foundingDate: '2002-08',
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.founder,
    },
  };
}
