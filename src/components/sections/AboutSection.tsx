'use client';

import Image from 'next/image';
import FadeInView from '@/components/animations/FadeInView';
import CountUp from '@/components/animations/CountUp';
import SectionHeading from '@/components/ui/SectionHeading';
import { SITE_CONFIG, IMAGES } from '@/lib/constants';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'HACCP-Zertifiziert',
    desc: 'Strengstes Hygienemanagement nach europäischen Standards.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Tägliche Kontrolle',
    desc: 'Veterinärbehördenüberwachung für maximale Sicherheit.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Premium Qualität',
    desc: 'Nur die besten Zutaten für erstklassige Produkte.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-charcoal-900">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <SectionHeading label="Über Uns" title="Eine Tradition der Exzellenz" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          {/* Image */}
          <FadeInView direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={IMAGES.about}
                alt="ENFES Produktionsbetrieb"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6">
                <div className="flex items-center justify-around gap-4">
                  <div className="text-center">
                    <CountUp end={20} suffix="+" className="font-serif text-3xl font-bold text-gold-500" />
                    <p className="text-cream-400 text-xs mt-1 uppercase tracking-wider">Jahre</p>
                  </div>
                  <div className="w-px h-12 bg-gold-500/20" />
                  <div className="text-center">
                    <span className="font-serif text-sm font-bold text-gold-500">{SITE_CONFIG.vetNumber}</span>
                    <p className="text-cream-400 text-xs mt-1 uppercase tracking-wider">Veterinärkontrollnr.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Content */}
          <FadeInView direction="right" delay={0.2}>
            <div className="space-y-8">
              <p className="text-cream-400 text-lg leading-relaxed">
                Im August 2002 gründete {SITE_CONFIG.founder} ENFES als spezialisierten
                Produktionsbetrieb für Döner-Spezialitäten in {SITE_CONFIG.address.region}. Was als
                Vision begann, ist heute ein Synonym für Premium-Qualität in der Döner-Industrie.
              </p>
              <p className="text-charcoal-300 text-base leading-relaxed">
                Unser Engagement für Qualität zeigt sich in jedem Produktionsschritt – von der
                sorgfältigen Auswahl der Zutaten bis zur finalen Auslieferung. Wir verbinden
                traditionelles Handwerk mit modernster Technologie.
              </p>

              {/* Features */}
              <div className="space-y-6 pt-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold-500/20 bg-charcoal-800">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream-50 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-charcoal-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
