interface GoldDividerProps {
  width?: string;
  className?: string;
}

export default function GoldDivider({ width = 'w-20', className = '' }: GoldDividerProps) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent ${width} ${className}`}
    />
  );
}
