'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
        'mx-auto w-full max-w-7xl px-4 py-16 md:py-24 transition-all duration-1000 ease-out',
        isVisible ? animationClasses.visible : animationClasses.hidden[direction],
        className
      )}
    >
      {children}
    </section>
  );
}
