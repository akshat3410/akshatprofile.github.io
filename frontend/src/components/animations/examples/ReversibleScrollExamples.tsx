import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------------------------------
// EXPLANATION:
// To make scroll animations reversible (play forward on scroll down, 
// backward on scroll up), we use two main strategies:
//
// 1. GSAP ScrollTrigger with `scrub: true`:
//    This links the animation progress directly to the scrollbar position.
//    As you scroll down, the timeline advances. As you scroll up, it reverses.
//
// 2. Framer Motion with `viewport={{ once: false }}`:
//    This triggers the animation state when the element enters the viewport.
//    By setting `once: false`, it resets to the initial state when the 
//    element leaves the viewport, allowing it to play again upon re-entry.
// ------------------------------------------------------------------

// EXAMPLE 1: Reversible Reveal (Framer Motion)
// Uses viewport={{ once: false }} to re-trigger on every entry.
export function ReversibleReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }} // <--- KEY: once: false
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// EXAMPLE 2: Reversible Scale/Zoom (Framer Motion)
// Uses useScroll mapped to scroll position. inherently reversible.
export function ReversibleScale({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return (
    <motion.div ref={ref} style={{ scale }}>
      {children}
    </motion.div>
  );
}

// EXAMPLE 3: Reversible Timeline (GSAP)
// Uses scrub: 1 to link timeline to scroll.
export function ReversibleGSAPTimeline() {
  const triggerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1, // <--- KEY: scrub: true (or number for smoothing)
        }
      });

      tl.to(boxRef.current, {
        rotation: 360,
        x: 200,
        backgroundColor: "#B6F500",
        duration: 1
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="h-[400px] flex items-center">
      <div ref={boxRef} className="w-20 h-20 bg-white" />
    </div>
  );
}

// EXAMPLE 4: Reversible Video Sequence (Concept)
// Uses scrub to control video currentTime.
/*
  gsap.to(videoRef.current, {
    scrollTrigger: {
      trigger: containerRef.current,
      scrub: true,
    },
    currentTime: videoRef.current.duration,
    ease: "none"
  });
*/
