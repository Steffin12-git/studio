import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I'm proud of.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
