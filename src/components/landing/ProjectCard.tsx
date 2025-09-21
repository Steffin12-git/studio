'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProjectAnalysis } from './ProjectAnalysis';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: { id: string; hint: string };
  githubUrl: string;
  language: string;
};

export function ProjectCard({ title, description, tags, image, githubUrl, language }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === image.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200/80 transition-all duration-300 hover:border-gray-400/50 hover:shadow-gray-400/10 hover:-translate-y-1">
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
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
            {tags.map(tag => <Badge key={tag} variant="secondary" className="bg-gray-200/70 text-gray-800 border border-gray-300/80">{tag}</Badge>)}
        </div>
        <p className="mt-4 flex-1 text-gray-600">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <Button size="sm" asChild className="bg-gray-800 text-white hover:bg-gray-700">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="text-gray-800 border-gray-400 hover:bg-gray-100 hover:text-gray-900">
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  AI Analysis
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[60vw] bg-white border-gray-200 text-gray-800">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-gray-800">AI Project Analysis: {title}</DialogTitle>
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
