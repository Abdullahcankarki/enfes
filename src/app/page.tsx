import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AboutSection from '@/components/sections/AboutSection';
import QualitySection from '@/components/sections/QualitySection';
import PartnersSection from '@/components/sections/PartnersSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ProductionSection from '@/components/sections/ProductionSection';
import MapSection from '@/components/sections/MapSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <QualitySection />
      <PartnersSection />
      <ProductsSection />
      <ProductionSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
