import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../common/AnimatedSection';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-gray-50/70">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-headline">Work Experience</h2>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        {experienceData.map((job, index) => (
          <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.02] bg-white border-l-4 border-magenta-500 text-gray-800 shadow-lg overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">{job.role}</CardTitle>
                  <CardDescription className="text-lg mt-1 font-semibold text-magenta-600">{job.company}</CardDescription>
                </div>
                <Badge variant="outline" className="mt-2 text-sm font-medium text-gray-500 sm:mt-0 border-gray-300">{job.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
