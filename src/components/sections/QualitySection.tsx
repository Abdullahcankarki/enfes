'use client';

import { motion } from 'framer-motion';
import StaggerChildren, { staggerItem } from '@/components/animations/StaggerChildren';
import SectionHeading from '@/components/ui/SectionHeading';
import { QUALITY_ITEMS } from '@/lib/constants';

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  eye: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function QualitySection() {
  return (
    <section id="quality" className="section-padding bg-charcoal-800">
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Qualitätsversprechen"
          title="Kompromisslose Qualität"
        />

        <p className="text-charcoal-300 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Jeder Produktionsschritt unterliegt strengsten Qualitätskontrollen.
          Unsere EU-Zertifizierung garantiert höchste Standards.
        </p>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          staggerDelay={0.08}
        >
          {QUALITY_ITEMS.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group glass-card p-8 hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="w-16 h-16 flex items-center justify-center border border-gold-500/20 bg-charcoal-800 mb-6 group-hover:border-gold-500/40 transition-colors duration-500">
                {icons[item.icon]}
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
