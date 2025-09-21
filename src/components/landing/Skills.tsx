import { skillsData, socialLinks } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-gray-50/70">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-headline">
          My Toolkit
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The technologies and tools I use to turn data into insights.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="rounded-lg bg-white p-6 shadow-lg border border-gray-200/80 hover:border-magenta-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-magenta-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {(skills as string[]).map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6">
           {socialLinks.map((link) => (
            <Button key={link.name} size="lg" asChild className="bg-magenta-600 text-white hover:bg-magenta-500 transition-colors duration-300">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-5 w-5" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
