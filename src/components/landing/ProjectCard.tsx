'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProjectAnalysis } from './ProjectAnalysis';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';


type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: { id: string; hint: string };
  githubUrl: string;
  language: string;
  index: number;
};

export function ProjectCard({ title, description, tags, image, githubUrl, language, index }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === image.id);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg bg-black/30 shadow-lg border border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
        'opacity-0 translate-y-10',
        inView && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {placeholderImage && (
          <Image
            src={placeholderImage.imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={placeholderImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white lg:text-2xl">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
            {tags.map(tag => <Badge key={tag} variant="secondary" className="bg-gray-700/70 text-gray-200 border border-gray-500/80 lg:text-sm">{tag}</Badge>)}
        </div>
        <p className="mt-4 flex-1 text-gray-300 lg:text-base">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <Button size="sm" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg lg:text-base lg:px-4 lg:py-2">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="secondary" className="rounded-full bg-gray-800 text-white hover:bg-gray-700 lg:text-base lg:px-4 lg:py-2">
                  <BrainCircuit className="mr-1 h-4 w-4" />
                  AI Analysis
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[60vw] bg-gray-900 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-white lg:text-3xl">AI Project Analysis: {title}</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-y-auto p-1 pr-4">
                  <ProjectAnalysis repoUrl={githubUrl} language={language} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
