export const SITE_CONFIG = {
  name: 'ENFES',
  company: 'ENFES',
  tagline: 'Premium Döner',
  phone: '+49 (0)511 / 261347-20',
  phoneLink: 'tel:+4951126134720',
  email: 'info@enfes.de',
  address: {
    region: 'Niedersachsen',
    country: 'Deutschland',
  },
  vetNumber: 'DE NI-EHK 300 EG',
  founded: 2002,
  founder: 'Aytac Savurur',
  mapsUrl: 'https://www.google.com/maps/place/Hannover',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.38752428498!2d9.6516!3d52.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00d6360e5198f%3A0xc1cd1a89f69b0f15!2sHannover!5e0!3m2!1sde!2sde!4v1700000000000',
} as const;

export const NAV_LINKS = [
  { href: '#hero', label: 'Start' },
  { href: '#about', label: 'Über Uns' },
  { href: '#quality', label: 'Qualität' },
  { href: '#products', label: 'Produkte' },
  { href: '#production', label: 'Produktion' },
  { href: '#contact', label: 'Kontakt' },
] as const;

export const STATS = [
  { value: 20, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 0, display: 'EU', label: 'Zertifiziert' },
  { value: -48, suffix: '°C', label: 'Schockfrostung' },
  { value: 100, suffix: '%', label: 'Halal' },
] as const;

export const QUALITY_ITEMS = [
  {
    title: 'EU-Zertifizierung',
    description: 'Offiziell zertifiziert für die Fleischverarbeitung nach europäischen Standards.',
    icon: 'shield',
  },
  {
    title: 'HACCP-System',
    description: 'Systematische Gefahrenanalyse und kritische Kontrollpunkte für maximale Sicherheit.',
    icon: 'check',
  },
  {
    title: 'Halal-Zertifiziert',
    description: 'Alle Produkte entsprechen den islamischen Speisevorschriften.',
    icon: 'star',
  },
  {
    title: 'Tägliche Audits',
    description: 'Kontinuierliche Überwachung durch die Veterinärbehörden.',
    icon: 'eye',
  },
] as const;

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  products: {
    danaYaprak: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80',
    kebap: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&q=80',
    kiyma: 'https://images.unsplash.com/photo-1583242017813-8da32c561e2f?w=600&q=80',
    danaHindi: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
    hindi: 'https://images.unsplash.com/photo-1574874434913-b8e5c0d5cfea?w=600&q=80',
    tavuk: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80',
  },
} as const;

export const PRODUCTS = [
  {
    name: 'Dana-Yaprak',
    category: 'Rind',
    description: 'Premium Rindfleisch in hauchdünnen Scheiben – der Klassiker für authentischen Döner-Genuss.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80',
  },
  {
    name: 'Kebap',
    category: 'Rind',
    description: 'Klassischer Kebap aus bestem Rindfleisch.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&q=80',
  },
  {
    name: 'Kiyma',
    category: 'Rind',
    description: 'Feines Hackfleisch-Döner nach traditioneller Art.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1583242017813-8da32c561e2f?w=600&q=80',
  },
  {
    name: 'Dana-Hindi',
    category: 'Mix',
    description: 'Perfekte Kombination aus Rind und Pute.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
  },
  {
    name: 'Hindi',
    category: 'Geflügel',
    description: 'Zartes Putenfleisch für leichten Genuss.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1574874434913-b8e5c0d5cfea?w=600&q=80',
  },
  {
    name: 'Tavuk',
    category: 'Geflügel',
    description: 'Saftiges Hähnchenfleisch in Premium-Qualität.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80',
  },
] as const;

export const PRODUCTION_STEPS = [
  {
    number: '01',
    title: 'Wareneingang',
    description: 'Strenge Eingangskontrolle aller Rohstoffe nach definierten Qualitätskriterien.',
  },
  {
    number: '02',
    title: 'Zwischenlager',
    description: 'Temperaturkontrollierte Lagerung unter optimalen Bedingungen.',
  },
  {
    number: '03',
    title: 'Verarbeitung',
    description: 'Professionelle Zubereitung nach traditionellen Rezepturen mit modernster Technik.',
  },
  {
    number: '04',
    title: 'Schockfrostung',
    description: 'Tiefgefrierung bei -48°C für maximale Frische und Haltbarkeit.',
  },
  {
    number: '05',
    title: 'Tiefkühllager',
    description: 'Professionelle Einlagerung bis zur Auslieferung.',
  },
  {
    number: '06',
    title: 'Packstation & Versand',
    description: 'Sorgfältige Verpackung und termingerechte Auslieferung.',
  },
] as const;

export const PARTNERS = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
] as const;
