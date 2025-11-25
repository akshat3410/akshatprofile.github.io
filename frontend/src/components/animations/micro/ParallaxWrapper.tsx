import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  offset?: number; // Pixels to move
  className?: string;
}

export default function ParallaxWrapper({ children, offset = 50, className = "" }: ParallaxWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
