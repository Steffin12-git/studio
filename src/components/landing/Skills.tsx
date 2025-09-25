
'use client';

import { skillsData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

export default function Skills() {
  return (
      <div className="container mx-auto text-center bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          Skills
        </h2>
        <p className="mt-4 text-lg text-gray-300 lg:text-xl max-w-4xl mx-auto">
          A collection of my technical and professional abilities, honed through project work and continuous learning.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {skillsData.map((category, index) => {
            const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
            return (
              <div
                key={category.category}
                ref={ref}
                className={cn(
                  'rounded-lg bg-black/30 p-6 shadow-lg border border-white/10 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                )}
                style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
  );
}
