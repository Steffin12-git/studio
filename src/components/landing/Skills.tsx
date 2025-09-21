'use client';

import { skillsData, socialLinks } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';


export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-gray-50/70">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-headline">
          My Toolkit
        </h2>
        <p className="mt-4 text-lg text-gray-600">
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
                  'rounded-lg bg-white p-6 shadow-lg border border-gray-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
                  'opacity-0 translate-y-10',
                  inView && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {(skills as string[]).map((skill) => (
                    <li key={skill} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6">
           {socialLinks.map((link) => (
            <Button key={link.name} size="lg" asChild className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-5 w-5" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
