import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedTitle } from '../common/AnimatedTitle';

export default function Experience() {
  return (
      <div className="container mx-auto text-center bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <AnimatedTitle text="Work Experience" />
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <Card key={index} className="transform transition-transform duration-500 hover:scale-[1.02] bg-card/70 border-l-4 border-primary text-white shadow-lg overflow-hidden border-white/10">
              <CardHeader>
                  <div>
                    <CardTitle className="text-2xl font-bold lg:text-3xl text-left">{job.role}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      <CardDescription className="text-lg font-semibold text-muted-foreground lg:text-xl">{job.company}</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-muted-foreground lg:text-base">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
}
