import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from './Typewriter';

export default function Hero() {
  const tagline = "A Creative Full-Stack Developer Transforming Ideas into Digital Realities.";
  return (
    <section id="home" className="relative flex h-[calc(100vh-5rem)] w-full items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
          Steffin <span className="text-accent">Thomas</span>
        </h1>
        <div className="mt-6 text-lg text-muted-foreground md:text-xl lg:text-2xl min-h-[3em]">
          <Typewriter text={tagline} />
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
