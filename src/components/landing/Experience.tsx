import { experienceData } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../common/AnimatedSection';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="text-center">
        <h2 className="text-5xl font-headline font-bold">Work Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">My professional journey and key roles.</p>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-1">
        {experienceData.map((job, index) => (
          <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl border-l-4 border-primary overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-2xl font-headline">{job.role}</CardTitle>
                  <CardDescription className="text-md mt-1 font-semibold text-primary">{job.company}</CardDescription>
                </div>
                <Badge variant="outline" className="mt-2 text-sm font-medium text-muted-foreground sm:mt-0 border-primary/50 text-primary">{job.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{task}</span>
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
