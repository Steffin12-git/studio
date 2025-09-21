import { skillsData } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';

const SkillCategory = ({ title, skills }: { title: string; skills: (string | { [key: string]: string[] })[] }) => {
  return (
    <div className="p-6 rounded-lg bg-card shadow-md">
      <h3 className="font-headline text-2xl font-semibold mb-4 text-accent">{title}</h3>
      <ul className="space-y-4">
        {Object.entries(skills).map(([subCategory, skillList], index) => (
          <li key={index}>
            <h4 className="font-bold text-md mb-2">{subCategory}</h4>
            <div className="flex flex-wrap gap-2">
              {(skillList as string[]).map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold">My Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">The technologies and tools I work with.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory key={index} title={category} skills={skills as any} />
        ))}
      </div>
    </AnimatedSection>
  );
}
