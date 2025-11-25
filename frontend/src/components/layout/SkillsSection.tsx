import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SlideInLeft from '../animations/micro/SlideInLeft';

const skills = [
  { name: "Frontend Development", tools: "React, TypeScript, Tailwind, Framer Motion" },
  { name: "Backend Engineering", tools: "FastAPI, Python, Rest API, SQLite, Supabase" },
  { name: "Tools & Dev Workflow", tools: "Git, GitHub, Docker, VS Code, Linux, NPM/Node" },
  { name: "Programming Languages", tools: "Python, C++, TypeScript" },
  { name: "Creative tools", tools: "Video Editing, Image Editing" },
];

export default function SkillsSection() {
  const [_, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cream text-black">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="What I Do">Expertise</SectionTitle>
        
        <div className="flex flex-col">
          {skills.map((skill, index) => (
            <SlideInLeft key={index} delay={index * 0.1}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-t border-black py-12 cursor-pointer transition-colors duration-300 hover:bg-lime-primary"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 px-4 md:px-8">
                  <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-2 md:mb-0 group-hover:translate-x-4 transition-transform duration-300">
                    {skill.name}
                  </h3>
                  <span className="font-sans text-lg text-gray-600 group-hover:text-black">
                    {skill.tools}
                  </span>
                </div>
              </div>
            </SlideInLeft>
          ))}
          <div className="border-t border-black" />
        </div>
      </div>
    </section>
  );
}
