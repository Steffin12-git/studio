import { about } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto text-center bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
          About Me
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-4xl mx-auto lg:text-xl lg:leading-9">
          {about.bio}
        </p>
      </div>
    </AnimatedSection>
  );
}
