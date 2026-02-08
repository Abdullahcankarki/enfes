'use client';

import FadeInView from '@/components/animations/FadeInView';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function MapSection() {
  return (
    <section className="relative">
      {/* Map */}
      <div className="relative h-[400px] md:h-[500px]">
        <iframe
          src={SITE_CONFIG.mapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)', opacity: 0.8 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ENFES Standort"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-transparent pointer-events-none" />
      </div>

      {/* Overlay Card */}
      <FadeInView direction="left" className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
        <div className="glass-card p-8 max-w-sm">
          <h3 className="font-serif text-2xl font-bold text-cream-50 mb-3">
            Besuchen Sie uns
          </h3>
          <p className="text-charcoal-300 text-sm leading-relaxed mb-6">
            Unser Produktionsstandort befindet sich in {SITE_CONFIG.address.region}, {SITE_CONFIG.address.country}.
          </p>
          <Button
            href={SITE_CONFIG.mapsUrl}
            variant="outline"
            size="sm"
          >
            Route planen
          </Button>
        </div>
      </FadeInView>
    </section>
  );
}
