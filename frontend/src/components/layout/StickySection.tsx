import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface StickySectionProps {
  stickyContent: React.ReactNode;
  scrollContent: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export default function StickySection({ stickyContent, scrollContent, reversed = false, className = "" }: StickySectionProps) {
  const container = useRef(null);
  const stickyRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: stickyRef.current,
      pinSpacing: false,
    });
  }, { scope: container });

  return (
    <section ref={container} className={`relative min-h-screen flex flex-col md:flex-row ${className}`}>
      <div 
        ref={stickyRef} 
        className={`w-full md:w-1/2 h-screen flex items-center justify-center sticky top-0 overflow-hidden ${reversed ? 'md:order-2' : 'md:order-1'}`}
      >
        {stickyContent}
      </div>
      <div className={`w-full md:w-1/2 min-h-screen flex flex-col justify-center p-8 md:p-20 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
        {scrollContent}
      </div>
    </section>
  );
}
