import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
      <div className="container mx-auto text-center bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">Work Experience</h2>
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.02] bg-black/30 border-l-4 border-accent text-white shadow-lg overflow-hidden border-white/10">
              <CardHeader>
                  <div>
                    <CardTitle className="text-2xl font-bold lg:text-3xl text-left">{job.role}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <CardDescription className="text-lg font-semibold text-gray-300 lg:text-xl">{job.company}</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-gray-300 lg:text-base">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
}
