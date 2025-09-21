import { certificationsData } from '@/lib/data';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Certifications() {
  return (
    <AnimatedSection id="certifications">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-headline">Certifications</h2>
        </div>
        <div className="relative mt-16 max-w-4xl mx-auto">
           <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" aria-hidden="true"></div>
            {certificationsData.map((cert, index) => (
                <div key={index} className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-right'}`}>
                <div className="absolute left-1/2 top-8 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg ring-4 ring-white">
                    <Award className="h-5 w-5" />
                </div>
                <div className={`w-full md:w-5/12 rounded-lg bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200/80 hover:border-gray-400/50`}>
                    <p className="text-sm font-semibold text-gray-700">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-800">{cert.title}</h3>
                    {cert.subCourses && cert.subCourses.length > 0 && (
                        <div className="mt-3 space-y-2 text-sm">
                            {cert.subCourses.map(sub => (
                                <div key={sub.title} className="flex items-center gap-2">
                                    <BadgeCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-600">{sub.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    {cert.link && cert.link !== '#' && (
                         <Button asChild variant="link" size="sm" className="p-0 h-auto mt-3 text-gray-800 hover:text-gray-600">
                             <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                                 View Credential <ExternalLink className="ml-2 h-4 w-4" />
                             </Link>
                         </Button>
                    )}
                </div>
                </div>
            ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
