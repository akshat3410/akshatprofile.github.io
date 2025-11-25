import { useRef, useEffect } from 'react';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LottieOnScrollProps {
  animationData: any;
  className?: string;
}

export default function LottieOnScroll({ animationData, className = "" }: LottieOnScrollProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !lottieRef.current) return;

    const tl = gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          if (lottieRef.current) {
            lottieRef.current.goToAndStop(self.progress * (lottieRef.current.getDuration(true) || 100), true);
          }
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [animationData]);

  return (
    <div ref={containerRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
        className="w-full h-full"
      />
    </div>
  );
}
