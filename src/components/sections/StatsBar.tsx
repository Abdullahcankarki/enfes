'use client';

import CountUp from '@/components/animations/CountUp';
import FadeInView from '@/components/animations/FadeInView';

const stats = [
  { value: 20, suffix: '+', label: 'Jahre Erfahrung' },
  { display: 'EU', label: 'Zertifiziert' },
  { value: 48, prefix: '-', suffix: '°C', label: 'Schockfrostung' },
  { value: 100, suffix: '%', label: 'Halal' },
];

export default function StatsBar() {
  return (
    <section className="relative bg-charcoal-800 border-y border-gold-500/10">
      <div className="mx-auto max-w-wide px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${
                  i < stats.length - 1 ? 'md:border-r md:border-gold-500/10' : ''
                }`}
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <>
                      {stat.prefix}
                      <CountUp end={stat.value!} suffix={stat.suffix} />
                    </>
                  )}
                </div>
                <p className="text-charcoal-300 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
