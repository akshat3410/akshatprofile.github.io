import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const words = children.split(" ");

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <span className="sr-only">{children}</span>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        className="flex flex-wrap"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: { 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }
                }
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
