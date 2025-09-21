import { skillsData } from '@/lib/data';
import { AnimatedSection } from '../common/AnimatedSection';

const SkillCategory = ({ title, skills }: { title: string; skills: (string | { [key: string]: string[] })[] }) => {
  return (
    <div className="p-8 rounded-2xl bg-card shadow-lg border border-border/50 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h3 className="font-headline text-3xl font-bold mb-6 text-primary">{title}</h3>
      <ul className="space-y-6">
        {Object.entries(skills).map(([subCategory, skillList], index) => (
          <li key={index}>
            <h4 className="font-bold text-lg mb-3 text-foreground">{subCategory}</h4>
            <div className="flex flex-wrap gap-3">
              {(skillList as string[]).map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-accent/10 text-accent-foreground font-semibold px-4 py-2 rounded-full text-sm transition-colors hover:bg-accent/20">
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
        <h2 className="text-5xl font-headline font-bold">My Skills & Toolkit</h2>
        <p className="mt-4 text-lg text-muted-foreground">The technologies and tools I use to build things.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory key={index} title={category} skills={skills as any} />
        ))}
      </div>
    </AnimatedSection>
  );
}
