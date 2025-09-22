'use client';

import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  // Spring effect for the main progress line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          Education
        </h2>
      </div>
      <div ref={timelineRef} className="relative mt-16 max-w-3xl mx-auto">
        {/* Static timeline bar */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20" aria-hidden="true" />
        {/* Animated progress bar */}
        <motion.div
          className="absolute top-0 left-1/2 w-0.5 -translate-x-1/2 origin-top bg-accent shadow-[0_0_8px_theme(colors.accent)]"
          style={{ scaleY, height: '100%' }}
        />
        {educationData.map((item, index) => {
          const stepSize = 1 / educationData.length;
          const stepStart = index * stepSize;
          const stepEnd = stepStart + stepSize;
          
          const backgroundColor = useTransform(scrollYProgress,
            [0, stepStart, stepEnd],
            ["hsl(var(--accent))", "hsl(var(--accent))", "hsl(var(--card))"]
          );
          const color = useTransform(scrollYProgress,
            [0, stepStart, stepEnd],
            ["hsl(var(--accent-foreground))", "hsl(var(--accent-foreground))", "hsl(var(--foreground))"]
          );

          const isPassed = useTransform(scrollYProgress, value => value >= stepEnd);

          const animateProps = {
            scale: useTransform(scrollYProgress, [stepStart, (stepStart + stepEnd)/2, stepEnd], [1, 1.5, 1]),
            x: useTransform(scrollYProgress, (value) => {
              if (value >= stepStart && value < stepEnd) {
                // Apply vibration only when in the active segment
                const localProgress = (value - stepStart) / (stepEnd - stepStart);
                const vibrationValue = Math.sin(localProgress * Math.PI * 8) * 5; // 4 full vibrations
                return vibrationValue;
              }
              return 0;
            }),
          };
          
          return (
          <div
            key={index}
            className={`relative mb-12 flex items-center ${
              index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-right'
            }`}
          >
            <motion.div 
              style={{ 
                ...animateProps,
                backgroundColor: isPassed.get() ? 'hsl(var(--card))' : 'hsl(var(--accent))',
                color: isPassed.get() ? 'hsl(var(--foreground))' : 'hsl(var(--accent-foreground))'
              }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 500, damping: 5 }}
              className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg ring-4 ring-white/10"
            >
              <GraduationCap className="h-5 w-5" />
            </motion.div>
            <div
              className={`w-full md:w-5/12 rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20`}
            >
              <p className="text-sm font-semibold text-gray-300 lg:text-base">{item.duration}</p>
              <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{item.institution}</h3>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}
