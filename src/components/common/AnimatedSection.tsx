'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export function AnimatedSection({
  children,
  id,
  className = '',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Animate every time it comes into view
  });

  const animationClasses = {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'mx-auto w-full max-w-7xl px-4 py-16 md:py-24 transition-all duration-500 ease-out',
        inView ? animationClasses.visible : animationClasses.hidden,
        className
      )}
    >
      {children}
    </section>
  );
}
