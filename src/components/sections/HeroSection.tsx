'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import TextReveal from '@/components/animations/TextReveal';
import Button from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax Zoom */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="ENFES Döner Produktion"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/40 to-charcoal-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-gold-500 mb-6"
        >
          Seit 2002
        </motion.span>

        {/* Main Tagline */}
        <h1 className="font-serif text-display-xl font-bold text-cream-50 mb-8 max-w-5xl">
          <TextReveal text="Döner von herausragender Qualität" delay={0.5} />
        </h1>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-charcoal-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Tradition trifft Innovation. Wir produzieren Döner-Spezialitäten mit
          ausgesuchten Zutaten und höchsten Qualitätsstandards.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="#products" variant="primary" size="lg">
            Unsere Produkte
          </Button>
          <Button href="#about" variant="outline" size="lg">
            Mehr erfahren
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-charcoal-300 text-[10px] uppercase tracking-[0.3em]">
          Entdecken
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
