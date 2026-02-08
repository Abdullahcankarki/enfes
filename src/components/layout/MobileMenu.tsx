'use client';

import { motion } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-charcoal-900/98 backdrop-blur-lg"
    >
      <div className="flex flex-col h-full px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <span className="font-serif text-2xl font-bold">
            <span className="text-gold-500">ENFES</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 text-cream-50 hover:text-gold-500 transition-colors"
            aria-label="Menü schließen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block font-serif text-3xl md:text-4xl text-cream-50 hover:text-gold-500 transition-colors py-3"
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="pt-8 border-t border-gold-500/20 flex flex-col gap-6"
        >
          <a
            href={SITE_CONFIG.phoneLink}
            className="flex items-center justify-center gap-2 py-3 border border-gold-500 text-gold-500 font-sans text-sm uppercase tracking-wider font-semibold"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {SITE_CONFIG.phone}
          </a>
          <p className="text-charcoal-400 text-xs text-center">
            {SITE_CONFIG.email}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
