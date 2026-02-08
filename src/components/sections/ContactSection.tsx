'use client';

import { useState } from 'react';
import FadeInView from '@/components/animations/FadeInView';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const contactItems = [
  {
    label: 'Telefon',
    value: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneLink,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'E-Mail',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Standort',
    value: `${SITE_CONFIG.address.region}, ${SITE_CONFIG.address.country}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-900">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Kontakt"
          title="Sprechen Sie mit uns"
        />

        <p className="text-charcoal-300 text-center max-w-2xl mx-auto mb-16 -mt-8">
          Haben Sie Fragen zu unseren Produkten oder möchten Sie eine Anfrage stellen?
          Wir freuen uns auf Ihre Nachricht.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeInView direction="left">
            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-gold-500/20 bg-charcoal-800">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-charcoal-400 text-xs uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-cream-50 text-lg font-medium hover:text-gold-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-cream-50 text-lg font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Vet Number Badge */}
              <div className="glass-card p-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-500">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream-50 text-sm font-semibold">{SITE_CONFIG.vetNumber}</p>
                    <p className="text-charcoal-400 text-xs">Veterinärkontrollnummer</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Contact Form */}
          <FadeInView direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              <div>
                <label htmlFor="name" className="text-cream-50 text-sm font-medium block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-charcoal-800 border border-charcoal-600 text-cream-50 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-cream-50 text-sm font-medium block mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-charcoal-800 border border-charcoal-600 text-cream-50 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-cream-50 text-sm font-medium block mb-2">
                  Betreff
                </label>
                <select
                  id="subject"
                  required
                  className="w-full bg-charcoal-800 border border-charcoal-600 text-cream-50 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="product">Produktanfrage</option>
                  <option value="partner">Partnerschaft</option>
                  <option value="general">Allgemeine Anfrage</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-cream-50 text-sm font-medium block mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-charcoal-800 border border-charcoal-600 text-cream-50 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors resize-none"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              <Button
                type="submit"
                variant={submitted ? 'outline' : 'primary'}
                size="lg"
                className="w-full"
              >
                {submitted ? 'Gesendet ✓' : 'Nachricht senden'}
              </Button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
