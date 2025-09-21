// Hero.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from './Typewriter';
import { socialLinks } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Hero() {
  const tagline = '  Result Driven Data Analyst | SQL • Python • Power BI • Machine Learning';

  return (
    <AnimatedSection id="home" className="flex h-screen items-center justify-center text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          Steffin Thomas
        </h1>

        <div className="mt-6 text-lg tracking-tight text-gray-600 min-h-[3em]">
          <Typewriter text={tagline} speed={60} loopDelay={1800} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              size="lg"
              asChild
              className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
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
