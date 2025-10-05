'use client';

import { certificationsData } from '@/lib/data';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { motion, useInView, animate, stagger } from 'framer-motion';
import { AnimatedTitle } from '../common/AnimatedTitle';

export default function Certifications() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const progressLine = timelineRef.current.querySelector('.progress-line');
      if (progressLine) {
        animate(progressLine as HTMLElement, { scaleY: 1 }, { duration: 1.5, ease: 'easeOut' });
      }
      
      timelineRef.current.querySelectorAll('.cert-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        const content = item.querySelector('.cert-item-content');
        const icon = item.querySelector('.cert-icon');

        if (content) {
            animate(
                content as HTMLElement,
                { opacity: 1, x: 0 },
                { delay: 0.5 + index * 0.2, duration: 0.5 }
            );
        }
        if (icon) {
             animate(
                icon as HTMLElement,
                { scale: [0, 1.25, 1] },
                { delay: 0.7 + index * 0.2, duration: 0.8 }
            );
        }
      });
    }
  }, [isInView]);


  return (
    <div className="container mx-auto bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
      <AnimatedTitle text="Certifications" />
      <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <motion.div
          className="progress-line absolute top-0 left-5 w-0.5 origin-top bg-primary shadow-lg shadow-primary/30 md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: 0, height: '100%' }}
        />

        <div className="space-y-12">
            {certificationsData.map((cert, index) => {
            const isEven = index % 2 === 0;

            const content = (
                <div className={!isEven ? "md:text-left" : "md:text-right"}>
                    <p className="text-sm font-semibold text-muted-foreground lg:text-base">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white lg:text-xl">{cert.title}</h3>
                    {cert.subCourses && cert.subCourses.length > 0 && (
                    <div className="mt-3 space-y-3 text-sm">
                        {cert.subCourses.map((sub) => (
                        <div key={sub.title}>
                            <div className={`flex items-start gap-1.5 justify-start ${isEven ? 'md:ml-auto md:w-fit' : ''}`}>
                                <BadgeCheck className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground lg:text-base">{sub.title}</span>
                            </div>
                            {sub.link && (
                            <Button
                                asChild
                                variant="link"
                                size="sm"
                                className={`p-0 h-auto text-gray-400 hover:text-white lg:text-base -mt-1 ml-6 ${isEven ? 'md:ml-0 md:mr-6' : 'md:ml-6'}`}
                            >
                                <Link
                                href={sub.link}
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
                        className="p-0 h-auto mt-3 text-muted-foreground hover:text-white lg:text-base"
                    >
                        <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Credential <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    )}
                </div>
            );

            return (
                <div
                    key={index}
                    className="cert-item relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-start"
                >
                    {/* Central Icon */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        className="cert-icon absolute top-8 left-5 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-card-foreground shadow-lg ring-2 ring-white md:static md:col-start-2 md:row-start-1 md:translate-x-0"
                    >
                        <Award className="h-5 w-5" />
                    </motion.div>
                    
                    <div className={`ml-16 md:ml-0 ${isEven ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-3 md:text-left'}`}>
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            className="cert-item-content rounded-lg bg-card/70 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10 hover:border-primary/50"
                        >
                            {content}
                         </motion.div>
                     </div>
                </div>
            );
            })}
        </div>
      </div>
    </div>
  );
}
