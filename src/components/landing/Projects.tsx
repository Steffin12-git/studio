import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">
          Projects Showcase
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white">Explore More Projects</h3>
            <p className="mt-2 text-gray-400">Including Machine Learning (Classification, Regression, and Time-Series Forecasting)</p>
            <Button asChild size="lg" className="mt-6 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full px-8 py-3 text-lg group">
                <Link href="https://github.com/Steffin12-git" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5"/>
                    View on GitHub
                </Link>
            </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
