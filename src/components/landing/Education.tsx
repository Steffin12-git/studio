import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-card">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold">Education</h2>
        <p className="mt-4 text-lg text-muted-foreground">My academic journey and qualifications.</p>
      </div>
      <div className="relative mt-12">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
        {educationData.map((item, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="text-sm font-semibold text-accent">{item.duration}</p>
                <h3 className="mt-1 text-xl font-headline font-bold">{item.degree}</h3>
                <p className="text-md font-semibold text-muted-foreground">{item.institution}</p>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
