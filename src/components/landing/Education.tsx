'use client';

import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { motion, useInView, animate, stagger } from 'framer-motion';
import { AnimatedTitle } from '../common/AnimatedTitle';

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const progressLine = timelineRef.current.querySelector('.progress-line');
      if (progressLine) {
        animate(progressLine as HTMLElement, { scaleY: 1 }, { duration: 1.5, ease: 'easeOut' });
      }
      
      animate(
        '.edu-item-content',
        { opacity: 1, y: 0 },
        { delay: stagger(0.2, { startDelay: 0.5 }), duration: 0.5 }
      );
      
      animate(
        '.edu-icon',
        { scale: [0, 1.25, 1] },
        { delay: stagger(0.2, { startDelay: 0.7 }), duration: 0.8 }
      );
    }
  }, [isInView]);

  return (
    <div className="container mx-auto bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <AnimatedTitle text="Education" />
      <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <motion.div
          className="progress-line absolute top-0 left-5 w-0.5 origin-top bg-primary shadow-lg shadow-primary/30 md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: 0, height: '100%' }}
        />

        <div className="space-y-12">
            {educationData.map((item, index) => {
                const isEven = index % 2 === 0;

                const content = (
                  <>
                    <p className="text-sm font-semibold text-muted-foreground lg:text-base">{item.duration}</p>
                    <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{item.degree}</h3>
                    <div className="text-base text-muted-foreground">
                      {item.institution.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </>
                );

                return (
                    <div
                        key={index}
                        className="edu-item relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-start"
                    >
                        {/* Central Icon */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            className="edu-icon absolute top-8 left-5 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-card-foreground shadow-lg ring-4 ring-white md:static md:col-start-2 md:row-start-1 md:translate-x-0"
                        >
                            <GraduationCap className="h-5 w-5" />
                        </motion.div>
                        
                        {/* Content */}
                        <div className={`ml-16 md:ml-0 ${isEven ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-3 md:text-left'}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                className="edu-item-content rounded-lg bg-card/70 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-primary/50"
                            >
                                {content}
                             </motion.div>
                         </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}
