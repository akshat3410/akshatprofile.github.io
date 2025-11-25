import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const scrollWidth = section.scrollWidth;
    const clientWidth = section.clientWidth;

    if (scrollWidth <= clientWidth) return;

    const tl = gsap.to(section, {
      x: () => -(scrollWidth - clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${scrollWidth - clientWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [children]);

  return (
    <div ref={triggerRef} className={`overflow-hidden ${className}`}>
      <div ref={sectionRef} className="flex w-fit h-screen items-center px-20">
        {children}
      </div>
    </div>
  );
}
