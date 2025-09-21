import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../common/AnimatedSection';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto text-center bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">Work Experience</h2>
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.02] bg-black/30 border-l-4 border-teal-400 text-white shadow-lg overflow-hidden border-white/10">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold">{job.role}</CardTitle>
                    <CardDescription className="text-lg mt-1 font-semibold text-gray-300">{job.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="mt-2 text-sm font-medium text-gray-300 sm:mt-0 border-gray-500">{job.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
