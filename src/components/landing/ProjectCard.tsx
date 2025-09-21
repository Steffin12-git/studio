'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProjectAnalysis } from './ProjectAnalysis';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  image: { id: string; hint: string };
  githubUrl: string;
  liveUrl?: string;
  language: string;
};

export function ProjectCard({ title, description, image, githubUrl, liveUrl, language }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === image.id);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-card">
      <div className="relative aspect-video w-full overflow-hidden">
        {placeholderImage && (
          <Image
            src={placeholderImage.imageUrl}
            alt={description}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={placeholderImage.imageHint}
          />
        )}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <Badge variant="secondary" className="w-fit">{language}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <Github />
            </Link>
          </Button>
          {liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <ExternalLink />
              </Link>
            </Button>
          )}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-primary/10 border-primary/30 text-primary-foreground hover:bg-primary/20">
              <BrainCircuit className="mr-2 h-4 w-4" />
              AI Analysis
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
