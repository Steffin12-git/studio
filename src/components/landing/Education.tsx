'use client';

import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { motion, useInView, animate, stagger } from 'framer-motion';

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const progressLine = timelineRef.current.querySelectorAll('.progress-line');
      progressLine.forEach(line => {
        animate(line as HTMLElement, { scaleY: 1 }, { duration: 1.5, ease: 'easeOut' });
      });
      
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
    <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          Education
        </h2>
      </div>
      <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20 md:left-1/2" aria-hidden="true" />
        <motion.div
          className="progress-line absolute top-0 left-5 w-0.5 -translate-x-1/2 origin-top bg-accent shadow-lg shadow-accent md:left-1/2"
          style={{ scaleY: 0, height: '100%' }}
        />

        <div className="space-y-12">
            {educationData.map((item, index) => {
                const isEven = index % 2 === 0;

                const content = (
                  <>
                    <p className="text-sm font-semibold text-gray-300 lg:text-base">{item.duration}</p>
                    <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{item.degree}</h3>
                    <p className="text-base text-gray-400">{item.institution}</p>
                  </>
                );

                return (
                    <div
                        key={index}
                        className="edu-item relative"
                    >
                        {/* Central Icon */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            className="edu-icon absolute top-8 left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-card text-card-foreground shadow-lg ring-4 ring-white/10 md:left-1/2"
                        >
                            <GraduationCap className="h-5 w-5" />
                        </motion.div>
                        
                        <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-[calc(50%+2rem)] md:text-right' : 'md:ml-[calc(50%+2rem)] md:text-left'}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                className="edu-item-content rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20"
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
