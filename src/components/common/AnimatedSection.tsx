'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
  direction?: 'left' | 'right';
};

export function AnimatedSection({
  children,
  id,
  className = '',
  direction = 'left',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Animate every time it comes into view
  });

  const animationClasses = {
    hidden: {
      left: 'opacity-0 -translate-x-12',
      right: 'opacity-0 translate-x-12',
    },
    visible: 'opacity-100 translate-x-0',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'mx-auto w-full max-w-7xl px-4 py-16 md:py-24 transition-all duration-700 ease-out',
        inView ? animationClasses.visible : animationClasses.hidden[direction],
        className
      )}
    >
      {children}
    </section>
  );
}
