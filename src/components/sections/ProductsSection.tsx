'use client';

import { motion } from 'framer-motion';
import StaggerChildren, { staggerItem } from '@/components/animations/StaggerChildren';
import SectionHeading from '@/components/ui/SectionHeading';
import { PRODUCTS } from '@/lib/constants';

export default function ProductsSection() {
  const featured = PRODUCTS.find((p) => p.featured);
  const regular = PRODUCTS.filter((p) => !p.featured);

  return (
    <section id="products" className="section-padding bg-charcoal-900">
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Sortiment"
          title="Unsere Produkte"
        />

        <p className="text-charcoal-300 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Entdecken Sie unser vielfältiges Sortiment an Premium-Döner-Spezialitäten.
        </p>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {/* Featured Product */}
          {featured && (
            <motion.div
              variants={staggerItem}
              className="md:col-span-2 lg:col-span-2 group glass-card overflow-hidden hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Visual */}
                <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)',
                    }}
                  />
                  <span className="relative font-serif text-6xl font-bold gold-gradient-text">
                    {featured.name.charAt(0)}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-charcoal-900 text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                      Bestseller
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-gold-500 text-xs uppercase tracking-wider font-semibold mb-3">
                    {featured.category}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-cream-50 mb-4">
                    {featured.name}
                  </h3>
                  <p className="text-charcoal-300 text-sm leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-gold-500 text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    Anfragen
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Products */}
          {regular.map((product) => (
            <motion.div
              key={product.name}
              variants={staggerItem}
              className="group glass-card overflow-hidden hover:border-gold-500/30 transition-all duration-500"
            >
              {/* Product Visual */}
              <div className="relative h-40 bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)',
                  }}
                />
                <span className="relative font-serif text-4xl font-bold gold-gradient-text">
                  {product.name.charAt(0)}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-gold-500 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-cream-50 mb-2">
                  {product.name}
                </h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
