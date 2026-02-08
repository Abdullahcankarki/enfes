import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import GoldDivider from '@/components/ui/GoldDivider';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-500/10">
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold">
                <span className="text-gold-500">ENFES</span>
                <span className="text-cream-50 ml-1 text-xl font-light">{SITE_CONFIG.tagline}</span>
              </span>
            </a>
            <p className="text-charcoal-300 text-sm leading-relaxed">
              Döner von herausragender Qualität und bestem Geschmack seit 2002.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-charcoal-300 hover:text-cream-50 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-charcoal-300 hover:text-cream-50 transition-colors duration-300 text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-300 hover:text-cream-50 transition-colors duration-300 text-sm">
                  Datenschutz
                </a>
              </li>
              <li>
                <span className="text-charcoal-300 text-sm">
                  Zertifikate
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-cream-50 block mb-1">Telefon</span>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <span className="text-cream-50 block mb-1">E-Mail</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-charcoal-300">
                <span className="text-cream-50 block mb-1">Standort</span>
                {SITE_CONFIG.address.region}, {SITE_CONFIG.address.country}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <GoldDivider width="w-full" className="opacity-20" />
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-charcoal-400 text-xs">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.company}. Alle Rechte vorbehalten.
        </p>
        <a
          href="https://abdullahcankarki.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal-600 text-[10px] hover:text-charcoal-400 transition-colors"
        >
          Built by Abdullahcan Karki
        </a>
      </div>
    </footer>
  );
}
