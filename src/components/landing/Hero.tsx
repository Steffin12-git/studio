// Hero.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from './Typewriter';
import { socialLinks } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';
import Image from 'next/image';

export default function Hero() {
  const texts = [
    'Result-Driven Data Analyst',
    'Python | SQL | Power BI | Tableau | Excel',
    'Transforming Data into Actionable Business Insights',
    'Advanced Analytics | Predictive Modeling | Automation | Interactive Dashboard'
  ];

  return (
    <div id="home" className="flex h-screen items-center justify-center text-center">
      <AnimatedSection id="hero-content">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Steffin Thomas
          </h1>

          <div className="mt-6 text-lg tracking-tight text-gray-200 min-h-[3em] lg:text-xl">
            <Typewriter texts={texts} typingSpeed={80} deletingSpeed={40} />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg lg:text-lg lg:px-10 lg:py-7 bg-transparent border-primary/70 text-white hover:bg-secondary hover:text-white relative group overflow-hidden"
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary/30 rounded-full group-hover:w-32 group-hover:h-32 opacity-20"></span>
                   {typeof link.icon !== 'function' && link.icon.type === 'img' ? (
                    <Image src={link.icon.src} alt={`${link.name} icon`} width={20} height={20} className="mr-2 h-5 w-5 invert relative" />
                  ) : (
                    <link.icon className="mr-2 h-5 w-5 relative" />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
