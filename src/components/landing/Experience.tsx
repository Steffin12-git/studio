import { experienceData } from '@/lib/data';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold">Work Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">My professional journey and key accomplishments.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-1">
        {experienceData.map((job, index) => (
          <Card key={index} className="transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-2xl font-headline">{job.role}</CardTitle>
                  <CardDescription className="text-md mt-1 font-semibold text-accent">{job.company}</CardDescription>
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground sm:mt-0">{job.duration}</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
