'use client';

import { motion } from 'framer-motion';
import StaggerChildren, { staggerItem } from '@/components/animations/StaggerChildren';
import FadeInView from '@/components/animations/FadeInView';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { PARTNERS } from '@/lib/constants';

export default function PartnersSection() {
  return (
    <section id="partners" className="section-padding bg-charcoal-900">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Vertrauen"
          title="Unsere Partner"
        />

        <p className="text-charcoal-300 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Namhafte Unternehmen aus der Gastronomie vertrauen auf unsere Qualität.
        </p>

        <StaggerChildren
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          staggerDelay={0.06}
        >
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner}
              variants={staggerItem}
              className="glass-card p-6 flex items-center justify-center min-h-[100px] hover:border-gold-500/30 transition-all duration-500"
            >
              <span className="text-charcoal-300 text-sm font-sans uppercase tracking-wider text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <FadeInView className="mt-16 text-center">
          <div className="glass-card p-8 md:p-12 inline-block w-full max-w-2xl">
            <p className="text-cream-400 text-lg mb-6">
              Interesse an einer Partnerschaft?
            </p>
            <Button href="#contact" variant="outline" size="lg">
              Kontakt aufnehmen
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
