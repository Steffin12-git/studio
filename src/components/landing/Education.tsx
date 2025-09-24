'use client';

import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { motion, useInView, animate, stagger } from 'framer-motion';

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const progressLine = timelineRef.current.querySelector('.progress-line') as HTMLElement;
      if (progressLine) {
        animate(progressLine, { scaleY: 1 }, { duration: 1, ease: 'easeOut' });
      }
      
      animate(
        '.edu-item-content',
        { opacity: 1, x: 0 },
        { delay: stagger(0.2, { startDelay: 0.5 }), duration: 0.5 }
      );
      
      animate(
        '.edu-icon',
        { scale: [1, 1.25, 1], backgroundColor: ['hsl(var(--secondary))', 'hsl(var(--card))', 'hsl(var(--card))'] },
        { delay: stagger(0.2, { startDelay: 0.7 }), duration: 0.8 }
      );
    }
  }, [isInView]);

  return (
    <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          Education
        </h2>
      </div>
      <div ref={timelineRef} className="relative mt-16 max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20" aria-hidden="true" />
        <motion.div
          className="progress-line absolute top-0 left-1/2 w-0.5 -translate-x-1/2 origin-top bg-accent shadow-lg shadow-accent"
          style={{ scaleY: 0, height: '100%' }}
        />
        {educationData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
          <div
            key={index}
            className={`edu-item relative mb-12 flex items-center ${
              isEven ? 'justify-start' : 'flex-row-reverse'
            }`}
          >
            <motion.div 
              initial={{ scale: 1, backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))' }}
              className="edu-icon absolute left-1/2 top-8 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg ring-4 ring-white/10"
            >
              <GraduationCap className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              className={`edu-item-content w-full md:w-5/12 rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20 ${isEven ? 'text-left' : 'text-right'}`}
            >
              <p className="text-sm font-semibold text-gray-300 lg:text-base">{item.duration}</p>
              <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{item.degree}</h3>
              <p className="text-base text-gray-400">{item.institution}</p>
            </motion.div>
          </div>
        )})}
      </div>
    </div>
  );
}
