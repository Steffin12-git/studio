import { about } from '@/lib/data';
import { AnimatedTitle } from '../common/AnimatedTitle';

export default function About() {
  return (
      <div className="container mx-auto text-center bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <AnimatedTitle text="About Me" />
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-4xl mx-auto lg:text-xl lg:leading-9">
          {about.bio}
        </p>
      </div>
  );
}
