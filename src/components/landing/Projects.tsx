import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { AnimatedTitle } from '../common/AnimatedTitle';

export default function Projects() {
  return (
      <div className="container mx-auto text-center bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <AnimatedTitle text="Projects Showcase" />
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center bg-card/70 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold text-white lg:text-3xl">Explore More Projects</h3>
            <p className="mt-2 text-muted-foreground lg:text-lg">Including Machine Learning (Classification, Regression, and Time-Series Forecasting)</p>
            <Button asChild size="lg" className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group px-8 py-3 text-lg lg:text-xl lg:px-12 lg:py-4">
                <Link href="https://github.com/Steffin12-git" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5"/>
                    View on GitHub
                </Link>
            </Button>
        </div>
      </div>
  );
}
