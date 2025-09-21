import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from './Typewriter';
import { ArrowDown, Briefcase } from 'lucide-react';

export default function Hero() {
  const tagline = "I build vibrant, user-friendly web experiences from scratch.";
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9D6FF,transparent)]"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h1 className="font-headline text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
          Hello, I'm a <span className="text-primary">Developer</span>
        </h1>
        <div className="mt-8 text-xl text-muted-foreground md:text-2xl lg:text-3xl min-h-[3em] font-medium">
          <Typewriter text={tagline} />
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg group">
            <Link href="#projects">
              <Briefcase className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              See My Work
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg group">
            <Link href="#contact">
              Get in Touch
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
