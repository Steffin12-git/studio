import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-secondary/50">
      <div className="text-center">
        <h2 className="text-5xl font-headline font-bold">My Education</h2>
        <p className="mt-4 text-lg text-muted-foreground">My academic journey and milestones.</p>
      </div>
      <div className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" aria-hidden="true"></div>
        {educationData.map((item, index) => (
          <div key={index} className={`relative mb-16 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className={`w-full md:w-5/12 rounded-lg bg-card p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <p className="text-sm font-semibold text-primary">{item.duration}</p>
                <h3 className="mt-1 text-2xl font-headline font-bold">{item.degree}</h3>
                <p className="text-md font-semibold text-muted-foreground">{item.institution}</p>
                <p className="mt-3 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
