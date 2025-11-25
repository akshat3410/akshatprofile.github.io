import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ColorTransitionSectionProps {
  children: React.ReactNode;
  toColor: string;
  className?: string;
}

export default function ColorTransitionSection({ children, toColor, className = "" }: ColorTransitionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.to("body", {
      backgroundColor: toColor,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [toColor]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
