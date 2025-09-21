'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProjectAnalysis } from './ProjectAnalysis';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProjectCardProps = {
  title: string;
  description: string;
  image: { id: string; hint: string };
  githubUrl: string;
  language: string;
};

export function ProjectCard({ title, description, image, githubUrl, language }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === image.id);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative aspect-video w-full">
        {placeholderImage && (
          <Image
            src={placeholderImage.imageUrl}
            alt={description}
            fill
            className="object-cover"
            data-ai-hint={placeholderImage.imageHint}
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="icon" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <Github />
          </Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-accent/10 border-accent/30 text-accent-foreground hover:bg-accent/20">
              <BrainCircuit className="mr-2 h-4 w-4" />
              Analyze with AI
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[60vw]">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">AI Project Analysis: {title}</DialogTitle>
            </DialogHeader>
            <div className="max-h-[70vh] overflow-y-auto p-1 pr-4">
              <ProjectAnalysis repoUrl={githubUrl} language={language} />
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
