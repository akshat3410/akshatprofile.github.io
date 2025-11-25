import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollScrubSequenceProps {
  images: string[];
  className?: string;
}

export default function ScrollScrubSequence({ images, className = "" }: ScrollScrubSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoadedImages(imgs);
        }
      };
      imgs[i] = img;
    });
  }, [images]);

  useEffect(() => {
    if (loadedImages.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = loadedImages[0].width;
    canvas.height = loadedImages[0].height;

    const render = (index: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(loadedImages[Math.round(index)], 0, 0);
    };

    const playhead = { frame: 0 };

    const tl = gsap.to(playhead, {
      frame: loadedImages.length - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: () => render(playhead.frame),
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loadedImages]);

  return (
    <div ref={containerRef} className={`h-[300vh] relative ${className}`}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
}
