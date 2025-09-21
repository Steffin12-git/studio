import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from './Typewriter';

export default function Hero() {
  const tagline = "A Creative Full-Stack Developer Transforming Ideas into Digital Realities.";
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center text-center">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
          Steffin Thomas
        </h1>
        <div className="mt-6 text-lg text-muted-foreground md:text-xl lg:text-2xl min-h-[3em]">
          <Typewriter text={tagline} />
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
