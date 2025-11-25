import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Card from '../ui/Card';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  live_url?: string;
  repo_url?: string;
}

interface HorizontalScrollProps {
  items: Project[];
}

export default function HorizontalScroll({ items }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const totalWidth = sectionRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const xMovement = -(totalWidth - windowWidth);

    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: xMovement,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 2, // Heavier inertia
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, { scope: triggerRef, dependencies: [items] });

  if (items.length === 0) return null;

  return (
    <div ref={triggerRef} className="overflow-hidden bg-cream relative z-10">
      <div ref={sectionRef} className="h-screen flex flex-row w-fit">
        {/* Title Section */}
        <div className="w-screen h-full flex flex-col items-center justify-center flex-shrink-0 px-4">
          <h2 className="text-6xl md:text-8xl font-bold text-lime-primary mb-4">Selected <br /> Works</h2>
          <p className="text-xl text-gray-600">Scroll to explore &rarr;</p>
        </div>

        {/* Projects */}
        {items.map((project) => (
          <div key={project.id} className="w-screen md:w-[80vw] h-full flex items-center justify-center flex-shrink-0 px-4 md:px-20">
            <Card className="w-full max-w-4xl h-[70vh] flex flex-col md:flex-row overflow-hidden bg-white border-gray-200">
              <div className="md:w-1/2 h-1/2 md:h-full overflow-hidden">
                <img 
                  src={project.image_url} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Project' }}
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-black">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-8 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-lime-primary rounded-full border border-gray-200 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-lime-primary border-b-2 border-transparent hover:border-lime-primary transition-all">Live Demo</a>
                  )}
                  {project.repo_url && (
                    <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-lime-primary border-b-2 border-transparent hover:border-lime-primary transition-all">GitHub</a>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
