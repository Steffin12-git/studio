'use client';

import { skillsData } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';


export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto text-center bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          My Toolkit
        </h2>
        <p className="mt-4 text-lg text-gray-300 lg:text-xl">
          The technologies and tools I use to turn data into insights.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {Object.entries(skillsData).map(([category, skills], index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div
                key={category}
                ref={ref}
                className={cn(
                  'rounded-lg bg-white/10 p-6 shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2',
                  'opacity-0 translate-y-10',
                  inView && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4 lg:text-2xl">{category}</h3>
                <ul className="space-y-2">
                  {(skills as string[]).map((skill) => (
                    <li key={skill} className="text-gray-300 lg:text-base">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
