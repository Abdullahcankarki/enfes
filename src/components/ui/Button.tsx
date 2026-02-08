'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary:
    'bg-gold-500 text-charcoal-900 hover:bg-gold-400 border border-gold-500 hover:border-gold-400',
  outline:
    'bg-transparent text-gold-500 border border-gold-500/60 hover:bg-gold-500/10 hover:border-gold-500',
  ghost:
    'bg-transparent text-cream-50 hover:text-gold-500 border border-transparent',
};

const sizes = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-wider rounded-none transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} type={type} className={baseClasses} {...motionProps}>
      {children}
    </motion.button>
  );
}
