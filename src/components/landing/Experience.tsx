import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../common/AnimatedSection';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">Work Experience</h2>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        {experienceData.map((job, index) => (
          <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.02] bg-gray-800/60 backdrop-blur-sm border-l-4 border-magenta-500 text-white shadow-lg overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">{job.role}</CardTitle>
                  <CardDescription className="text-lg mt-1 font-semibold text-magenta-400">{job.company}</CardDescription>
                </div>
                <Badge variant="outline" className="mt-2 text-sm font-medium text-gray-400 sm:mt-0 border-gray-600">{job.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
