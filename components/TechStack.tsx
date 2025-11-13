
import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-semibold text-sm">{skill}</span>
      <span className="text-sm text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div className="bg-black h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const techSkills = [
  { skill: "JavaScript / TypeScript", percentage: 95 },
  { skill: "React & Next.js", percentage: 90 },
  { skill: "Node.js (Express, NestJS)", percentage: 85 },
  { skill: "Python (Django, Flask)", percentage: 80 },
  { skill: "SQL & NoSQL Databases", percentage: 88 },
  { skill: "Cloud (AWS, GCP) & DevOps", percentage: 75 },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-16">
      <div className="bg-[#FFFFFF99]/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-bold text-lg tracking-widest mb-2">MY TECH STACK & SKILLS</h2>
          <p className="text-center text-gray-600 mb-10">The tools and technologies I use to build modern, high-performance applications.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {techSkills.map((tech, index) => (
              <SkillBar key={index} skill={tech.skill} percentage={tech.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
