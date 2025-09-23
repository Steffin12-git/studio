'use client';

import { certificationsData } from '@/lib/data';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Certifications() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          Certifications
        </h2>
      </div>
      <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20" aria-hidden="true" />
        <motion.div
          className="absolute top-0 left-1/2 w-0.5 -translate-x-1/2 origin-top bg-accent shadow-lg shadow-accent"
          style={{ scaleY, height: '100%' }}
        />

        {certificationsData.map((cert, index) => {
          const stepSize = 1 / certificationsData.length;
          const stepStart = index * stepSize;
          const stepEnd = stepStart + stepSize;

          const isPassed = useTransform(scrollYProgress, value => value >= stepEnd);
          
          const pulse = useTransform(scrollYProgress, (value) => {
              if (value >= stepStart && value < stepEnd) {
                const localProgress = (value - stepStart) / (stepEnd - stepStart);
                return 1 + Math.sin(localProgress * Math.PI) * 0.5; // Pulse up and down
              }
              return 1;
            });

          return (
            <div
              key={index}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-right'
              }`}
            >
              <motion.div 
                style={{ 
                  scale: pulse,
                  backgroundColor: isPassed.get() ? 'hsl(var(--card))' : 'hsl(var(--secondary))',
                  color: isPassed.get() ? 'hsl(var(--card-foreground))' : 'hsl(var(--secondary-foreground))'
                }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="absolute left-1/2 top-8 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg ring-4 ring-white/10"
              >
                <Award className="h-5 w-5" />
              </motion.div>
              <div
                className={`w-full md:w-5/12 rounded-lg bg-black/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-white/20`}
              >
                <p className="text-sm font-semibold text-gray-300 lg:text-base">
                  {cert.issuer} {cert.date && `• ${cert.date}`}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{cert.title}</h3>
                {cert.subCourses && cert.subCourses.length > 0 && (
                  <div className="mt-3 space-y-3 text-sm">
                    {cert.subCourses.map((sub) => (
                      <div key={sub.title}>
                        <div className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 lg:text-base">{sub.title}</span>
                        </div>
                        {sub.credentialId && (
                          <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-gray-400 hover:text-white lg:text-base -mt-1 ml-6"
                          >
                            <Link
                              href={`https://www.coursera.org/account/accomplishments/verify/${sub.credentialId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Credential <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {cert.link && cert.link !== '#' && (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="p-0 h-auto mt-3 text-gray-300 hover:text-white lg:text-base"
                  >
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Credential <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
