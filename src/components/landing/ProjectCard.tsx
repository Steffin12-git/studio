'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';


type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: { id: string; hint: string };
  githubUrl: string;
  language: string;
  index: number;
  detailedDescription: string;
  dashboardImage?: string | string[];
};

// A simple markdown-to-HTML converter
function SimpleMarkdown({ content }: { content: string }) {
    const htmlContent = content
      .trim()
      .split('\n')
      .map(line => {
        let processedLine = line.trim();

        // Process headings first
        if (processedLine.startsWith('### ')) {
            return `<h3>${processedLine.substring(4)}</h3>`;
        }
        
        // Handle bold text, even at the start of a line
        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Process list items
        if (processedLine.startsWith('- ')) {
            // Check if the content of the list item is just a bolded text
            if(processedLine.substring(2).startsWith('<strong>') && processedLine.endsWith('</strong>')){
                 return `<li>${processedLine.substring(2)}</li>`;
            }
            return `<li>${processedLine.substring(2)}</li>`;
        }
        
        if (processedLine === '') {
          return '<br />';
        }

        return `<p>${processedLine}</p>`;
      })
      .join('')
      .replace(/<li>/g, '<ul><li>')
      .replace(/<\/li>(?!<li>)/g, '</li></ul>')
       .replace(/<\/ul><ul>/g, '');


    return (
      <div
        className="prose prose-sm prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
}

export function ProjectCard({ title, description, tags, image, githubUrl, detailedDescription, index, dashboardImage }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === image.id);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg bg-black/30 shadow-lg border border-white/10 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2',
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      )}
      style={{ transitionDelay: inView ? `${index * 150}ms` : '0ms' }}
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
                  <FileText className="mr-1 h-4 w-4" />
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[60vw] bg-gradient-to-br from-slate-900 to-blue-950/20 border-white/20 text-foreground">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-white lg:text-3xl">{title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[70vh] p-1 pr-4">
                  {dashboardImage && (
                    <div className="w-11/12 mx-auto mb-6">
                      <div className="grid grid-cols-1 gap-4">
                        {(Array.isArray(dashboardImage) ? dashboardImage : [dashboardImage]).map((img, idx) => (
                           <div key={idx} className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                              <Image 
                                  src={img}
                                  alt={`${title} dashboard screenshot ${idx + 1}`}
                                  fill
                                  className="object-contain"
                              />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="prose prose-base prose-invert max-w-none text-muted-foreground 
                    [&_h3]:text-white [&_h3]:font-headline [&_h3]:text-xl [&_h3]:border-b [&_h3]:border-accent/50 [&_h3]:pb-2 [&_h3]:mb-3 [&_h3]:mt-6 
                    [&_p]:my-2 [&_p]:leading-relaxed [&_p]:text-gray-300
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
                    [&_li]:my-1 [&_li]:text-gray-300
                    [&_strong]:text-white">
                      <SimpleMarkdown content={detailedDescription} />
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
