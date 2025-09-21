import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">Education</h2>
        </div>
        <div className="relative mt-16 max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-700" aria-hidden="true"></div>
          {educationData.map((item, index) => (
            <div key={index} className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-right'}`}>
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-magenta-600 text-white shadow-lg ring-4 ring-gray-900">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className={`w-full md:w-5/12 rounded-lg bg-gray-800/80 backdrop-blur-sm p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700 hover:border-magenta-500/50`}>
                  <p className="text-sm font-semibold text-magenta-400">{item.duration}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{item.institution}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
