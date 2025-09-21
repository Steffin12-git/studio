import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-secondary/50">
      <div className="text-center">
        <h2 className="text-5xl font-headline font-bold">Featured Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here's a selection of my favorite work.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
