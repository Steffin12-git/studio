import { about } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedTitle } from '../common/AnimatedTitle';

const keyStrengths = [
  "Data Analysis & Visualization (Python, SQL, Power BI, Tableau)",
  "Predictive Modeling & Machine Learning (Scikit-learn, XGBoost)",
  "Statistical Analysis & A/B Testing",
  "Translating Data into Actionable Business Strategy",
  "Data Storytelling & Stakeholder Communication",
  "Critical Thinking & Detail-Oriented Problem Solving",
];

export default function About() {
  return (
      <div className="container mx-auto bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <AnimatedTitle text="About Me" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <p className="text-base leading-7 text-muted-foreground max-w-4xl mx-auto lg:text-lg lg:leading-8">
                {about.bio}
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white text-center md:text-left lg:text-2xl">My Key Strengths</h3>
                <ul className="space-y-3">
                    {keyStrengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/70 border border-white/10">
                            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm lg:text-base">{strength}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
  );
}
