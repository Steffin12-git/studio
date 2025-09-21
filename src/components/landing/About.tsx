import { about } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-headline">
          About Me
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          {about.bio}
        </p>
      </div>
    </AnimatedSection>
  );
}
