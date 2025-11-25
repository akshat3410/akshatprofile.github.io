import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/micro/FadeIn';
import HoverLift from '../animations/micro/HoverLift';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "E-Commerce Platform", category: "Full Stack", image: "/hero-image.jpg" },
  { id: 2, title: "Portfolio 2024", category: "Design & Dev", image: "/hero-image.jpg" },
  { id: 3, title: "AI Dashboard", category: "React + Python", image: "/hero-image.jpg" },
  { id: 4, title: "Social App", category: "Mobile", image: "/hero-image.jpg" },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-40 bg-cream text-black">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Selected Works">Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} className={index % 2 === 1 ? 'md:mt-24' : ''}>
              <HoverLift scale={1.02} y={-10}>
                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <div className="absolute inset-0 bg-lime-primary z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out mix-blend-multiply opacity-80" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-black pb-4">
                    <div>
                      <span className="text-sm font-sans text-gray-500 uppercase tracking-wider mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ x: hovered === project.id ? 0 : -10, opacity: hovered === project.id ? 1 : 0 }}
                      className="text-3xl"
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
