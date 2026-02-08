'use client';

import { motion } from 'framer-motion';
import StaggerChildren, { staggerItem } from '@/components/animations/StaggerChildren';
import SectionHeading from '@/components/ui/SectionHeading';
import { PRODUCTION_STEPS } from '@/lib/constants';

export default function ProductionSection() {
  return (
    <section id="production" className="section-padding bg-charcoal-800">
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Produktionsprozess"
          title="Unser Produktionsprozess"
        />

        <p className="text-charcoal-300 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Vom Wareneingang bis zum Versand – jeder Schritt ist optimiert für maximale Qualität.
        </p>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          staggerDelay={0.08}
        >
          {PRODUCTION_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="group glass-card p-8 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Large Background Number */}
              <span className="absolute -top-4 -right-2 font-serif text-8xl font-bold text-gold-500/5 select-none group-hover:text-gold-500/10 transition-colors duration-500">
                {step.number}
              </span>

              {/* Step Number */}
              <div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 bg-charcoal-800 mb-6 font-serif text-lg font-bold text-gold-500 group-hover:bg-gold-500/10 transition-colors duration-500">
                {step.number}
              </div>

              <h3 className="font-serif text-xl font-bold text-cream-50 mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-charcoal-300 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
