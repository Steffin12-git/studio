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
      const progressLine = timelineRef.current.querySelector('.progress-line') as HTMLElement;
      if (progressLine) {
        animate(progressLine, { scaleY: 1 }, { duration: 1, ease: 'easeOut' });
      }
      
      animate(
        '.edu-item-content',
        { opacity: 1, y: 20 },
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
      <div ref={timelineRef} className="relative mt-16 max-w-5xl mx-auto">
        {/* Timeline Line for medium screens and up */}
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-white/20 md:block" aria-hidden="true" />
        <motion.div
          className="progress-line absolute top-0 left-1/2 hidden w-0.5 -translate-x-1/2 origin-top bg-accent shadow-lg shadow-accent md:block"
          style={{ scaleY: 0, height: '100%' }}
        />

        {/* Timeline Line for mobile */}
        <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20 md:hidden" aria-hidden="true" />
         <motion.div
          className="progress-line absolute top-0 left-5 w-0.5 -translate-x-1/2 origin-top bg-accent shadow-lg shadow-accent md:hidden"
          style={{ scaleY: 0, height: '100%' }}
        />

        {/* Timeline Items */}
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
                        className="edu-item grid grid-cols-[auto_1fr] items-start gap-x-6 md:grid-cols-[1fr_auto_1fr] md:gap-x-8"
                    >
                        {/* Desktop Left */}
                        <div className="hidden md:block col-start-1 md:text-right">
                           {isEven && (
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                className="edu-item-content rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20"
                            >
                                {content}
                            </motion.div>
                           )}
                        </div>


                        {/* Central Icon */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            className="edu-icon z-10 col-start-1 row-start-1 flex h-10 w-10 mt-8 items-center justify-center rounded-full shadow-lg ring-4 ring-white/10 bg-card text-card-foreground md:col-start-2 md:mx-auto"
                        >
                            <GraduationCap className="h-5 w-5" />
                        </motion.div>
                        
                        {/* Right side (Mobile + Desktop Odd) */}
                         <div className="col-start-2 md:col-start-3 md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                className="edu-item-content rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20"
                            >
                                <div className='md:hidden'>
                                  {content}
                                </div>
                                <div className='hidden md:block'>
                                  {!isEven && content}
                                </div>
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
