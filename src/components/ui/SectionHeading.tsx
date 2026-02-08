import FadeInView from '@/components/animations/FadeInView';

interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  centered = true,
}: SectionHeadingProps) {
  return (
    <FadeInView className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold-500 mb-4 block">
        {label}
      </span>
      <h2 className="font-serif text-display-md font-bold text-cream-50">
        {title}
      </h2>
      <div className="gold-divider mx-auto mt-6" />
    </FadeInView>
  );
}
